<script setup lang="ts">
// defineProps<{
//   text: string
// }>()
</script>

<template>
  <div class="btn-box section-padding">
    <my-button :mode="'training'" class="btn--mwidth">
      <slot />
    </my-button>
    <!-- <my-button> </my-button> -->
  </div>
</template>

<style lang="scss" scoped>
.btn-box {
  // background-color: var(--alt-bg);
  text-align: center;
}
</style>
