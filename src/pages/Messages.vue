<template>
  <div class="flex flex-1">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray-100 overflow-y-auto">
      <div class="flex flex-col">
        <div class="p-3 font-bold text-lg border-b boder-gray-100 h-14">쪽지</div>
        <!-- chat list -->
        <div class="flex px-3 py-4 hover:bg-gray-50 border-b border-gray-200 bg-gray-200">
          <img src="https://picsum.photos/200" class="w-10 h-10 rounded-full cursor-pointer mr-2" alt="">
          <div>
            <div class="flex space-x-1">
              <div class="font-bold">jihyun.com</div>
              <div class="text-gray-500">@jihyun</div>
              <div class="text-gray-500">7월 5일</div>
            </div>
            <div class="text-gray-500">dd</div>
          </div>
        </div>
        <!-- a chat list -->
        <div class="flex px-3 py-4 hover:bg-gray-50 border-b border-gray-200" v-for="message in 5" :key="message">
          <img src="https://picsum.photos/200" class="w-10 h-10 rounded-full cursor-pointer mr-2" alt="">
          <div>
            <div class="flex space-x-1">
              <div class="font-bold">jihyun.com</div>
              <div class="text-gray-500">@jihyun</div>
              <div class="text-gray-500">7월 5일</div>
            </div>
            <div class="text-gray-500">dd</div>
          </div>
        </div>
      </div>
    </div>
    <!-- chatting -->
    <div class="w-3/5 border-r border-gray-100">
     <div class="flex flex-col h-screen">
      <!-- title -->
      <div class="flex items-center px-3 h-14 border-b border-gray-100">
        <img src="https://picsum.photos/100" class="w-8 h-8 rounded-full mr-2 cursor-pointer" alt="">
        <div>
          <div class="font-bold text-lgs">jihyun.com</div>
          <div class="text-sm text-gray-500">@jihyun</div>
        </div>
      </div>
      <!-- user Info -->
      <div class="flex flex-col justify-center items-center border-b border-gray-100 hover:bg-gray-50 py-6">
        <div>
          <span class="font-bold mr-1">jihyun.com</span>
          <span class="text-gray-500">@jihyun</span>
        </div>
        <div>
          <span class="font-bold mr-1">28</span><span class="text-gray-500">팔로우 중</span>
          <span class="font-bold mr-1 ml-3">7</span><span class="text-gray-500">팔로워</span>
        </div>
        <div>
          <span class="text-gray-500 mr-1">가입일:</span>
          <span class="text-gray-500">2011년 10월</span>
        </div>
      </div>

      <div class="flex-1 overflow-y-scroll">
        <!-- chat bubble : my chat -->
        <div class="text-right px-3 py-3">
          <span class="bg-primary text-white px-4 py-2 rounded-full">메시지</span>
          <div class="mt-3 text-xs text-gray-500">2022년 7월 5일 오후 5:58</div>
        </div>
        <!-- chat bubble : opponent chat -->
        <div class="text-light px-3 py-3" v-for="chat in 5" :key="chat">
          <span class="bg-gray-200 text-black px-4 py-2 rounded-full">메시지</span>
          <div class="mt-3 text-xs text-gray-500">2022년 7월 5일 오후 5:58</div>
        </div>
      </div>

      <!-- chat input -->
      <div class="flex items-center bg-white border-t border-gray-100 sticky">
        <input type="text" class="m-2 py-1 px-4 rounded-full bg-gray-100 resize-none outline-none flex-1" placeholder="새 쪽지 작성하기">
        <button class="text-center">
          <i class="far fa-paper-plane text-primary text-lg hover:bg-blue-50 p-2 rounded-full w-10 h-10"></i>
        </button>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>