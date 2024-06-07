<script setup>
import { Icon } from '@iconify/vue'

// 更改tag類型or顏色
const props = defineProps(['type', 'color'])
</script>

<template lang="pug">
  .level
    van-tag(mark :type="props.type ?? 'primary'" :color="props.color ?? ''" round)
      Icon(icon="icon-park-outline:level")
      slot 1
</template>

<style lang="scss" scoped>
.level {
  --van-tag-line-height: 1.5;
  .van-tag {
    padding: 0 2px 0 24px;
    justify-content: space-between;
    align-items: center;
    min-width: 50px;
    gap: 4px;
    font-size: 13px;
    text-align: left;
    svg {
      position: absolute;
      left: 4px;
      font-size: 15px;
    }
  }
}
</style>
