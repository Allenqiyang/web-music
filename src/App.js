import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './routes'
import store from './store'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import { HashRouter } from 'react-router-dom'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader/>
          {renderRoutes(routes)}
        <AppFooter/>
      </HashRouter>
    </Provider>
  )
})

export default App