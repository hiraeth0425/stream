<script setup>
import { vantLocales } from '@/lang'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { inject } from 'vue'

const { locale } = useI18n()
const giftsImage = import.meta.glob('/src/assets/gift/*.png', { import: 'default', eager: true })
const giftList = inject('giftList')
const selected = ref()
const drawerGift = defineModel('drawerGift', { default: false })

const confirm = () => {
  console.log(selected.value)
  drawerGift.value = false
}
</script>

<template lang="pug">
  .content
    p {{$t('general.gift')}}
    van-grid(:column-num="5" :border="false" :clickable="true")
      van-grid-item(v-for="(value,i) in giftList" :key="value" :class="{active:selected === value.title}" @click="selected = value.title")
        template(#icon)
          van-image(:src="`src/assets/gift/${value.title}.png`" )
        template(#text)
          p {{$t(`gift.${value.title}`)}}
          van-tag(round color="#3c341e" )
            template(#)
              Icon(icon="fluent-emoji:coin")
              P {{value.price}}
          
    van-row(justify="space-between")
      van-col
        van-tag(round)
          template(#)
            Icon(icon="fluent-emoji:coin")
            P 1484,848
            span CNY
      van-col.btns
        van-button(round size="small" :disabled="!selected" @click="selected = ''")
          template(#)
           Icon(icon="material-symbols:close-rounded"  style="color: red")
        van-button(round size="small" @click="confirm" :disabled="!selected")
          template(#)
           Icon(icon="material-symbols:check"  style="color: green")
</template>

<style lang="scss" scoped>
.content {
  padding: 20px;
  background: #333;
  color: #fff;
  :deep(.van-grid-item__content) {
    padding: 0;
    background: #333;
  }
  p {
    text-align: center;
  }
  .van-grid {
    margin: 20px 0 30px;
    .van-grid-item {
      border: 3px solid transparent;
      :deep(.van-grid-item__content) {
        padding: 5px;
        .van-image {
          max-width: 80px;
          aspect-ratio: 1/1;
          padding: 10px;
        }
      }
    }
    p {
      padding: 5px 0;
      font-size: 14px;
    }
    .active {
      :deep(.van-grid-item__content) {
        padding: 5px;
        background: rgba($color: #898989, $alpha: 0.2);
        border-radius: 20px;
      }
    }
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
