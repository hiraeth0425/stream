<script setup>
import { Icon } from '@iconify/vue'
</script>

<template lang="pug">
van-row.guards(justify="space-between")
    van-col.guards-items
        van-tag( round) 
            template(#) 
                Icon(icon="fluent-emoji-flat:fire")
                p 貢獻榜
                Icon(icon="mingcute:right-line")
        van-tag( round) 
            template(#)
                p 守護 164人
                Icon(icon="mingcute:right-line")
    van-col
        van-tag( round) 
            template(#) 
                Icon(icon="mingcute:left-line")
                p 為您推薦
</template>

<style lang="scss" scoped>
.guards {
  margin-top: 10px;
  &-items {
    display: flex;
    gap: 10px;
  }
  .van-tag {
    font-size: 16px;
    p {
      padding: 0 5px;
    }
  }
}
</style>
