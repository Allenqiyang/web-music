import * as actionTypes from './constants'

import { getTopBanners } from '../../../../../services/recommend'

const changeTopBannerAction = res => ({
  type: actionTypes.change,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}