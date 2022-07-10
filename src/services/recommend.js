import request from './request'

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

// 网易云这一块的接口用不了了☹️
export function getTopList(idx) {
  return request({
    url: "/toplist",
    params: {
      idx
    }
  })
}