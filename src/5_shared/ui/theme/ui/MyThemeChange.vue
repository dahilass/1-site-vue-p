<script setup lang="ts">
import { useThemeStore } from '@/5_shared/stores/themeStore'
import IconColor from '@shared/ui/icons/IconColor.vue'

const theme = useThemeStore()
</script>

<template>
  <button @click="theme.setTheme" type="button" class="header__theme-change theme-change">
    <icon-color></icon-color>
  </button>
</template>

<style lang="scss" scoped></style>
