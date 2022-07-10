import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './routes'
import store from './store'

import { HashRouter } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import AppPlayerBar from './pages/player/app-player-bar'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader/>
          {renderRoutes(routes)}
        <AppFooter/>
        <AppPlayerBar/>
      </HashRouter>
    </Provider>
  )
})

export default App