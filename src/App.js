import React, { Component } from 'react';
import './App.css';
import MessageLog from './components/MessageLog.js'
import chatMessages from './data/messages.json';

class App extends Component {
  render() {
    console.log(chatMessages);
    const messageLog = chatMessages.map((message) => {
      return(
        {
          body: message.body,
          sender: message.sender,
          time: message.timeStamp
        }
      );
    })
    return (
      <main className="App">
        <header>
          <h1>Chat between Vladimir and Estragon</h1>
        </header>
        <MessageLog messages={messageLog}/>
      </main>
    );
  }
}

export default App;
