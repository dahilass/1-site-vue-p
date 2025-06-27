<script setup lang="ts">
// COACH SECTION
import type { PersonInfo } from '@/types/types'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const loaded = ref(true)

defineProps<{
  data: PersonInfo
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
      <router-link to="/" class="card__link link">Читать...</router-link>
    </article>
  </li>
</template>

<style lang="scss" scoped>
.card {
  // max-width: 17.5rem;
  @media (max-width: 1000px) {
    margin-inline: 2rem;
  }
  &:nth-child(odd) {
    flex-direction: row-reverse;
    .gallery__item-info {
      padding-inline: 1rem 2.5rem;
    }
    .card__img {
      margin-left: -2rem;
    }
  }

  &:nth-child(even) {
    .gallery__item-info {
      padding-inline: 2.5rem 1rem;
    }
    .card__img {
      margin-right: -2rem;
    }
    .card__link {
      margin-left: auto;
    }
  }
}
.card__img {
  max-width: 10rem;
  max-height: 10rem;
  aspect-ratio: 1/1;
  // border-radius: 4px;
  z-index: 10;
  box-shadow: 0 0 3px var(--main-color);
}
.card__name {
  margin-bottom: 1rem;
}
.card__info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 12.5rem;
  min-width: 10rem;
  height: 12.5rem;
  z-index: 0;
  padding: 2rem;
  border: 2px solid var(--accent-color);
  background-color: var(--accent-color-op);
}
.card__link {
  margin-top: auto;
}
</style>
