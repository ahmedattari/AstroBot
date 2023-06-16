import React, { useState } from 'react';
import './login.css';
import logo from './logo.svg';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, such as sending the username and password to a server
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <div className="left"></div>
      <div className="right">
        <img className="svg" src={logo} alt="Logo" />
        <div className="content">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="form-username"
                  placeholder="username"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="form-password form-input"
                  placeholder="password"
                />
              </div>
              <button type="submit" className="form-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
