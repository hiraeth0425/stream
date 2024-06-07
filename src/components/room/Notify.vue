<script setup>
const isNotify = ref(true)
</script>

<template>
  <van-toast v-model:show="isNotify" style="padding: 0">
    <template #message>
      <van-tag type="primary">标签</van-tag>
    </template>
  </van-toast>
</template>

<style lang="scss" scoped></style>
