<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'
import { RouterLink } from 'vue-router'

const modal = useModalStore()
const open = (mode: 'comment' | 'training') => {
  modal.openModal(mode)
}

defineOptions({
  name: 'my-button',
})

defineProps<{
  mode?: 'comment' | 'training'
}>()
</script>

<template>
  <button v-if="mode" class="btn" type="button" @click.prevent="open(mode)">
    <slot />
  </button>
  <router-link v-else class="btn" to="">
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
.btn {
  min-width: 12rem;
  padding: 16px 20px;
  border: 2px solid var(--accent-color);
  background-color: var(--accent-color);
  transition: var(--transition-base);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700px;
  line-height: 1;
  &:hover,
  &:focus {
    background-color: var(--link-hover);
  }
}
.btn--reversed {
  min-width: 10rem;
  background-color: transparent;
  text-transform: none;
}
</style>
