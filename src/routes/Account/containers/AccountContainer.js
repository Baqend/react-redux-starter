import { connect } from 'react-redux'

import Account from '../components/Account'
import { inputChange, submitLogin, submitRegister, logoutButton } from '../modules/account'

const mapDispatchToProps = {
  submitLogin,
  submitRegister,
  inputChange,
  logout: () => logoutButton()
}

const mapStateToProps = (state) => ({
  counter     : state.counter,
  isLoggedIn  : state.application.isLoggedIn,
  user        : state.application.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)
