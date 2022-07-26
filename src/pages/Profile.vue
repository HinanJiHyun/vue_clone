<template>
  <div class="flex-1 flex">
    <!-- profile section -->
    <div class="flex-1 flex flex-col border-r bg100">
      <!-- title -->
      <div class="px-3 py-1 flex border-b bg100">
        <button class="mr-3s">
          <i class="fas fa-arrow-left text-primary p-3 rounded-full hover:"></i>
        </button>
        <div>
          <div class="font-extrabold text-lg">jihyun.com</div>
          <div class="text-xs tg100">3939 트윗</div>
        </div>
      </div>
      <!-- background image -->
      <div class="bg-gray-300 h-40 relative flex-none">
        <!-- profile image -->
        <div class="border-4 border-white bg-gray-100 w-28 h-28 rounded-full absolute -bottom-14 left-2">
          <img src="https://picsum.photos/200" class="rounded-full opacity-90 hover:opacity-100 cursor-pointer" alt="">
        </div>
      </div>
      <!-- profile edit button -->
      <div class="text-right mt-2 mr-2">
        <button class="border border-primary text-sm text-primary px-3 py-2 hover:bg-blue-50 font-bold rounded-full">프로필 수정</button>
      </div>
      <!-- user info -->
      <div class="mx-3 mt-2 ">
        <div class="font-extrabold text-lg">jihyun.com</div>
        <div class="text-gray-500">@jihyun</div>
        <div>
          <span class="text-gray-500">가입일: </span>
          <span class="text-gray-500">2011년 10월</span>
        </div>
        <div>
          <span class="font-bold mr-1">28</span>
          <span class="tg500 mr-3">팔로우 중</span>
          <span class="font-bold mr-1">7</span>
          <span class="tg500">팔로워</span>
        </div>
      </div>
      <!-- tabs -->
      <div class="flex border-b bg100 mt-3">
        <div class="w-1/4 py-3 font-bold text-primary border-b border-primary text-center hover:bg-blue-50 cursor-pointer hover:text-primary">트윗</div>
        <div class="w-1/4 py-3 font-bold  tg500 text-center hover:bg-blue-50 cursor-pointer hover:text-primary">트윗 및 답글</div>
        <div class="w-1/4 py-3 font-bold  tg500 text-center hover:bg-blue-50 cursor-pointer hover:text-primary">미디어</div>
        <div class="w-1/4 py-3 font-bold  tg500 text-center hover:bg-blue-50 cursor-pointer hover:text-primary">마음에 들어요</div>
      </div>
      <!-- tweets -->
      <div class="overflow-y-auto">
        <Tweet v-for="tweet in 10" :key="tweet"/>
      </div>
    </div>
    <!-- trend section -->
    <Trends/>
  </div>
</template>

<script>
import Trends from '../components/Trends.vue'
import Tweet from '../components/Tweet.vue'
export default {
  components:{Trends, Tweet },
  setup(){}
}
</script>

<style>
 
</style>