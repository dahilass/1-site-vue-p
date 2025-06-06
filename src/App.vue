<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router'
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<style scoped></style>
