<script setup lang="ts">
import { coachInfoArray } from '@/2_widgets/sections/coach/dev/data'
defineOptions({
  name: 'PageCoaches',
})
</script>

<template>
  <main>
    <div>{{ coachInfoArray }}</div>
  </main>
</template>

<style lang="scss" scoped></style>
