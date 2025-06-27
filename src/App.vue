<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useModalStore } from './stores/modalStore'
import { watch } from 'vue'

import AppHeader from './components/main/AppHeader.vue'
import AppFooter from './components/main/AppFooter.vue'
import MyDialog from './components/ui/MyDialog.vue'
import { useMenuStore } from './stores/menuStore'
// import { storeToRefs } from 'pinia'

const modal = useModalStore()
const menuStore = useMenuStore()

// const { openIndex } = storeToRefs(menuStore)

watch(
  () => modal.isOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)
</script>

<template>
  <div class="wrapper" @click="menuStore.toggle(null)">
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
