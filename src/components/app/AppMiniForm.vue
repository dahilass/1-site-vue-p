<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MyInput from '@/shared/ui/MyInput.vue'
</script>

<template>
  <section class="mini-form section-padding">
    <div class="container">
      <div class="mini-form__inner">
        <div class="mini-form__block">
          <p>Не знаете какой абонемент выбрать?</p>
          <p>Заполните форму и мы в ближайшее время мы свяжемся с Вами.</p>
        </div>
        <div class="mini-form__block">
          <form class="mini-form__form">
            <my-input
              mode="input"
              name="name"
              type="text"
              placeholder="Введите имя"
              required
            ></my-input>
            <my-input
              mode="input"
              name="phone"
              type="tel"
              placeholder="Введите номер телефона"
              required
            ></my-input>
            <my-button>Записаться</my-button>
          </form>
        </div>
        <p>
          Заполняя форму вы соглашаетесь с
          <router-link to="/private-policy">условиями обработки персональных данных</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mini-form {
  background-color: var(--accent-color-op);
}
.mini-form__inner {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.mini-form__block {
  width: 100%;
  height: 100%;
}
.mini-form__form {
  display: flex;
  gap: 0.5rem;
}
</style>
