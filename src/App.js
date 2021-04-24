import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import ContactList from './ContactList';

const contacts = [ 
     				{ name: 'Tiago', email: 'tiago@neoenergia.com', avatarURL: 'http://localhost/angulartest/images/angularjs.png' }, 
     				{ name: 'Leonardo', email: 'leonardo@neoenergia.com', avatarURL: 'http://localhost/angulartest/images/react.png' }, 
     				{ name: 'Luciano', email: 'luciano@neoenergia.com', avatarURL: 'http://localhost/angulartest/images/vue.png' }
	 			 ];


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ContactList contacts={contacts} />
      </div>     
    );
  }
}

export default App;
