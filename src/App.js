import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div>
      {currentPage === 'login' && (
        <LoginPage 
          goToRegister={() => setCurrentPage('register')}
          goToHome={() => setCurrentPage('home')}
        />
      )}
      
      {currentPage === 'register' && (
        <RegisterPage
          goToLogin={() => setCurrentPage('login')}
          goToHome={() => setCurrentPage('home')}
        />
      )}
      
      {currentPage === 'home' && (
        <HomePage setCurrentPage={setCurrentPage} />  // Pass setCurrentPage as prop
      )}
    </div>
  );
}

export default App;