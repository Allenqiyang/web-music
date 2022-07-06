import React, { memo } from 'react'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import {RecommendWrapper} from './style'

const HotRecommend = memo(() => {
  return (
    <RecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}/>
    </RecommendWrapper>
  )
})

export default HotRecommend