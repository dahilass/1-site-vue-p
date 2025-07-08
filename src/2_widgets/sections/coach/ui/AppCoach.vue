<script setup lang="ts">
// import MyGallery from '../ui/lists/MyGallery.vue'
// import IconDecor from '../icons/IconDecor.vue'

import { coachInfoArray } from '../dev/data'

import { coachSplideOptions } from '../config/splide.config'
import CardPerson from '@/4_entities/person/ui/CardPerson.vue'

// import MyCard from '../ui/lists/MyCard.vue'

defineOptions({
  title: 'Наши тренеры',
})
</script>

<template>
  <my-section-layout :title="$options.title" name="coach" link="coaches">
    <my-splide :options="coachSplideOptions">
      <splide-slide v-for="(coach, i) in coachInfoArray.data" :key="i">
        <card-person :data="coach" type="coaches" />
      </splide-slide>
    </my-splide>
  </my-section-layout>
</template>

<style lang="scss" scoped></style>
