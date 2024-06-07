<script setup>
import { ref } from 'vue'

const drawerInfo = ref(false)
const drawerGift = ref(false)
const drawerBet = ref(false)
const drawerGame = ref(false)

// const isNotify = ref(true)
</script>

<template lang="pug">
  section.room 

    //- Notify

    van-row
      RoomHeader(@info="drawerInfo = true")

    van-row.guards(justify="space-between")
      Guards

    van-dialog(v-model:show="drawerInfo" confirmButtonText="確認")
      CardUserInfo

    van-action-sheet(v-model:show="drawerBet")
      CardBet(v-model:drawerBet="drawerBet")

    van-action-sheet(v-model:show="drawerGift")
      CardGift(v-model:drawerGift="drawerGift")

    van-row.msg
      Message

      ChatFun(@bet="drawerBet = true" @gift="drawerGift = true")
</template>

<route lang="yaml">
meta:
  layout: Custom
</route>

<style lang="scss" scoped>
.room {
  position: relative;
  background-color: #000;
  color: #fff;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  --van-tag-default-color: rgba(255, 255, 255, 0.2);
  --van-tag-line-height: 1.3;
  --van-button-mini-height: 35px;
  --van-action-sheet-max-height: 50%;
  .guards {
    margin-top: 10px;
  }
  .msg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
  }
}
</style>
