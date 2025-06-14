import { defineStore } from "pinia";

export type ModalMode = 'comment' | 'training' | null

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    mode: null as ModalMode
  }),
  actions: {
    openModal(mode: ModalMode) {
      this.isOpen = true
      this.mode = mode
    },
    closeModal() {
      this.isOpen = false
      this.mode = null
    }
  }
})
