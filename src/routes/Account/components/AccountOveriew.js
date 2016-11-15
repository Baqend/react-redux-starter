import React from 'react'

export const AccountOverview = (props) => (
  <div>
    <p>Hello {props.user.username}</p>
    <button onClick={props.logout}>Logout</button>
  </div>
)

AccountOverview.propTypes = {
  logout      : React.PropTypes.func.isRequired,
  user        : React.PropTypes.object
}

export default AccountOverview
