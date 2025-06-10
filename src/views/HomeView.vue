<script setup lang="ts">
import AppHero from '@/components/app/AppHero.vue'
import AppAbout from '@/components/app/AppAbout.vue'
import AppButton from '@/components/app/AppButton.vue'
import AppCoach from '@/components/app/AppCoach.vue'
import AppSubject from '@/components/app/AppSubject.vue'
import AppSchedule from '@/components/app/AppSchedule.vue'
import AppContact from '@/components/app/AppContact.vue'
</script>

<template>
  <main>
    <app-hero />
    <app-about />
    <app-coach />
    <app-button :text="'записаться на гостевое'" />
    <app-subject />
    <app-button :text="'ОНЛАЙН-ЗАПИСЬ'" />
    <app-schedule />
    <app-contact />
  </main>
</template>

<style lang="scss" scoped></style>
