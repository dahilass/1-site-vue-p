<script setup lang="ts">
import IconYtb from '@shared/ui/icons/IconYtb.vue'
import IconVk from '@shared/ui/icons/IconVk.vue'
import IconFb from '@shared/ui/icons/IconFb.vue'
import IconInst from '@shared/ui/icons/IconInst.vue'

import type { PersonSocials } from '@/0_app/types/types'
import type { Component } from 'vue'

type Template = {
  url: string
  icon: Component
}

const SOCIALS_TEMPLATE: Record<string, Template> = {
  vk: { url: 'https://vk.com/', icon: IconVk },
  fb: { url: 'https://facebook.com/', icon: IconFb },
  ytb: { url: 'https://youtube.com/', icon: IconYtb },
  inst: { url: 'https://instagram.com/', icon: IconInst },
}

const props = withDefaults(
  defineProps<{
    mode: 'global' | 'personal'
    personSocials?: Partial<PersonSocials>
  }>(),
  { mode: 'global' },
)
</script>

<template>
  <div class="socials" v-if="props.mode === 'global'">
    <p v-if="$slots.default" class="socials__title">
      <slot />
    </p>
    <ul class="socials__list">
      <li v-for="(item, i) in SOCIALS_TEMPLATE" :key="i">
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <component :is="item.icon" />
        </a>
      </li>
    </ul>
  </div>

  <div class="socials" v-else>
    <ul class="socials__list">
      <li v-for="(val, key) in personSocials" :key="key">
        <a
          class="link"
          :href="SOCIALS_TEMPLATE[key].url + val"
          target="_blank"
          rel="noopener noreferrer"
        >
          <component :is="SOCIALS_TEMPLATE[key].icon" /> <span class="marked">{{ val }}</span>
        </a>
      </li>
      <!-- <li v-if="personSocials?.vk">
        <a class="link" href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <icon-vk /> <span class="marked">{{ personSocials?.vk }}</span>
        </a>
      </li>
      <li v-if="personSocials?.fb">
        <a class="link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <icon-fb /> <span class="marked">{{ personSocials?.fb }}</span>
        </a>
      </li>
      <li v-if="personSocials?.ytb">
        <a class="link" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <icon-ytb /> <span class="marked">{{ personSocials?.ytb }}</span>
        </a>
      </li>
      <li v-if="personSocials?.inst">
        <a class="link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <icon-inst /> <span class="marked">{{ personSocials?.inst }}</span>
        </a>
      </li> -->
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.socials__list {
  display: flex;
  justify-self: start;
}
.socials__title {
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
