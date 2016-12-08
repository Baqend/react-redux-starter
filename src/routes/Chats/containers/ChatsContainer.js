import { connect } from 'react-redux'

import Chats from '../components/Chats'

const mapStateToProps = (state) => ({
  chats     : state.chats
})

export default connect(mapStateToProps)(Chats)
