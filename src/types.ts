// src/types.ts

// interface CardServerModel {
//  id: string
//  name: string
//  desc: string
//  createdAt: string
//  updatedAt: string
//  isVisible: boolean
//  imgUrl: string
//  imgMeta: {
//    width: Number,
//    height: Number,
//    alt: String
//    }
//  tags?: String[]
// }

export type ImgInfo = {
  imgUrl: string
  id: string
}
export type CardBase = {
  name: string
  desc: string
}
export type CardInfo = ImgInfo & CardBase & {
  router?: string
  coordinates?: [number, number]
}

export type NavItem = {
  title: string,
  path: string,
}
