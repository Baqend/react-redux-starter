import React from 'react'

export const AccountForm = (props) => (
  <form onChange={props.inputChange}>
    <div>
      <label htmlFor='username'>Username </label>
      <input type='text' name='username' defaultValue='' />
    </div>
    <div>
      <label htmlFor='password'>Password </label>
      <input type='password' name='password' defaultValue='' />
    </div>
    <div>
      <button onClick={props.submitLogin}>Login</button>
      <button onClick={props.submitRegister}>Register</button>
    </div>
  </form>
)

AccountForm.propTypes = {
  submitLogin: React.PropTypes.func.isRequired,
  submitRegister: React.PropTypes.func.isRequired,
  inputChange: React.PropTypes.func.isRequired
}

export default AccountForm
