<script setup lang="ts">
import { abonementSplideOptions } from '@/settings/splideOptions'
import { ref } from 'vue'

const abonementInfo = [
  {
    type: 'Гостевой',
    data: [
      {
        title: 'групповой',
        desc: 'тренировка в группе до 15 человек',
        additional: null,
        price: '990',
        time: '1 час 30  минут',
        isMarked: false,
      },
      {
        title: 'мини-группа',
        desc: 'тренировка в группе до 6 человек',
        price: '1490',
        time: '1 час 30  минут',
        additional: null,
        isMarked: false,
      },
      {
        title: 'персональный',
        desc: 'индивидуальная тренировка',
        price: '1890',
        time: '1 час 30  минут',
        additional: {
          title: 'групповой',
        },
        isMarked: true,
      },
      {
        title: 'сплит',
        desc: 'тренировка со спаррингом',
        price: '3990',
        time: '1 час 30  минут',
        additional: null,
        isMarked: false,
      },
      {
        title: 'персональный 2x',
        desc: '2 индивидуальные тренировки',
        price: '6000',
        time: '1 час 30  минут',
        additional: {
          title: 'групповой',
        },
        isMarked: false,
      },
    ],
  },
  {
    type: 'Групповой',
    data: [
      {
        title: 'групповой1',
        desc: 'тренировка в группе до 15 человек1',
        additional: null,
        price: '9901',
        time: '1 час 30  минут1',
        isMarked: false,
      },
      {
        title: 'мини-группа1',
        desc: 'тренировка в группе до 6 человек1',
        price: '14901',
        time: '1 час 30  минут1',
        additional: null,
        isMarked: false,
      },
      {
        title: 'персональный11',
        desc: 'индивидуальная тренировка1',
        price: '18901',
        time: '1 час 30  минут1',
        additional: {
          title: 'групповой',
        },
        isMarked: true,
      },
      {
        title: 'сплит1',
        desc: 'тренировка со спаррингом1',
        price: '39901',
        time: '1 час 30  минут1',
        additional: null,
        isMarked: false,
      },
      {
        title: 'персональный 2x11',
        desc: '2 индивидуальные тренировки1',
        price: '60001',
        time: '1 час 30  минут1',
        additional: {
          title: 'групповой',
        },
        isMarked: false,
      },
    ],
  },
  {
    type: 'персональный',
    data: [
      {
        title: 'групповой2',
        desc: 'тренировка в группе до 15 человек2',
        additional: null,
        price: '9902',
        time: '1 час 30  мину2т',
        isMarked: false,
      },
      {
        title: 'мини-группа22',
        desc: 'тренировка в группе до 6 человек2',
        price: '14902',
        time: '1 час 30  минут2',
        additional: null,
        isMarked: false,
      },
      {
        title: 'персональный2',
        desc: 'индивидуальная тренировка2',
        price: '18902',
        time: '1 час 30  мину2т',
        additional: {
          title: 'групповой2',
        },
        isMarked: true,
      },
      {
        title: 'сплит2',
        desc: 'тренировка со спаррингом2',
        price: '39902',
        time: '1 час 30  минут2',
        additional: null,
        isMarked: false,
      },
      {
        title: 'персональный 2x22',
        desc: '2 индивидуальные тренировки2',
        price: '60002',
        time: '1 час 30  минут2',
        additional: {
          title: 'групповой2',
        },
        isMarked: false,
      },
    ],
  },
]

const refLists = ref(abonementInfo)
const currentListIndex = ref(0)

// function cLog(i) {
//   console.log(i)
// }

defineOptions({
  title: 'абонементы',
})
</script>

<template>
  <section class="abonement section-padding">
    <div class="container">
      <div class="abonement__inner">
        <my-heading link="abonements" :title="$options.title" />
        <div class="abonement__btn-box btn-box">
          <my-button
            @click="currentListIndex = i"
            :class="{ 'btn--active': currentListIndex === i }"
            v-for="(info, i) in refLists"
            :key="i"
            >{{ info.type }}
          </my-button>
        </div>

        <!-- <transition name="fade" mode="out-in"> -->
        <my-splide
          class="abonement__splide"
          :options="abonementSplideOptions"
          :key="currentListIndex"
        >
          <splide-slide
            class="card"
            v-for="(card, i) in refLists[currentListIndex].data"
            :key="i"
            :class="card.isMarked ? 'card--marked' : ''"
          >
            <p class="card__title">{{ card.title }}</p>
            <p class="card__desc">{{ card.desc }}</p>
            <div class="card__numbers">
              <p class="card__time">{{ card.time || '1 час 30 минут' }}</p>
              <p class="card__price">{{ card.price }} ₽</p>
            </div>
            <p class="card__add" v-if="card.additional">+ {{ card.additional.title }} в подарок</p>
            <my-button class="card__btn">Купить</my-button>
          </splide-slide>
        </my-splide>
        <!-- </transition> -->
        <p class="abonement__info">*Данные предложения действительны только для новых клиентов</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  max-width: 16rem;
  margin-inline: auto;
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
  &:has(.card__btn:hover) {
    border: 2px solid var(--link-hover);
    &::after {
      background-color: var(--link-hover);
    }
    .card__add {
      background-color: var(--link-hover);
    }
  }
}
.abonement__inner {
  margin-inline: auto;
}
.abonement__splide {
  gap: 1rem;
}
.btn {
  display: inline-flex;
}
.abonement__btn-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
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
.card__numbers {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.card__add {
  bottom: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  padding: 0.25rem;
  background-color: var(--accent-color);
  color: var(--btn-color);
  white-space: nowrap;
}
</style>
