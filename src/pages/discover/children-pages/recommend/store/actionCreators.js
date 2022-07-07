import * as actionTypes from './constants'

import { getTopBanners, getHotRecommends, getNewAlbum } from '../../../../../services/recommend'

const changeTopBannerAction = res => ({
  type: actionTypes.changeTopBanners,
  topBanners: res.banners
})

const changeHotRecommendAction = res => ({
  type: actionTypes.changeHotRecommend,
  hotRecommends: res.result
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = limit => {
  return dispatch => {
    getNewAlbum().then(res => {
      dispatch()
    })
  }
}