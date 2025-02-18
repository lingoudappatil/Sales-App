import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to Home Page! Created by Lingouda</h2>
      <p>You have Successfully logged in.</p>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
};

export default HomePage;
