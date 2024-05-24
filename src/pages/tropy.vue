<script setup>
import topTropy from '@/components/TopTropy.vue'
const activeName = ref('')
</script>

<template lang="pug">
    section.tropy
      van-nav-bar(left-arrow @click-left="$router.go(-1)")
        template(#title)
          van-tabs(v-model:active="activeName" animated)
            van-tab(title="主播榜" name="streamer")
            van-tab(title="土豪榜" name="wealthy")
      topTropy(:tropys="activeName")
</template>

<style lang="scss" scoped></style>
