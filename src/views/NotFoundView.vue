<script setup lang="ts">
import gif from '@/assets/media/404.gif'
</script>

<template>
  <main>
    <section class="not-found section-padding" :style="{ backgroundImage: `url(${gif})` }">
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
  </main>
</template>

<style lang="scss" scoped>
.not-found {
  position: relative;
  display: flex;
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 55% 95%;
  background-blend-mode: color;
  background-color: rgba(0, 0, 0, 0.407);
  // .container {
  //   z-index: 1;
  // }
}
.not-found__inner {
  display: inline-block;
  padding: 2rem;
  background-color: #0000005d;
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
// .bg-video {
//   object-fit: cover;
//   top: 0;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
// }
</style>
