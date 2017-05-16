import { MESSAGES_LOAD, MESSAGES_LOAD_SUCCESS, MESSAGES_LOAD_FAILURE } from '../actions/types'

const initalState = {
  loaded: false,
  loading: false,
  list: []
}

export default function messages(state = initalState, action = {}) {
  switch (action.type) {

    case MESSAGES_LOAD:
      return { ...state, loading: true }
    case MESSAGES_LOAD_SUCCESS:
      return { ...state, loaded: true, loading: false, list: action.payload }
    case MESSAGES_LOAD_FAILURE:
      return { ...state, loaded: true, loading: false, list: [] }
    default:
      return state
  }
}
