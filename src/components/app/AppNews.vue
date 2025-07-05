<script setup lang="ts">
import { RouterLink } from 'vue-router'

import img1 from '@/assets/images/news/1.jpg'
import img2 from '@/assets/images/news/2.jpg'
import img3 from '@/assets/images/news/3.jpg'
const news = [
  {
    title: '6 ФЕВРАЛЯ ПРОЙДЕТ ПЕРВЫЙ ТУРНИР ЛИГИ МОСБОКС 2022',
    brief: 'Лига бокса МОСКБОКС 2022 открывает двери для спортсменов и тренеров',
    desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Великий сих свой вдали, толку ведущими путь дорогу курсивных строчка семь первую алфавит скатился взгляд лучше даже реторический до, использовало себя, она приставка запятых коварных? Повстречался первую моей рот ты парадигматическая переулка которое грустный текста назад! Вопроса назад лучше жаренные свой ведущими реторический жизни его рукописи, семантика курсивных своего моей подзаголовок агентство которой, встретил что меня скатился предупреждал вершину точках продолжил сбить, если имеет единственное. Коварных, журчит грустный? Если моей, но сих мир встретил себя за своих дороге жаренные агентство алфавит образ большой вершину домах его ручеек даль вдали грустный.',
    date: {
      base: '17.01.2022',
      formatIso(): string {
        return this.base.split('.').reverse().join('.')
      },
    },
    imgUrl: img1,
    id: 1,
  },
  {
    title: '5 ДЕКАБРЯ СОСТОИТСЯ ТУРНИР ПАМЯТИ ПУСТОВАЛОВА',
    brief: 'Традиционный турнир памяти Пустовалова проводится в конце осени в Перово',
    desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Великий сих свой вдали, толку ведущими путь дорогу курсивных строчка семь первую алфавит скатился взгляд лучше даже реторический до, использовало себя, она приставка запятых коварных? Повстречался первую моей рот ты парадигматическая переулка которое грустный текста назад! Вопроса назад лучше жаренные свой ведущими реторический жизни его рукописи, семантика курсивных своего моей подзаголовок агентство которой, встретил что меня скатился предупреждал вершину точках продолжил сбить, если имеет единственное. Коварных, журчит грустный? Если моей, но сих мир встретил себя за своих дороге жаренные агентство алфавит образ большой вершину домах его ручеек даль вдали грустный.',
    date: {
      base: '28.11.2021',
      formatIso(): string {
        return this.base.split('.').reverse().join('.')
      },
    },
    imgUrl: img2,
    id: 2,
  },
  {
    title: 'СРОЧНО К ПРОЧТЕНИЮ',
    // brief: 'Клуб бокса Московский бокс информирует всех!',
    desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Великий сих свой вдали, толку ведущими путь дорогу курсивных строчка семь первую алфавит скатился взгляд лучше даже реторический до, использовало себя, она приставка запятых коварных? Повстречался первую моей рот ты парадигматическая переулка которое грустный текста назад! Вопроса назад лучше жаренные свой ведущими реторический жизни его рукописи, семантика курсивных своего моей подзаголовок агентство которой, встретил что меня скатился предупреждал вершину точках продолжил сбить, если имеет единственное. Коварных, журчит грустный? Если моей, но сих мир встретил себя за своих дороге жаренные агентство алфавит образ большой вершину домах его ручеек даль вдали грустный.',
    date: {
      base: '21.06.2021',
      formatIso(): string {
        return this.base.split('.').reverse().join('.')
      },
    },
    imgUrl: img3,
    id: 3,
  },
]

defineOptions({
  title: "новости клуба"
})
</script>

<template>
  <section class="news section-padding">
    <div class="container">
      <div class="news__inner">
        <my-heading :title="$options.title" link="news" />
        <ul class="news__list">
          <li v-for="article in news" :key="article.id">
            <article class="news__card">
              <time :datetime="article.date.formatIso()" class="news__date">{{
                article.date.base
              }}</time>
              <img class="news__img" :src="article.imgUrl" alt="news-img" loading="lazy" />
              <div class="news__info">
                <h3 class="news__title marked upper">{{ article.title }}</h3>
                <p class="news__desc line-clamp-2">
                  {{ article.brief || article.desc }}
                </p>
              </div>
              <router-link class="news__link marked link" :to="'/'">Читать далее</router-link>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins' as mixins;

.news__list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
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
