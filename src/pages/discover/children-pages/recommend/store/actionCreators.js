// 创建action并且发送网络请求也是在这里
import * as actionTypes from './constants'

import { 
  getTopBanners, 
  getHotRecommends, 
  getNewAlbum, 
  // getTopList
} from '../../../../../services/recommend'

const changeTopBannerAction = res => ({
  type: actionTypes.changeTopBanners,
  topBanners: res.banners
})

const changeHotRecommendAction = res => ({
  type: actionTypes.changeHotRecommend,
  hotRecommends: res.result
})

const changeNewAlbumAction = res => ({
  type: actionTypes.changeNewAlbum,
  newAlbums: res.albums
})

// const changeUpRankingAction = res => ({
//   type: actionTypes.changeUpRanking,
//   upRanking: res.playList
// })

// const changeNewRankingAction = res => ({
//   type: actionTypes.changeNewRanking,
//   newRanking: res.playList
// })

// const changeOriginRankingAction = res => ({
//   type: actionTypes.changeOriginRanking,
//   originRanking: res.playList
// })

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
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

// 接口用不了了
// export const getTopListAction = idx => {
//   return dispatch => {
//     getTopList(idx).then(res => {
//       getTopList(idx).then(res => {
//         switch(idx) {
//           case 0:
//             dispatch(changeUpRankingAction(res))
//             break
//           case 2:
//             dispatch(changeNewRankingAction(res))
//             break
//           case 3:
//             dispatch(changeOriginRankingAction(res))
//             break
//           default: 
//         }
//       })
//     })
//   }
// }