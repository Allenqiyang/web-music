import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import { HashRouter } from 'react-router-dom'

const App = memo(() => {
  return (
    <HashRouter>
      <AppHeader/>
        {renderRoutes(routes)}
      <AppFooter/>
    </HashRouter>
  )
})

export default App