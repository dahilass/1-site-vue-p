<script setup lang="ts">
import AppHero from '@widgets/sections/hero/ui/AppHero.vue'
import AppAbout from '@widgets/sections/about/ui/AppAbout.vue'
import AppButton from '@/2_widgets/sections/button/ui/AppButton.vue'
import AppCoach from '@widgets/sections/coach/ui/AppCoach.vue'
// import AppSubject from '@/components/app/AppSubject.vue'
// import AppSchedule from '@/components/app/AppSchedule.vue'
import AppMap from '@widgets/sections/map/ui/AppMap.vue'
import AppVideo from '@widgets/sections/video/ui/AppVideo.vue'
import AppDirections from '@widgets/sections/directions/ui/AppDirections.vue'
import AppAbonement from '@widgets/sections/abonement/ui/AppAbonement.vue'
import AppNews from '@widgets/sections/news/ui/AppNews.vue'
import AppComments from '@widgets/sections/comments/ui/AppComments.vue'
import AppWhy from '@widgets/sections/why/ui/AppWhy.vue'

import AppMiniForm from '@/2_widgets/sections/formSection/ui/AppMiniForm.vue'
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
