<script setup lang="ts">
import IconYt from '../icons/IconYt.vue'
import IconVk from '../icons/IconVk.vue'
import IconFb from '../icons/IconFb.vue'
import heroBg from '@/assets/images/hero-bg.jpg'
</script>

<template>
  <section class="section-padding hero" :style="{ backgroundImage: `url(${heroBg})` }">
    <!-- <section class="main__hero hero"> -->
    <!-- <div class="hero__img-box">
      <img class="hero__img" :src="heroBg" alt="hero-img" />
    </div> -->
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
@use 'sass:color';
$overlay-color1: #1a1a1a73;
$overlay-color2: #c4c4c4bf;
// $mix: mix($color1, $color2, 50%);

.hero {
  display: flex;
  // flex-grow: 1;
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
// .hero__img-box {
//   width: 100%;
//   z-index: 11;
//   &::after {
//     content: '';
//     position: absolute;
//     display: block;
//     top: 0;
//     left: 0;
//     z-index: 10;
//     width: 100%;
//     height: 100%;
//     // background-image:
//     //   linear-gradient(rgba(26, 26, 26, 0.45), rgba(196, 196, 196, 0.75)),
//     //   linear-gradient(rgba(196, 196, 196, 0.75), rgba(26, 26, 26, 0.45));
//     // background-blend-mode: multiply;
//     background-color: $mix;
//   }
// }
// .hero__img {
//   width: 100%;
//   height: 100%;
//   // height: 100%;
//   // min-height: 670px;
//   object-fit: cover;
//   // opacity: 0.75;

//   z-index: -1;
// }
.hero__title {
  // padding-top: 4.6rem;
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
  align-self: start;
  display: inline;
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
