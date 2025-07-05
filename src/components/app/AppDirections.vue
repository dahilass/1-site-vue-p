<script setup lang="ts">
import img1 from '@/assets/images/directions/1.jpg'
import img2 from '@/assets/images/directions/2.jpg'
import img3 from '@/assets/images/directions/3.jpg'
import img4 from '@/assets/images/directions/4.jpg'

import MyGallery from '@/shared/ui/lists/MyGallery.vue'

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

defineOptions({
  title: 'Наши направления',
})
</script>

<template>
  <section class="derictions section-padding">
    <div class="container">
      <div class="directions__inner">
        <my-heading :title="$options.title" />
        <my-gallery :cardType="3" :cards="diercions" class="directions__gallery" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.directions__gallery {
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  text-shadow: 1px 1px var(--alt-bg);
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(11rem, 22rem));
    gap: 1.5rem;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, minmax(11rem, 22rem));
  }
}
</style>
