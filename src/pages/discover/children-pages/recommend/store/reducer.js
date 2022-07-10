import {Map} from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: [],
  newRanking: [],
  originRanking: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.changeTopBanners:
      return state.set("topBanners", action.topBanners)
    case actionTypes.changeHotRecommend:
      return state.set("hotRecommends", action.hotRecommends)
    case actionTypes.changeNewAlbum:
      return state.set("newAlbums", action.newAlbums)
    case actionTypes.changeUpRanking:
      return state.set("upRanking", action.upRanking)
    case actionTypes.changeNewRanking:
      return state.set("newRanking", action.newRanking)
    case actionTypes.changeOriginRanking:
      return state.set("originRanking", action.originRanking)
    default:
      return state
  }
}

export default reducer