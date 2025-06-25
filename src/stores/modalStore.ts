import { defineStore } from "pinia";

import type { ModalMode } from "@/types/types";

const allowedModes: (ModalMode)[] = ['comment', 'training', 'header', null]

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    mode: null as Exclude<ModalMode, 'header'>
  }),
  actions: {
    openModalMode(rawMode: unknown) {
      if (!allowedModes.includes(rawMode as ModalMode)) {
        console.warn(`[ModalStore] Неверный mode:`, rawMode)
        return
      }

      const mode = rawMode as ModalMode

      if (mode === null) return

      if (mode === 'header') {
        this.isOpen = true
        return
      }

      this.isOpen = true
      this.mode = mode
    },
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
      this.mode = null
    }
  }
})
