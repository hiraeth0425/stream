<script setup></script>

<template lang="pug">
  section.search
    form(action="/")
      van-search(v-model="value"
         show-action
         autofocus
         shape="round"
         placeholder="搜尋"
         input-align="center"
         @search="onSearch"
         @cancel="$router.go(-1)")
</template>

<style lang="scss" scoped></style>
