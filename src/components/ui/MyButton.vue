<script setup lang="ts">
defineOptions({
  name: 'my-button',
})
</script>

<template>
  <button type="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 16px 20px;
  background-color: var(--red);
  border: 2px solid var(--red);
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--transition-base);
  &:hover,
  &:focus {
    background-color: var(--link-hover);
  }
}
.btn--reversed {
  background-color: transparent;
  text-transform: none;
}
</style>
