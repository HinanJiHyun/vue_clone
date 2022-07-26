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
            <button v-if="!tweetBody.length" class="bg-light text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">트윗</button>
            <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">트윗</button>
          </div>
        </div>
        <!-- tweet section -->
        <div class="flex px-3 py-3">
          <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" alt="">
          <div class="ml-2 flex-1 flex flex-col">
            <!-- tweet btn -->
            <textarea v-model="tweetBody" rows="5" placeholder="무슨 일이 일어나고 있나요?" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
            <div class="text-right hidden sm:block">
              <button v-if="!tweetBody.length" class="bg-light text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">트윗</button>
              <button v-else @click="onAddTweet" class="bg-primary hover:bg-dark text-white text-sm font-bold px-4 py-1 rounded-full cursor-pointer">트윗</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

</template>

<script>
import {ref, computed} from 'vue'
import addTweet from '../utils/addTweet'
import store from '../store'

export default {
  setup(props, {emit}){
    const tweetBody = ref ('')
    const currentUser = computed(()=> store.state.user)
    const onAddTweet = async () => {
      try{
        await addTweet(tweetBody.value, currentUser.value)
        tweetBody.value = ''
        emit('close-modal')
      }catch (e){
        console.log("on add tweet error on homepage: ", e)
      }
    }
   
   return{
    tweetBody, onAddTweet, currentUser
   }
  }
}
</script>

<style>

</style>