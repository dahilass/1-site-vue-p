<script setup lang="ts">
defineOptions({
  name: 'my-button',
})
</script>

<template>
  <button class="btn" type="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  min-width: 12rem;
  padding: 16px 20px;
  border: 2px solid var(--red);
  background-color: var(--red);
  transition: var(--transition-base);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700px;
  &:hover,
  &:focus {
    background-color: var(--link-hover);
  }
}
.btn--reversed {
  min-width: 10rem;
  background-color: transparent;
  text-transform: none;
}
</style>
