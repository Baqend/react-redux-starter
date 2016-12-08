import React from 'react'
import db from 'baqend'
import { Link } from 'react-router'

import './Chats.scss'

export const Chats = (props) => (
  <div>
    {props.chats.map(chat =>
      <div key={chat.key}>
        <h2>
          <img alt={chat.name} className='img-circle avatar' src={db.File(chat.face).url} />
          <Link to={`/chats/${chat.key}`}>{chat.name}</Link>
        </h2>
        <p>{chat.text}</p>
      </div>
    )}
  </div>
)

Chats.propTypes = {
  chats : React.PropTypes.array
}

export default Chats
