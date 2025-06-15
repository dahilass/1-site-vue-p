<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useModalStore } from './stores/modalStore'
import { watch } from 'vue'

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import MyDialog from './components/ui/MyDialog.vue'

const modal = useModalStore()

watch(
  () => modal.isOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)
</script>

<template>
  <div class="wrapper">
    <app-header />
    <my-dialog
      v-if="modal.isOpen && modal.mode !== null"
      :mode="modal.mode"
      @close="modal.closeModal"
    ></my-dialog>
    <router-view />
    <app-footer />
  </div>
</template>

<style scoped></style>
