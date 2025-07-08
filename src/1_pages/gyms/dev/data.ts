import type { GymInfo } from "@/0_app/types/types"

const gymImages: Record<string, string> = import.meta.glob('@shared/assets/images/gyms/*.jpg', {
  eager: true,
  import: 'default',
})

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

let counter = 0
const imagesArray = Object.values(gymImages)

for (const gym of gymInfoArray) {
  gym.imgUrl = imagesArray[counter++]
}
