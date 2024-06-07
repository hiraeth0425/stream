<script setup>
import { Icon } from '@iconify/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const props = defineProps(['slidesPerView'])
const emit = defineEmits(['info'])
const isFollow = ref(true)

const followNotify = () => {
  isFollow.value = !isFollow.value
  console.log('followNotify')
  showToast('已關注')
}
</script>

<template lang="pug">
      van-col.room-header(span="24")
        van-tag(round @click="()=>emit('info')")
          template(#)
            van-image( round
            width="5rem"
            height="5rem"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg")
            .info
              h2 龍神快三
              p ID 545646541
              van-button.follow(v-if="isFollow" round size="mini" @click.stop="followNotify" color="linear-gradient(to right, #f775af, #fd47a5)" ) 
                template(#)
                  Icon( icon="material-symbols:heart-plus")
      
        .viewer
            swiper.mySwiper(
        slidesPerView="5"
        :spaceBetween="0"
        :pagination="{clickable: true}"
        :modules="[Pagination]"
        
        )
                swiper-slide(v-for="n in 10" :key="n")
                    div
                        van-image( round 
                        width="5rem"
                        height="5rem"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg")
            van-tag(round) 565655
                    
</template>

<style lang="scss" scoped>
.room {
  --van-tag-line-height: 1.3;
  --van-button-mini-height: 35px;
  --van-tag-default-color: rgba(255, 255, 255, 0.2);
  &-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .viewer {
      width: 40%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      :deep(.swiper-wrapper) {
        gap: 10px;
      }
      .van-image {
        max-width: 50px;
        max-height: 50px;
      }
      .van-tag {
        padding: 8px 15px;
        font-size: 16px;
      }
    }
    .van-tag {
      font-size: 16px;
      padding: 5px 10px;
      .van-image {
        max-width: 50px;
        max-height: 50px;
      }
      .van-button {
        aspect-ratio: 1/1;
      }
      .info {
        position: relative;
        padding: 0 60px 0 8px;
        p {
          padding-top: 3px;
          font-size: 12px;
        }
        .follow {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(-10%, 5%);
        }
      }
    }
  }
}
</style>
