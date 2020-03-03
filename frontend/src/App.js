import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


async function getUsers()
{
  let response = await fetch(`http://localhost:8000/users/`);
  let data = await response.json();
  return data.results;
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers('yourUsernameHere')
      .then(setUsers);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        { users.map(user => (
          <div>
            <h3>{user.username}</h3>
            <h6>{user.email}</h6>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
