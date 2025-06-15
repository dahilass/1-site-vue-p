<script setup lang="ts">
import MyGallery from './MyGallery.vue'
import IconDecor from '../icons/IconDecor.vue'

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
  <section class="coach section-padding">
    <div class="container">
      <div class="coach__inner">
        <my-heading class="coach__heading">Тренеры</my-heading>
        <!-- <my-gallery :images="coachInfoArray" class="coach__gallery gallery--decorated" /> -->
        <my-gallery :images="coachInfoArray" class="coach__gallery">
          <icon-decor class="coach__icon"></icon-decor>
        </my-gallery>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.coach {
  background-color: var(--alt-bg);
}
.coach__gallery {
  :deep(.gallery__item-name) {
    margin-bottom: 1rem;
  }
  :deep(.gallery__item) {
    display: flex;
    align-items: center;
    max-width: 21rem;
    max-height: 12.5rem;
    gap: 0.5rem;

    @media (max-width: 1000px) {
      margin-inline: 2rem;
    }

    & .gallery__item-info {
      width: 12.5rem;
      height: 12.5rem;
      z-index: 0;
      padding-block: 2rem;
      border: 2px solid var(----accent-color);
      background-color: var(--accent-color-op);
    }

    & .gallery__img {
      max-width: 10rem;
      max-height: 10rem;
      aspect-ratio: 1/1;
      // border-radius: 4px;
      z-index: 10;
      box-shadow: 0 0 3px var(--main-color);
    }

    &:nth-child(odd) {
      flex-direction: row-reverse;
      .gallery__item-info {
        padding-inline: 1rem 2.5rem;
      }
      .gallery__img {
        margin-left: -2rem;
      }
      .coach__icon {
        left: 0;
        transform: translate(-49.5%, -50%) rotate(90deg);
      }
    }

    &:nth-child(even) {
      .gallery__item-info {
        padding-inline: 2.5rem 1rem;
      }
      .gallery__img {
        margin-right: -2rem;
      }
      .coach__icon {
        right: 0;
        transform: translate(49.5%, -50%) rotate(90deg);
      }

      @media (max-width: 1000px) {
        justify-self: end;
      }
    }
  }
}
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
  border-inline: 2px solid var(--red);
  top: 50%;
  // // left: 0;
  // // transform: translateX(50%);
  // &--left {
  //   left: 0;
  //   transform: translate(-49.5%, -50%) rotate(90deg);
  // }
  // &--right {
  //   right: 0;
  //   transform: translate(49.5%, -50%) rotate(90deg);
  // }
}
</style>
