<script setup lang="ts">
const guest = [
  {
    title: 'групповой',
    desc: 'тренировка в группе до 15 человек',
    additional: null,
    price: '990',
    isMarked: false,
  },
  {
    title: 'мини-группа',
    desc: 'тренировка в группе до 6 человек',
    price: '1490',
    additional: null,
    isMarked: false,
  },
  {
    title: 'персональный',
    desc: 'индивидуальная тренировка',
    price: '1890',
    additional: {
      title: 'групповой',
    },
    isMarked: true,
  },
  {
    title: 'сплит',
    desc: 'тренировка со спаррингом',
    price: '3990',
    additional: null,
    isMarked: false,
  },
  {
    title: 'персональный 2x',
    desc: '2 индивидуальные тренировки',
    price: '6000',
    additional: {
      title: 'групповой',
    },
    isMarked: false,
  },
]

const splideOptions = {
  fixedWidth: '11rem',
  padding: '2rem',
  // autoWidth: false,
  type: 'slide',
  gap: '1.5rem',
  perPage: 5,
  perMove: 1,
  pagination: false,
  arrows: false,
  drag: false,
  breakpoints: {
    1200: {
      start: 1,
      drag: 'free',
      arrows: true,
      perPage: 3,
    },
    769: {
      perPage: 2,
    },
    577: {
      perPage: 1,
    },
  },
}
</script>

<template>
  <section class="guest section-padding">
    <div class="container">
      <div class="guest__inner">
        <my-heading>Гостевые абонементы</my-heading>
        <p>Не уверены, подойдёт ли бокс? Приходите на пробную тренировку!</p>

        <my-splide class="guest__gallery" :options="splideOptions">
          <splide-slide
            class="card"
            v-for="(card, i) in guest"
            :key="i"
            :class="card.isMarked ? 'card--marked' : ''"
          >
            <p class="card__title">{{ card.title }}</p>
            <p class="card__desc">{{ card.desc }}</p>
            <p class="card__price">{{ card.price }} ₽</p>
            <p class="card__add" v-if="card.additional">+ {{ card.additional.title }} в подарок</p>
            <my-button>Купить</my-button>
          </splide-slide>
        </my-splide>

        <p class="guest__info">*Данные предложения действительны только для новых клиентов</p>
        <!-- <my-gallery class="guest__gallery" :type="6" :cards="guest" /> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  position: relative;
  border: 2px solid var(--accent-color);
  background-color: var(--alt-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-block: 2rem;
  gap: 2rem;
  transition: all 0.3s linear;
  &--marked {
    &::after {
      top: 0.75rem;
      right: -1.5rem;
      font-size: 0.6rem;
      position: absolute;
      content: 'Выгодно';
      background-color: var(--accent-color);
      padding: 0.25rem 1.5rem;
      rotate: 45deg;
      color: var(--btn-color);
    }
  }
}
.guest__inner {
  margin-inline: auto;
}
.guest__gallery {
  margin-block: 2rem;
}
.guest__info {
  margin-top: 1rem;
}
.btn {
  display: inline-flex;
}
.card__title {
  text-transform: uppercase;
}
.card__desc {
  text-transform: lowercase;
  text-wrap: balance;
  max-width: 10rem;
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
}
.card__add {
  bottom: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  padding: 0.25rem;
  background-color: var(--accent-color);
  color: var(--btn-color);
}
</style>
