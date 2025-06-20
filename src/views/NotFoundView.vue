<script setup lang="ts">
import { RouterLink } from 'vue-router'
import gif from '@/assets/media/404.gif'

console.log(gif)
</script>

<template>
  <main>
    <section class="not-found section-padding" :style="{ backgroundImage: `url(${gif})` }">
      <div class="container">
        <div class="not-found__inner">
          <!-- <p class="suptitle">Увы:</p> -->
          <h2>404 - Страница не найдена</h2>
          <p>Такой страницы не существует!</p>
          <router-link to="/">Вернуться на главную</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: color;
  background-color: rgba(0, 0, 0, 0.492);
}
</style>
