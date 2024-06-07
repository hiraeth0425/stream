<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const chatInp = ref<string>('')
const emit = defineEmits(['bet', 'game', 'gift'])

const sentChat = () => {
  if (!chatInp.value) return
  console.log(chatInp.value)
  chatInp.value = ''
}

// const drawerBet = () => {
//   console.log('drawerBet')
// }
const drawerGame = () => {
  console.log('drawerGame')
}
// const drawerGift = () => {
//   console.log('drawerGift')
// }
</script>

<template lang="pug">
    .chat-fun
        van-row(justify="space-between")
            van-col
                van-cell-group(inset)
                    van-field(v-model="chatInp" @keyup.enter="sentChat"  input-align="center"  placeholder="說點什麼...")
                        template(#button)
                            van-button(round size="mini" @click="sentChat" )
                                template(#)
                                    Icon(icon="tdesign:enter"  style="color: white" )
            van-col.btns
                van-popover(v-model:show="showPopover" actions-direction="horizontal"  placement="left" theme="dark" :actions="actions" )
                    van-button(round size="mini" @click="() => emit('bet')")
                        template(#)
                            Icon(icon="fa6-solid:coins" style="color: #ffb02e")
                    van-button(round size="mini" @click="drawerGame")
                        template(#)
                            Icon(icon="twemoji:video-game" )
                    van-button(round size="mini" @click="() => emit('gift')")
                        template(#)
                            Icon( icon="fluent-emoji-flat:wrapped-gift")
                    template(#reference)
                        van-button(round size="mini")
                            Icon(icon="ri:menu-2-fill"  style="color: white")
                van-button(round size="mini" @click="$router.push('/')")
                    template(#)
                        Icon(icon="pepicons-pop:leave"  style="color: white")


</template>

<style lang="scss" scoped>
.van-popup {
  background-color: transparent;
  :deep(.van-popover__content) {
    padding: 10px;
  }
  button {
    background-color: transparent;
    border: none;
  }
  svg {
    margin: 5px 10px;
    width: 40px !important;
    height: 40px !important;
  }
}
.chat-fun {
  padding: 10px;
  width: 100%;
  height: 20%;
  --van-field-input-text-color: #fff;
  --van-font-size-md: 12px;
  .van-cell-group {
    width: 100%;
    background: transparent;
    .van-button {
      background-color: transparent;
      border: none;
      aspect-ratio: 1/1;
      width: 55px !important;
      height: 55px !important;
    }
    .van-cell {
      background: rgba(255, 255, 255, 0.2);
      padding: 0;
      .van-cell-group--inset {
        margin: 0;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;
    .van-button {
      background-color: rgba(255, 255, 255, 0.2);
      border: none;
      aspect-ratio: 1/1;
      width: 55px !important;
      height: 55px !important;
    }
  }
  .van-button {
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    aspect-ratio: 1/1;
    width: 55px !important;
    height: 55px !important;
  }
}
</style>
