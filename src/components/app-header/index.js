import React, { memo } from 'react'
import {Link} from 'react-router-dom'

const AppHeader = memo(() => {
  return (
    <div>
      <Link to="/">发现音乐</Link>
      <Link to="/mine">我的</Link>
      <Link to="/friend">关系</Link>
    </div>
  )
})

export default AppHeader