import React, { useState } from "react";
import WelcomePage from "./pages/WelcomePages";
import LoginPage from './pages/LoginPage';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleStart = () => {
    setShowLogin(true);  // Mostra a tela de login ao clicar no botão "Começar"
  };

  return (
    <div>
      {showLogin ? (
        <LoginPage />
      ) : (
        <WelcomePage onStart={handleStart} />
      )}
    </div>
  );
}

export default App;