<script setup lang="ts">
// GYMS SECTION
import { RouterLink } from 'vue-router'
import type { CardInfo } from '@/types'

defineProps<{
  data: CardInfo
}>()
</script>

<template>
  <li class="card item-gym">
    <slot />
    <p class="card__title">{{ data.name }}</p>
    <div class="card__content">
      <div class="card__col">
        <address>{{ data.desc }}</address>
        <my-button class="item-btn btn--blank" mode="btn">Записаться</my-button>
      </div>
      <div class="card__col">
        <img class="card__img" :src="data.imgUrl" />
        <router-link v-if="data.router" class="link marked" :to="data.router"
          >Подробнее</router-link
        >
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.card {
  padding: 1.5rem;
  width: 100%;
  max-width: 26rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: var(--alt-bg);
  // box-shadow: 1px 1px 2px var(--main-color);
}
.card__title {
  font-size: 1.2rem;
  font-family: 'One day';
}
.card__content {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  address {
    word-break: break-all;
    max-width: 9rem;
    margin-block: 1rem;
  }
}
.card__col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn {
    max-width: 7.5rem;
  }
  &:last-child {
    align-items: end;
  }
}
.card__img {
  max-width: 12.5rem;
  max-height: 8.5rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  margin-bottom: 1rem;
}
</style>
