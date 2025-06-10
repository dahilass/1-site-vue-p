<script setup lang="ts">
import { ref } from 'vue'

import type { ImageInfo } from '@/types'

const loaded = ref(true)

defineProps<{
  images: ImageInfo[]
  // src: string
  // alt?: string
}>()
</script>

<template>
  <ul class="gallery">
    <li v-for="item in images" :key="item.id" class="gallery__item">
      <slot></slot>
      <img
        class="gallery__img"
        :src="item.imgUrl"
        :class="{ 'img-loaded': loaded, 'img-error': !loaded }"
        alt="gallery-image"
        @load="loaded = true"
        @error="loaded = false"
      />
      <div v-if="item.name || item.desc" class="gallery__item-info">
        <p class="gallery__item-name" v-if="item.name">{{ item.name }}</p>
        <p class="gallery__item-description" v-if="item.desc">{{ item.desc }}</p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.gallery--overlay li {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #10101073;
  }
}
.gallery__item {
  position: relative;
  &-description {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
