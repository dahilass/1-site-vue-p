<script setup lang="ts">
import CardWiki from '@entities/library/ui/CardWiki.vue'
import { wikiListInfo } from '../dev/data'
</script>

<template>
  <my-section-layout name="library">
    <ul class="wiki__list">
      <card-wiki v-for="(card, i) in wikiListInfo" :key="i" :data="card" />
    </ul>
  </my-section-layout>
</template>

<style lang="scss" scoped>
.wiki__list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  // flex-wrap: wrap;
}
:deep(.icon) {
  max-width: 6rem;
}
</style>
