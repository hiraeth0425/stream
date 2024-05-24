<script setup>
import { onMounted } from 'vue'

const drawerInfo = defineModel('drawerInfo', { default: false })

// drawerInfo => update:modelValue'
</script>

<template lang="pug">
  van-dialog(v-model:show="drawerInfo" confirmButtonText="確認")
    .cover 
      .bg-blur
      .avatar
        van-image( round
          width="5rem"
          height="5rem"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg")
        div
          h2 龍神快三
          p 這是一個很厲害的人
</template>

<style lang="scss" scoped>
.cover {
  position: relative;
  .bg-blur {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url('https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg') no-repeat center
      center/cover;
    filter: blur(5px);
    z-index: -1;
  }
  .avatar {
    padding: 30px;
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    align-items: center;
    font-size: 20px;
    p {
      padding-top: 15px;
      font-size: 16px;
    }
    .van-image {
      max-width: 150px;
      max-height: 150px;
    }
    .van-image--round {
      border: 4px solid #fff;
    }
  }
}
</style>
