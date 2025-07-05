import type { CardInfo, NavItem, GymInfo, CoachInfo } from "./app/types/types";


const aboutDropdown = [{ title: 'новости', path: '/news' }, { title: 'обучение боксу', path: '/training' }, { title: 'соревнования', path: '/competitions' }, { title: 'спортсмены', path: '/sportsmen' }, { title: 'отзывы', path: '/comments' }, { title: 'сборы', path: '/bootcamps' }, { title: 'интересное', path: '/wiki' }],
  scheduleDropdown = [{ title: 'тренировки', path: '/schedule' }, { title: 'календарь соревнований', path: '/competitions-calendar' }, { title: 'расписание тренеров', path: '/coach-calendar' }]

export const headerNavData: NavItem[] = [{ title: 'О НАС', path: '/about', dropdown: aboutDropdown }, { title: 'ЦЕНЫ', path: '/prices' }, { title: 'ТРЕНЕРЫ', path: '/mentors' }, { title: 'РАСПИСАНИЕ', path: '/schedule', dropdown: scheduleDropdown }, { title: 'КОНТАКТЫ', path: '/contacts' }]
export const footerNavData: NavItem[] = [{ title: 'Начинающим', path: '/' }, { title: 'Оплата', path: '/' }, { title: 'Интересное', path: '/' }, { title: 'Юридическая информация', path: '/' }, { title: 'Обучение', path: '/' }, { title: 'Возврат', path: '/' }, { title: 'Контакты', path: '/' }]

// about: спортсмены, отзывы, сборы?, новости?, интересное, обучение боксу?
// schedule: расписание, соревнования, календарь соревнований


const subjectImages: Record<string, string> = import.meta.glob('@/assets/images/subject/*.jpg', {
  eager: true,
  // as: 'url'
  import: 'default'
})

const gymImages: Record<string, string> = import.meta.glob('@/assets/images/gyms/*.jpg', {
  eager: true,
  import: 'default',
})

const coachImages: Record<string, string> = import.meta.glob('@/assets/images/coach/*.jpg', {
  eager: true,
  // as: 'url'
  import: 'default',
})

export const coachInfoArray: { type: string, data: CoachInfo[] } = {
  type: 'coaches',
  data: [
    {
      id: "f7b7b4c3-e7e0-4049-8754-a517a1b8a1c6",
      name: 'Шишлов Родион',
      desc: ['Основатель и руководитель клуба. Специализируется на подготовке детей и новичков.'],
      imgUrl: '/',
      specs: ['бокс'],
      quote: '"Я занимался боксом не так долго, но успел научиться главному. Терпение и труд вместе - победа. С этими качествами я теперь и работаю в тренерском составе нашего клуба. Мы делаем правильное дело, поэтому работается, конечно, с удовольствием. Всем, кто только хочет попробовать себя, могу посоветовать только одно: бокс начинается с зала. Приходите в секцию, переодевайтесь, переступите порог спортзала, переступите через свои страхи - тогда Вы действительно обретете мужество, а со всем остальным мы Вам старательно поможем"',
      socials: {
        inst: '1234',
      },
      // imgUrl: '@/assets/images/coach/1.jpg',
    },
    {
      id: "af6600f9-626e-41cd-9e41-d58b90edc275",
      name: 'Огородник Артем',
      desc: ['КМС по боксу, воспитанник нашей школы бокса, инструктор с 2021г.'],
      imgUrl: '/',
      specs: ['бокс'],
      socials: {
        inst: '5678',
      },
      // imgUrl: '@/assets/images/coach/2.jpg',
    },
    {
      id: "43e6014b-b44c-4009-af8a-e4fe42e8bddc",
      name: 'Коцоев Арсений',
      desc: [
        'КМС по боксу и кик-боксингу, Арсений является ярким представителем школы единоборств Республики Северная Осетия - Алания. Тренирует персонально во всех залах клуба!',
      ],
      imgUrl: '/',
      specs: ['бокс'],
      socials: {
        inst: 'aboba',
      },
      // imgUrl: '@/assets/images/coach/1.jpg',
    },
    {
      id: "d500f4b7-8c11-49c0-9776-bdd61aa1eeb1",
      name: 'Аслан Жабоев',
      desc: [
        'Опытный тренер по единоборствам. МС по тайскому боксу, Мастер спорта по каратэ киукушинкай, он воспитал победителей и призеров Первенств Москвы и России.',
      ],
      imgUrl: '/',
      specs: ['тайский бокс'],

      // imgUrl: '@/assets/images/coach/2.jpg',
    },
    {
      id: "df1137f0-7602-47db-bbfa-e638bb30ed38",
      name: 'Кано Ашимов',
      desc: [
        'КМС по боксу, воспитанник наших тренеров : Пикулина Александра и Шишлова Родиона. В недавнем прошлом кандидат в национальную сборную.',
      ],
      imgUrl: '/',
      specs: ['бокс'],
      socials: {
        inst: 'wadttrbh',
      },
      // imgUrl: '@/assets/images/coach/1.jpg',
    },
    {
      id: "b6c2211a-df76-4a63-8d93-9b124d528d14",
      name: 'Регузов Вячеслав',
      desc: ['Обладатель черного пояса по Тхэквондо. Тренирует детей в Бутово.'],
      imgUrl: '/',
      specs: ['тхэквондо'],
      // imgUrl: '@/assets/images/coach/2.jpg',
    },
  ]
}

let counter = 0
let imagesArray: string[] = Object.values(coachImages)

for (const unit of coachInfoArray.data) {
  unit.imgUrl = imagesArray[counter++]
}

export const subjectsInfo: CardInfo[] = [{
  title: 'ТАЙСКИЙ БОКС',
  desc: 'Боевое искусство Таиланда, произошедшее из древнего тайского боевого искусства муай боран и схожее с другими индокитайскими боевыми искусствами Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Переписали до грустный залетают все.',
  imgUrl: '/',
  id: '1'
},
{
  title: 'КЛАССИЧЕСКИЙ БОКС',
  desc: 'Контактный вид спорта, единоборство, в котором спортсмены наносят друг другу удары кулаками в специальных перчатках. Рефери контролирует бой, который длится до 12 раундов Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Переписали до грустный залетают все.',
  imgUrl: '/',
  id: '2'
},
{
  title: 'ТХЭКВОНДО',
  desc: 'Корейское боевое искусство. Характерная особенность - активное использование ног в бою; причем как для ударов, так и для защитных действий. Общепринятое литературное толкование звучит как Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Переписали до грустный залетают все.',
  imgUrl: '/',
  id: '3'
}
]

counter = 0
imagesArray = Object.values(subjectImages)

for (const unit of subjectsInfo) {
  unit.imgUrl = imagesArray[counter++]
}

export const gymInfoArray: (GymInfo)[] = [
  {
    id: "a1b02072-43d1-4a83-8f3d-0cb9568a7d9b",
    name: 'БУТОВО',
    address: 'м.Скобелевская, ул. Изюмская, 22к3',
    phone: '',
    imgUrl: '/',
    coordinates: [37.557197, 55.551940],
  },
  {
    id: "51d575e0-e0fd-4970-a62d-8f6b2637abf6",
    name: 'Митино',
    address: 'м. Митино, ул. Митинская, 24Ас1',
    phone: '',
    imgUrl: '/',
    coordinates: [37.372449, 55.844041],
  },
  {
    id: "e49e8bc9-ba41-431e-83b1-79608f68ecb6",
    name: 'Коломенская',
    address: 'м. Коломенская, ул. Нагатинская, 34',
    phone: '',
    imgUrl: '/',
    coordinates: [37.659757, 55.677067],
  },
  {
    id: "7092fd10-2f6d-4fc7-9f9e-c1e6d7ceaef2",
    name: 'НОВОПЕРЕДЕЛКИНО',
    address: 'Боровское шоссе, 43, 1 этаж',
    imgUrl: '/',
    phone: '',
    coordinates: [37.356818, 55.639441],

  },
  {
    id: "758f3566-52db-47d6-a7f9-0ff659827234",
    name: 'МАРЬИНО',
    address: 'м. Марьино, Луговой проезд, д.5, 4 этаж',
    imgUrl: '/',
    phone: '',
    coordinates: [37.752993, 55.648921],
  },
  {
    id: "67313c47-9fb7-40b2-a586-ca3f8e97e439",
    name: 'ЛЕНИНСКИЙ ПРОСПЕКТ',
    address: 'м.Ленинский проспект, Площадь Гагарина Академическая, 5-й Донской проезд, д. 15, стр. 42',
    imgUrl: '/',
    phone: '',
    coordinates: [37.597495, 55.706031],
  },
  {
    id: "63c19268-a163-4673-b6df-263d4154705c",
    name: 'КАХОВСКАЯ',
    address: 'м. Каховская, ул. Большая Юшуньская, д. 14, к. 3',
    imgUrl: '/',
    phone: '',
    coordinates: [37.590461, 55.647950],
  }
]

counter = 0
imagesArray = Object.values(gymImages)

for (const gym of gymInfoArray) {
  gym.imgUrl = imagesArray[counter++]
}
