<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MyDropdownList from '../ui/MyDropdownList.vue'
import type { NavItem } from '@/types/types'

import { storeToRefs } from 'pinia'
import { useMenuStore } from '@/stores/menuStore'

const menuStore = useMenuStore()
const { openIndex } = storeToRefs(menuStore)

defineProps<{
  data: NavItem & { isActive: boolean }
  index: number
}>()
</script>

<template>
  <li class="nav__item">
    <!-- <router-link class="link nav__link" :to="data.path">
      {{ data.title }}
    </router-link> -->
    <router-link
      v-if="!data.dropdown"
      class="link nav__link"
      :to="data.path"
      @click="menuStore.toggle(null)"
    >
      {{ data.title }}
    </router-link>
    <router-link v-else-if="data.dropdown" class="link nav__link" to="">
      {{ data.title }}
    </router-link>
    <my-dropdown-list
      v-if="data.dropdown && openIndex === index"
      :data="data.dropdown"
    ></my-dropdown-list>
  </li>
</template>

<style lang="scss" scoped>
.nav__link {
  padding: 0.5rem 1rem;
}
.nav__item {
  &--active {
    outline: 1px solid cadetblue;
  }
}
</style>
