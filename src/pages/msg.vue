<script setup>
import { ref, computed, onUnmounted, onMounted } from 'vue'
import { generateMessage } from '../data'
import { DynamicScrollerItem, DynamicScroller } from 'vue-virtual-scroller'

let id = 0

const messages = []
for (let i = 0; i < 10000; i++) {
  messages.push(generateMessage())
}

const items = ref([])
const search = ref('')
const streaming = ref(false)
const scrollerRef = ref(null)

const filteredItems = computed(() => {
  if (!search.value) return items.value
  const lowerCaseSearch = search.value.toLowerCase()
  return items.value.filter((i) => i.message.toLowerCase().includes(lowerCaseSearch))
})

onUpdated(() => {
  scrollToBottom()
})
onUnmounted(() => {
  stopStream()
})

const changeMessage = (message) => {
  Object.assign(message, generateMessage())
}

const addMessage = () => {
  for (let i = 0; i < 10; i++) {
    items.value.push({
      id: id++
      //   ...messages[id % 10000]
    })
  }
  scrollToBottom()

  if (streaming.value) {
    requestAnimationFrame(addMessage)
  }
}

const scrollToBottom = () => {
  nextTick(() => {
    if (scrollerRef.value) {
      scrollerRef.value.scrollToBottom()
    }
  })
  // nextTick(() => {
  //   if (scrollerRef.value) {
  //     scrollerRef.value.scrollTop = scrollerRef.value.scrollHeight
  //   }
  // })
}

const startStream = () => {
  if (streaming.value) return
  streaming.value = true
  addMessage()
}

const stopStream = () => {
  streaming.value = false
}
</script>

<template>
  <div class="box">
    <div class="chat-demo">
      <div class="toolbar">
        <button @click="scrollToBottom()">go bottom</button>
        <button v-if="!streaming" @click="startStream()">Start stream</button>
        <button v-else @click="stopStream()">Stop stream</button>

        <input v-model="search" placeholder="Filter..." />
      </div>

      <DynamicScroller
        ref="scrollerRef"
        :items="filteredItems"
        :min-item-size="54"
        class="scroller"
      >
        <template #default="{ item, index, active }">
          <DynamicScrollerItem
            :item="item"
            :active="active"
            :size-dependencies="[item.message]"
            :data-index="index"
            :data-active="active"
            :title="`Click to change message ${index}`"
            class="message"
            @click="changeMessage(item)"
          >
            <!-- <div class="avatar">
              <img :key="item.avatar" :src="item.avatar" alt="avatar" class="image" />
            </div> -->
            <!-- <div class="text">
              {{ item.message }}
            </div> -->
            <div class="index">
              <span>{{ item.id }} (id)</span>
              <span>{{ index }} (index)</span>
            </div>
          </DynamicScrollerItem>
        </template>
      </DynamicScroller>
    </div>
  </div>
</template>

<style scoped>
.scroller {
  border: 1px solid #000;
  height: 500px;
}
.chat-demo {
  overflow: hidden;
  flex: auto 1 1;
  display: flex;
  flex-direction: column;
}

.scroller {
  flex: auto 1 1;
  background-color: #e2e2e2;
}

.notice {
  padding: 24px;
  font-size: 20px;
  color: #999;
}

.message {
  display: flex;
  min-height: 32px;
  padding: 12px;
  box-sizing: border-box;
}

.avatar {
  flex: auto 0 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
}

.avatar .image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

.index,
.text {
  flex: 1;
}

.text {
  max-width: 400px;
}

.index {
  opacity: 0.5;
}

.index span {
  display: inline-block;
  width: 160px;
  text-align: right;
}
</style>
