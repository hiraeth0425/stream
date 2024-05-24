<script setup>
import follow from '@/components/home/Follow.vue'
import recommend from '@/components/home/Recommend.vue'
import hot from '@/components/home/Hot.vue'
import game from '@/components/home/Game.vue'
import nearby from '@/components/home/Nearby.vue'

const curComponent = shallowRef(follow)
const navs = {
  follow: follow,
  recommend: recommend,
  hot: hot,
  game: game,
  nearby: nearby
}

const curActive = (active) => {
  curComponent.value = navs[active]
}
</script>

<template lang="pug">
  section.main
    Nav(@activeName="curActive")
    component(:is="curComponent")
</template>

<style lang="scss" scoped></style>
