<script setup lang="ts">
// SUBJECT SECTION
import type { CardInfo } from '@/types'
import { ref } from 'vue'

const loaded = ref(true)

defineProps<{
  data: CardInfo
}>()
</script>

<template>
  <li class="card">
    <slot />
    <img
      class="card__img"
      :src="data.imgUrl"
      :class="{ 'img-loaded': loaded, 'img-error': !loaded }"
      alt="card-image"
      @load="loaded = true"
      @error="loaded = false"
    />
    <article v-if="data.name || data.desc" class="card__info">
      <h3 class="card__name" v-if="data.name">{{ data.name }}</h3>
      <p class="card__desc" v-if="data.desc">
        {{ data.desc }}
      </p>
      <p class="card__link-desc">Читать...</p>
      <router-link :to="data.id" class="card__link"></router-link>
    </article>
  </li>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins' as mixins;
.card {
  box-shadow: 2px 2px 4px var(--accent-color);
  transition:
    scale 0.3s linear,
    box-shadow 0.3s linear;
  &::after {
    content: '';
    inset: 0;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-image);
    z-index: 1;
  }
  &:hover,
  &:focus {
    @include mixins.hover-card;
  }
}
.card__info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-top: 1.25rem;
  padding-inline: 2rem;
  z-index: 10;
  top: 0;
  position: absolute;
  justify-content: space-evenly;
}
.card__name {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.card__desc {
  max-width: 16rem;
  margin-bottom: 0.5rem;
}
.card__img {
  opacity: 0.75;
}
.card__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
