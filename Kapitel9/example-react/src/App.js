import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function UserList(props) {
  const users = props.users;
  const listItems = users.map((user) =>
    <li>
      {user.firstName} {user.lastName}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
  
const users = [
  {
    firstName: 'Max',
    lastName: 'Mustermann'
  },
  {
    firstName: 'Moritz',
    lastName: 'Mustermann'
  },
  {
    firstName: 'Peter',
    lastName: 'Mustermann'
  },
  {
    firstName: 'Petra',
    lastName: 'Mustermann'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <UserList users={users} />
        </p>
      </div>
    );
  }
}

export default App;
