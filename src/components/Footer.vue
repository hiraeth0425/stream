<script setup>
import { Icon } from '@iconify/vue'
import mmtv from '@/assets/stream/mmtv.png'
const active = ref(0)
</script>

<template lang="pug">
      van-tabbar(v-model="active" :placeholder="true" fixed)
        van-tabbar-item(to="/")
          template(#icon="props")
            Icon(icon="material-symbols:home-outline")
          | 首頁
        //- van-tabbar-item(to="/game")
        //-   template(#icon="props")
        //-     Icon(icon="ph:game-controller")
        //-   | 遊戲
        //- van-tabbar-item(to="/room")
        //-   template(#icon="props")
        //-     img(:src="mmtv" alt="")
        //-   | mm.tv
        van-tabbar-item(to="/room")
          template(#icon="props")
            Icon(icon="fluent:star-arrow-right-start-24-filled")
          | 好手氣
        van-tabbar-item(to="/store")
          template(#icon="props")
            Icon(icon="majesticons:money-plus-line")
          | 儲值
        van-tabbar-item(to="/profile" dot)
          template(#icon="props")
            Icon(icon="clarity:user-line")
          | 我的
</template>

<style lang="scss" scoped>
.van-tabbar__placeholder {
  --van-badge-size: 5px;
}
</style>
