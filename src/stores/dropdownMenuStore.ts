import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu', {
  state: () => ({
    openIndex: null as number | null,
  }),
  actions: {
    toggle(index: number | null) {
      this.openIndex = this.openIndex === index ? null : index
    },
    close() {
      this.openIndex = null
    }
  }
})
