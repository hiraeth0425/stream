<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const props: { slidesPerView: number } = defineProps(['slidesPerView'])
</script>

<template lang="pug">
  .swiper-streamer
    swiper.mySwiper.swiper-game(
      :slidesPerView="props.slidesPerView"
      :spaceBetween="10"
      :pagination="{clickable: true}"
      :modules="[Pagination]"
      
    )
      swiper-slide(v-for="n in 10" :key="n")
        div
          router-link.game-router(style="position: relative" to="")
            img(src="https://picsum.photos/id/646/367/267" alt="")
            .mask
              .name
                h5 黃小滿
                p 火星
              .viewer
                Icon(icon="radix-icons:dot-filled")
                |17068

</template>

<style lang="scss" scoped>
.swiper-game .swiper-slide {
  position: relative;
  aspect-ratio: 1/1;
  > div {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .game {
    margin: 10px;
    padding: 5px;
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    font-size: 14px;
    clip-path: polygon(1% 0, 60% 0, 100% 0, 100% 0, 89% 100%, 89% 100%, 0 100%);
    background: linear-gradient(
      90deg,
      rgba(28, 1, 119, 1) 5%,
      rgba(223, 25, 126, 0.3449754901960784) 100%
    );
    svg {
      color: #ff7db6;
      font-size: 18px;
    }
    h5 {
      padding: 0 20px;
    }
  }
  .mask {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    color: #fff;
    width: -webkit-fill-available;
    position: absolute;
    bottom: 0;
    font-size: 14px;
    .name {
      h5 {
        padding-bottom: 5px;
      }
    }

    .viewer {
      display: flex;
      align-items: center;
      svg {
        color: rgb(255, 37, 182);
      }
    }
  }
}
// swiper
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
