import React, { memo } from 'react'

import { discoverMenu } from '@/common/local-data'

import { DiscoverWrapper, TopMenu } from './style'
import { NavLink } from 'react-router-dom'

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className='wrap-v1'>
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
    </DiscoverWrapper>
  )
})

export default Discover