import request from '../request'

export const getgoodprice = () => {
  return request.get({
    url: '/home/goodprice',
  })
}

export const gethighscore = () => {
  return request.get({
    url: '/home/highscore',
  })
}

export const getdiscount = () => {
  return request.get({ url: '/home/discount' })
}

export const gethotrecommend = () => {
  return request.get({ url: '/home/hotrecommenddest' })
}

export const getlongfor = () => {
  return request.get({ url: '/home/longfor' })
}

export const getPlusdata = () => {
  return request.get({ url: '/home/plus' })
}
