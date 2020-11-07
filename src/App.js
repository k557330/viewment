import React from 'react'
import { Route } from 'react-router-dom'

import MainPage from './pages/MainPage'

import Paths from './paths'

import './static/scss/App.scss'
import './static/scss/Menu.scss'
import './static/scss/Option.scss'
import './static/scss/Prediction.scss'

const App = () => {
  return (
    <Route path={Paths.index} component={MainPage} />
  )
}

export default App