import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import {BannerWrapper, BannerLeft, BannerRight, BannerControl} from './style'

const TopBanner = memo(() => {
  // 组件和redux关联：获取数据和进行操作
  const {topBanners} = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner