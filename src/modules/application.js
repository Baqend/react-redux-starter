import { db } from 'baqend'

// ------------------------------------
// Constants
// ------------------------------------
export const BAQEND_CONNECTING = 'BAQEND_CONNECTING'
export const BAQEND_CONNECTED = 'BAQEND_CONNECTED'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGGED_OUT = 'LOGGED_OUT'

// ------------------------------------
// Actions
// ------------------------------------
export function baqendConnect () {
  // change to your app name
  let appName = 'app-starter'

  return dispatch => {
    dispatch({
      type: BAQEND_CONNECTING
    })

    db.connect(appName)
      .then(() => dispatch({
        type: BAQEND_CONNECTED,
        user: db.User.me
      }))
  }
}

export function login (form, redirect) {
  const { username, password } = form
  return dispatch => {
    // simulate request
    db.User.login(username, password)
      .then((user) => {
        dispatch({
          type: LOGGED_IN,
          user
        })
        // Can be used to navigate to a new route
        if (redirect) redirect()
      })
  }
}

export function logout () {
  return dispatch => {
    db.User.logout()
      .then(() => dispatch({ type: LOGGED_OUT }))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BAQEND_CONNECTED] : (_, action) => ({ isConnected: true, user: action.user, isLoggedIn: !!action.user }),
  [LOGGED_IN] : (_, action) => ({ user: action.user, isLoggedIn: true }),
  [LOGGED_OUT] : () => ({ user: null, isLoggedIn: false })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  user: null,
  isConnected: false,
  isLoggedIn: false
}
export default function applicationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
