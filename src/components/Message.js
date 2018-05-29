import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp.js';
import './Message.css';

class Message extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }

  render() {
    return(
      <section className={this.props.sender === "Vladimir" ? "left" : "right"}>
        <h3>{this.props.sender}</h3>
        <p>{this.props.body}</p>
        <h6><Timestamp time={this.props.time}/></h6>
      </section>
    )
  }
}

export default Message;
