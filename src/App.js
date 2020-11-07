import React from 'react'
import { Route } from 'react-router-dom'

import MainPage from './pages/MainPage'

import Paths from './paths'

import './scss/App.scss'
import './scss/Menu.scss'
import './scss/Option.scss'
import './scss/Prediction.scss'

const App = () => {
  return <Route path={Paths.index} component={MainPage} />
}

export default App