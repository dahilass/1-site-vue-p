<script setup lang="ts">
import AppHero from '@/components/AppHero.vue'
import AppAbout from '@/components/AppAbout.vue'
import AppButton from '@/components/AppButton.vue'

import BlankBlock from '@/components/BlankBlock.vue'
</script>

<template>
  <main>
    <app-hero />
    <app-about />
    <app-button :text="'записаться на гостевое'" />
    <app-button :text="'ОНЛАЙН-ЗАПИСЬ'" />
    <blank-block></blank-block>
  </main>
</template>

<style lang="scss" scoped></style>
