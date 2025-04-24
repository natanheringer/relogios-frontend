import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', username, password);
    
    // Aqui poderia ter uma verificação real
    if (username && password) {
      onLoginSuccess(); // Chama a função que mostra a MainPage
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Usuário ou E-mail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
          <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <span className="checkbox-text">Lembre-se de mim</span>
          </div>
          <div className="forgot-password">
            <a href="/esqueci-senha">Esqueceu a senha?</a>
          </div>
          <div className="register-link">
            <span>Não tem uma conta?</span>
            <a href="/register">Registre-se</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;