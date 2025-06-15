<script setup lang="ts">
import { RouterLink } from 'vue-router'

import AppNavList from './AppNavList.vue'
import MyLogo from './ui/MyLogo.vue'
import IconDecor from './icons/IconDecor.vue'

import { headerNavData } from '@/data'
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
            <my-logo />
          </router-link>

          <div class="header__contact">
            <my-button to="/price" class="btn btn--reversed">Купить абонемент</my-button>
            <a class="link" href="tel:+74952013438">+ 7 (495) 201 34 38</a>
          </div>
        </div>
        <app-nav-list :nav-items="headerNavData" class="header__nav" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  min-height: var(--header-height);
  padding-block: 5px 15px;
  background-color: var(--alt-bg);
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
.header__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}
.header__nav {
  .nav-list {
    justify-content: center;
    gap: 1.25rem;
  }
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
