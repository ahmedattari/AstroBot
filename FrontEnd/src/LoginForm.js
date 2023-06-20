import React, { useState } from 'react';
import './login.css';
import logo from './logo.svg';
import neo4j from 'neo4j-driver';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const driver = neo4j.driver('bolt://localhost:7474', neo4j.auth.basic('neo4j', 'password'));
  const session = driver.session();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
        event.preventDefault();
      
        const driver = neo4j.driver(
          'bolt://localhost:7687',
          neo4j.auth.basic('neo4j', 'password')
        );
      
        try {
          const session = driver.session();
      
          const result = await session.run(
            'CREATE (n:User {username: $username, password: $password}) RETURN count(n) AS nodeCount',
            { username, password }
          );
      
          const nodeCount = result.records[0].get('nodeCount');
      
          console.log('Nodes created:', nodeCount);
      
          setUsername('');
          setPassword('');
        } catch (error) {
          console.error('Error creating node:', error);
        } finally {
          session.close();
          driver.close();
        }
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
