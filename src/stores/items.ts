import { defineStore } from "pinia";
import { ref } from "vue";

export const useItemStore = defineStore('items', () => {
  // const items = ref([])
  const windowWidth = ref(window.innerWidth)

  const updateWidth = () => {
    windowWidth.value = window.innerWidth
  }

  // const visibleItems = computed(() => {
  //   return windowWidth.value <= 768 ? 3 : items.value.length
  //   const limit = windowWidth.value <= 768 ? 3 : items.value.length
  //   return items.value.slice(0, limit)
  // })

  // return {
  //   items, visibleItems, updateWidth
  // }
  return {
    windowWidth, updateWidth
  }
})
