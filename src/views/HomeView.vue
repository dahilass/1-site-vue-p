<script setup lang="ts">
import AppHero from '@/components/app/AppHero.vue'
import AppAbout from '@/components/app/AppAbout.vue'
import AppButton from '@/components/app/AppButton.vue'
import AppCoach from '@/components/app/AppCoach.vue'
import AppSubject from '@/components/app/AppSubject.vue'
import AppSchedule from '@/components/app/AppSchedule.vue'
import AppContact from '@/components/app/AppContact.vue'
import AppVideo from '@/components/app/AppVideo.vue'
</script>

<template>
  <main>
    <app-hero />
    <app-about class="alt-bg" />
    <app-coach />
    <app-button>записаться на гостевое</app-button>
    <app-subject />
    <app-button>ОНЛАЙН-ЗАПИСЬ</app-button>
    <app-schedule class="alt-bg" />
    <app-button class="alt-bg">ОНЛАЙН-ЗАПИСЬ</app-button>
    <app-video />
    <app-contact />
  </main>
</template>

<style lang="scss" scoped></style>
