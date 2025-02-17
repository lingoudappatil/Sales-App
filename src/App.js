import React, { useState } from 'react'; // Import useState
import LoginPage from './LoginPage'; // Import LoginPage component
import HomePage from './HomePage'; // Import HomePage component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Define the login state

  return (
    <div className="App">
      {isLoggedIn ? <HomePage /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
