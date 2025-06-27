<script setup lang="ts">
import type { NavItem } from '@/types/types'

import { useMenuStore } from '@/stores/menuStore'

import MyNavItem from './MyNavItem.vue'
import { reactive } from 'vue'

const menuStore = useMenuStore()

// defineProps<{
//   navItems: NavItem[]
// }>()

const props = defineProps<{ navItems: NavItem[] }>()
const nav = reactive(props.navItems.map((el) => Object.assign(el, { isActive: false })))
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <my-nav-item
        v-for="(item, index) of nav"
        :data="item"
        :key="index"
        :index
        @click.stop="item.dropdown && menuStore.toggle(index)"
      ></my-nav-item>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav__list {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.9rem;
  line-height: 21px;
}
.nav__item {
  position: relative;
  z-index: 200;
}
</style>
