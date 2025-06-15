<script setup lang="ts">
import { coachInfoArray } from '@/data'
import MyGallery from './MyGallery.vue'
import MyInput from '../ui/MyInput.vue'
</script>

<template>
  <section class="mentors section-padding">
    <div class="container">
      <div class="mentors__inner">
        <div class="test">
          <my-heading>Тренеры</my-heading>
          <my-input :mode="'input'" placeholder="Поиск" class="mentors__input"></my-input>
        </div>
        <my-gallery :images="coachInfoArray" :line-clamp="4" class="mentors__gallery"></my-gallery>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mentors__inner {
  .test {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
}
.mentors__input {
  align-self: start;
}
.mentors__inner {
  :deep(.gallery) {
    display: flex;
    flex-wrap: wrap;
    gap: 6rem 3rem;
  }
  :deep(.gallery__item) {
    max-width: 12.5rem;
  }
  :deep(.gallery__item-name)F {
    margin-bottom: 0.8rem;
  }
  :deep(img) {
    margin-bottom: 1rem;
    max-width: 12.5rem;
    max-height: 12.5rem;
  }
}
</style>
