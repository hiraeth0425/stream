<script setup>
import { Icon } from '@iconify/vue'

const activeComponent = ref('follow')
const emit = defineEmits(['activeName'])

const unwatch = watch(activeComponent, (newVal) => {
  emit('activeName', newVal)
})

onUnmounted(() => {
  unwatch()
})

import { vantLocales } from '@/lang'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const showPopover = ref(false)
const actions = [
  { text: '繁體中文', value: 'zhtw' },
  { text: '英文', value: 'en' },
  { text: '簡體中文', value: 'zhcn' }
]

const onSelect = (lang) => {
  vantLocales(lang.value)
  locale.value = lang.value
  localStorage.setItem('language', lang.value)
  showPopover.value = false
}
</script>

<template>
  <nav class="nav">
    <van-tabs v-model:active="activeComponent" animated>
      <van-tab :title="$t('general.focus')" name="follow"></van-tab>
      <van-tab :title="$t('general.recommend')" name="recommend"></van-tab>
      <van-tab :title="$t('general.trending')" name="hot"></van-tab>
      <van-tab :title="$t('general.game')" name="game"></van-tab>
      <!-- 等用戶多再實現功能 -->
      <!-- <van-tab title="附近" name="nearby"></van-tab> -->
      <!-- <van-tab to="/search"
        ><template #title><Icon icon="icon-park-twotone:search" /></template
      ></van-tab> -->
      <van-tab to="/tropy"
        ><template #title><Icon icon="emojione-v1:trophy" /></template
      ></van-tab>
      <van-tab
        ><template #title>lang</template>
        <van-popover v-model:show="showPopover" theme="dark" :actions="actions" @select="onSelect">
          <template #reference>
            <van-button type="primary">語言</van-button>
          </template>
        </van-popover>
        <p>{{ $t('hello') }}</p>
      </van-tab>
    </van-tabs>
  </nav>
</template>

<style lang="scss" scoped></style>
