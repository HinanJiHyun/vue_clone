<template>
    <!-- main part -->
    <div class="flex-1 border-r border-gray-100 overflow-y-auto">
      <div class="flex flex-col">
        <!-- page title -->
        <div class="border-b border-gray-100 p-3 font-bold text-lg">홈</div>

        <!-- tweeting section -->
        <div class="flex p-3 border-b-8 border-gray-100">
          <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" alt="">
          <div class="ml-2 flex-1 flex flex-col">
            <textarea v-model="tweetBody" placeholder="무슨 일이 일어나고 있나요?" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
            <div class="text-right">
              <button v-if="!tweetBody.length" class="bg-light text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">트윗</button>
              <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">트윗</button>
            </div>
          </div>
        </div>
        <!-- tweets -->
        <Tweet :currentUser = "currentUser" :tweet="tweet" v-for="tweet in tweets" :key="tweet.id"/>
      </div>
    </div>
    <!-- trend part -->
    <Trends />
</template>

<script>
import Trends from '../components/Trends.vue'
import Tweet from '../components/Tweet.vue'
import {computed, ref, onBeforeMount} from 'vue'
import store from '../store'
import { TWEET_COLLECTION, USER_COLLECTION } from '../firebase'
import addTweet from '../utils/addTweet'

export default {
  components:{ Trends, Tweet },
  setup(){
    const tweetBody = ref('')
    const currentUser = computed(() => store.state.user)
    const tweets = ref([])

    onBeforeMount(() => {
      TWEET_COLLECTION.orderBy('create_at', 'desc').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(async(change) => {
          let tweet = await getUserInfo(change.doc.data())

          if (change.type === 'added'){
            tweets.value.splice(change.newIndex, 0, tweet) 
          }else if (change.type === 'modified'){
            tweets.value.splice(change.oldIndex, 1, tweet)
          }else if (change.type === 'removed'){
            tweets.value.splice(change.oldIndex, 1)
          }
        })
      })
    })

    //userInfo 가져오는 함수
    const getUserInfo = async(tweet) =>{
      const doc = await USER_COLLECTION.doc(tweet.uid).get()
      tweet.profile_image_url = doc.data().profile_image_url
      tweet.email = doc.data().email
      tweet.username = doc.data().username
      // 딥카피시 
      // tweet = {...tweet, ...doc.data()}
      
      // console.log(tweet)

      return tweet
    }

    const onAddTweet = async () => {
      try{
        await addTweet(tweetBody.value, currentUser.value)
        tweetBody.value = ''
      }catch (e){
        console.log("on add tweet error on homepage: ", e)
      }
    }

    return{ currentUser, tweetBody, onAddTweet, tweets }
  },
}
</script>

<style>

</style>