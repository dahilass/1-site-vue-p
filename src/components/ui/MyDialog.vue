<script setup lang="ts">
// import toggleMixin from '@/mixins/toggleMixin']
import { reactive } from 'vue'

import MyInput from './MyInput.vue'
import MySelect from './MySelect.vue'
import type { ModalMode } from '@/types/types'

defineOptions({
  name: 'my-dialog',
})

defineProps<{
  mode: ModalMode
}>()

const selectData = {
  listOfPlaces: ['Бутово', 'Каховская', 'Перово', 'Марьино'],
  listOfSubjects: ['занятие в группе', 'индивидуальное занятие'],
}

const formData = reactive({
  name: '',
  surname: '',
  email: '',
  tel: '',
  coach: '',
})

// defineEmits(['close'])
</script>

<template>
  <dialog class="dialog" @click.self="$emit('close')">
    <div class="dialog__content">
      <p class="dialog__title">Заголовок</p>
      <!-- <div v-if="mode === 'training'">Training</div>
      <div v-if="mode === 'comment'">Comment</div> -->
      <form v-if="mode === 'training'" id="form" class="dialog__form" @submit.prevent="">
        <my-input
          :mode="'input'"
          v-model="formData.name"
          type="text"
          name="name"
          id=""
          required
          placeholder="* Введите имя"
        />
        <my-input
          :mode="'input'"
          v-model="formData.surname"
          type="text"
          name="surname"
          id=""
          placeholder="Введите фамилию"
        />
        <my-input
          :mode="'input'"
          v-model="formData.email"
          type="email"
          name="email"
          id=""
          required
          placeholder="* Введите e-mail"
        />
        <my-input
          :mode="'input'"
          v-model="formData.tel"
          type="tel"
          name="tel"
          id=""
          placeholder="Введите номер телефона"
        />
        <my-select :options="selectData.listOfPlaces" />
        <my-select :options="selectData.listOfSubjects" />
        <p class="dialog__info">
          *Заполняя форму, Вы <span class="marked">СОГЛАШАЕТЕСЬ</span> на обработку персональных
          данных.
        </p>
        <my-button type="submit" value="Send" @click="$emit('close')">x</my-button>
      </form>
      <form v-if="mode === 'comment'" id="form" class="dialog__form" @submit.prevent="">
        <my-input
          :mode="'input'"
          v-model="formData.name"
          type="text"
          name="name"
          id=""
          required
          placeholder="* Введите имя"
        />
        <my-input
          :mode="'input'"
          v-model="formData.email"
          type="email"
          name="email"
          id=""
          required
          placeholder="* Введите e-mail"
        />
        <my-input
          :mode="'input'"
          v-model="formData.coach"
          type="text"
          name="coach"
          id=""
          placeholder="Тренер"
        />
        <my-select :options="selectData.listOfPlaces" />
        <my-select :options="5" />
        <my-input :mode="'textarea'" placeholder="Ваш отзыв" name="" id=""></my-input>
        <p class="dialog__info">
          *Заполняя форму, Вы <span class="marked">СОГЛАШАЕТЕСЬ</span> на обработку персональных
          данных.
        </p>
        <my-button type="submit" value="Send" @click="$emit('close')">x</my-button>
      </form>
      <slot></slot>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.dialog {
  width: 100%;
  height: 100%;
  z-index: 1000;
  inset: 0;
  position: fixed;
  display: flex;
  background-color: rgba(255, 0, 0, 0.026);
}
.dialog__title {
  font-family: 'Noto Sans', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
.dialog__content {
  padding: 3rem 5rem;
  max-width: 25rem;
  max-height: 45rem;
  margin: auto;
  background-color: #fff;
  border-radius: 12px;
  min-width: 3rem;
  min-height: 3rem;
  background-color: var(--main-bg);
  color: var(--main-color);
}
.dialog__form {
  margin-bottom: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  select {
    position: relative;
    option.placeholder,
    &::placeholder {
      color: var(--main-color-op);
    }
  }
  select {
    color: var(--main-color-op);
    appearance: none;
  }
  select:valid {
    color: var(--main-color);
  }
}
</style>
