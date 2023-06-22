import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    // Perform login logic here
    // Redirect to the chat window after successful login
    history.push('/chat');
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default Login;
