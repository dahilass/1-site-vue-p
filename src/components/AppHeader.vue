<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { RouterLink } from 'vue-router'

import AppNavList from './nav/MyNavList.vue'
import MyLogo from './ui/MyLogo.vue'

import IconDecor from './icons/IconDecor.vue'
import IconPhone from './icons/IconPhone.vue'

import { headerNavData } from '@/data'
import MobileMenu from './MobileMenu.vue'

const hiddenOnScroll = ref(false)
const isMenuOpen = ref(false)

let lastScrollY = window.scrollY

const handleScroll = function () {
  if (window.innerWidth > 769) {
    const currentScrollY = window.scrollY
    hiddenOnScroll.value = currentScrollY > lastScrollY && currentScrollY > 100
    lastScrollY = currentScrollY
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function onMenuToggled(value: boolean) {
  isMenuOpen.value = value
  console.log('toggle:', value)
}
</script>

<template>
  <header class="header" :class="[hiddenOnScroll ? 'translate-top' : '']">
    <div class="container">
      <div class="header__inner">
        <div class="header__row header__row--mobile">
          <a class="header__mobile-link" href="tel:+74952013438"><icon-phone></icon-phone></a>
          <mobile-menu @menu-toggled="onMenuToggled" class="mobile-menu"></mobile-menu>
          <div>
            <p class="header__title">БОКСЕРСКИЙ КЛУБ MOSCOWBOXING</p>
            <div class="header__decor-box">
              <icon-decor />
              <icon-decor />
            </div>
          </div>

          <router-link class="header__logo" to="/">
            <my-logo />
            <span class="marked logo__name">MOSCOWBOXING</span>
          </router-link>

          <div class="header__contact">
            <my-button to="/price" class="btn--blank">Купить абонемент</my-button>
            <a class="link header__link" href="tel:+74952013438">+ 7 (495) 201 34 38</a>
          </div>
        </div>
        <app-nav-list
          :nav-items="headerNavData"
          class="header__nav"
          :class="isMenuOpen ? 'header__nav--shown' : ''"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  height: 8rem;
  transition: all 0.3s linear;
  width: 100%;
  z-index: 500;
  // min-height: var(--header-height);
  padding-block: 5px 15px;
  background-color: var(--alt-bg);
  box-shadow: 0 3px 9px 1px gray;
  .logo__name {
    display: none;
  }
  .mobile-menu {
    display: none;
  }
  @media (max-width: 769px) {
    height: auto;
    padding-bottom: 0;
    .mobile-menu {
      display: block;
      margin-left: 20px;
    }
    .logo__name {
      display: inline;
      font-size: 1rem;
    }
    .header__mobile-link {
      display: block;
    }
    .header__decor-box,
    .header__contact,
    .header__title {
      display: none;
    }
    .header__row {
      margin-bottom: 0;
      align-items: center;
      justify-content: end;
      gap: 0;
    }
    .header__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      inset: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      min-height: 100vh;
      background-color: var(--alt-bg);
      top: 0;
      transform: translateY(-100%);
      transition: transform 0.3s linear;
      &--shown {
        transform: translateY(0);
      }
    }
    .header__logo {
      display: flex;
      top: 1rem;
      left: 1rem;
      gap: 0.5rem;
      position: absolute;
    }
    :deep(.nav__list) {
      flex-direction: column;
      height: 50%;
      justify-content: space-evenly;
      font-size: 1.25rem;
    }
  }
}
.header__mobile-link {
  display: none;
}
.header__title {
  margin-bottom: 0.1rem;
  margin-top: 0.8rem;
  font-size: 1rem;
  line-height: 1.2rem;
  p {
    display: inline;
  }
}
.header__inner {
  display: flex;
  flex-direction: column;
}
.header__row {
  margin-bottom: 0.6rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  &--mobile {
    z-index: 1000;
  }
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
  gap: 1.25rem;
}
.header__link {
  padding: 0.5rem;
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
