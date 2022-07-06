import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

const Recommend = memo(() => {
  // 组件和redux关联：获取数据和进行操作
  const {topBanners} = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual)
  const dispatch = useDispatch()

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      Recommend: {topBanners.length}
    </div>
  )
})

export default Recommend