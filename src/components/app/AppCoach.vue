<script setup lang="ts">
// import MyGallery from '../ui/lists/MyGallery.vue'
// import IconDecor from '../icons/IconDecor.vue'

import { coachInfoArray } from '@/data'

import { useItemStore } from '@/stores/items'
import { onMounted } from 'vue'

import { coachSplideOptions } from '@/settings/splideOptions'

import MySocial from '@/shared/ui/MySocial.vue'
// import MyCard from '../ui/lists/MyCard.vue'

const store = useItemStore()

onMounted(() => {
  window.addEventListener('resize', store.updateWidth)
})

defineOptions({
  title: 'Наши тренеры',
})
</script>

<template>
  <section class="coach section-padding">
    <div class="container">
      <div class="coach__inner">
        <my-heading :title="$options.title" link="coaches" class="coach__heading" />
        <my-splide :options="coachSplideOptions">
          <splide-slide v-for="(coach, i) in coachInfoArray.data" :key="i">
            <article class="coach__card">
              <img class="coach__img" :src="coach.imgUrl" alt="coach-img" />
              <p class="coach__title">{{ coach.name }}</p>
              <!-- <p v-for="desc in coach.desc" class="coach__desc line-clamp-4">{{ desc }}</p> -->
              <p class="coach__desc line-clamp-4">{{ coach.desc[0] }}</p>
              <div class="coach__actions">
                <my-social
                  class="coach__socials"
                  :mode="'personal'"
                  :person-socials="coach.socials"
                />
                <my-button class="coach__btn btn--blank" :to="`${coachInfoArray.type}/${coach.id}`"
                  >Подробнее</my-button
                >
              </div>
            </article>
          </splide-slide>
        </my-splide>
        <!-- <my-gallery :images="coachInfoArray" class="coach__gallery gallery--decorated" /> -->
        <!-- <my-gallery
          :cardType="2"
          :cards="store.windowWidth >= 1000 ? coachInfoArray : coachInfoArray.slice(0, 3)"
          class="coach__gallery"
        >
          <template #default>
            <icon-decor class="coach__icon"></icon-decor>
          </template>
        </my-gallery> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins' as mixins;
:deep(.link) {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.coach__img {
  border-radius: 16px 4px;
  max-width: 12rem;
  aspect-ratio: 1/1;
}
.coach__card {
  margin-inline: auto;
  padding: 1.5rem;
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  @include mixins.card-shadow;
  border-radius: 8px 2px;
  background-color: var(--alt-bg);
}
.coach__actions {
  margin-top: auto;
}
.coach__btn {
  align-self: start;
  margin-top: 0.5rem;
}
// .coach__gallery {
//   max-width: 60rem;
//   margin-inline: auto;
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   gap: 1.5rem;
//   @media (min-width: 1000px) {
//     gap: 4rem 2rem;
//     flex-direction: row;
//   }
// }
// .coach__icon {
//   z-index: 100;
//   position: absolute;
//   border-inline: 2px solid var(--accent-color);
//   top: 50%;
//   display: none;
//   @media (min-width: 400px) {
//     display: block;
//   }
// }
// :deep(.card) {
//   align-items: center;
//   &:nth-child(even) {
//     margin-right: 0;
//     @media (min-width: 600px) {
//       margin-right: -9rem;
//     }
//     @media (min-width: 1000px) {
//       margin-right: 0;
//     }
//     .coach__icon {
//       right: 0;
//       transform: translate(49.5%, -50%) rotate(90deg);
//     }
//   }
//   &:nth-child(odd) {
//     margin-left: 0;
//     @media (min-width: 600px) {
//       margin-left: -9rem;
//     }
//     @media (min-width: 1000px) {
//       margin-left: 0;
//     }
//     .coach__icon {
//       left: 0;
//       transform: translate(-49.5%, -50%) rotate(90deg);
//     }
//   }
// }
</style>
