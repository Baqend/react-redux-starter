import { db } from 'baqend'

export default function baqend ({ dispatch, getState }) {
  return next => action => {
    if (typeof action === 'function') {
      const x = action(dispatch, getState)
      if (typeof x === 'function') {
        db.ready().then(() => x(db))
      }
      return
    }

    next(action)
  }
}
