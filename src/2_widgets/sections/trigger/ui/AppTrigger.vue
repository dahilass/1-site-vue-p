<script setup lang="ts">
import img from '../assets/obuchenie-boksu.jpg'
defineOptions({
  title: 'Обучение боксу в Москве — от нуля до КМС',
})
</script>

<template>
  <my-section-layout name="trigger" :title="$options.title" noDecor>
    <p class="subtitle">
      Тренировки для всех уровней в 7 залах Москвы. Запишитесь на пробное занятие!
    </p>
    <my-button mode="modal" modalMode="training" class="trigger__btn"
      >Записаться на пробную тренировку
    </my-button>
    <img class="trigger__img" :src="img" alt="тренировка" />
  </my-section-layout>
</template>

<style lang="scss" scoped>
.trigger__img {
  max-width: 20rem;
  aspect-ratio: 4/3;
}
</style>
