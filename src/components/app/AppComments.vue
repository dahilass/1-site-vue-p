<script setup lang="ts">
import IconQuotes from '@/shared/ui/icons/IconQuotes.vue'
import IconStar from '@/shared/ui/icons/IconStar.vue'

import { commentSplideOptions } from '@/settings/splideOptions'
const comments = [
  {
    name: 'Наталья 1',
    comment:
      'Хочется выразить огромную благодарность организаторам сборов по боксу на базе комплекса «Искра» в Кучугурах. Сын приехал отдохнувшим, физически заметно окреп и остался очень доволен поездкой. Работа тренерского состава, условия проживания, организация досуга, контроль и программа тренировок -на высшем уровне! Ждем начала плановых тренировок! Огромное спасибо за ваше работу! ',
    mark: '1',
  },
  {
    name: 'Наталья 2',
    comment:
      'Хочется выразить огромную благодарность организаторам сборов по боксу на базе комплекса «Искра» в Кучугурах. Сын приехал отдохнувшим, физически заметно окреп и остался очень доволен поездкой. Работа тренерского состава, условия проживания, организация досуга, контроль и программа тренировок -на высшем уровне! Ждем начала плановых тренировок! Огромное спасибо за ваше работу!',
    mark: '2',
  },
  {
    name: 'Наталья 3',
    comment:
      'Хочется выразить огромную благодарность организаторам сборов по боксу на базе комплекса «Искра» в Кучугурах. Сын приехал отдохнувшим, физически заметно окреп и остался очень доволен поездкой. Работа тренерского состава, условия проживания, организация досуга, контроль и программа тренировок -на высшем уровне! Ждем начала плановых тренировок! Огромное спасибо за ваше работу!',
    mark: '3',
  },
  {
    name: 'Наталья 4',
    comment:
      'Хочется выразить огромную благодарность организаторам сборов по боксу на базе комплекса «Искра» в Кучугурах. Сын приехал отдохнувшим, физически заметно окреп и остался очень доволен поездкой. Работа тренерского состава, условия проживания, организация досуга, контроль и программа тренировок -на высшем уровне! Ждем начала плановых тренировок! Огромное спасибо за ваше работу!',
    mark: '4',
  },
  {
    name: 'Наталья 5',
    comment:
      'Хочется выразить огромную благодарность организаторам сборов по боксу на базе комплекса «Искра» в Кучугурах. Сын приехал отдохнувшим, физически заметно окреп и остался очень доволен поездкой. Работа тренерского состава, условия проживания, организация досуга, контроль и программа тренировок -на высшем уровне! Ждем начала плановых тренировок! Огромное спасибо за ваше работу!',
    mark: '5',
  },
]

defineOptions({
  title: 'отзывы',
})
</script>

<template>
  <section class="comments section-padding">
    <div class="container">
      <div class="comments__inner">
        <my-heading :title="$options.title" link="comments" />
        <my-splide class="comments__splide" :options="commentSplideOptions">
          <splide-slide class="comments__card" v-for="(comment, i) in comments" :key="i">
            <icon-quotes class="comments__icon" />
            <p class="comments__desc">{{ comment.comment }}</p>
            <div class="comments__mark">
              <icon-star v-for="int of +comment.mark" :key="int" />
            </div>
            <p class="comments__name upper">{{ comment.name }}</p>
          </splide-slide>
        </my-splide>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins' as mixins;

:deep(.splide__slide) {
  // z-index: 1000 !important;
  // overflow: visible !important;
  cursor: grab;
  align-items: center;
  justify-content: center;
}
.comments__splide {
  padding: 1rem 3rem;
  // margin-inline: auto;
}
.comments__card {
  margin-inline: auto;
  max-width: 42rem;
  position: relative;
  margin-inline: auto;
  padding: 1.5rem 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--alt-bg);
  border-radius: 8px;
  @include mixins.card-shadow;

  @media (min-width: 600px) {
    padding: 4.5rem 3rem 2rem;
  }
  @media (min-width: 769px) {
    font-size: 1.25rem;
  }
}
.comments__mark {
  display: flex;
  gap: 0.2rem;
}
.comments__icon {
  top: 10%;
  left: -2%;
  transform: translate(-30%, -50%);
  position: absolute;
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
  @media (min-width: 769px) {
    left: 0;
    top: 25%;
    transform: translate(-50%, -50%);
  }
}
</style>
