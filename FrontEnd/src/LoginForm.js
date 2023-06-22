import React, { useState } from 'react';
import './login.css';
import logo from './logo.svg';

const LoginForm = ({ onLogin }) => {
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

    // Perform login authentication here
    // Call onLogin function after successful authentication
    onLogin();
  };
  return (
    <div>
      <div className="login-left"></div>
      <div className="login-right">
        <img className="login-svg" src={logo} alt="Logo" />
        <div className="login-content">
          <div className="login-form-container">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="login-input"
                  placeholder="username"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="login-input form-input"
                  placeholder="password"
                />
              </div>
              <button type="submit" className="login-button">
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
