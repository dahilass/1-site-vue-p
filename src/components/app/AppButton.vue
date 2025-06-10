<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="btn-box section__padding">
    <my-button>{{ text }}</my-button>
  </div>
</template>

<style lang="scss" scoped>
.btn-box {
  background-color: var(--alt-bg);
  text-align: center;
}
</style>
