import { injectReducer } from '../../store/reducers'
import { loadChats, loadChat } from './modules/chats'

export default (store) => ({
  path : 'chats(/:id)',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Chats = require('./containers/ChatsContainer').default
      const reducer = require('./modules/chats').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'chats', reducer })

      /*  Return getComponent   */
      cb(null, Chats)

    /* Webpack named bundle   */
    }, 'chats')
  },
  onEnter (nextState) {
    if (nextState.params.id) {
      store.dispatch(loadChat(nextState.params.id))
    } else {
      store.dispatch(loadChats())
    }
  }
})
