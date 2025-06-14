<script setup lang="ts">
import IconYt from '../icons/IconYt.vue'
import IconVk from '../icons/IconVk.vue'
import IconFb from '../icons/IconFb.vue'
import IconInst from '../icons/IconInst.vue'
</script>

<template>
  <div class="social" v-if="$slots.default">
    <p class="social__title">
      <slot />
    </p>
    <ul class="social__list">
      <li>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <icon-vk />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <icon-fb />
        </a>
      </li>
      <li>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <icon-yt />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <icon-inst />
        </a>
      </li>
    </ul>
  </div>

  <ul v-else class="social__list">
    <li>
      <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
        <icon-vk />
      </a>
    </li>
    <li>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <icon-fb />
      </a>
    </li>
    <li>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <icon-yt />
      </a>
    </li>
    <li>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <icon-inst />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.social__list {
  display: flex;
}
.social__title {
  font-size: 1rem;
  line-height: 32px;
  margin-bottom: 0.7rem;
}
a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0.25rem;
}
</style>
