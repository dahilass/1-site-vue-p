<script setup lang="ts"></script>

<template>
  <section class="why section-padding">
    <div class="container">
      <div class="why__inner">
        <my-heading>Почему мы?</my-heading>
        <div class="why__content">
          <p>
            Гибкое расписание — тренировки проходят ежедневно с 7:00 до 23:00, есть утренние,
            дневные, вечерние занятия. Индивидуальные программы по договорённости
          </p>
          <p>
            Уютная и безопасная атмосфера — дружелюбное окружение, где главны дисциплина и уважение,
            а не уличные потасовки
          </p>
          <p>
            Выгодные тарифы и спецпредложения — льготы для студентов и льготников, пробные и
            персональные занятия, семейные и детские абонементы.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why__content {
  counter-set: list;
  p::before {
    content: counter(list);
    counter-increment: list 1;
  }
}
</style>
