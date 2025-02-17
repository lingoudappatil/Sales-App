import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to Home Page!</h2>
      <p>You have successfully logged in.</p>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
};

export default HomePage;
