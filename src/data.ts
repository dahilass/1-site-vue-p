import type { ImageInfo, NavItem } from "./types";

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


export const coachInfoArray: ImageInfo[] = [
  {
    name: 'Шишлов Радион',
    desc: 'Основатель и руководитель клуба. Специализируется на подготовке детей и новичков.',
    // imgUrl: '@/assets/images/coach/1.jpg',
  },
  {
    name: 'Огородник Артем',
    desc: 'КМС по боксу, воспитанник нашей школы бокса, инструктор с 2021г.',
    // imgUrl: '@/assets/images/coach/2.jpg',
  },
  {
    name: 'Коцоев Арсений',
    desc: 'КМС по боксу и кик-боксингу, Арсений является ярким представителем школы единоборств Республики Северная Осетия - Алания. Тренирует персонально во всех залах клуба!',
    // imgUrl: '@/assets/images/coach/1.jpg',
  },
  {
    name: 'Аслан Жабоев',
    desc: 'Опытный тренер по единоборствам. МС по тайскому боксу, Мастер спорта по каратэ киукушинкай, он воспитал победителей и призеров Первенств Москвы и России.',
    // imgUrl: '@/assets/images/coach/2.jpg',
  },
  {
    name: 'Кано Ашимов',
    desc: 'КМС по боксу, воспитанник наших тренеров : Пикулина Александра и Шишлова Родиона. В недавнем прошлом кандидат в национальную сборную.',
    // imgUrl: '@/assets/images/coach/1.jpg',
  },
  {
    name: 'Регузов Вячеслав',
    desc: 'Обладатель черного пояса по Таэквондо. Тренирует детей в Бутово.',
    // imgUrl: '@/assets/images/coach/2.jpg',
  }
]

let counter = 0;
let imagesArray: string[] = Object.values(coachImages)

for (const person of coachInfoArray) {
  person.id = crypto.randomUUID()
  person.imgUrl = imagesArray[counter++]
}

export const subjects: ImageInfo[] = [{
  name: 'ТАЙСКИЙ БОКС',
  desc: 'Боевое искусство Таиланда, произошедшее из древнего тайского боевого искусства муай боран и схожее с другими индокитайскими боевыми искусствами Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Переписали до грустный залетают все.',
  router: '/'
},
{
  name: 'КЛАССИЧЕСКИЙ БОКС',
  desc: 'Контактный вид спорта, единоборство, в котором спортсмены наносят друг другу удары кулаками в специальных перчатках. Рефери контролирует бой, который длится до 12 раундов Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Переписали до грустный залетают все.',
  router: '/'
},
{
  name: 'ТХЭКВОНДО',
  desc: 'Корейское боевое искусство. Характерная особенность - активное использование ног в бою; причем как для ударов, так и для защитных действий. Общепринятое литературное толкование звучит как Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Переписали до грустный залетают все.',
  router: '/'
}
]

counter = 0
imagesArray = Object.values(subjectImages)

for (const unit of subjects) {
  unit.id = crypto.randomUUID()
  unit.imgUrl = imagesArray[counter++]
}

export const headerNavData: NavItem[] = [{ title: 'О НАС', path: '/' }, { title: 'ЦЕНЫ', path: '/' }, { title: 'ТРЕНЕРЫ', path: '/' }, { title: 'РАСПИСАНИЕ', path: '/' }, { title: 'АРЕНДА', path: '/' }, { title: 'КОНТАКТЫ', path: '/' }]
export const footerNavData: NavItem[] = [{ title: 'Начинающим', path: '/' }, { title: 'Оплата', path: '/' }, { title: 'Интересное', path: '/' }, { title: 'Юридическая информация', path: '/' }, { title: 'Обучение', path: '/' }, { title: 'Возврат', path: '/' }, { title: 'Контакты', path: '/' }]
