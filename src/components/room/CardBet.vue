<script setup>
import { Icon } from '@iconify/vue'
import { vantLocales } from '@/lang'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const drawerBet = defineModel('drawerBet', { default: false })
const amount = ref(0)
const betData = ref([10, 50, 100, 500, 1000])

const confirm = () => {
  console.log('confirm' + amount.value)
  amount.value = 0
  drawerBet.value = false
}
</script>

<template lang="pug">
  .content
    p {{$t('general.bet')}}: {{amount}}
    van-grid(:column-num="5" :border="false" )
      van-grid-item( v-for="(value,i) in betData" :key="value")
        template(#Icon)
        van-button(size="small" @click="amount += value" hairline round color="linear-gradient(180deg, rgba(104,0,117,1) 34%, rgba(37,13,122,1) 100%)") {{value}}
    van-row(justify="space-between")
      van-col
        van-tag(round)
          template(#)
            Icon(icon="fluent-emoji:coin")
            P 1484,848
            span CNY
      van-col.btns
        van-button(round size="small" :disabled="!amount" @click="amount = 0")
          template(#)
           Icon(icon="material-symbols:close-rounded"  style="color: red")
        van-button(round size="small" @click="confirm" :disabled="!amount")
          template(#)
           Icon(icon="material-symbols:check"  style="color: green")
</template>

<style lang="scss" scoped>
.content {
  padding: 30px;
  background: #333;
  color: #fff;
  :deep(.van-grid-item__content) {
    padding: 0 !important;
    background: #333 !important;
  }
  p {
    text-align: center;
  }
  .van-grid {
    margin: 30px;
  }
  .van-tag {
    padding: 5px 10px;
    font-size: 16px;
    p {
      padding: 0 5px;
    }
    span {
      font-size: 14px;
    }
  }
  .van-col.btns {
    display: flex;
    gap: 20px;
  }
  .van-button--default {
    background: #333;
    border: none;
    aspect-ratio: 1/1;
  }
  .van-row--justify-space-between {
    align-items: center;
  }
}
</style>
