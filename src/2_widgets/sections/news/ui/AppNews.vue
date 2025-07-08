<script setup lang="ts">
import { newsList } from '@widgets/sections/news/dev/data'
import CardNews from '@/4_entities/news/ui/CardNews.vue'

defineOptions({
  title: 'новости клуба',
})
</script>

<template>
  <my-section-layout :title="$options.title" name="news" link="news">
    <ul class="news__list">
      <li v-for="article in newsList" :key="article.id">
        <card-news :data="article" />
      </li>
    </ul>
  </my-section-layout>
</template>

<style lang="scss" scoped>
.news__list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
