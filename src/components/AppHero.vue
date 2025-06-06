<script setup lang="ts">
import IconYt from './icons/IconYt.vue'
import IconVk from './icons/IconVk.vue'
import IconFb from './icons/IconFb.vue'
import heroBg from '@/assets/images/hero-bg.png'
</script>

<template>
  <!-- <section class="main__hero hero" :style="{ backgroundImage: `url(${heroBg})` }"> -->
  <section class="main__hero hero">
    <img class="hero__bg" :src="heroBg" alt="hero-bg" />
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
          <my-button class="btn hero__btn">Онлайн запись</my-button>
        </div>
        <ul class="hero__socials socials">
          <li>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <icon-vk />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <icon-fb />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <icon-yt />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100%;
  &__inner {
    padding-inline: var(--container-padding);
    width: 100%;
    max-width: calc(var(--container-width) + var(--container-padding) * 2);
    display: flex;
    justify-content: space-between;
    top: 0;
    position: absolute;
  }
}
.hero__general {
}
.hero__bg {
  width: 100%;
  // height: 100%;
  // min-height: 670px;
  object-fit: cover;
  z-index: -1;
}
.hero__title {
  padding-top: 4.6rem;
  margin-bottom: 2rem;
  max-width: 27rem;

  font-size: 2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  span {
    color: var(--red);
  }
}
.hero__contact {
  max-width: 11rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.hero__btn {
  margin-top: 3rem;
}
.hero__socials {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-self: end;
  margin-bottom: 3rem;
  margin-right: 1rem;
}
</style>
