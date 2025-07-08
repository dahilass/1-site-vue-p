<script setup lang="ts">
import IconQuotes from '@shared/ui/icons/IconQuotes.vue'
import IconStar from '@shared/ui/icons/IconStar.vue'

defineProps<{
  data: {
    comment: string
    mark: string
    name: string
  }
}>()
</script>

<template>
  <icon-quotes class="comments__icon" />
  <p class="comments__desc">{{ data.comment }}</p>
  <div class="comments__mark">
    <icon-star v-for="int of +data.mark" :key="int" />
  </div>
  <p class="comments__name upper">{{ data.name }}</p>
</template>

<style lang="scss" scoped>
.comments__mark {
  display: flex;
  gap: 0.2rem;
}
.comments__icon {
  top: 10%;
  left: -2%;
  transform: translate(-30%, -50%);
  position: absolute;
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
  @media (min-width: 769px) {
    left: 0;
    top: 25%;
    transform: translate(-50%, -50%);
  }
}
</style>
