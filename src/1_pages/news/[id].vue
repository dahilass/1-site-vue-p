<script setup lang="ts">
import { newsList } from '@/2_widgets/sections/news/dev/data'
defineOptions({
  name: 'PageNewsItem',
})
</script>

<template>
  <main>
    <div>{{ newsList }}</div>
  </main>
</template>

<style lang="scss" scoped></style>
