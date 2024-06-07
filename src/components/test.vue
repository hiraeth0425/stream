<template>
  <div class="post-container">
    <img class="post-img" src="./dfsgbb-12314dsvc-vbd.jpeg" />
    <div class="post-footer">
      <span class="post-likes">Likes:</span>
      {{ likes }}
      <button class="post-like-button">👍</button>
      <!-- our new icon -->
      <span v-if="thousandLikes" class="post-star-icon">🤩</span>
      <button @click="hideStar = false" class="post-hide-star">Hide star</button>
    </div>
  </div>
</template>

<script>
const likes = ref(post.likes)
const hideStar = ref(false)
const thousandLikes = computed( () => return likes.value >= 1000 && !hideStar.value )
</script>
