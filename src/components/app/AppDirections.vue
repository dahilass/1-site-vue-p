<script setup lang="ts">
import img1 from '@/assets/images/directions/1.jpg'
import img2 from '@/assets/images/directions/2.jpg'
import img3 from '@/assets/images/directions/3.jpg'
import img4 from '@/assets/images/directions/4.jpg'

import MyGallery from '../ui/gallery/MyGallery.vue'

const diercions = [
  {
    title: 'ГРУППОВЫЕ ТРЕНИРОВКИ',
    imgUrl: img1,
  },
  {
    title: 'ИНДИВИДУАЛЬНЫЕ ТРЕНИРОВКИ',
    imgUrl: img2,
  },
  {
    title: 'СБОРЫ',
    imgUrl: img3,
  },
  {
    title: 'СОРЕВНОВАНИЯ',
    imgUrl: img4,
  },
]
</script>

<template>
  <section class="derictions section-padding">
    <div class="container">
      <div class="directions__inner">
        <my-heading>Наши НАПРАВЛЕНИЯ</my-heading>
        <my-gallery :type="3" :cards="diercions" class="directions__gallery" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.directions__gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 1rem;
}
</style>
