import React, { useState } from 'react';
import './login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Lógica para autenticar o usuário com o email e senha fornecidos
    // ...

    // Resetar os campos de email e senha
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
    </div>
  );
};

export default Login;