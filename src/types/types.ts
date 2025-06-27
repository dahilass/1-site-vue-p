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

export type Theme = 'light' | 'dark' | 'system'

export type Img = {
  imgUrl: string
}
export type ImgInfo = Img & {
  title: string
}

export type CardInfo = {
  title: string
  desc?: string
  imgUrl: string
  id: string
  coordinates?: number[]
}

export type PersonInfo = {
  name: string
  desc?: string
  imgUrl: string
}

export type GymInfo = {
  name: string,
  phone: string
  address: string,
  coordinates: number[]
  imgUrl: string
  properties?: {
    desc: string[]
    schedule: string[]
    gallery: string[]
    coaches: string[]
  }
}

export type NavItem = {
  title: string,
  path: string,
  complex?: boolean,
  dropdown?: NavItem[]
}

export type ModalMode = 'comment' | 'training' | null
