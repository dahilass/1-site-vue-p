<script setup lang="ts">
import heroBg from '@/assets/images/hero-bg.jpg'
import MySocial from '../ui/MySocial.vue'
</script>

<template>
  <section class="section-padding hero" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__general">
          <h1 class="hero__title">
            ДОБРО ПОЖАЛОВАТЬ В ШКОЛУ БОКСА В МОСКВЕ <span>MOSCOWBOXING!</span>
          </h1>
          <div class="hero__contact">
            <p class="subtitle hero__subtitle">БУТОВО</p>
            <a href="tel:+74951049628">+7 (495) 104-96-28</a>
            <address>м.Скобелевская, ул. Изюмская, 22к3</address>
          </div>
          <my-button class="btn hero__btn" :mode="'training'">Онлайн запись</my-button>
        </div>
        <my-social class="hero__social" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:color';
$overlay-color1: #1a1a1a73;
$overlay-color2: #c4c4c4bf;
// $mix: mix($color1, $color2, 50%);

.hero {
  display: flex;
  min-height: calc(100vh - var(--header-height));
  position: relative;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  &::before {
    content: '';
    position: absolute;
    display: block;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: color.mix($overlay-color1, $overlay-color2, 50%);
    // background-image:
    //   linear-gradient(rgba(26, 26, 26, 0.45), rgba(196, 196, 196, 0.75)),
    //   linear-gradient(rgba(196, 196, 196, 0.75), rgba(26, 26, 26, 0.45));
    // background-blend-mode: multiply;
  }
  &__inner {
    position: relative;
    top: 0;
    display: flex;
    padding-inline: var(--container-padding);
    width: 100%;
    max-width: calc(var(--container-width) + var(--container-padding) * 2);
    justify-content: space-between;
    z-index: 10;
  }
  &__general {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .container {
    padding-block: 4.6rem;
    display: flex;
    min-height: 100%;
  }
}
.hero__title {
  // padding-top: 4.6rem;
  margin-bottom: 2rem;
  max-width: 27rem;

  font-size: 2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  span {
    color: var(--accent-color);
  }
}
.hero__contact {
  max-width: 11rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.hero__btn {
  align-self: start;
  display: inline;
  margin-top: 3rem;
}
.hero__social {
  flex-direction: column;
  align-self: end;
  margin-bottom: 3rem;
  margin-right: 1rem;
  gap: 0.25rem;
  background-color: coral;
}
</style>
