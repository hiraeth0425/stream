<script setup>
import { Icon } from '@iconify/vue'
import { vantLocales } from '@/lang'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const props = defineProps(['tropys'])

const getTropy = (i) => {
  rankBtns.value[i].active = true
  setTimeout(() => {
    steamerRank.value.sort(() => {
      return Math.random() - 0.5
    })
    rankBtns.value[i].active = false
  }, 1000)
}

const rankBtns = ref([
  {
    name: '日榜',
    active: false
  },
  {
    name: '3天榜',
    active: false
  },
  {
    name: '7天榜',
    active: false
  }
])

const steamerRank = ref([
  {
    name: '黑白配no.1',
    level: 15,
    img: 'https://picsum.photos/id/399/367/267',
    fire: ''
  },
  {
    name: '桃花美少女',
    level: 10,
    img: 'https://picsum.photos/id/400/367/267',
    fire: '落後5萬火力'
  },
  {
    name: '神秘人',
    level: 8,
    img: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    fire: '落後2.5萬火力'
  },
  {
    name: '小姐姐',
    level: 2,
    img: 'https://picsum.photos/id/401/367/267',
    fire: '落後1.7萬火力'
  },
  {
    name: '小哥哥',
    level: 1,
    img: 'https://picsum.photos/id/402/367/267',
    fire: '落後1.5萬火力'
  }
])
</script>

<template lang="pug">
  .toptropy
    | {{ props.tropys }}
    .toptropy-date
      van-row
        van-col.bts(span='24' gutter="20" justify="space-between")
          van-button(round size="mini" @click="getTropy(i)" v-for="(btn,i) in rankBtns" :key="btn.name" :loading="btn.active") {{btn.name}}
          //- van-button(round size="mini" @click="getTropy") 3天榜
          //- van-button(round size="mini" @click="getTropy") 7天榜
      van-row
        van-col.rank-list(span="8" v-for="steamer in steamerRank.slice(0,3)" :key="i")
          van-image(round
          width="10rem"
          height="10rem"
          :src="steamer.img")
          h4 {{steamer.name}}
          div(v-if="/streamer/.test(props.tropys)")          
            Level(#) {{steamer.level}}
            p {{steamer.fire}}
            van-button.follow(round size="mini" color="linear-gradient(to bottom, #f990a8, #ef3c8a,#f544b5)") {{$t('general.follow')}}
    van-row.toptropy-list(v-for="steamer in steamerRank.slice(3)" :key="i")
      van-col.num(span='2') 4
      van-col(span='17')
        .info
          van-image(round
            width="10rem"
            height="10rem"
            :src="steamer.img")
          div(v-if="/streamer/.test(props.tropys)")
            .title
              h4 {{steamer.name}}
              Level(#) {{steamer.level}}
            p {{steamer.fire}}
          div(v-else)
            .title
              h4 {{steamer.name}}
              Level(#) {{steamer.level}}
            p {{steamer.fire}}
      van-col(span='5' )
        van-button.follow(v-if="/streamer/.test(props.tropys)" round size="mini" color="linear-gradient(to bottom, #f990a8, #ef3c8a,#f544b5)") {{$t('general.follow')}}
   
</template>

<style lang="scss" scoped>
.toptropy {
  .follow {
    margin-top: 20px;
    padding: 8px 30px;
    font-size: 18px;
    height: auto;
  }
  &-date {
    --van-button-mini-font-size: 16px;
    padding: 10px;
    background: rgb(246, 152, 164);
    background: linear-gradient(0deg, rgba(246, 152, 164, 1) 34%, rgba(255, 107, 148, 1) 100%);
    :deep(.van-loading) {
      width: 100%;
      height: 20px;
    }

    .bts .van-button {
      padding: 5px 15px;
      color: rgba(255, 107, 148, 1);
      height: auto;
    }

    .rank-list:nth-child(1) {
      order: 2;
      padding-top: 60px;
    }
    .rank-list:nth-child(2) {
      order: 1;
      padding-top: 110px;
    }
    .rank-list:nth-child(3) {
      order: 3;
      padding-top: 140px;
    }
    .rank-list {
      text-align: center;
      color: #fff;
      .van-image {
        max-width: 100px;
        max-height: 100px;
      }
      h4 {
        padding-top: 10px;
        font-size: 18px;
      }
      p {
        letter-spacing: 0.06rem;
        font-size: 16px;
      }
      .level {
        padding: 15px;
      }
    }
  }
  &-list {
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    .num {
      padding: 10px;
      font-size: 20px;
      color: #9f9f9f;
    }
    .info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
      padding: 10px;
      .title {
        display: flex;
        align-items: center;
        h4 {
          font-size: 20px;
          padding-right: 5px;
        }
      }
      p {
        padding: 15px 0;
        color: #9f9f9f;
        letter-spacing: 0.06rem;
        font-size: 16px;
      }
      .van-image {
        max-width: 100px;
        max-height: 100px;
      }
    }
  }
}
</style>
