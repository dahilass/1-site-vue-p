<script setup lang="ts">
import AppNavList from './AppNavList.vue'
import headerLogo from '@/assets/images/header-logo.png'
import IconDecor from './icons/IconDecor.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__row">
          <div>
            <p class="header__title">БОКСЕРСКИЙ КЛУБ MOSCOWBOXING</p>
            <div class="header__decor-box">
              <icon-decor />
              <icon-decor />
            </div>
          </div>

          <router-link to="/">
            <img class="header__logo" :src="headerLogo" alt="logo" />
          </router-link>

          <div class="header__contact">
            <my-button class="btn btn--reversed">Купить абонемент</my-button>
            <a class="link" href="tel:+74952013438">+ 7 (495) 201 34 38</a>
          </div>
        </div>
        <AppNavList />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  min-height: var(--header-height);
  padding-block: 5px 15px;
}
.header__title {
  margin-bottom: 0.1rem;
  margin-top: 0.8rem;

  font-size: 1rem;
  line-height: 1.2rem;
}
.header__inner {
  display: flex;
  flex-direction: column;
}
.header__logo {
  width: 100%;
  height: 100%;
  max-width: 80px;
  max-height: 80px;
}
.header__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}
.header__nav {
  justify-content: center;
}
.header__contact {
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  align-items: center;
  gap: 2.5rem;
}
.header__decor-box {
  border-right: 2px solid var(--white);
  border-left: 2px solid var(--white);
  display: inline-flex;
  justify-content: start;
  & svg:last-child {
    margin-left: -2px;
  }
}
</style>
