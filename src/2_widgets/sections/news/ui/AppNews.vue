<script setup lang="ts">
import { newsList } from '@widgets/sections/news/dev/data'
import CardNews from '@/4_entities/news/ui/CardNews.vue'
import { newsSplideOptions } from '../config/splide.config'

defineOptions({
  title: 'новости клуба',
})
</script>

<template>
  <my-section-layout :title="$options.title" name="news" link="news">
    <my-splide :options="newsSplideOptions">
      <splide-slide v-for="article in newsList" :key="article.id">
        <card-news :data="article" />
      </splide-slide>
    </my-splide>
  </my-section-layout>
</template>

<style lang="scss" scoped>
.news__list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
:deep(.news__card) {
  margin-inline: auto;
}
</style>
