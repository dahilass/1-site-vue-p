<script setup lang="ts">
// import { gymInfoArray } from '@/data'
// import MyGallery from './MyGallery.vue'

import MyGallery from '@/shared/ui/lists/MyGallery.vue'

import { gymInfoArray } from '@/data'

import { inject } from 'vue'

const placeholder = inject<string>('placeholder')
if (!placeholder) {
  throw new Error("placeholder image doesn\'t exist")
}
</script>
<template>
  <section class="gyms section-padding">
    <div class="container">
      <div class="gyms__inner">
        <my-heading>Залы</my-heading>
        <my-gallery :cardType="4" :cards="gymInfoArray" class="gyms__gallery"></my-gallery>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gyms__gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  // justify-items: center;
}
</style>
