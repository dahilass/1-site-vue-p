<script setup lang="ts">
import IconGloves from '@/shared/ui/icons/IconGloves.vue'
import IconBooks from '@/shared/ui/icons/IconBooks.vue'
import IconHands from '@/shared/ui/icons/IconHands.vue'
import IconLoupe from '@/shared/ui/icons/IconLoupe.vue'

import type { ImgInfo } from '@/app/types/types'
import type { Component } from 'vue'

import MyGallery from '@/shared/ui/lists/MyGallery.vue'

const arr: (ImgInfo & { name: string; icon: Component })[] = [
  { name: 'КНИГИ и ЛИТЕРАТУРА', imgUrl: '/', id: '2', icon: IconBooks },
  { name: 'ТЕОРИЯ и МЕТОДИКА', imgUrl: '/', id: '1', icon: IconGloves },
  { name: 'ПОИСК СЕКЦИЙ', imgUrl: '/', id: '4', icon: IconLoupe },
  { name: 'ПАРТНЕРЫ КЛУБА', imgUrl: '/', id: '3', icon: IconHands },
]

// const iconsArr = [IconBooks, IconGloves, IconHands, IconLoupe]
// console.log(iconsArr)
</script>

<template>
  <section class="wiki section-padding">
    <div class="container">
      <my-gallery :cardType="5" :cards="arr" class="library__gallery"></my-gallery>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.library__gallery {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}
:deep(.icon) {
  max-width: 6rem;
}
</style>
