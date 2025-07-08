<script setup lang="ts">
import { topics } from '../dev/data'

import CardLink from '@entities/linkPreview/ui/CardLink.vue'

defineOptions({
  title: 'Интересное',
})
</script>

<template>
  <my-section-layout name="topics" :title="$options.title">
    <ul class="card__list">
      <card-link v-for="(card, i) in topics" :data="card" :key="i" />
    </ul>
  </my-section-layout>
</template>

<style lang="scss" scoped>
.card__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 20rem));
  align-items: center;
  justify-content: center;
  gap: 2rem;
  // justify-self: center;
  :deep(.card__img) {
    display: block;
    aspect-ratio: 3/2;
    object-fit: cover;
  }
  :deep(.card) {
    width: 100%;
  }
}
</style>
