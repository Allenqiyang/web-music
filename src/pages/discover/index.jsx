import React, { memo } from 'react'

import { discoverMenu } from '@/common/local-data'

import { DiscoverWrapper, TopMenu } from './style'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const Discover = memo((props) => {
  const {route} = props
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className='wrap-v1'>
          {
            discoverMenu.map(item => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})

export default Discover