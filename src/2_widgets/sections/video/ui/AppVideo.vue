<script setup lang="ts">
import MyVideo from '@/5_shared/ui/MyVideo.vue'
const src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=0iBIanGxunrO23I3'
defineOptions({})
</script>

<template>
  <my-section-layout name="video">
    <my-video :src="src" />
  </my-section-layout>
  <!-- allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" -->
</template>

<style lang="scss" scoped>
:deep(.video__inner) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
