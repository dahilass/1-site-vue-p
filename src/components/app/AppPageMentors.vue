<script setup lang="ts">
import { coachInfoArray } from '@/data'
import MyGallery from '../ui/gallery/MyGallery.vue'

defineProps<{
  search: boolean
}>()
</script>

<template>
  <section class="mentors section-padding">
    <div class="container">
      <div class="mentors__inner">
        <div class="test">
          <my-heading>Тренеры</my-heading>
        </div>
        <my-gallery :type="2" :cards="coachInfoArray" class="mentors__gallery"></my-gallery>
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
