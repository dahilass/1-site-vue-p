<script setup lang="ts">
import { RouterLink } from 'vue-router'

import AppNavList from './AppNavList.vue'
import MyLogo from './ui/MyLogo.vue'
import MySocial from './ui/MySocial.vue'
import IconMail from './icons/IconMail.vue'

import { footerNavData } from '@/data'
// import IconDecor from './icons/IconDecor.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__row">
          <div class="footer__brand">
            <router-link to="/">
              <my-logo />
            </router-link>
            <div class="footer__name">
              <p>БОКСЕРСКИЙ КЛУБ <span class="marked">MOSCOWBOXING</span></p>
              <!-- <icon-decor></icon-decor> -->
            </div>
          </div>
          <app-nav-list :nav-items="footerNavData" class="footer__nav" />
        </div>
        <div class="footer__row">
          <a class="footer__email" href="mailto:info@moscowboxing.ru">
            <icon-mail />
            info@moscowboxing.ru
          </a>
          <my-social class="footer__social">Подписывайтесь на нас</my-social>
        </div>

        <div class="copyright">
          <p>© 2025 Moscowboxing.ru</p>
          <p>Все права защищены</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  margin-top: auto;
  .copyright {
    margin-block: 4rem 1rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
}
.footer__row {
  display: flex;
  justify-content: space-between;
  // flex-wrap: wrap;
  width: 100%;
  & > a {
    align-self: flex-end;
  }
}
.footer__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 3rem;
}

.footer__brand {
  display: flex;
  align-items: center;
}
.footer__name {
  max-width: 10rem;
  margin: auto 0.8rem;
  p {
    line-height: 32px;
  }
}
.footer__nav {
  max-width: 37rem;
  .nav-list {
    gap: 0.5rem 2.5rem;
    a {
      padding: 0.5rem;
    }
  }
}
.footer__email {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  transition: var(--transition-base);
  color: var(--accent-color);
  svg {
    fill: none;
    stroke: var(--accent-color);
    transition: var(--transition-base);
  }

  &:hover,
  &:focus {
    color: var(--link-hover);
    svg {
      stroke: var(--link-hover);
    }
  }
}
</style>
