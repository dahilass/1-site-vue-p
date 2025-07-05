<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { coachInfoArray } from '@/data'
import { onMounted } from 'vue'
// import AppNotFound from '@/components/app/AppNotFound.vue'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const person = coachInfoArray.data.find((el) => el.id === id)

onMounted(() => {
  if (!person) {
    router.replace('/404')
  }
})
</script>

<template>
  <section v-if="person" class="person section-padding">
    <div class="container">
      <div class="person__inner">
        <my-heading :title="person?.name" :route="route.fullPath" />
        <img class="person__img" :src="person.imgUrl" alt="" />
        <div class="desc">
          <p v-for="(info, i) in person.desc" :key="i">
            {{ info }}
          </p>
          <p>{{ person.quote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.person__img {
  max-width: 12.5rem;
  aspect-ratio: 1/1;
}
</style>
