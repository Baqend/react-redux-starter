import { MESSAGES_LOAD, MESSAGES_LOAD_SUCCESS, MESSAGES_LOAD_FAILURE, MESSAGES_NEXT, MESSAGES_EVENT } from './types'

export function messagesLoad(args) {
  return {
    'BAQEND': {
      types: [
        MESSAGES_LOAD,
        MESSAGES_LOAD_SUCCESS,
        MESSAGES_LOAD_FAILURE
      ],
      payload: (db) => db.Tweet.find().limit(10).resultList()
    }
  }
}

export function messagesStream(args) {
  return {
    'BAQEND': {
      type: MESSAGES_NEXT,
      payload: (db) => {
        return db.Tweet.find().sort({ 'createdAt': -1 }).limit(10).resultStream()
      }
    }
  }
}

export function messagesEvents(args) {
  return {
    'BAQEND': {
      type: MESSAGES_EVENT,
      payload: (db) => {
        return db.Tweet.find().sort({ 'createdAt': -1 }).limit(10).eventStream()
      }
    }
  }
}
