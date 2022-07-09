import React, { memo } from 'react'

import { getSizeImage } from '../../utils/data-format'

import { AlbumWrapper } from './style'

const AlbumCover = memo((props) => {
  const {info, size=130, width=153, bgp="-845px"} = props

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className='album-image'>
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href='/todo' className='cover sprite_covor'> </a>
      </div>
      <div className='album-info'>
        <div className='name'>{info.name}</div>
        <div className='artist'>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})

export default AlbumCover