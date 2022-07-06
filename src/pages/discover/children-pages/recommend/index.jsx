import React, { memo } from 'react'

import { RecommendWrapper } from './style'
import TopBanner from './children/top-banner'

const Recommend = memo(() => {

  return (
    <RecommendWrapper>
      <TopBanner/>
    </RecommendWrapper>
  )
})

export default Recommend