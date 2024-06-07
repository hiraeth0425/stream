<script setup>
import { Icon } from '@iconify/vue'
import { vantLocales } from '@/lang'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<template lang="pug">
    .follow
      .title
        Icon(icon="basil:heart-solid")
        | {{$t('general.followed-streamers')}}
      SwiperStreamer(:slidesPerView="3")
      van-divider
      .subtitle
        div
          Icon(icon="mdi:fire")
          | {{$t('general.recommended-you')}}
        van-button(size="mini" round plain hairline color="#ff7db6")
          | {{$t('general.batch')}}
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
