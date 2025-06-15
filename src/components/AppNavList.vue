<script setup lang="ts">
import { RouterLink } from 'vue-router'
// import IconGloves from './icons/IconGloves.vue'

import type { NavItem } from '@/types'

defineProps<{
  navItems: NavItem[]
}>()
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li v-for="item of navItems" :key="item.path">
        <router-link class="link" :to="item.path">{{ item.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.9rem;
  line-height: 21px;
}
a {
  display: flex;
  gap: 0.25rem;
}
</style>
