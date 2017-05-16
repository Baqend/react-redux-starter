import { MESSAGES_LOAD, MESSAGES_LOAD_SUCCESS, MESSAGES_LOAD_FAILURE } from './types'

export function messagesLoad(args) {
  return {
    'BAQEND': {
      types: [
        MESSAGES_LOAD,
        MESSAGES_LOAD_SUCCESS,
        MESSAGES_LOAD_FAILURE
      ],
      payload: (db) => db.Message.find().resultList()
    }
  }
}
