<script setup lang="ts">
import MyGallery from '../ui/gallery/MyGallery.vue'
import IconDecor from '../icons/IconDecor.vue'

// import type { ImageInfo } from '@/types'

import { coachInfoArray } from '@/data'
</script>

<template>
  <section class="coach section-padding">
    <div class="container">
      <div class="coach__inner">
        <my-heading class="coach__heading">Наши Тренеры</my-heading>
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
  max-width: 60rem;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem 2rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
  }
}
.coach__icon {
  z-index: 100;
  position: absolute;
  border-inline: 2px solid var(--accent-color);
  top: 50%;
}
:deep(.card) {
  align-items: center;
  &:nth-child(even) {
    @media (max-width: 1000px) {
      margin-right: -9rem;
    }
    .coach__icon {
      right: 0;
      transform: translate(49.5%, -50%) rotate(90deg);
    }
  }
  &:nth-child(odd) {
    @media (max-width: 1000px) {
      margin-left: -9rem;
    }

    .coach__icon {
      left: 0;
      transform: translate(-49.5%, -50%) rotate(90deg);
    }
  }
}
</style>
