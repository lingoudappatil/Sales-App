import React, { useState } from "react";
import axios from "axios";

const RegisterPage = ({ goToLogin, goToHome }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        address,
        state,
        password
      });
      alert(response.data.message);
      goToHome();
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
      <p style={styles.switchText}>
        Already have an account?{" "}
        <span style={styles.link} onClick={goToLogin}>
          Login here
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
    alignItems: "center"
  },
  form: { 
    width: "300px",
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
    width: "100%"
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

export default RegisterPage;