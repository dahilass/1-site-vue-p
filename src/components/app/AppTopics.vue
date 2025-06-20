<script setup lang="ts">
import MyGallery from '../ui/gallery/MyGallery.vue'

import img1 from '@/assets/images/subject/1.jpg'
import img2 from '@/assets/images/subject/2.jpg'
import img3 from '@/assets/images/subject/3.jpg'
import img4 from '@/assets/images/subject/4.jpg'
import img5 from '@/assets/images/subject/5.jpg'
import IconDecor from '../icons/IconDecor.vue'

// const imgs: Record<string, string> = import.meta.glob('@/assets/images/subject/*.jpg', {
//   eager: true,
//   import: 'default',
// })

const topics = [
  { name: 'МУАЙ ТАЙ', imgUrl: img1, id: '1' },
  { name: 'КЛАССИЧЕСКИЙ БОКС ', imgUrl: img2, id: '2' },
  { name: 'ТХЭКВОНДО', imgUrl: img3, id: '3' },
  { name: 'ЗВЕЗДЫ БОКСА', imgUrl: img4, id: '4' },
  { name: 'СОТРУДНИЧЕСТВО', imgUrl: img5, id: '5' },
]
</script>

<template>
  <section class="topics section-padding">
    <div class="container">
      <div class="topics__inner">
        <my-heading class="topics__heading">ИНТЕРЕСНОЕ О БОКСЕ</my-heading>
        <my-gallery :type="3" :cards="topics" class="topics__gallery">
          <template #default>
            <icon-decor class="topics__icon icon__decor--left"></icon-decor>
          </template>
        </my-gallery>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.topics__gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  gap: 2rem;
  // justify-self: center;
  :deep(.card__img) {
    display: block;
    aspect-ratio: 3/2;
    object-fit: cover;
  }
  :deep(.card) {
    width: 100%;
  }
}
</style>
