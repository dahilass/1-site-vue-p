<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'
import { RouterLink } from 'vue-router'

const modal = useModalStore()
const open = (mode: 'comment' | 'training') => {
  modal.openModalMode(mode)
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
  display: inline-flex;
  justify-content: center;
  padding: 0.8rem 1rem;
  border: 2px solid var(--accent-color);
  background-color: var(--accent-color);
  transition: 0.25s linear all;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700px;
  line-height: 1;
  &:hover,
  &:focus {
    border: 2px solid var(--link-hover);
    background-color: var(--link-hover);
  }
  &:not(&--blank) {
    color: var(--btn-color);
  }
}
.btn--blank {
  background-color: transparent;
  text-transform: none;
}
.btn--mwidth {
  min-width: 12rem;
}
</style>
