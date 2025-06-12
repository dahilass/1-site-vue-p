<script setup lang="ts">
import MyGallery from './MyGallery.vue'
import { subjects } from '@/data'

import IconDecor from '../icons/IconDecor.vue'
</script>

<template>
  <section class="subject section-padding">
    <div class="container">
      <div class="subject__inner">
        <my-heading>Дисциплины</my-heading>
        <my-gallery :line-clamp="5" :images="subjects" class="subject__gallery">
          <icon-decor class="subject__icon" />
        </my-gallery>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.subject {
  background-color: var(--alt-bg);
}
.subject__gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
  .gallery__link {
    display: block;
    padding-block: 1rem;
    color: var(--red);
    &:hover,
    &:focus {
      color: var(--link-hover);
    }
  }
  .gallery__img {
    opacity: 0.75;
  }
  .gallery__item {
    position: relative;
    &-info {
      width: 100%;
      height: 100%;
      padding-top: 2rem;
      padding-inline: 2rem;
      z-index: 10;
      top: 0;
      position: absolute;
    }
    &-name {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    &-description {
      text-shadow: 0 0 1px var(--main-color);
      max-width: 16rem;
    }
    &::after {
      content: '';
      inset: 0;
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--overlay-image);
      z-index: 1;
    }
  }
  .subject__icon {
    position: absolute;
    z-index: 10;
    transform: translate(-50%, -50%) rotate(90deg);
    left: 0;
    top: 50%;
  }
}
</style>
