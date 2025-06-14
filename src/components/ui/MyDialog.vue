<script setup lang="ts">
// import toggleMixin from '@/mixins/toggleMixin']
import { reactive } from 'vue'

import MyInput from './MyInput.vue'
import MySelect from './MySelect.vue'

defineOptions({
  name: 'my-dialog',
})

defineProps<{
  mode: 'comment' | 'training' | null
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
})

// defineEmits(['close'])
</script>

<template>
  <dialog class="dialog" @click.self="$emit('close')">
    <div class="dialog__content">
      <p class="dialog__title">Заголовок</p>
      <!-- <div v-if="mode === 'training'">Training</div>
      <div v-if="mode === 'comment'">Comment</div> -->
      <form id="form" class="dialog__form" @submit.prevent="">
        <my-input
          v-model="formData.name"
          type="text"
          name="name"
          id=""
          required
          placeholder="* Введите имя"
        />
        <my-input
          v-model="formData.surname"
          type="text"
          name="surname"
          id=""
          placeholder="Введите фамилию"
        />
        <my-input
          v-model="formData.email"
          type="email"
          name="email"
          id=""
          required
          placeholder="* Введите e-mail"
        />
        <my-input
          v-model="formData.tel"
          type="tel"
          name="tel"
          id=""
          placeholder="Введите номер телефона"
        />
        <my-select :options="selectData.listOfPlaces"></my-select>
        <my-select :options="selectData.listOfSubjects"></my-select>
        <my-select :options="5"></my-select>
        <!-- <select name="" id="" required>
          <option class="placeholder" disabled selected hidden value="">Секция</option>
          <option v-for="item of listOfPlaces" value="" :key="item">{{ item }}</option>
        </select>
        <select name="" id="" required>
          <option class="placeholder" disabled selected hidden value="">Вид тренировки</option>
          <option v-for="item of listOfSubjects" value="" :key="item">{{ item }}</option>
        </select>
        <select name="" id="" required>
          <option class="placeholder" disabled selected hidden value="">Оценка</option>
          <option v-for="item of 5" value="" :key="item">{{ item }}</option>
        </select> -->
        <textarea placeholder="Ваш отзыв" name="" id=""></textarea>
        <p class="dialog__info">
          *Заполняя форму, Вы <span class="marked">СОГЛАШАЕТЕСЬ</span> на обработку персональных
          данных.
        </p>
        <my-button type="submit" value="Send">x</my-button>
      </form>
      <slot></slot>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.dialog {
  width: 100%;
  height: 100%;
  z-index: 500;
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
  input,
  select,
  textarea {
    position: relative;
    padding: 0.6rem 1.2rem;
    border: 2px solid var(--main-color);
    option.placeholder,
    &::placeholder {
      color: var(--main-color-op);
    }
  }
  textarea {
    height: 8rem;
    resize: none;
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
