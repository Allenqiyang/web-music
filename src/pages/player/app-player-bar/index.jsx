import React, { memo } from 'react'
import { PlaybarWrapper } from './style'

const AppPlayerBar = memo(() => {
  return (
    <PlaybarWrapper className='sprite_player'>
      <h3>AppPlayerBar</h3>
    </PlaybarWrapper>
  )
})

export default AppPlayerBar