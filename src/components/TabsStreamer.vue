<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const active = ref(0)
const props = defineProps(['openCarousel'])
</script>

<template lang="pug">
    .hot
      van-row
        van-col(span="24")
          van-tabs(
            v-model:active="active"
           :swipeable="true"
           color="#eeeeee"
           title-active-color="#ff7db6"
           title-inactive-color="#000"
           line-height="0")
           van-tab(v-for="index in 10" :title="'熱門 ' + index")  内容 {{ index }}
            van-swipe(    v-if="props.openCarousel"
               class="my-swipe"
               :autoplay="3000"
               indicator-color="white"
               lazy-render)
                van-swipe-item
                  img(src="@/assets/stream/carousel1.png" alt="")
                van-swipe-item
                  img(src="@/assets/stream/carousel1.png" alt="")
            Streamer
</template>

<style lang="scss" scoped>
.hot {
  padding: 10px;
  --van-tab-font-size: 16px;
  :deep(.van-tab) {
    padding: 0 8px;
  }
  :deep(.van-tab__text) {
    padding: 0 10px;
    border-radius: 20px;
    background-color: #eee;
  }
  :deep(.van-tab--active) {
    .van-tab__text {
      background: linear-gradient(
        90deg,
        rgba(255, 40, 128, 1) 34%,
        rgba(255, 0, 92, 0.5550595238095238) 100%
      );
      color: #fff;
      font-weight: 400;
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
    img {
      width: 100%;
    }
  }
}
</style>
