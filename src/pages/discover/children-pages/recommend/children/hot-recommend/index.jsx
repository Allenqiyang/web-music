import React, { memo, useEffect } from 'react'
import {useDispatch, shallowEqual, useSelector} from "react-redux"

import { hot_recommend_limit } from '@/common/constants'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import {RecommendWrapper} from './style'
import { getHotRecommendAction } from '../../store/actionCreators'

const HotRecommend = memo(() => {
  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(hot_recommend_limit))
  }, [dispatch])

  return (
    <RecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}/>
      <div>
        {
          hotRecommends.map((item, index) => {
            return <h3>{item.name}</h3>
          })
        }
      </div>
    </RecommendWrapper>
  )
})

export default HotRecommend