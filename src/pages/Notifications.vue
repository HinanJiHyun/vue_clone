<template>
  <div class="flex-1 border-r border-gray-100 flex flex-col overflow-y-auto">
    <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
    <!-- Notification -->
    <div class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer" v-for="notification in 10" :key="notification">
      <div class="flex justify-between">
        <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-80" alt="">
        <i class="fas fa-ellipsis-h text-gray-500 hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10 flex items-center justify-center"></i>
      </div>
      <div>
        <span class="font-bold">네이버</span>님의 최근 트윗
      </div>
      <div class="text-gray-500">
        11일(현지시간) 미국 매체 비즈니스인사이더에 따르면 배우 출신의 리스 톰프슨(30)은 1997년 전 세계적인 흥행작인 타이타닉에서 배우로 데뷔했다. 그는 3등석에 탑승한 아일랜드 가정의 소년 역할을 맡았다. 당시 5살이었던 톰프슨은 세 장면에 출연했으며, 그의 대사는 단 한 줄이었다.
      </div>
    </div>
  </div>
  <!-- Trends -->
  <Trends/>
</template>

<script>
import Trends from '../components/Trends.vue'
export default {
  components: {Trends},
  setup(){}
}
</script>

<style>

</style>