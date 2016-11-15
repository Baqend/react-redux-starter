import { login, logout } from '../../../modules/application'

// ------------------------------------
// Constants
// ------------------------------------
export const INPUT_CHANGE = 'INPUT_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export const submit = (event) => {
  event.preventDefault()
  return (dispatch, getState) => {
    dispatch(login(getState().account))
  }
}

export const inputChange = (event) => {
  return {
    type: INPUT_CHANGE,
    payload: { [event.target.name]: event.target.value }
  }
}

export const logoutButton = () => {
  return (dispatch, getState) => {
    dispatch(logout())
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [INPUT_CHANGE] : (state, action) => Object.assign(state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { username: '', password: '' }
export default function accountReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
