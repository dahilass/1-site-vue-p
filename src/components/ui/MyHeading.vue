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
.section__heading {
  margin-top: 3.5rem;
}
</style>
