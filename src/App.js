import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import HomePage from './pages/HomePage'
import ReactPage from './pages/ReactPage'
import ReduxPage from './pages/ReduxPage'
import TypeScriptPage from './pages/TypeScriptPage'

export default function() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/react' component={ReactPage} />
        <Route path='/redux' component={ReduxPage} />
        <Route path='/typescript' component={TypeScriptPage} />
      </Switch>
      {/* <Loader /> */}
      <Footer />
    </>
  )
}
