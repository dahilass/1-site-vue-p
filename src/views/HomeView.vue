<script setup lang="ts">
import AppHero from '@/components/app/AppHero.vue'
import AppAbout from '@/components/app/AppAbout.vue'
import AppButton from '@/components/app/AppButton.vue'
import AppCoach from '@/components/app/AppCoach.vue'
// import AppSubject from '@/components/app/AppSubject.vue'
// import AppSchedule from '@/components/app/AppSchedule.vue'
import AppContact from '@/components/app/AppContact.vue'
import AppVideo from '@/components/app/AppVideo.vue'
import AppDirections from '@/components/app/AppDirections.vue'
import AppGuest from '@/components/app/AppGuest.vue'
import AppNews from '@/components/app/AppNews.vue'
import AppComments from '@/components/app/AppComments.vue'
import AppWhy from '@/components/app/AppWhy.vue'
</script>

<template>
  <main>
    <app-hero />
    <app-about />
    <app-why />
    <app-directions />
    <app-button>Посмотреть расписание</app-button>
    <app-coach />
    <app-button>записаться на гостевое</app-button>
    <app-guest />
    <app-button>Другие абонементы</app-button>
    <!-- <app-subject /> -->
    <!-- <app-button>ОНЛАЙН-ЗАПИСЬ</app-button> -->
    <!-- <app-schedule class="alt-bg" /> -->
    <!-- <app-button class="alt-bg">ОНЛАЙН-ЗАПИСЬ</app-button> -->
    <app-news />
    <app-video />
    <app-comments />
    <app-button>выбрать зал</app-button>
    <app-contact />
  </main>
</template>

<style lang="scss" scoped></style>
