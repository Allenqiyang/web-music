import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { getNewAlbumAction } from '../../store/actionCreators'

const NewAlbum = memo(() => {
  const {newAlbums} = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <div>
      <ThemeHeaderRCM title="新碟上架"/>
      <div>
        {
          newAlbums.map(item => {
            return <div key={item.id}>{item.name}</div>
          })
        }
      </div>
    </div>
  )
})

export default NewAlbum