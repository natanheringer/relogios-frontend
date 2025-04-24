import React, { useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="main-container">
      {/* Barra Superior */}
      <div className="top-bar">
        <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>☰</button>
        <h1 className="app-title">Relógios Lincoln</h1>
        <button className="user-button" onClick={() => setShowProfile(!showProfile)}>👤</button>
      </div>

      {/* Menu lateral esquerdo (Relógios) */}
      <div className={`side-menu ${showMenu ? 'open' : ''}`}>
        <h2>Linha de Relógios</h2>
        <ul>
          <li>Relógio Clássico</li>
          <li>Relógio Moderno</li>
          <li>Relógio Esportivo</li>
          <li>Relógio Luxo</li>
        </ul>
      </div>

      {/* Menu de usuário (Perfil, Segurança e Sair) */}
      <div className={`profile-menu ${showProfile ? 'open' : ''}`}>
        <h2>Opções do Usuário</h2>
        <ul>
          <li>Perfil</li>
          <li>Segurança</li>
          <li><button className="logout-button">Sair</button></li>
        </ul>
      </div>

      {/* Conteúdo principal */}
      <div className="main-box">
        <h1 className="main-title">Painel Principal</h1>
        <p className="main-text">Aqui você pode visualizar e gerenciar suas informações.</p>
        <button className="main-button">Explorar</button>
      </div>
    </div>
  );
};

export default MainPage;