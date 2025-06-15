import { defineStore } from "pinia";

export type ModalMode = 'comment' | 'training' | null

const allowedModes: (ModalMode)[] = ['comment', 'training', null]

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    mode: null as ModalMode
  }),
  actions: {
    openModal(rawMode: unknown) {
      if (!allowedModes.includes(rawMode as ModalMode)) {
        console.warn(`[ModalStore] Неверный mode:`, rawMode)
        return
      }

      const mode = rawMode as ModalMode

      if (mode === null) return

      this.isOpen = true
      this.mode = mode
    },
    closeModal() {
      this.isOpen = false
      this.mode = null
    }
  }
})
