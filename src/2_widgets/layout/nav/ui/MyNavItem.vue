<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MyDropdownList from '@/5_shared/ui/MyDropdownList.vue'
import type { NavItem } from '@/0_app/types/types'

import { storeToRefs } from 'pinia'
import { useDropdownMenuStore } from '@/5_shared/stores/dropdownMenuStore'
import { useModalStore } from '@/5_shared/stores/modalStore'

const menuStore = useDropdownMenuStore()
const { openIndex } = storeToRefs(menuStore)

const mobileHeader = useModalStore()

defineProps<{
  // data: NavItem & { isActive: boolean }
  data: NavItem
  index: number
}>()
</script>

<template>
  <li class="nav__item">
    <router-link
      v-if="!data.dropdown"
      class="link nav__link"
      :to="data.path"
      @click="(menuStore.toggle(null), mobileHeader.closeNav())"
    >
      {{ data.title }}
    </router-link>
    <a v-else-if="data.dropdown" class="link nav__link">
      {{ data.title }}
    </a>
    <my-dropdown-list v-if="data.dropdown && openIndex === index" :data="data.dropdown" />
  </li>
</template>

<style lang="scss" scoped>
.nav__link {
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
}
.nav__item {
  &--active {
    outline: 1px solid cadetblue;
  }
}
</style>
