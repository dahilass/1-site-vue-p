<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { GymInfo } from '@/app/types/types'

defineProps<{
  data: GymInfo
}>()
</script>

<template>
  <div class="card item-gym">
    <slot />
    <p class="card__title">{{ data.name }}</p>
    <div class="card__content">
      <div class="card__col">
        <address class="card__adress">{{ data.address }}</address>
        <a>{{ data.phone ? data.phone : '1231241' }}</a>
        <my-button class="item-btn btn--blank" mode="btn">Записаться</my-button>
      </div>
      <div class="card__col">
        <img class="card__img" :src="data.imgUrl" />
        <router-link class="link marked" to="/">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
.card__adress {
  max-width: 20rem;
}
</style>
