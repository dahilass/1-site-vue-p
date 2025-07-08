<script setup lang="ts">
import { abonementSplideOptions } from '../config/splide.config'
import { ref } from 'vue'
import { abonementInfo } from '../dev/data'

import CardTicket from '@entities/ticket/ui/CardTicket.vue'

const refLists = ref(abonementInfo)
const currentListIndex = ref(0)

defineOptions({
  title: 'абонементы',
})
</script>

<template>
  <my-section-layout :title="$options.title" name="abonement" link="abonements">
    <div class="abonement__btn-box btn-box">
      <my-button
        mode="btn"
        type="button"
        @click="currentListIndex = i"
        :class="{ 'btn--active': currentListIndex === i }"
        v-for="(info, i) in refLists"
        :key="i"
        >{{ info.type }}
      </my-button>
    </div>

    <!-- <transition name="fade" mode="out-in"> -->
    <div class="splide-wrapper">
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
          <card-ticket :data="card" />
        </splide-slide>
      </my-splide>
    </div>
    <!-- </transition> -->
    <p class="abonement__info">*Данные предложения действительны только для новых клиентов</p>
  </my-section-layout>
</template>

<style lang="scss" scoped>
.splide-wrapper {
  display: flex;
  align-items: center;
  height: 20rem;
  overflow: hidden;
}
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
</style>
