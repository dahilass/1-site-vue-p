<script setup lang="ts">
import galleryImage1 from '@/assets/images/about/1.jpg'
import galleryImage2 from '@/assets/images/about/2.jpg'
import galleryImage3 from '@/assets/images/about/3.jpg'

import type { Img } from '@/types/types'

const splideOptions = {
  type: 'loop',
  perMove: 1,
  // perPage: 3,
  fixedWidth: '32%',
  gap: '1.4%',
  lazyLoad: 'nearby',
  pagination: true,
  keyboard: 'global',
}
const imgArray: Img[] = [
  { imgUrl: galleryImage1 },
  { imgUrl: galleryImage2 },
  { imgUrl: galleryImage3 },
  { imgUrl: galleryImage1 },
  { imgUrl: galleryImage2 },
  { imgUrl: galleryImage3 },
  { imgUrl: galleryImage1 },
  { imgUrl: galleryImage2 },
  { imgUrl: galleryImage3 },
  { imgUrl: galleryImage3 },
]
</script>

<template>
  <section class="about section-padding">
    <div class="container">
      <div class="about__inner">
        <my-heading class="about__heading">о нас</my-heading>
        <div class="about__content">
          <p>
            <span class="marked upper">Клуб Moscowboxing</span> — ваша школа бокса в Москве с
            2009 года. Мы официально аккредитованы Федерацией бокса Москвы, а наши воспитанники
            регулярно попадают в сборные команды.
          </p>
          <p>
            Сеть залов по всей Москве (Бутово, Марьино, Новопеределкино, Коломенская, Ленинский
            проспект, Каховская, Митино) — каждый из них оснащён профессиональным инвентарём: ринги,
            маты, зеркала, отягощения — чтобы тренировки были не только интенсивными, но и
            комфортными.
          </p>
          <p>
            Команда тренеров — мастера спорта, КМС, победители российских и международных турниров,
            обладающие многолетним опытом. Они проводят и групповые, и индивидуальные занятия,
            адаптированные под новичков, женщин, детей и профессионалов.
          </p>
          <my-splide :options="splideOptions">
            <splide-slide class="card" v-for="(card, i) in imgArray" :key="i">
              <img class="about__img" :src="card.imgUrl" alt="gallery-img" loading="lazy" />
            </splide-slide>
          </my-splide>
          <p>Наша миссия — формирование сильного характера и здорового поколения.</p>
          <p>Наш девиз — «Терпение. Труд. Победа.»</p>
          <p>
            Мы помогаем преодолевать внутренние ограничения — от лени до профессиональных вызовов.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  cursor: grab;
}
.about__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.about__gallery {
  display: flex;
  justify-content: center;
  gap: 2.25rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}
</style>
