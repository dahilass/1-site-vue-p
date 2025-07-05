<script setup lang="ts">
import gif from '@/assets/media/404.gif'
</script>

<template>
  <section
    class="not-found section-padding section-padding--double"
    :style="{ backgroundImage: `url(${gif})` }"
  >
    <!-- <section class="not-found section-padding"> -->
    <!-- <video class="bg-video" src="../assets/media/404.mp4" autoplay muted loop></video> -->
    <div class="container">
      <div class="not-found__inner">
        <!-- <p class="suptitle">Увы:</p> -->
        <div class="section__heading not-found__heading">
          <h2 class="not-found__title section__title">404 - Страница не найдена</h2>
          <p>Такой страницы не существует!</p>
        </div>
        <my-button class="not-found__link" :to="'/'">Вернуться на главную</my-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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

  .container {
    display: flex;
  }
}
.not-found__inner {
  margin-block: auto;
  display: inline-block;
  padding: 2rem;
  background-color: var(--overlay-text);
  border-radius: 4px;
}
.not-found__heading {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.not-found__title {
  white-space: wrap;
  // margin-bottom: 1rem;
}
.not-found__link {
  display: inline-block;
}
</style>
