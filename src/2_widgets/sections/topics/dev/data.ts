const subjectImages: Record<string, string> = import.meta.glob('../assets/*.jpg', {
  eager: true,
  // as: 'url'
  import: 'default'
})


export const topics = [
  { title: 'МУАЙ ТАЙ', imgUrl: '/', id: '1', router: 'muay-thai' },
  { title: 'КЛАССИЧЕСКИЙ БОКС ', imgUrl: '/', id: '2', router: 'boxing' },
  { title: 'ТХЭКВОНДО', imgUrl: '/', id: '3', router: 'taekwondo' },
  { title: 'ЗВЕЗДЫ БОКСА', imgUrl: '/', id: '4', router: 'boxing-stars' },
  { title: 'СОТРУДНИЧЕСТВО', imgUrl: '/', id: '5', router: 'cooperation' },
]

let counter = 0
const imagesArray = Object.values(subjectImages)

for (const unit of topics) {
  unit.imgUrl = imagesArray[counter++]
}
