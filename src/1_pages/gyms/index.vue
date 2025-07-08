<script setup lang="ts">
import { gymInfoArray } from './dev/data'
import { inject } from 'vue'
import CardGym from '@entities/gym/ui/CardGym.vue'

defineOptions({
  name: 'PageGyms',
  title: 'Залы',
})

const placeholder = inject<string>('placeholder')
if (!placeholder) {
  throw new Error("placeholder image doesn\'t exist")
}
</script>

<template>
  <main>
    <my-section-layout name="gyms" :title="$options.title">
      <ul class="gyms__list">
        <card-gym v-for="(card, i) in gymInfoArray" :data="card" :key="i" />
      </ul>
    </my-section-layout>
  </main>
</template>

<style lang="scss" scoped>
.gyms__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  // justify-items: center;
}
</style>
