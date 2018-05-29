import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp.js';
import './Message.css';

class Message extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
  }
  render() {
    return(
      <section>
        <h3>{this.props.sender}</h3>
        <p>{this.props.body}</p>
        <h6><Timestamp /></h6>
      </section>
    )
  }
}

export default Message;
