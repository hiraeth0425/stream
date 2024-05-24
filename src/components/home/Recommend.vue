<script setup lang="ts">
import { Icon } from '@iconify/vue'
const images = import.meta.glob('/src/assets/stream/recommend/*.png', {
  import: 'default',
  eager: true
})

const recommendImages = Object.keys(images).map((key) => images[key])
</script>

<template lang="pug">
    .recommend
      van-grid(:column-num="5" :border="false")
        van-grid-item(v-for="img in recommendImages" :key="img")
          router-link(to="/room")
            img(:src="img" alt="")
      van-notice-bar(background="#fa81a7" color="#fff" left-icon="volume-o")
        van-swipe.notice-swipe(
          vertical
          :autoplay="3000"
          :touchable="false"
          :show-indicators="false"
        )
          van-swipe-item 明月直入，无心可猜。
          van-swipe-item 仙人抚我顶，结发受长生。
          van-swipe-item 今人不见古时月，今月曾经照古人。
      div.recommend-game
        Icon(icon="mdi:fire")
        |遊戲推薦
      SwiperStreamer(:slidesPerView="3.5")
      Streamer
</template>

<style lang="scss" scoped>
.recommend {
  padding: 10px;
  &-game {
    @include title;

    svg {
      color: #df0e0e;
    }
  }
  :deep(.van-grid-item) {
    img {
      width: 100%;
    }
  }
  :deep(.van-grid-item__content) {
    padding: 5px;
  }
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
  .van-notice-bar {
    border-radius: 15px;
  }
}
</style>
