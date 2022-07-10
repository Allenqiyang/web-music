import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreators'

const RecommendRanking = memo(() => {
  // 接口用不了了请求不了数据我只能写固定数据了☹️
  const upImageUrl = "http://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg"
  const upName = "飙升榜"
  const upList = [
    "该死的泪",
    "愚忠",
    "再见莫妮卡",
    "别怕变老",
    "别怕变老(LIVE版)",
    "再见莫妮卡",
    "爱要怎么说出口",
    "想自由",
    "泡沫",
    "每当我"
  ]
  const newImageUrl = "http://p2.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg"
  const newName = "新歌榜"
  const newList = [
    "给你一瓶魔法药水",
    "我多想拥抱你",
    "再见莫妮卡",
    '轻描淡写',
    "见爱响铃",
    "账号已注销",
    "日落沙滩后",
    "该死的泪",
    "别怕变老 (LIVE版)",
    "清风调(LIVE版)"
  ]
  const originImageUrl = "http://p2.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg"
  const oriName = "原创榜"
  const originList = [
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

  const {upRanking, newRanking, originRanking} = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单"/>
      <div className='tops'>
        <TopRanking info={upRanking} index={0} list={upList} image={upImageUrl} name={upName}/>
        <TopRanking info={newRanking} index={1} list={newList} image={newImageUrl} name={newName}/>
        <TopRanking info={originRanking} index={2} list={originList} image={originImageUrl} name={oriName}/>
      </div>
    </RankingWrapper>
  )
})

export default RecommendRanking