<template>
  <!-- tweets -->
  <div class="flex p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
    <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" alt="">
    <div class="ml-3 flex-1 flex flex-col space-y-1">
      <div class="text-sm space-x-1">
        <span class="font-bold">{{tweet.email}}</span>
        <span class="text-gray-500 text-xs">@{{tweet.username}}</span>
        <span>&#183;</span>
        <span class="text-gray-500 text-xs">{{ moment(tweet.create_at).fromNow() }}</span>
      </div>
      <!-- tweetBody -->
      <div>
        {{ tweet.tweet_body }}
      </div>
      <!-- tweetIcons -->
      <div class="flex justify-between">
        <!-- comment btn -->
        <div @click="showCommentModal = true" class="text-gray-500 hover:text-primary">
          <i class="far fa-comment hover:bg-blue-50 p-2 rounded-full"></i>
          <span class="ml-1 text-sm">{{tweet.num_comments}}</span>
        </div>
        <!-- retweet btn -->
        <div @click="handleRetweet(tweet)" class="text-gray-500 hover:text-green-500">
          <i class="fas fa-retweet hover:bg-green-50 p-2 rounded-full" ></i>
          <span class="ml-1 text-sm">{{tweet.num_retweets}}</span>
        </div>
        <!-- like btn -->
        <div class="text-gray-500 hover:text-red-500">
          <i class="far fa-heart hover:bg-red-50 p-2 rounded-full"></i>
          <span class="ml-1 text-sm">{{tweet.num_likes}}</span>
        </div>
        <!-- share btn -->
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-share-square hover:bg-blue-50 p-2 rounded-full"></i>
        </div>
      </div>
    </div>
  </div>
  <CommentModal :tweet="tweet" v-if="showCommentModal" @close-modal = "showCommentModal = false"/>
</template>

<script>
import moment from 'moment'
import {ref} from 'vue'
import CommentModal from './CommentModal.vue'
import handleRetweet from '../utils/handleRetweet'

export default {
  components : { CommentModal },
  props: ['currentUser', 'tweet',],
  setup(){
    const showCommentModal = ref(false)
    return{
      moment, showCommentModal, handleRetweet,
    }
  }
}
</script>

<style>

</style>