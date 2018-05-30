import React, { Component } from 'react';
import './App.css';
import MessageLog from './components/MessageLog.js'
import chatMessages from './data/messages.json';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <h1>Chat between Vladimir and Estragon</h1>
        </header>
        <MessageLog messages={chatMessages}/>
      </main>
    );
  }
}

export default App;
