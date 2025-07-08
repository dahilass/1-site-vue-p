import type { CoachInfo } from "@/0_app/types/types"

const coachImages: Record<string, string> = import.meta.glob('../assets/*.jpg', {
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
const imagesArray: string[] = Object.values(coachImages)

for (const unit of coachInfoArray.data) {
  unit.imgUrl = imagesArray[counter++]
}
