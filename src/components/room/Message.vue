<script setup></script>

<template lang="pug">
van-col 
    van-grid( :column-num="1" :border="false" :gutter="10")
        van-grid-item.msg-box(v-for="i in 5" :key="i")
            .text
                van-tag(round type="primary") 系統
                p 用戶
                  span.user-system 在下臣狗
                  |在一分快三玩法中,已成功下注了5.0元
                van-tag(round type="danger") 跟頭
        van-grid-item.msg-box
            .text
                van-tag(round type="primary") 系統
                p 用戶
                  span.user-system 在下臣狗
                  |在一分快三玩法中,已成功下注了5.0元用戶在下臣狗在一分快三玩法中,已成功下注了5.0元用戶在下臣狗在一分快三玩法中,已成功下注了5.0元
                van-tag(round type="danger") 跟頭
        van-grid-item.msg-box
            .text
                Level(type="warning")
                span.user-self 我是大乾爹
                span 來了！
        van-grid-item.msg-box(v-for="i in 3" :key="i")
            .text
                Level(color="#f861a5")
                  template(#) 15
                span.user-self 店長
                span 快開局吧，我等不及了

            
</template>

<style lang="scss" scoped>
.van-col {
  color: #fff;
  width: 80%;
  height: 80%;
  overflow: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .van-grid {
    padding: 5px;
    --van-grid-item-content-background: transparent;
    :deep(.van-grid-item__content) {
      padding: 10px 0;
    }
    .msg-box {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      .text:not(.van-tag) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        font-size: 17px;
        .user-system {
          color: #18b5de;
        }
        .user-self {
          color: #18b5de;
          padding: 0 10px;
        }
        p {
          padding: 0 5px;
        }
        .van-tag {
          font-size: 15px;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
