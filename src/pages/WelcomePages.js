import React from "react";
import './WelcomePage.css';

const WelcomePage = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <h1 className="logo-text">Relogios Lincoln</h1>
      <h2 className="welcome-text">Bem-vindo!</h2>
      <button className="start-button" onClick={onStart}>Começar</button>
    </div>
  );
};

export default WelcomePage;