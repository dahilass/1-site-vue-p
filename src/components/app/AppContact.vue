<script setup lang="ts">
import { shallowRef } from 'vue'

import type { YMap } from '@yandex/ymaps3-types'
import { gymInfoArray } from '@/data'

import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
} from 'vue-yandex-maps'

const map = shallowRef<null | YMap>(null)
</script>

<template>
  <section class="contact section-padding">
    <yandex-map
      v-model="map"
      :settings="{
        location: {
          center: [37.617644, 55.755819],
          zoom: 9.45,
        },
        theme: 'dark',
      }"
      width="100%"
      height="500px"
    >
      <yandex-map-default-scheme-layer />
      <yandex-map-default-features-layer />
      <yandex-map-default-marker
        v-for="item of gymInfoArray"
        :key="item.id"
        :settings="{ coordinates: item.coordinates }"
      />
    </yandex-map>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding-block: 0;
  filter: grayscale(15%);
}
</style>
