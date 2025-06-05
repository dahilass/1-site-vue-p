<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li>
        <router-link class="link" to="/">
          О НАС
          <svg class="icon icon-gloves">
            <use xlink:href="#icon-gloves" />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/">ЦЕНЫ</router-link>
      </li>
      <li>
        <router-link class="link" to="/">ТРЕНЕРЫ</router-link>
      </li>
      <li>
        <router-link class="link" to="/">
          РАСПИСАНИЕ
          <svg class="icon icon-gloves">
            <use xlink:href="#icon-gloves" />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/">
          АРЕНДА
          <svg class="icon icon-gloves">
            <use xlink:href="#icon-gloves" />
          </svg>
        </router-link>
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
.icon-gloves {
  width: 1.25rem;
  height: 0.6rem;
}
a {
  display: flex;
  gap: 0.25rem;
}

svg {
  display: block;
  align-self: center;
}
</style>
