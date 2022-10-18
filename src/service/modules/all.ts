import request from '../request'

export const getallRoomlist = (offset = 0, size = 20) => {
  return request.get({
    url: '/entire/list',
    params: {
      offset,
      size,
    },
  })
}
