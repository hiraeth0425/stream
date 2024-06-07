<script setup>
import topTropy from '@/components/TopTropy.vue'
import { vantLocales } from '@/lang'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const activeName = ref('')
</script>

<template lang="pug">
    section.tropy
      van-nav-bar(left-arrow @click-left="$router.go(-1)")
        template(#title)
          van-tabs(v-model:active="activeName" animated)
            van-tab(:title="$t('general.streamer-board')" name="streamer")
            van-tab(:title="$t('general.top-donors')" name="wealthy")
      topTropy(:tropys="activeName")
</template>

<style lang="scss" scoped></style>
