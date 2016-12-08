// ------------------------------------
// Constants
// ------------------------------------
export const LOADED_CHATS = 'LOADED_CHATS'

// ------------------------------------
// Actions
// ------------------------------------

export function loadChats () {
  return dispatch => db => {
    db.Message
      .find()
      .resultList(chats => dispatch({
        type: LOADED_CHATS,
        chats
      }))
  }
}

export function loadChat (id) {
  return dispatch => db => {
    db.Message
      .load(id)
      .then(chat => dispatch({
        type: LOADED_CHATS,
        chats: chat ? [chat] : []
      }))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOADED_CHATS] : (_, action) => action.chats
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function accountReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
