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
  cursor: pointer;
  background-color: #f24738;
  border: 2px solid #f24738;
  transition: var(--transition-base);
  &:hover,
  &:focus {
    background-color: var(--link-hover);
  }
}
.btn--reversed {
  background-color: transparent;
}
</style>
