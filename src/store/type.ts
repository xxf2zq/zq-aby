interface RootObject {
  _id: string
  type: string
  title: string
  subtitle: string
  list: List[]
}

interface List {
  id: string
  picture_url: string
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

// {
//   _id: string
//   type: string
//   title: string
//   list: any[]
// }

interface IHome {
  goodPriceinfo: RootObject
  highscoreinfo: {
    _id: string
    type: string
    title: string
    subtitle: string
    list: any[]
  }
  discountinfo: {
    _id: string
    type: string
    title: string
    subtitle: string
    dest_list: any
    dest_address: any[]
  }
  hotrecommend: {
    _id: string
    type: string
    title: string
    subtitle?: string
    dest_list: any
    dest_address: any[]
  }
  longforinfo: {
    _id: string
    type: string
    title: string
    subtitle: string
    list: any[]
  }
  plusinfo: {
    _id: string
    type: string
    title: string
    subtitle: string
    list: any[]
  }
}

interface IAll {
  currentPage: number
  roomlist: Array<any>
  total: number
  isloading: boolean
}

interface IItem {
  id: string
  picture_url: string
  picture_urls: string[]
  name: string
  price: number
  price_format: string
  star_rating?: number
  star_rating_color: string
  reviews_count: number
  lat: number
  lng: number
  image_url: string
  verify_info: {
    messages: string[]
    text_color: string
  }
  bottom_info: {
    content: string
    content_color: string
    font_size: string
  }
}
interface IDetail {
  itemobj: IItem
}
interface IMain {
  headerConfig: {
    isFixed: boolean
    topAlpha: boolean
  }
}
export interface IStoreState {
  home: IHome
  all: IAll
  detail: IDetail
  main: IMain
}
