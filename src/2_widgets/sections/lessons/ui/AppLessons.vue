<script setup lang="ts">
import MyVideo from '@/5_shared/ui/MyVideo.vue'
import IconDecor from '@/5_shared/ui/icons/IconDecor.vue'
import { useLessonsStore } from '@/5_shared/stores/lessonsStore'
import { lessons } from '../dev/data'
import { ref } from 'vue'

const changeLesson = useLessonsStore()
const currentLesson = ref<number>(0)

defineOptions({
  title: 'Уроки бокса',
})
</script>

<template>
  <my-section-layout name="lessons" :title="$options.title">
    <div class="lessons__content">
      <div class="lessons__list">
        <button
          @click.prevent="[changeLesson.toggle(i), (currentLesson = changeLesson.openIndex)]"
          class="lessons__item marked link"
          v-for="(lesson, i) in lessons"
          :key="i"
          :class="changeLesson.openIndex === i ? 'active' : ''"
        >
          {{ lesson.lesson }}
        </button>
      </div>
      <article v-if="changeLesson.openIndex !== null" class="lessons__info">
        <h3>{{ lessons[currentLesson].lesson }}</h3>
        <div
          class="lessons__info"
          v-for="(item, i) in lessons[changeLesson.openIndex].content"
          :key="i"
        >
          <p v-if="item.title">
            <icon-decor />
            {{ item.title }}
          </p>
          <p v-for="(info, i) in item.desc" :key="i">{{ info }}</p>
          <my-video v-if="item.video" :src="item.video" />
        </div>
      </article>
    </div>
  </my-section-layout>
</template>

<style lang="scss" scoped>
.lessons__content {
  display: flex;
  gap: 2rem;
  counter-set: list;
}
.lessons__item {
  display: block;
  user-select: none;
  &::before {
    content: 'Урок ' counter(list) ':';
    counter-increment: list;
    margin-right: 0.5rem;
  }
}
.active {
  color: var(--link-hover);
}
</style>
