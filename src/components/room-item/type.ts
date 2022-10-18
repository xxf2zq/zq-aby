// interface IItem {
//   id: string
//   picture_url: string
//   picture_urls?: string[]
//   name: string
//   price: number
//   price_format: string
//   star_rating?: number
//   star_rating_color: string
//   reviews_count: number
//   lat: number
//   lng: number
//   image_url: string
//   verify_info: {
//     messages: string[]
//     text_color: string
//   }
//   bottom_info: {
//     content: string
//     content_color: string
//     font_size: string
//   }
// }
interface List {
  id: string
  picture_url: string
  picture_urls: string[]
  verify_info: Verifyinfo
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  reviews?: Review[]
  bottom_info?: Bottominfo
  lat: number
  lng: number
  image_url: string
}

interface Bottominfo {
  content: string
  content_color: string
  font_size: string
  visibility: string
}

interface Review {
  comments: string
  created_at: string
  is_translated: boolean
  localized_date: string
  reviewer_image_url: string
  review_id: string
}

interface Verifyinfo {
  messages: string[]
  text_color: string
}
export interface IProps {
  item: List
  widthitem?: string
  godatailfn?: () => void
}
