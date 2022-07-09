import React, { memo, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreators'

const RecommendRanking = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单"/>
    </RankingWrapper>
  )
})

export default RecommendRanking