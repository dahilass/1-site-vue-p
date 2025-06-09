import type { ImageInfo } from "./types";

const images = import.meta.glob('@/assets/images/coach/*.jpg', {
  eager: true,
  as: 'url',
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
    imgUrl: '@/assets/images/coach/1.jpg',
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



for (const person of coachInfoArray) {
  person.id = crypto.randomUUID()
  person.imgUrl = Object.values(images)[counter++]
}
