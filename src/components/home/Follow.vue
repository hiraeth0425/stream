<script setup>
import { Icon } from '@iconify/vue'
</script>

<template lang="pug">
    .follow
      .title
        Icon(icon="basil:heart-solid")
        | 已關注主播
      SwiperStreamer(:slidesPerView="3")
      van-divider
      .subtitle
        div
          Icon(icon="mdi:fire")
          | 為您推薦
        van-button(size="mini" round plain hairline color="#ff7db6")
          | 換一批
      Streamer
</template>

<style lang="scss" scoped>
.follow {
  padding: 5px;
  .title {
    @include title;
    svg {
      color: #ff7db6;
    }
  }
  .subtitle {
    @include subtitle;
    :deep(.van-button) {
      padding: 5px 15px;
      height: auto;
      font-size: 16px;
    }
    > div {
      svg {
        color: #df0e0e;
      }
    }
  }
}
</style>
