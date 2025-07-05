<script setup lang="ts">
import AppHero from '@/components/app/AppHero.vue'
import AppAbout from '@/components/app/AppAbout.vue'
import AppButton from '@/components/app/AppButton.vue'
import AppCoach from '@/components/app/AppCoach.vue'
// import AppSubject from '@/components/app/AppSubject.vue'
// import AppSchedule from '@/components/app/AppSchedule.vue'
import AppMap from '@/components/app/AppMap.vue'
import AppVideo from '@/components/app/AppVideo.vue'
import AppDirections from '@/components/app/AppDirections.vue'
import AppAbonement from '@/components/app/AppAbonement.vue'
import AppNews from '@/components/app/AppNews.vue'
import AppComments from '@/components/app/AppComments.vue'
import AppWhy from '@/components/app/AppWhy.vue'

import AppMiniForm from '@/components/app/AppMiniForm.vue'
</script>

<template>
  <main>
    <app-hero />
    <app-about />
    <app-why />
    <app-button>Запись на пробную тренировку</app-button>
    <app-directions />
    <app-coach />
    <app-abonement />
    <app-mini-form />
    <!-- <app-subject /> -->
    <!-- <app-button>ОНЛАЙН-ЗАПИСЬ</app-button> -->
    <!-- <app-schedule class="alt-bg" /> -->
    <!-- <app-button class="alt-bg">ОНЛАЙН-ЗАПИСЬ</app-button> -->
    <app-news />
    <app-video />
    <app-comments />
    <app-map />
  </main>
</template>

<style lang="scss" scoped></style>
