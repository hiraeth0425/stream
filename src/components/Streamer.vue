<script setup>
import { Icon } from '@iconify/vue'

const streamModule = ref([
  {
    isRanking: true,
    num: 15,
    img: 'https://picsum.photos/id/646/367/267',
    tags: ['按場收費', '32 鑽/場'],
    game: '一分快三',
    name: '黃小滿',
    location: '火星',
    viewer: 17068
  },
  {
    isRanking: false,
    num: 5,
    img: 'https://picsum.photos/id/399/367/267',
    tags: ['按場收費', '32 鑽/場'],
    game: '一分快三',
    name: '泡芙',
    location: '海外',
    viewer: 93757
  },
  {
    isRanking: true,
    num: 9,
    img: 'https://picsum.photos/id/399/367/267',
    tags: ['按時收費', '10 鑽/分鐘'],
    game: '一分快三',
    name: '聲優姐姐',
    location: '武漢',
    viewer: 27068
  },
  {
    isRanking: false,
    num: 3,
    img: 'https://picsum.photos/id/646/367/267',
    tags: ['按時收費', '10 鑽/分鐘'],
    game: '一分快三',
    name: '小熊',
    location: '火星',
    viewer: 17068
  }
])
</script>

<template lang="pug">
    van-row(:gutter="[10, 10]")
      van-col.follow-img( v-for="item in streamModule" :key="item.name" span="12")
        router-link(to="")
          img(:src="item.img" alt="")
          div.ranking(v-if="item.isRanking")
            div.pic
              i.num TOP.{{ item.num }}
              img(src="@/assets/stream/ranking.png" alt="")
            div.tags(v-for="tag in item.tags" :key="tag")
              p
                i {{ tag }}
          div.game(v-else)
            Icon(icon="hugeicons:game")
            h5 {{ item.game }}
          div.mask
            div.name
              h5 {{ item.name }}
              p {{ item.location }}
            div.viewer
              Icon(icon="radix-icons:dot-filled")
              |{{ item.viewer }}

</template>

<style lang="scss" scoped>
.follow-img {
  position: relative;
  aspect-ratio: 1/1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .ranking {
    position: absolute;
    top: 0;
    left: 10px;

    .pic {
      position: relative;
      object-fit: contain;
      width: 200px;
      aspect-ratio: 4/1;
      .num {
        position: absolute;
        font-size: 22px;
        color: #fff;
        transform: translate(25%, 90%);
      }
    }
    .tags {
      p {
        @include xs {
          display: inline-block;
        }
        i {
          margin-bottom: 5px;
          display: inline-block;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 12px;
          background-color: rgba($color: #000000, $alpha: 0.3);
          color: #fff;
        }
      }
    }
  }
  .game {
    margin: 10px;
    padding: 5px;
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    font-size: 14px;
    clip-path: polygon(1% 0, 60% 0, 100% 0, 100% 0, 89% 100%, 89% 100%, 0 100%);
    background: linear-gradient(
      90deg,
      rgba(28, 1, 119, 1) 5%,
      rgba(223, 25, 126, 0.3449754901960784) 100%
    );
    svg {
      color: #ff7db6;
      font-size: 18px;
    }
    h5 {
      padding: 0 20px;
    }
  }
  .mask {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    color: #fff;
    width: 100%;
    position: absolute;
    bottom: 0;
    font-size: 14px;
    .name {
      h5 {
        padding-bottom: 5px;
      }
    }

    .viewer {
      display: flex;
      align-items: center;
      svg {
        color: rgb(255, 37, 182);
      }
    }
  }
}
</style>
