<script setup lang="ts">
import MyGallery from '@/shared/ui/lists/MyGallery.vue'
import { subjectsInfo } from '@/data'

import IconDecor from '@/shared/ui/icons/IconDecor.vue'
</script>

<template>
  <section class="subject section-padding">
    <div class="container">
      <div class="subject__inner">
        <my-heading>Дисциплины</my-heading>
        <my-gallery :cardType="3" :cards="subjectsInfo" class="subject__gallery">
          <template #default>
            <icon-decor class="subject__icon icon__decor--left"></icon-decor>
          </template>
        </my-gallery>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.subject__gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem;
}
</style>
