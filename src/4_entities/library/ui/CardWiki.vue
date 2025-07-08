<script setup lang="ts">
import type { CardInfo } from '@app/types/types'
import type { Component } from 'vue'
import { RouterLink } from 'vue-router'

defineProps<{
  data: Omit<CardInfo & { icon: Component }, 'imgUrl'>
}>()
</script>

<template>
  <li class="card">
    <component :is="data.icon" class="card__icon" />
    <h3>{{ data.title }}</h3>
    <router-link :to="data.router" class="card__link"></router-link>
  </li>
</template>

<style lang="scss" scoped>
@use '@shared/assets/styles/mixins' as mixins;
.card {
  position: relative;
  display: flex;
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
  @include mixins.link-shadow;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s linear;
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
