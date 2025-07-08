<script setup lang="ts">
import CardTicket from '@entities/news/ui/CardTicket.vue'
import { newsList } from '@widgets/sections/news/dev/data'

defineOptions({
  name: 'PageNews',
})
</script>

<template>
  <main>
    <my-section-layout name="news" title="новости клуба">
      <ul class="news__list">
        <card-ticket v-for="(card, i) in newsList" :key="i" :data="card" />
      </ul>
    </my-section-layout>
  </main>
</template>

<style lang="scss" scoped>
.news__list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
