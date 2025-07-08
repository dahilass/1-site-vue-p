<script setup lang="ts">
// IMG ONLY
import type { Img } from '@app/types/types'
defineProps<{
  data: Img
}>()
</script>

<template>
  <img alt="gallery-image" class="img-only" :src="data.imgUrl" loading="lazy" />
</template>

<style lang="scss" scoped></style>
