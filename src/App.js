import React, { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';  

function App() {
  // Estado para controlar a exibição da tela de login
  const [showLogin, setShowLogin] = useState(false);
  // Estado para controlar a exibição da página principal
  const [showMain, setShowMain] = useState(false);
  

  const handleStart = () => {
    setShowLogin(true);  // Mostra a tela de login ao clicar no botão "Começar"
  };


  const handleLoginSuccess = () => {
    setShowLogin(false);
    setShowMain(true);
  };

  return (
    <div>
      {showMain ? (
        <MainPage />
      ) : showLogin ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <WelcomePage onStart={handleStart} />
      )}
    </div>
  );
}

export default App;