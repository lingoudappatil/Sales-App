import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login"); // Track current page

  const goToRegister = () => setCurrentPage("register");
  const goToLogin = () => setCurrentPage("login");
  const goToHome = () => setCurrentPage("home");

  return (
    <div>
      {currentPage === "login" && <LoginPage goToRegister={goToRegister} goToHome={goToHome} />}
      {currentPage === "register" && <RegisterPage goToLogin={goToLogin} goToHome={goToHome} />}
      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default App;
