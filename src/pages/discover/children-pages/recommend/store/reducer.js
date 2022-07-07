import {Map} from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: []
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.changeTopBanners:
      return state.set("topBanners", action.topBanners)
    case actionTypes.changeHotRecommend:
      return state.set("hotRecommends", action.hotRecommends)
    default:
      return state
  }
}

export default reducer