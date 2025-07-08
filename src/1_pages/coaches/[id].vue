<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { coachInfoArray } from '@widgets/sections/coach/dev/data'
import { onMounted } from 'vue'
// import AppNotFound from '@/components/app/AppNotFound.vue'

const route = useRoute()
const router = useRouter()

const id = route.params.id
console.log(id)

const person = coachInfoArray.data.find((el) => el.id === id)

onMounted(() => {
  if (!person) {
    router.replace('/404')
  }
})
defineOptions({
  name: 'PageCoachItem',
})
</script>

<template>
  <main>
    <my-section-layout
      v-if="person"
      name="person"
      :title="person?.name"
      :route="route.fullPath"
      classHeading="person__heading"
    >
      <img class="person__img" :src="person.imgUrl" alt="" />
      <div class="desc">
        <p v-for="(info, i) in person.desc" :key="i">
          {{ info }}
        </p>
        <p>{{ person.quote }}</p>
      </div>
    </my-section-layout>
  </main>
</template>

<style lang="scss" scoped>
.person__img {
  max-width: 12.5rem;
  aspect-ratio: 1/1;
}
:deep(.person__heading) {
  margin-bottom: 3rem;
}
</style>
