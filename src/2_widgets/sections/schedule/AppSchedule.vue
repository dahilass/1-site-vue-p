<script setup lang="ts">
// const scheduleInfoArray = [
//   {
//     day: 'Понедельник',
//     group: '5-9 лет',
//     timeStart: '16:00',
//     timeEnd: '17:00',
//     type: 'Бокс',
//     status: 'active',
//     color: 'red',
//   },
//   {
//     day: 'Вторник',
//     group: '10-13 лет',
//     timeStart: '17:00',
//     timeEnd: '18:30',
//     type: 'Тайский бокс',
//     status: 'active',
//     color: 'green',
//   },
//   {
//     day: 'Пятница',
//     group: 'Общая группа',
//     timeStart: '10:00',
//     timeEnd: '11:30',
//     type: 'Бокс',
//     status: 'active',
//     color: 'red',
//   },
// ]
</script>

<template>
  <section class="schedule section-padding">
    <div class="container">
      <div class="schedule__innner">
        <my-heading>расписание</my-heading>
        <table>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            <!-- <thead> -->
            <tr>
              <th></th>
              <th scope="col">Утро</th>
              <th scope="col">5-9 лет</th>
              <th scope="col">10-13 лет</th>
              <th scope="col">ЮНОШИ 14-18 лет</th>
              <th scope="col">ВЗРОСЛАЯ ГРУППА 1</th>
              <th scope="col">ВЗРОСЛАЯ ГРУППА 2</th>
            </tr>
            <!-- </thead> -->
            <!-- <tbody> -->
            <tr>
              <th scope="row">понедельник</th>
              <td></td>
              <td class="red">БОКС 16:00-17:00</td>
              <td class="red">БОКС 17:00-18:00</td>
              <td class="red">БОКС 18:00-19:30</td>
              <td class="red">БОКС 19:30-21:00</td>
              <td class="red">БОКС 21:00-22:30</td>
            </tr>
            <tr>
              <th scope="row">вторник</th>
              <td class="yellow">Идет набор</td>
              <td></td>
              <td class="green">Тайский бокс 17:00-18:30</td>
              <td class="blue">ТХЭКВОНДО 18:30-20:00</td>
              <td class="red">БОКС 20:00-21:30</td>
              <td class="yellow">Идет набор</td>
            </tr>
            <tr>
              <th scope="row">среда</th>
              <td></td>
              <td class="red">БОКС 16:00-17:00</td>
              <td class="red">БОКС 17:00-18:00</td>
              <td class="red">БОКС 18:00-19:30</td>
              <td class="red">БОКС 19:30-21:00</td>
              <td class="red">БОКС 21:00-22:30</td>
            </tr>
            <tr>
              <th scope="row">четверг</th>
              <td class="yellow">Идет набор</td>
              <td></td>
              <td class="green">Тайский бокс 17:00-18:30</td>
              <td class="blue">ТХЭКВОНДО 18:30-20:00</td>
              <td class="red">БОКС 20:00-21:30</td>
              <td class="yellow">Идет набор</td>
            </tr>
            <tr>
              <th scope="row">пятница</th>
              <td></td>
              <td class="red">БОКС 16:00-17:00</td>
              <td class="red">БОКС 17:00-18:00</td>
              <td class="red">БОКС 18:00-19:30</td>
              <td class="red">БОКС 19:30-21:00</td>
              <td class="red">БОКС 21:00-22:30</td>
            </tr>
            <tr>
              <th scope="row">суббота</th>
              <td class="red" colspan="6">Общая группа БОКС 10:00-11:30</td>
            </tr>
            <tr>
              <th scope="row">Воскресенье</th>
              <td class="red" colspan="6">Общая группа БОКС 10:00-11:30</td>
            </tr>
            <!-- </tbody> -->
          </tbody>
        </table>
        <!-- <table>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>

            <tr>
              <th></th>
              <th scope="col">Утро</th>
              <th scope="col">5-9 лет</th>
              <th scope="col">10-13 лет</th>
              <th scope="col">ЮНОШИ 14-18 лет</th>
              <th scope="col">ВЗРОСЛАЯ ГРУППА 1</th>
              <th scope="col">ВЗРОСЛАЯ ГРУППА 2</th>
            </tr>


            <tr>
              <th scope="row">понедельник</th>
              <td></td>
              <td class="red">БОКС 16:00-17:00</td>
              <td class="red">БОКС 17:00-18:00</td>
              <td class="red">БОКС 18:00-19:30</td>
              <td class="red">БОКС 19:30-21:00</td>
              <td class="red">БОКС 21:00-22:30</td>
            </tr>
            <tr>
              <th scope="row">вторник</th>
              <td class="yellow">Идет набор</td>
              <td></td>
              <td class="green">Тайский бокс 17:00-18:30</td>
              <td class="blue">ТХЭКВОНДО 18:30-20:00</td>
              <td class="red">БОКС 20:00-21:30</td>
              <td class="yellow">Идет набор</td>
            </tr>
            <tr>
              <th scope="row">среда</th>
              <td></td>
              <td class="red">БОКС 16:00-17:00</td>
              <td class="red">БОКС 17:00-18:00</td>
              <td class="red">БОКС 18:00-19:30</td>
              <td class="red">БОКС 19:30-21:00</td>
              <td class="red">БОКС 21:00-22:30</td>
            </tr>
            <tr>
              <th scope="row">четверг</th>
              <td class="yellow">Идет набор</td>
              <td></td>
              <td class="green">Тайский бокс 17:00-18:30</td>
              <td class="blue">ТХЭКВОНДО 18:30-20:00</td>
              <td class="red">БОКС 20:00-21:30</td>
              <td class="yellow">Идет набор</td>
            </tr>
            <tr>
              <th scope="row">пятница</th>
              <td></td>
              <td class="red">БОКС 16:00-17:00</td>
              <td class="red">БОКС 17:00-18:00</td>
              <td class="red">БОКС 18:00-19:30</td>
              <td class="red">БОКС 19:30-21:00</td>
              <td class="red">БОКС 21:00-22:30</td>
            </tr>
            <tr>
              <th scope="row">суббота</th>
              <td class="red" colspan="6">Общая группа БОКС 10:00-11:30</td>
            </tr>
            <tr>
              <th scope="row">Воскресенье</th>
              <td class="red" colspan="6">Общая группа БОКС 10:00-11:30</td>
            </tr>

          </tbody>
        </table> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
table {
  overflow: hidden;
  width: 100%;
  max-width: 52rem;
  margin: 0 auto;
  z-index: 100;
  background-color: var(--main-bg);
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 1px;
}
th,
td {
  text-wrap: balance;
  width: 150px;
  height: 60px;
  background-color: var(--alt-bg);
  text-align: center;
  vertical-align: middle;
}
th {
  padding: 0.5rem;
  &:not(th:empty) {
    text-transform: uppercase;
    border: 0.5px solid var(--main-color);
    outline: 0.5px solid var(--main-color);
  }
  &:empty {
    outline: 0.5px solid var(--alt-bg);
  }
}

td {
  padding: 0.5rem 1.3rem;
  border-spacing: 3px;
  font-size: 0.7rem;
  position: relative;
  border-radius: 8px 0 0 8px;
  border: 1px solid var(--main-bg);
  // border: 1px solid color-mix(in hsl, var(--main-bg), white 20%);
  // border: 2px solid var(--alt-bg);
  &:empty {
    background-color: var(--main-bg);
  }
  &:not(:empty)::after {
    border-radius: 8px 0 0 8px;
    content: '';
    position: absolute;
    width: 0.25rem;
    height: 100%;
    // background-color: red;
    top: 0;
    left: 0;
  }
}
td.red:not(:empty)::after {
  background-color: red;
}
td.blue:not(:empty)::after {
  background-color: blue;
}
td.green:not(:empty)::after {
  background-color: green;
}
td.yellow:not(:empty)::after {
  background-color: yellow;
}

/* hover */
// tr:hover th:not(th:nth-child(n + 2)),
// td:hover {
//   color: aqua;
//   background-color: coral;
// }
// th:nth-child(n + 2) {
//   background-color: coral;
// }
</style>
