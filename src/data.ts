import type { CardInfo, NavItem, ImgInfo } from "./types";

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

export const coachInfoArray: CardInfo[] = [
  {
    name: 'Шишлов Радион',
    desc: 'Основатель и руководитель клуба. Специализируется на подготовке детей и новичков.',
    imgUrl: '/',
    id: crypto.randomUUID()

    // imgUrl: '@/assets/images/coach/1.jpg',
  },
  {
    name: 'Огородник Артем',
    desc: 'КМС по боксу, воспитанник нашей школы бокса, инструктор с 2021г.',
    imgUrl: '/',
    id: crypto.randomUUID()

    // imgUrl: '@/assets/images/coach/2.jpg',
  },
  {
    name: 'Коцоев Арсений',
    desc: 'КМС по боксу и кик-боксингу, Арсений является ярким представителем школы единоборств Республики Северная Осетия - Алания. Тренирует персонально во всех залах клуба!',
    imgUrl: '/',
    id: crypto.randomUUID()

    // imgUrl: '@/assets/images/coach/1.jpg',
  },
  {
    name: 'Аслан Жабоев',
    desc: 'Опытный тренер по единоборствам. МС по тайскому боксу, Мастер спорта по каратэ киукушинкай, он воспитал победителей и призеров Первенств Москвы и России.',
    imgUrl: '/',
    id: crypto.randomUUID()

    // imgUrl: '@/assets/images/coach/2.jpg',
  },
  {
    name: 'Кано Ашимов',
    desc: 'КМС по боксу, воспитанник наших тренеров : Пикулина Александра и Шишлова Родиона. В недавнем прошлом кандидат в национальную сборную.',
    imgUrl: '/',
    id: crypto.randomUUID()

    // imgUrl: '@/assets/images/coach/1.jpg',
  },
  {
    name: 'Регузов Вячеслав',
    desc: 'Обладатель черного пояса по Таэквондо. Тренирует детей в Бутово.',
    imgUrl: '/',
    id: crypto.randomUUID()

    // imgUrl: '@/assets/images/coach/2.jpg',
  }
]

let counter = 0;
let imagesArray: string[] = Object.values(coachImages)

for (const person of coachInfoArray) {
  person.imgUrl = imagesArray[counter++]
}

console.log(imagesArray)

export const subjectsInfo: CardInfo[] = [{
  name: 'ТАЙСКИЙ БОКС',
  desc: 'Боевое искусство Таиланда, произошедшее из древнего тайского боевого искусства муай боран и схожее с другими индокитайскими боевыми искусствами Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Переписали до грустный залетают все.',
  imgUrl: '/',
  id: crypto.randomUUID()
},
{
  name: 'КЛАССИЧЕСКИЙ БОКС',
  desc: 'Контактный вид спорта, единоборство, в котором спортсмены наносят друг другу удары кулаками в специальных перчатках. Рефери контролирует бой, который длится до 12 раундов Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Переписали до грустный залетают все.',
  imgUrl: '/',
  id: crypto.randomUUID()
},
{
  name: 'ТХЭКВОНДО',
  desc: 'Корейское боевое искусство. Характерная особенность - активное использование ног в бою; причем как для ударов, так и для защитных действий. Общепринятое литературное толкование звучит как Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Переписали до грустный залетают все.',
  imgUrl: '/',
  id: crypto.randomUUID()
}
]

counter = 0
imagesArray = Object.values(subjectImages)

for (const unit of subjectsInfo) {
  unit.imgUrl = imagesArray[counter++]
}

export const headerNavData: NavItem[] = [{ title: 'О НАС', path: '/about' }, { title: 'ЦЕНЫ', path: '/prices' }, { title: 'ТРЕНЕРЫ', path: '/mentors' }, { title: 'РАСПИСАНИЕ', path: '/schedule' }, { title: 'АРЕНДА', path: '/rent' }, { title: 'КОНТАКТЫ', path: '/contacts' }]
export const footerNavData: NavItem[] = [{ title: 'Начинающим', path: '/' }, { title: 'Оплата', path: '/' }, { title: 'Интересное', path: '/' }, { title: 'Юридическая информация', path: '/' }, { title: 'Обучение', path: '/' }, { title: 'Возврат', path: '/' }, { title: 'Контакты', path: '/' }]

export const gymInfoArray: (CardInfo & { coordinates: [number, number] })[] = [
  {
    name: 'СТРОГИНО',
    desc: 'ул. Маршала Катукова, 22к2, 4 этаж',
    imgUrl: '/',
    id: crypto.randomUUID(),
    coordinates: [37.407546, 55.805386]
  },
  {
    name: 'СОЛНЦЕВО-НОВОПЕРЕДЕЛКИНО',
    desc: 'Боровское шоссе, 43, 1 этаж',
    imgUrl: '/',
    id: crypto.randomUUID(),
    coordinates: [37.356818, 55.639441]
  },
  {
    name: 'МАРЬИНО',
    desc: 'м. Марьино, Луговой проезд, д.5, 4 этаж',
    imgUrl: '/',
    id: crypto.randomUUID(),
    coordinates: [37.752993, 55.648921]
  },
  {
    name: 'НОВОКОСИНО-РЕУТОВ',
    desc: 'м. Новокосино, г. Реутов, ул. Октября, 2Б',
    imgUrl: '/',
    id: crypto.randomUUID(),
    coordinates: [37.848790, 55.749192]
  },
  {
    name: 'БУТОВО',
    desc: 'м.Скобелевская, ул. Изюмская, 22к3',
    imgUrl: '/',
    id: crypto.randomUUID(),
    coordinates: [37.557197, 55.551940]
  },
  {
    name: 'ПЕРОВО',
    desc: 'м. Перово, 1-ая Владимирская ул., 10Б',
    imgUrl: '/',
    id: crypto.randomUUID(),
    coordinates: [37.771427, 55.757997]
  },
  {
    name: 'ЛЕНИНСКИЙ ПРОСПЕКТ',
    desc: 'м.Ленинский проспект, Площадь Гагарина Академическая, 5-й Донской проезд, д. 15, стр. 42',
    imgUrl: '/',
    id: crypto.randomUUID(),
    coordinates: [37.597495, 55.706031]
  },
  {
    name: 'КАХОВСКАЯ',
    desc: 'м. Каховская, ул. Большая Юшуньская, д. 14, к. 3',
    imgUrl: '/',
    id: crypto.randomUUID(),
    coordinates: [37.590461, 55.647950]
  }
]

counter = 0
imagesArray = Object.values(gymImages)

for (const gym of gymInfoArray) {
  gym.imgUrl = imagesArray[counter++]
}

counter = 0
imagesArray = Object.values(aboutImages)

export const aboutImgArray: ImgInfo[] = [
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


