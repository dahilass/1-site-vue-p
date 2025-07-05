<script setup lang="ts">
defineProps<{
  data: { title: string; price: string }
}>()
</script>

<template>
  <li class="card">
    <p>Гостевая</p>
    <h3>{{ data.title }}</h3>
    <p>{{ data.price }}</p>
    <my-button>Купить</my-button>
  </li>
</template>

<style lang="scss" scoped>
.card {
  padding: 1rem 2rem;
  max-width: 10rem;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--alt-bg);
}
</style>
