<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconDecor from '../icons/IconDecor.vue'
defineOptions({
  name: 'my-heading',
})
defineProps<{
  link?: string
}>()
</script>

<template>
  <div class="section__heading">
    <div class="section__heading-block">
      <icon-decor />
      <h2 class="section__title">
        <slot></slot>
      </h2>
    </div>
    <router-link class="section__link" v-if="link" :to="link"
      >Все <span class="lower"><slot /></span
    ></router-link>
  </div>
</template>

<style lang="scss" scoped>
.section__heading {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.section__heading-block {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.section__title {
  white-space: wrap;
}
.section__link {
  text-transform: capitalize;
  text-decoration: dashed underline;
}
.icon {
  @media (max-width: 550px) {
    display: none;
  }
}
</style>
