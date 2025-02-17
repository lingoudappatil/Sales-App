import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to the Home Page!</h2>
      <p>This is a simple home page for your React app.</p>
      <p>This is a simple home page for your React app. Built by Lingouda</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default HomePage;
