<script setup lang="ts">
// import { ref } from 'vue'
// import { RouterLink } from 'vue-router'

import type { CardInfo, ImgInfo } from '@/types'
import MyCard from './MyCard.vue'

// const loaded = ref(true)

defineProps<{
  cards: CardInfo[] | ImgInfo[]
  // src: string
  // alt?: string
  lineClamp?: number
  type: 1 | 2 | 3 | 4 | 5
}>()
</script>

<template>
  <ul class="gallery">
    <my-card v-for="card in cards" :key="card.id" :data="card" :type="type">
      <template #default>
        <slot />
      </template>
    </my-card>
  </ul>
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  gap: 0.5rem;
}
.gallery--overlay li {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #10101073;
  }
}
</style>
