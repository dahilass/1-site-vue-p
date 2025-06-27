<script setup lang="ts">
import CardImg from './subcomponents/CardImg.vue'
import CardType2 from './subcomponents/CardType2.vue'
import CardLink from './subcomponents/CardLink.vue'
import CardGym from './subcomponents/CardGym.vue'
import CardWiki from './subcomponents/CardWiki.vue'
import CardTicket from './subcomponents/CardTicket.vue'

import type { CardInfo, ImgInfo, Img, GymInfo, PersonInfo } from '@/types/types'
import type { Component } from 'vue'

import { inject, computed } from 'vue'

const placeholder = inject<string>('placeholder')
if (!placeholder) {
  throw new Error("placeholder image doesn\'t exist")
}

const props = defineProps<{
  type: number
  data: CardInfo | ImgInfo | Img | GymInfo | PersonInfo
}>()

const componentMap: Record<number, Component> = {
  1: CardImg,
  2: CardType2,
  3: CardLink,
  4: CardGym,
  5: CardWiki,
  6: CardTicket,
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
  display: inline-flex;
  gap: 0.5rem;
  :deep(.card__desc) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
}
</style>
