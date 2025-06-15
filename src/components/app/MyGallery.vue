<script setup lang="ts">
import { ref } from 'vue'

import type { ImageInfo } from '@/types'

import { RouterLink } from 'vue-router'

const loaded = ref(true)

defineProps<{
  images: ImageInfo[]
  // src: string
  // alt?: string
  lineClamp?: number
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
      <article v-if="item.name || item.desc" class="gallery__item-info">
        <h3 class="gallery__item-name" v-if="item.name">{{ item.name }}</h3>
        <p
          :style="{ 'line-clamp': lineClamp || 0 }"
          class="gallery__item-description"
          v-if="item.desc"
        >
          {{ item.desc }}
        </p>
        <router-link v-if="item.router" :to="item.router" class="gallery__link"
          >Читать...</router-link
        >
      </article>
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
  overflow-block: clip;
  position: relative;
  &-description {
    font-size: 14px;
    line-height: 16px;
  }
}
.gallery__item-name {
  font-family: 'One day';
}
.gallery__item-description {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  // -webkit-line-clamp: 3;
}
</style>
