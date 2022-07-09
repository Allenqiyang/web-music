import {Map} from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: [
    "关于我和你", 
    "至夏",
    "苦茶子",
    "我是一只鱼",
    "再见莫妮卡",
    "LOVE",
    "我多想拥抱你",
    "小城夏天",
    "给你一瓶魔法药水",
    "每当我"
  ],
  newRanking: [
    "给你一瓶魔法药水",
    "我多想拥抱你",
    "可",
    "轻描淡写",
    "日落沙滩后",
    "再见莫妮卡",
    "账号已注销",
    "见爱响铃",
    "清风调(LIVE版)",
    "至夏"
  ],
  originRanking: [
    "黑本子(Black Benz)",
    "闹剧",
    "小海马",
    "L.A.M.W.",
    "喷子",
    "南风曲",
    "像一颗流星",
    "早回身",
    "废品站友人",
    "后会有期"
  ]
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.changeTopBanners:
      return state.set("topBanners", action.topBanners)
    case actionTypes.changeHotRecommend:
      return state.set("hotRecommends", action.hotRecommends)
    case actionTypes.changeNewAlbum:
      return state.set("newAlbums", action.newAlbums)
    // 网易云这里的接口不给用了妈的
    // case actionTypes.changeUpRanking:
    //   return state.set("upRanking", action.upRanking)
    // case actionTypes.changeNewRanking:
    //   return state.set("newRanking", action.newRanking)
    // case actionTypes.changeOriginRanking:
    //   return state.set("originRanking", action.originRanking)
    default:
      return state
  }
}

export default reducer