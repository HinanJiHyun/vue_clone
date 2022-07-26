<template>
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
    <div class="flex sm:items-center justify-center min-h-full sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- contents -->
      <div @click.stop class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full">
        <div class="border-b border-gray-100 p-2 flex items-center justify-between">
          <button @click="$emit('close-modal')" class="fas fa-times text-primary text-xl p-2 w-10 h-10 hover:bg-blue-50 rounded-full"></button>
          <!-- tweet btn -->
          <div class="text-right sm:hidden mr-2">
            <button v-if="!tweetBody.length" class="bg-light text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">답글</button>
            <button v-else @click="onCommentTweet" class="bg-primary hover:bg-dark text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">답글</button>
          </div>
        </div>

        <div>
          <!-- original tweet -->
          <div class="flex px-4 pt-4 pb-3">
            <div class="flex flex-col">
              <img :src="tweet.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-spointer" alt="">
              <div class="ml-5 w-0.5 h-full bg-gray-300 mt-2 -mb-1"></div>
            </div>
            <div class="ml-2 flex-1">
              <div class="flex space-x-2">
                <span class="font-bold text-sm">{{tweet.email}}</span>
                <span class="tg500 text-sm">@{{tweet.username}}</span>
                <span class="tg500 text-sm">{{ moment(tweet.create_at).fromNow() }}</span>
              </div>
              <div class="">
                {{tweet.tweet_body}}
              </div>
              <div>
                <span class="text-primary text-sm">@{{tweet.username}}</span>
                <span class="tg500 text-sm">님에게 보내는 답글</span>
              </div>
            </div>
          </div>
          <!-- tweet section -->
          <div class="flex px-4 pb-3">
            <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" alt="">
            <div class="ml-2 flex-1 flex flex-col">
              <!-- tweet btn -->
              <textarea v-model="tweetBody" rows="5" placeholder="내 답글을 트윗합니다" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
              <div class="text-right hidden sm:block">
                <button v-if="!tweetBody.length" class="bg-light text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">답글</button>
                <button v-else @click="onCommentTweet" class="bg-primary hover:bg-dark text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">답글</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

</template>

<script>
import {ref, computed} from 'vue'
import moment from 'moment'
import store from '../store'
import { COMMENT_COLLECTION, TWEET_COLLECTION } from '../firebase'
import firebase from 'firebase'

export default {
  props: ['currentUser', 'tweet'],
  setup(props, {emit}){
    const tweetBody = ref ('')
    const currentUser = computed(()=> store.state.user)
    
    const onCommentTweet = async() => {
      try{
        const doc = COMMENT_COLLECTION.doc()
        await doc.set({
          id: doc.id,
          from_tweet_id: props.tweet.id,
          comment_tweeet_body: tweetBody.value,
          uid: currentUser.value.uid,
          created_at: Date.now(),
        })
  
        // TWEET_COLLECTION) num_comments + 1
        await TWEET_COLLECTION.doc(props.tweet.id).update({
          num_comments: firebase.firestore.FieldValue.increment(1),
        })
        emit('close-modal')
      }catch(e){
        console.log("on comment tweet error: ", e)
      }
    }

    return{
      tweetBody,
      moment,
      currentUser,
      onCommentTweet,
    }
 },
}
</script>

<style>

</style>