import * as actionTypes from './constants'

const defaultState = {
  topBanners: []
}

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.change:
      return {...state, topBanners: []}
    default:
      return state
  }
}

export default reducer