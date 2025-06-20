<script setup lang="ts">
import type { ImgInfo } from '@/types'
import type { Component } from 'vue'

defineProps<{
  data: ImgInfo & { name: string; icon: Component }
}>()
</script>

<template>
  <li class="card">
    <component :is="data.icon" />
    <h3>{{ data.name }}</h3>
  </li>
</template>

<style lang="scss" scoped>
.card {
  max-width: 13rem;
  aspect-ratio: 1/1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-wrap: balance;
  text-align: center;
  text-transform: uppercase;
  padding: 2rem;
  font-family: 'One day', sans-serif;
  font-size: 1.2rem;
  background-color: var(--alt-bg);
}
</style>
