import './Account.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login, register, logout } from '../../actions/auth'

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.props.actions.login(this.state.username, this.state.password)
  }

  handleRegister = (event) => {
    event.preventDefault()
    this.props.actions.register(this.state.username, this.state.password)
  }

  handleLogout = (event) => {
    this.props.actions.logout()
  }

  render() {
    return (
      <div className='account'>
        {this.props.auth.isLoggedIn ? (
          <div>
            Hey { this.props.user.username }
            <p>
              <button onClick={this.handleLogout}>Logout</button>
            </p>
          </div>
        ) : (
          <form onChange={this.handleInputChange}>
            <div>
              <label htmlFor='username'>Username </label>
              <input type='text' name='username' defaultValue='' />
            </div>
            <div>
              <label htmlFor='password'>Password </label>
              <input type='password' name='password' defaultValue='' />
            </div>
            <br />
            <div>
              <button onClick={this.handleLogin}>Login</button>
              <button onClick={this.handleRegister}>Register</button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

Account.propTypes = {
  user: PropTypes.object
}

function mapStateToProps(state) {
  return { auth: state.auth, user: state.auth.user }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ login, register, logout }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
