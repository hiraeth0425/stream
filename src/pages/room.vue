<script setup>
const drawerInfo = ref(false)
</script>

<template lang="pug">
  section.room room
    RoomHeader(@info="drawerInfo = true")

    UserInfo(v-model:drawerInfo="drawerInfo")

    Guards
</template>

<style lang="scss" scoped>
.room {
  background-color: #000;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  --van-tag-default-color: rgba(255, 255, 255, 0.2);
  --van-tag-line-height: 1.3;
  --van-button-mini-height: 35px;
}
</style>
