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
      <router-link v-if="data.router" :to="data.router" class="card__link">Читать...</router-link>
    </article>
  </li>
</template>

<style lang="scss" scoped>
.card {
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
}
.card__info {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  padding-inline: 2rem;
  z-index: 10;
  top: 0;
  position: absolute;
}
.card__name {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.card__desc {
  text-shadow: 0 0 1px var(--main-color);
  max-width: 16rem;
}
.card__img {
  opacity: 0.75;
}
.card__link {
  display: block;
  padding-block: 1rem;
  color: var(--red);
  &:hover,
  &:focus {
    color: var(--link-hover);
  }
}
</style>
