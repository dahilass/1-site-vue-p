import type { CardInfo, NavItem, Img, GymInfo, PersonInfo } from "./types/types";


const aboutDropdown = [{ title: 'новости', path: '/news' }, { title: 'обучение боксу', path: '/training' }, { title: 'соревнования', path: '/competitions' }, { title: 'спортсмены', path: '/sportsmen' }, { title: 'отзывы', path: '/comments' }, { title: 'сборы', path: '/bootcamps' }, { title: 'интересное', path: '/wiki' }],
  scheduleDropdown = [{ title: 'тренировки', path: '/schedule' }, { title: 'календарь соревнований', path: '/competitions-calendar' }, { title: 'расписание тренеров', path: '/coach-calendar' }]

export const headerNavData: NavItem[] = [{ title: 'О НАС', path: '/about', dropdown: aboutDropdown }, { title: 'ЦЕНЫ', path: '/prices' }, { title: 'ТРЕНЕРЫ', path: '/mentors' }, { title: 'РАСПИСАНИЕ', path: '/schedule', dropdown: scheduleDropdown }, { title: 'КОНТАКТЫ', path: '/contacts' }]
export const footerNavData: NavItem[] = [{ title: 'Начинающим', path: '/' }, { title: 'Оплата', path: '/' }, { title: 'Интересное', path: '/' }, { title: 'Юридическая информация', path: '/' }, { title: 'Обучение', path: '/' }, { title: 'Возврат', path: '/' }, { title: 'Контакты', path: '/' }]

// about: спортсмены, отзывы, сборы?, новости?, интересное, обучение боксу?
// schedule: расписание, соревнования, календарь соревнований

const coachImages: Record<string, string> = import.meta.glob('@/assets/images/coach/*.jpg', {
  eager: true,
  // as: 'url'
  import: 'default'
})

const subjectImages: Record<string, string> = import.meta.glob('@/assets/images/subject/*.jpg', {
  eager: true,
  // as: 'url'
  import: 'default'
})

const gymImages: Record<string, string> = import.meta.glob('@/assets/images/gyms/*.jpg', {
  eager: true,
  import: 'default',
})

const aboutImages: Record<string, string> = import.meta.glob('@/assets/images/about/*.jpg', {
  eager: true,
  import: 'default'
})

export const coachInfoArray: PersonInfo[] = [
  {
    name: 'Шишлов Радион',
    desc: 'Основатель и руководитель клуба. Специализируется на подготовке детей и новичков.',
    imgUrl: '/',

    // imgUrl: '@/assets/images/coach/1.jpg',
  },
  {
    name: 'Огородник Артем',
    desc: 'КМС по боксу, воспитанник нашей школы бокса, инструктор с 2021г.',
    imgUrl: '/',

    // imgUrl: '@/assets/images/coach/2.jpg',
  },
  {
    name: 'Коцоев Арсений',
    desc: 'КМС по боксу и кик-боксингу, Арсений является ярким представителем школы единоборств Республики Северная Осетия - Алания. Тренирует персонально во всех залах клуба!',
    imgUrl: '/',

    // imgUrl: '@/assets/images/coach/1.jpg',
  },
  {
    name: 'Аслан Жабоев',
    desc: 'Опытный тренер по единоборствам. МС по тайскому боксу, Мастер спорта по каратэ киукушинкай, он воспитал победителей и призеров Первенств Москвы и России.',
    imgUrl: '/',

    // imgUrl: '@/assets/images/coach/2.jpg',
  },
  {
    name: 'Кано Ашимов',
    desc: 'КМС по боксу, воспитанник наших тренеров : Пикулина Александра и Шишлова Родиона. В недавнем прошлом кандидат в национальную сборную.',
    imgUrl: '/',

    // imgUrl: '@/assets/images/coach/1.jpg',
  },
  {
    name: 'Регузов Вячеслав',
    desc: 'Обладатель черного пояса по Таэквондо. Тренирует детей в Бутово.',
    imgUrl: '/',

    // imgUrl: '@/assets/images/coach/2.jpg',
  }
]

let counter = 0;
let imagesArray: string[] = Object.values(coachImages)

for (const person of coachInfoArray) {
  person.imgUrl = imagesArray[counter++]
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
    name: 'БУТОВО',
    address: 'м.Скобелевская, ул. Изюмская, 22к3',
    phone: '',
    imgUrl: '/',
    coordinates: [37.557197, 55.551940],
  },
  {
    name: 'Митино',
    address: 'м. Митино, ул. Митинская, 24Ас1',
    phone: '',
    imgUrl: '/',
    coordinates: [37.372449, 55.844041],
  },
  {
    name: 'Коломенская',
    address: 'м. Коломенская, ул. Нагатинская, 34',
    phone: '',
    imgUrl: '/',
    coordinates: [37.659757, 55.677067],
  },
  {
    name: 'НОВОПЕРЕДЕЛКИНО',
    address: 'Боровское шоссе, 43, 1 этаж',
    imgUrl: '/',
    phone: '',
    coordinates: [37.356818, 55.639441],

  },
  {
    name: 'МАРЬИНО',
    address: 'м. Марьино, Луговой проезд, д.5, 4 этаж',
    imgUrl: '/',
    phone: '',
    coordinates: [37.752993, 55.648921],
  },
  {
    name: 'ЛЕНИНСКИЙ ПРОСПЕКТ',
    address: 'м.Ленинский проспект, Площадь Гагарина Академическая, 5-й Донской проезд, д. 15, стр. 42',
    imgUrl: '/',
    phone: '',
    coordinates: [37.597495, 55.706031],
  },
  {
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

counter = 0
imagesArray = Object.values(aboutImages)

export const aboutImgArray: (Img & { id: string })[] = [
  { id: '1', imgUrl: '' },
  { id: '2', imgUrl: '' },
  { id: '3', imgUrl: '' }
]

for (const img of aboutImgArray) {
  img.id = crypto.randomUUID()
  img.imgUrl = imagesArray[counter++]
}

// for (const image of imagesArray) {
//   aboutImgArray.push({
//     imgUrl: image,
//     id: crypto.randomUUID()
//   })
// }

// export const wiki

