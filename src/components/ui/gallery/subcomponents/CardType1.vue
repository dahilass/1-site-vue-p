<script setup lang="ts">
// IMG ONLY
import type { ImgInfo } from '@/types'
defineProps<{
  data: ImgInfo
}>()
</script>

<template>
  <li class="card">
    <img alt="gallery-image" class="img-only" :src="data.imgUrl" />
  </li>
</template>

<style lang="scss" scoped></style>
