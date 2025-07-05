<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  options: string[] | number
}>()
// const options = ['Вариант 1', 'Вариант 2', 'Вариант 3']
const selected = ref('')
const open = ref(false)

function toggle() {
  open.value = !open.value
}
function select(option: string) {
  selected.value = option
  open.value = false
}
</script>

<template>
  <div class="custom-select" @click="toggle">
    <div class="selected" :class="!selected ? 'placeholder' : ''">
      {{ selected || 'Выберите вариант' }}
    </div>
    <ul v-if="open" :options>
      <li v-for="option in options" :key="option" @click.stop="select(option as string)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  .selected {
    padding: 0.6rem 1.2rem;
    border: 2px solid var(--main-color);
  }
  .placeholder {
    color: var(--main-color-op);
  }
  ul {
    padding: 1rem;
    width: 100%;
    z-index: 1000;
    top: 1rem;
    position: absolute;
    background-color: var(--alt-bg);
    font-size: 0.9rem;
    li {
      &:hover {
        color: var(--accent-color);
      }
    }
  }
}
</style>
