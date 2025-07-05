<script setup lang="ts">
// import { ref } from 'vue'
// import { RouterLink } from 'vue-router'

import type { CardInfo, ImgInfo } from '@/app/types/types'
import MyCard from './MyCard.vue'

// const loaded = ref(true)

defineProps<{
  cards: CardInfo[] | ImgInfo[]
  // src: string
  // alt?: string
  lineClamp?: number
  cardType: 1 | 2 | 3 | 4 | 5 | 6 | 7
}>()
</script>

<template>
  <ul class="gallery">
    <my-card v-for="(card, index) in cards" :key="index" :data="card" :cardType="cardType">
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
