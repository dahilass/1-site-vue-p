<script setup lang="ts">
import { useModalStore } from '@shared/stores/modalStore'
import { RouterLink } from 'vue-router'

const modal = useModalStore()
const open = (mode: 'comment' | 'training') => {
  modal.openModalMode(mode)
}

defineOptions({
  name: 'my-button',
})

defineProps<{
  mode: 'link' | 'btn'
  modalMode?: 'comment' | 'training'
  type?: 'button' | 'submit'
}>()
</script>

<template>
  <button v-if="modalMode" class="btn" type="button" @click.prevent="open(modalMode)">
    <slot />
  </button>

  <button v-else-if="mode === 'btn'" class="btn" :type="type" @click.prevent>
    <slot />
  </button>

  <router-link v-else-if="mode === 'link'" class="btn" to="">
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
.btn {
  align-self: center;
  display: inline-flex;
  justify-content: center;
  padding: 0.8rem 1rem;
  border: 2px solid var(--accent-color);
  background-color: var(--accent-color);
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

  &:not(.btn--blank, .btn--active) {
    color: var(--btn-color);
  }
}
.btn--active {
  border: 2px solid var(--link-hover);
  background-color: var(--btn-color);
  color: var(--accent-color);
  &:hover,
  &:focus {
    color: var(--btn-color);
  }
  &:focus {
    border: 2px solid var(--link-hover);
    background-color: var(--btn-color);
    color: var(--accent-color);
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
