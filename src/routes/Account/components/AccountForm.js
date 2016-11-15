import React from 'react'

export const AccountForm = (props) => (
  <form onSubmit={props.submit} onChange={props.inputChange}>
    <div>
      <label htmlFor='username'>Username </label>
      <input type='text' name='username' defaultValue='' />
    </div>
    <div>
      <label htmlFor='password'>Password </label>
      <input type='password' name='password' defaultValue='' />
    </div>
    <div>
      <button type='submit'>Login</button>
    </div>
  </form>
)

AccountForm.propTypes = {
  submit: React.PropTypes.func.isRequired,
  inputChange: React.PropTypes.func.isRequired
}

export default AccountForm
