<script setup lang="ts">
import type { Img } from '@/app/types/types'
import type { Component } from 'vue'
import { RouterLink } from 'vue-router'

defineProps<{
  data: Img & { name: string; icon: Component }
}>()
</script>

<template>
  <li class="card">
    <component :is="data.icon" />
    <h3>{{ data.name }}</h3>
    <router-link to="/" class="card__link"></router-link>
  </li>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins' as mixins;
.card {
  position: relative;
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

  box-shadow: 4px 4px 4px var(--accent-color);
  transition: scale 0.3s linear;
  &:hover,
  &:focus {
    @include mixins.hover-card;
  }
}
.card__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  padding-block: 1rem;
  color: var(--red);
}
</style>
