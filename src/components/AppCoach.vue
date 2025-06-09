<script setup lang="ts">
import MyGallery from './MyGallery.vue'

// import type { ImageInfo } from '@/types'

import { coachInfoArray } from '@/data'

// const galleryArray: ImageInfo[] = Object.values(coachInfoArray).map((el) =>
//   Object.assign(el, { id: crypto.randomUUID() }),
// )
// console.log(coachInfoArray)
// const galleryArray: ImageInfo[] = [...coachInfoArray]
// for (const item of galleryArray) {
//   item.id = crypto.randomUUID()
// }

</script>

<template>
  <section class="coach main__coach">
    <div class="container">
      <div class="coach__inner">
        <my-heading class="coach__heading">Тренеры</my-heading>
        <my-gallery :images="coachInfoArray" class="coach__gallery" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.coach__gallery {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 4rem 2rem;
  & .gallery__item-name {
    margin-bottom: 1rem;
  }
  & .gallery__item {
    display: flex;
    align-items: center;
    max-width: 21rem;
    max-height: 12.5rem;
    gap: 0.5rem;
    & .gallery__item-info {
      width: 12.5rem;
      height: 12.5rem;
      z-index: 0;
      padding-block: 2rem;

      border: 1px solid red;
    }
    & .gallery__img {
      z-index: 10;
    }
    &:nth-child(odd) {
      flex-direction: row-reverse;
      .gallery__item-info {
        padding-inline: 1rem 2.5rem;
      }
      .gallery__img {
        margin-left: -2rem;
      }
    }
    &:nth-child(even) {
      .gallery__item-info {
        padding-inline: 2.5rem 1rem;
      }
      .gallery__img {
        margin-right: -2rem;
      }
    }
  }
}
</style>
