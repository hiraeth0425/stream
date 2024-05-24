<script setup>
import { Icon } from '@iconify/vue'
</script>

<template lang="pug">
  .level
    van-tag(mark type="success" round)
      Icon(icon="icon-park-outline:level")
      slot 1
</template>

<style lang="scss" scoped>
.level {
  --van-tag-line-height: 24px;
  .van-tag {
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-size: 18px;
  }
}
</style>
