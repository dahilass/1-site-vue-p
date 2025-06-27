<script setup lang="ts">
// IMG ONLY
import type { Img } from '@/types/types'
defineProps<{
  data: Img
}>()
</script>

<template>
  <li class="card">
    <img alt="gallery-image" class="img-only" :src="data.imgUrl" />
  </li>
</template>

<style lang="scss" scoped></style>
