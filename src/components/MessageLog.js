import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message.js';
import './MessageLog.css';

class MessageLog extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(
      {
        body: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
      }
    ))
  }

  render() {
    const messages = this.props.messages;
    const messageComponents = messages.map((message) => {
      return(
        <Message
          body={message.body}
          sender={message.sender}
          time={message.timeStamp}
          key={message.timeStamp}
        />
      )
    });

    return(
      <section className="message-log">
        {messageComponents}
      </section>
    )
  }
}

export default MessageLog;
