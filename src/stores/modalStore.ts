import { defineStore } from "pinia";

import type { ModalMode } from "@/types/types";

const allowedModes: (ModalMode)[] = ['comment', 'training', null]

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalOpen: false,
    isNavOpen: false,
    mode: null as ModalMode
  }),
  actions: {
    openModalMode(rawMode: unknown) {
      if (!allowedModes.includes(rawMode as ModalMode)) {
        console.warn(`[ModalStore] Неверный mode:`, rawMode)
        return
      }

      const mode = rawMode as ModalMode

      if (mode === null) return

      this.isModalOpen = true
      this.mode = mode
    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.mode = null
    },
    openNav() {
      this.isNavOpen = true
    },
    closeNav() {
      this.isNavOpen = false
    }
  }
})
