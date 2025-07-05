<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconDecor from '@/shared/ui/icons/IconDecor.vue'
defineOptions({
  name: 'my-heading',
})
defineProps<{
  link?: string
  route?: string
  title: string
}>()
</script>

<template>
  <div class="section__heading">
    <p v-if="route" class="section__route">{{ route }}</p>
    <div class="section__heading-block">
      <div class="section__title-block">
        <icon-decor />
        <h2 class="section__title">
          {{ title }}
        </h2>
      </div>
      <router-link class="section__link link" v-if="link" :to="link"
        ><span>Все</span> <span class="lower">{{ title }}</span></router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section__heading {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.section__heading-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.section__title-block {
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
  text-underline-offset: 3px;
}
.section__route {
  margin-top: 1rem;
}

.icon {
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
}
</style>
