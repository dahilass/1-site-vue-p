<script setup lang="ts">
import gif from '@shared/assets/gif/404/404.gif'
defineOptions({
  title: '404 - Страница не найдена',
})
</script>

<template>
  <my-section-layout
    name="not-found"
    class="section-padding--double"
    :style="{ backgroundImage: `url(${gif})` }"
    :title="$options.title"
    noDecor
    noMargin
  >
    <p class="not-found__subtitle">Такой страницы не существует!</p>
    <my-button mode="link" class="not-found__link" :to="'/'">Вернуться на главную</my-button>
  </my-section-layout>
</template>

<style lang="scss" scoped>
:deep(.container) {
  display: flex;
}
:deep(.not-found__inner) {
  margin-block: auto;
  display: inline-block;
  padding: 2rem;
  background-color: var(--overlay-text);
  border-radius: 4px;
}
.not-found {
  position: relative;
  display: flex;
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 55% 95%;
  background-blend-mode: hue;
  background-color: var(--overlay-image);
  // .container {
  //   z-index: 1;
  // }
}
.not-found__title {
  white-space: wrap;
  // margin-bottom: 1rem;
}
.not-found__link {
  display: inline-block;
}
</style>
