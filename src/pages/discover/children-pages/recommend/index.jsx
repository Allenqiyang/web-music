import React, { memo } from 'react'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
import TopBanner from './children/top-banner'
import HotRecommend from './children/hot-recommend'
import NewAlbum from './children/new-album'
import RecommendRanking from './children/recommend-ranking'

const Recommend = memo(() => {

  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend