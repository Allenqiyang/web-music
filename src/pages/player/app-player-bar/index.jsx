import React, { memo } from 'react'

import { Slider } from 'antd'
import { Control, Operator, PlaybarWrapper, PlayInfo } from './style'

const AppPlayerBar = memo(() => {
  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control>
          <button className='sprite_player prev'></button>
          <button className='sprite_player play'></button>
          <button className='sprite_player next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <a href='/#'>
              <img src="https://p2.music.126.net/PIWEMCcwkWBirWVujImhlA==/109951167627432823.jpg?param=34y34" alt="yeah"/>
            </a>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>南风曲</span>
              <a href="/#" className='singer-name'>要不要买菜</a>
            </div>
            <div className='progress'>
              <Slider defaultValue={30}/>
              <div className='time'>
                <span className='now-time'>02:30</span>
                <span className='divider'>/</span>
                <span className='duration'>03:07</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop'></button>
            <button className='sprite_player btn playlist'></button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  )
})

export default AppPlayerBar