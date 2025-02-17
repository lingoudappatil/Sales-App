import React, { useState } from "react";

const LoginPage = ({ goToRegister, goToHome }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    goToHome(); // Navigate to Home Page
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.switchText}>
        Don't have an account?{" "}
        <span style={styles.link} onClick={goToRegister}>
          Register here
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: { 
    textAlign: "center", 
    padding: "20px",
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center" // Center everything
  },
  form: { 
    width: "300px",  // Set a fixed width
    display: "flex", 
    flexDirection: "column", 
    gap: "10px",
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  },
  input: { 
    padding: "10px", 
    borderRadius: "5px", 
    border: "1px solid #ccc",
    width: "100%"  // Maintain 100% width inside the form
  },
  button: { 
    padding: "10px", 
    backgroundColor: "#4CAF50", 
    color: "white", 
    border: "none", 
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px"
  },
  switchText: { marginTop: "10px" },
  link: { color: "blue", cursor: "pointer" },
};

export default LoginPage;
