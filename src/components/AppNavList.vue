<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconGloves from './icons/IconGloves.vue'
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li>
        <router-link class="link" to="/"> О НАС <icon-gloves /></router-link>
      </li>
      <li>
        <router-link class="link" to="/">ЦЕНЫ</router-link>
      </li>
      <li>
        <router-link class="link" to="/">ТРЕНЕРЫ</router-link>
      </li>
      <li>
        <router-link class="link" to="/"> РАСПИСАНИЕ <icon-gloves /></router-link>
      </li>
      <li>
        <router-link class="link" to="/"> АРЕНДА <icon-gloves /></router-link>
      </li>
      <li>
        <router-link class="link" to="/">КОНТАКТЫ</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
}
a {
  display: flex;
  gap: 0.25rem;
}
</style>
