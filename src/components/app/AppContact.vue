<script setup lang="ts">
import { ref, shallowRef, computed } from 'vue'

import type { LngLat, YMap, YMapLocationRequest } from '@yandex/ymaps3-types'
import { gymInfoArray } from '@/data'

import MyCard from '../ui/gallery/MyCard.vue'

import type { GymInfo } from '@/types/types'
import type { VectorCustomization } from '@yandex/ymaps3-types'

import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapMarker,
  YandexMapHint,
  YandexMapZoomControl,
  YandexMapControls,
  YandexMapGeolocationControl,
} from 'vue-yandex-maps'

import { useThemeStore } from '@/stores/themeStore'
const theme = useThemeStore()

const map = shallowRef<null | YMap>(null)

const LOCATION = {
  center: [37.645644, 55.711234],
  zoom: 10,
}
const currentLocation = ref<YMapLocationRequest>(LOCATION)
const currentGym = ref<GymInfo>({} as GymInfo)

// Проверка для скрытия карточки
const isCardCollapsed = ref(true)

const darkThemeCustomization: VectorCustomization = [
  {
    tags: {
      any: ['water'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    tags: {
      any: ['landscape', 'admin', 'land', 'transit'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    tags: {
      any: ['road'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#4E4E4E',
      },
    ],
  },
  {
    tags: {
      any: ['building'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#757474',
      },
    ],
  },
]

const lightThemeCustomization: VectorCustomization = [
  {
    tags: {
      any: ['water'],
    },
    elements: 'geometry',
    stylers: [{ color: '#ffffff' }],
  },
  {
    tags: {
      any: ['landscape', 'admin', 'land', 'transit'],
    },
    elements: 'geometry',
    stylers: [{ color: '#f0f0f0' }],
  },
  {
    tags: {
      any: ['road'],
    },
    elements: 'geometry',
    stylers: [{ color: '#cccccc' }],
  },
  {
    tags: {
      any: ['building'],
    },
    elements: 'geometry',
    stylers: [{ color: '#999999' }],
  },
]
// Кастомная тема карты
const customization = computed(() =>
  theme.theme === 'light' ? lightThemeCustomization : darkThemeCustomization,
)
</script>

<template>
  <section class="contact section-padding">
    <yandex-map
      v-model="map"
      :settings="
        theme.theme === 'light'
          ? {
              location: { ...currentLocation, duration: 1000 },
              theme: 'light',
            }
          : {
              location: { ...currentLocation, duration: 1000 },
              theme: 'dark',
            }
      "
      width="100%"
      height="500px"
    >
      <yandex-map-default-scheme-layer :settings="{ customization }" />
      <yandex-map-default-features-layer />
      <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control />
      </yandex-map-controls>
      <yandex-map-controls :settings="{ position: 'left' }">
        <yandex-map-geolocation-control />
      </yandex-map-controls>
      <yandex-map-marker
        @click="
          ((currentGym = marker),
          (currentLocation = { center: marker.coordinates as LngLat, zoom: 15 }),
          (isCardCollapsed = false))
        "
        v-for="(marker, index) of gymInfoArray"
        :key="index"
        position="top-center left-center"
        :settings="{
          coordinates: marker.coordinates as LngLat,
          properties: {
            hint: marker.address,
          },
        }"
      >
        <img class="pin" :src="marker.imgUrl" alt="" />
        <p class="marker-window">{{ marker.name }}</p>
        <template v-html="marker.address"></template>
      </yandex-map-marker>
      <yandex-map-hint hint-property="hint">
        <template #default="{ content }">
          <div class="hint-window" v-html="content" />
        </template>
      </yandex-map-hint>
    </yandex-map>
    <my-card
      :class="isCardCollapsed ? 'collapsed' : ''"
      class="contact__card"
      :type="4"
      v-if="Object.keys(currentGym).length"
      :data="currentGym"
    >
      <div class="contact__controls">
        <button @click="isCardCollapsed = !isCardCollapsed" class="collapse-btn controls-btn link">
          _
        </button>
        <button
          @click="
            ((currentLocation = LOCATION), (currentGym = {} as GymInfo), (isCardCollapsed = true))
          "
          class="close-btn controls-btn link"
        >
          X
        </button>
      </div>
    </my-card>
  </section>
</template>

<style lang="scss" scoped>
:deep(.card__img) {
  max-width: 10rem;
}
:deep(.card__title) {
  align-self: start;
  white-space: wrap;
  max-width: 15rem;
}
.contact {
  position: relative;
  padding-block: 0;
  filter: grayscale(15%);
}
.contact__card {
  padding-block: 12px;
  width: unset;
  position: absolute;
  left: 0;
  bottom: 0;
  gap: 1rem;
  z-index: 50;
  // box-shadow: 3px 3px 6px var(--accent-color);
  transition: all 0.3s linear;
  background-color: var(--main-bg);
  border: 1px solid var(--main-color);
}
.contact__controls {
  top: 15px;
  right: 15px;
  position: absolute;
  display: flex;
  gap: 1rem;
  .controls-btn {
    font-size: 0.6rem;
    padding: 2px 8px;
    border: 1px solid var(--main-color);
    border-radius: 4px;
  }
}
.pin {
  cursor: pointer;
  max-width: unset;
  width: 40px;
  height: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  box-shadow: 0 0 4px var(--accent-color);
  object-fit: cover;
  filter: sepia(0.5);
}
.marker-window {
  text-transform: uppercase;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 75%;
  padding: 6px 4px 6px 14px;
  font-size: 0.6rem;
  background-color: var(--main-color);
  color: var(--alt-bg);
  box-shadow: 3px 0px var(--accent-color);
  height: 35px;
  display: flex;
  align-items: center;
  z-index: -1;
  border-radius: 4px;
  cursor: pointer;
  // opacity: 0.7;
  // white-space: nowrap;
}
.hint-window {
  position: absolute;
  transform: translate(7px, -100%);
  padding: 4px;
  background-color: var(--main-color);
  border: 1px solid var(--alt-bg);
  opacity: 0.9;
  white-space: nowrap;
}
.collapsed {
  bottom: -37%;
  left: 0;
  box-shadow: unset;
}
</style>
