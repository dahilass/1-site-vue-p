<script setup lang="ts">
import type { CardTicket } from '@app/types/types'

defineProps<{
  data: CardTicket
}>()
</script>

<template>
  <p class="ticket__title">{{ data.title }}</p>
  <p class="ticket__desc">{{ data.desc }}</p>
  <div class="ticket__numbers">
    <p class="ticket__time">{{ data.time || '1 час 30 минут' }}</p>
    <p class="ticket__price">{{ data.price }} ₽</p>
  </div>
  <p class="ticket__add" v-if="data.additional">+ {{ data.additional.title }} в подарок</p>
  <my-button class="ticket__btn" mode="link">Купить</my-button>
</template>

<style lang="scss" scoped>
.card {
  padding: 1rem 2rem;
  max-width: 10rem;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--alt-bg);
}
.ticket__title {
  text-transform: uppercase;
}
.ticket__desc {
  text-transform: lowercase;
  text-wrap: balance;
  max-width: 10rem;
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
}
.ticket__numbers {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.ticket__add {
  bottom: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  padding: 0.25rem;
  background-color: var(--accent-color);
  color: var(--btn-color);
  white-space: nowrap;
}
</style>
