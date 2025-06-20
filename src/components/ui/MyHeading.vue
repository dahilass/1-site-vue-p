<script setup lang="ts">
import IconDecor from '../icons/IconDecor.vue'
defineOptions({
  name: 'my-heading',
})
</script>

<template>
  <div class="section__heading">
    <icon-decor />
    <h2 class="section__title">
      <slot></slot>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.section__title {
  white-space: wrap;
}
.icon {
  @media (max-width: 550px) {
    display: none;
  }
}
</style>
