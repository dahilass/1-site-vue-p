<script setup lang="ts">
import CardType1 from './subcomponents/CardType1.vue'
import CardType2 from './subcomponents/CardType2.vue'
import CardType3 from './subcomponents/CardType3.vue'
import CardType4 from './subcomponents/CardType4.vue'
import CardType5 from './subcomponents/CardType5.vue'

import type { CardInfo, ImgInfo } from '@/types'
import type { Component } from 'vue'

import { inject, computed } from 'vue'

const placeholder = inject<string>('placeholder')
if (!placeholder) {
  throw new Error("placeholder image doesn\'t exist")
}

const props = defineProps<{
  type: number
  data: CardInfo | ImgInfo
}>()

const componentMap: Record<number, Component> = {
  1: CardType1,
  2: CardType2,
  3: CardType3,
  4: CardType4,
  5: CardType5,
}

const currentComponent = computed(() => componentMap[props.type])
</script>

<template>
  <component :is="currentComponent" :data>
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  align-items: center;
  // max-width: 21rem;
  // max-height: 12.5rem;
  gap: 0.5rem;
  :deep(.card__desc) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
}
</style>
