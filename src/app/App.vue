<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useModalStore } from '@/stores/modalStore'
import { watch } from 'vue'

import AppHeader from '@/widgets/header/ui/AppHeader.vue'
import AppFooter from '@/widgets/footer/ui/AppFooter.vue'
import MyDialog from '@/shared/ui/MyDialog.vue'
import { useDropdownMenuStore } from '@/stores/dropdownMenuStore'
// import { storeToRefs } from 'pinia'

const modal = useModalStore()
const menuStore = useDropdownMenuStore()

// const { openIndex } = storeToRefs(menuStore)

watch(
  () => modal.isModalOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)
</script>

<template>
  <div class="wrapper" @click="menuStore.toggle(null)">
    <app-header />
    <my-dialog
      v-if="modal.isModalOpen && modal.mode !== null"
      :mode="modal.mode"
      @close="modal.closeModal"
    ></my-dialog>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
    <app-footer />
  </div>
</template>

<style scoped></style>
