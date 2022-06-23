import React, { memo } from 'react'
// import { NavLink } from 'react-router-dom'

import { headerLinks } from "@/common/local-data.js"

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const AppHeader = memo(() => {
  const showSelectItem = (item, index) => {
    if(index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }
  
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href="#/" className='logo sprite_01'> </a>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' placeholder="Music/User/Radio" prefix={<SearchOutlined/>}/>
          <div className='button-center'>创作者中心</div>
          <div className='button-login'>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'>

      </div>
    </HeaderWrapper>
  )
})

export default AppHeader