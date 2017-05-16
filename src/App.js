import './App.css'
import React, { Component } from 'react'
import logo from './react_baqend.svg'

import { Route, Switch } from 'react-router'
import { BrowserRouter, NavLink } from 'react-router-dom'

import { Provider } from 'react-redux'
import createStore from './store/store'

import Messages from './components/Messages/Messages'
import Account from './components/Account/Account'

const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div style={{ backgroundColor: '#eee', padding: '16px' }}>
              <img src={logo} style={{ height: '80px' }} alt="logo" />
              <br />
              <NavLink
                style={{ padding: '0 8px' }}
                activeStyle={{ textDecoration: 'underline' }}
                exact={true}
                to="/"
              >Chats</NavLink>
              <NavLink
                style={{ padding: '0 8px' }}
                activeStyle={{ textDecoration: 'underline' }}
                to="/account"
              >Account</NavLink>
            </div>
            <Switch>
              <Route exact path="/" component={Messages} />
              <Route path="/messages/:id" component={Messages}/>
              <Route path="/account" component={Account}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
