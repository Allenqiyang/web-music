import React, { memo, useEffect } from 'react'

import { getNewAlbum } from '@/services/recommend'

import ThemeHeaderRCM from '@/components/theme-header-rcm'

const NewAlbum = memo(() => {
  useEffect(() => {
    getNewAlbum(10).then(res => {
      console.log(res)
    })
  })

  return (
    <div>
      <ThemeHeaderRCM title="新碟上架"/>
    </div>
  )
})

export default NewAlbum