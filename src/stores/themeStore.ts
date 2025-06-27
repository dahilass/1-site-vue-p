import { defineStore } from "pinia";
import type { Theme } from "@/types/types";

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'system' as Theme
  }),
  actions: {
    initTheme() {
      const savedTheme = localStorage.getItem('theme') as Theme | null
      if (savedTheme) {
        this.theme = savedTheme
      }
      this.applyTheme()
    },

    setTheme() {
      if (this.theme === 'light') {
        this.theme = 'dark'
        localStorage.setItem('theme', 'dark')
      } else {
        this.theme = 'light'
        localStorage.setItem('theme', 'light')
      }

      this.applyTheme()
    },

    applyTheme() {
      document.body.classList.remove('dark', 'light')

      if (this.theme === 'dark') {
        document.body.classList.add('dark')
      } else if (this.theme === 'light') {
        document.body.classList.add('light')
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        document.body.classList.add(prefersDark ? 'dark' : 'light')
        this.theme = prefersDark ? 'dark' : 'light'
      }

    }
  }
  // state: () => ({
  //   isDark: false
  // }),
  // actions: {
  //   toggleTheme() {
  //     this.isDark = !this.isDark
  //     document.body.classList.toggle('alt-theme-scheme', this.isDark)
  //   }
  // }
})
