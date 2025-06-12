<script setup lang="ts">
import logo from '@/assets/images/header-logo.png'
</script>

<template>
  <div class="logo-box">
    <img class="logo" :src="logo" alt="logo" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  max-width: 80px;
  max-height: 80px;
  min-width: 40px;
  min-height: 40px;
}
</style>
