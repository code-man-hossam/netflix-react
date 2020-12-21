import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Movies from './Movies'

function App() {
  return (
    <div className='app'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
