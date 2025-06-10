<script setup lang="ts">
import galleryImage1 from '@/assets/images/about/1.jpg'
import galleryImage2 from '@/assets/images/about/2.jpg'
import galleryImage3 from '@/assets/images/about/3.jpg'

import MyGallery from './MyGallery.vue'

import type { ImageInfo } from '@/types.ts'

const galleryArray: ImageInfo[] = [
  { id: crypto.randomUUID(), imgUrl: galleryImage1 },
  { id: crypto.randomUUID(), imgUrl: galleryImage2 },
  { id: crypto.randomUUID(), imgUrl: galleryImage3 },
]
</script>

<template>
  <section class="about section-padding">
    <div class="container">
      <div class="about__inner">
        <!-- <div class="section__heading about__heading">
          <icon-decor />
          <h2 class="section__title about__title">о нас</h2>
        </div> -->
        <my-heading class="about__heading">о нас</my-heading>
        <p>
          Наш клуб был открыт 16 марта 2009 года. Мы просто очень хотели и хотим научить боксу тех,
          кто не смог или не успел обучиться этому спорту в детстве. Кроме этого, мы ставим перед
          собой задачу - привлекать к спорту молодежь, отрывать их от пагубного влияния улицы и
          делать из них Чемпионов!
        </p>
        <my-gallery :images="galleryArray" class="about__gallery gallery--overlay" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
p {
  margin: 0 auto;
  max-width: 29rem;
}
.about__gallery {
  display: flex;
  justify-content: center;
  gap: 2.25rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}
</style>
