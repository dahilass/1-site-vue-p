<script setup lang="ts">
type imageInfo = {
  id: string
  path: string
  description?: string
  link?: string
}
defineProps<{
  images: imageInfo[]
}>()
</script>

<template>
  <ul class="gallery">
    <li v-for="item in images" :key="item.id">
      <img :src="item.path" alt="gallery-image" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
li {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #10101073;
  }
}
</style>
