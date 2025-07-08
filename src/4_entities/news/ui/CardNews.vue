<script setup lang="ts">
import type { CardNews } from '@app/types/types'

defineProps<{
  data: CardNews
}>()
</script>

<template>
  <article class="news__card">
    <time :datetime="data.date.formatIso()" class="news__date">{{ data.date.base }}</time>
    <img class="news__img" :src="data.imgUrl" alt="news-img" loading="lazy" />
    <div class="news__info">
      <h3 class="news__title marked upper">{{ data.title }}</h3>
      <p class="news__desc line-clamp-2">
        {{ data.brief || data.desc }}
      </p>
    </div>
    <router-link class="news__link marked link" :to="'/'">Читать далее</router-link>
  </article>
</template>

<style lang="scss" scoped>
@use '@shared/assets/styles/mixins' as mixins;
.news__card {
  height: 100%;
  padding: 1rem;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-radius: 8px;
  @include mixins.card-shadow;
}
.news__info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  height: 100%;
}
.news__img {
  aspect-ratio: 5/3;
  object-fit: cover;
  object-position: 50%;
  max-width: 20rem;
}
.news__link {
  padding: 1rem;
  align-self: end;
}
.news__card:has(.news__link:hover) {
  @include mixins.card-shadow-hover;
  .news__title {
    color: var(--link-hover);
  }
}
</style>
