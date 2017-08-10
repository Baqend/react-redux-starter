import './Messages.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { db } from 'baqend/realtime'
import { messagesLoad, messagesStream, messagesEvents } from '../../actions/messages'

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.actions.messagesLoad({}).then(() => {
      this.props.actions.messagesStream({})
      this.props.actions.messagesEvents({})
    })
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id
    this.setState({ id: id })
  }

  render() {
    if(this.state.id) {
      this.messages = this.props.messages.list.filter(message => message.id.replace('/db/Message/','') === this.state.id)
    } else {
      this.messages = this.props.messages.list
    }
    // <img alt={message.name} className='avatar' src={db.File(message.face).url} />
    return (
      <div>
        <div className="messages">
          {this.messages.map(message =>
            <div key={message.id}>
              <h2 className='message-head'>
                <Link to={`/messages/${message.id.replace('/db/Message/','')}`}>{message.name}</Link>
              </h2>
              <p>{message.text}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

Messages.propTypes = {
  actions: PropTypes.object,
  messages: PropTypes.object
}

function mapStateToProps(state) {
  return { messages: state.messages, user: state.user }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ messagesLoad, messagesStream, messagesEvents }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
