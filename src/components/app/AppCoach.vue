<script setup lang="ts">
import MyGallery from '../ui/gallery/MyGallery.vue'
import IconDecor from '../icons/IconDecor.vue'

// import type { ImageInfo } from '@/types'

import { coachInfoArray } from '@/data'

console.log(coachInfoArray)
</script>

<template>
  <section class="coach section-padding">
    <div class="container">
      <div class="coach__inner">
        <my-heading class="coach__heading">Тренеры</my-heading>
        <!-- <my-gallery :images="coachInfoArray" class="coach__gallery gallery--decorated" /> -->
        <my-gallery :type="2" :cards="coachInfoArray" class="coach__gallery">
          <template #default>
            <icon-decor class="coach__icon"></icon-decor>
          </template>
        </my-gallery>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.coach__gallery {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 4rem 2rem;
  @media (max-width: 1000px) {
    color: aqua;
    grid-template: 1fr / 1fr;
    justify-items: initial;
    gap: 1rem;
  }
}
.coach__icon {
  z-index: 100;
  position: absolute;
  border-inline: 2px solid var(--accent-color);
  top: 50%;
}
:deep(.card) {
  &:nth-child(even) .coach__icon {
    right: 0;
    transform: translate(49.5%, -50%) rotate(90deg);
  }
  &:nth-child(odd) .coach__icon {
    left: 0;
    transform: translate(-49.5%, -50%) rotate(90deg);
  }
}
</style>
