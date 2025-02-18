import React, { useState } from "react";

const HomePage = ({ goToLogin, goToRegister }) => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div style={styles.container}>
      {/* Top Navbar */}
      <div style={styles.navbar}>
        <h2>My Website</h2>
        <button style={styles.logoutButton}>Logout</button>
      </div>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <ul style={styles.sidebarList}>
          {["Home", "Login", "Register", "About Us", "Contact"].map((item) => (
            <li
              key={item}
              style={{
                ...styles.sidebarListItem,
                backgroundColor: activeTab === item ? "#555" : "transparent",
              }}
              onClick={() => {
                setActiveTab(item);
                if (item === "Login") goToLogin();
                if (item === "Register") goToRegister();
              }}
            >
              {item === "Home" && "🏠 "}
              {item === "Login" && "🔑 "}
              {item === "Register" && "📝 "}
              {item === "About Us" && "ℹ️ "}
              {item === "Contact" && "📞 "}
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1>Welcome to Our Website!</h1>
        <p>Your go-to platform for seamless authentication.</p>

        <div style={styles.buttonGroup}>
          <button onClick={goToLogin} style={styles.button}>Login</button>
          <button onClick={goToRegister} style={styles.button}>Register</button>
        </div>

        <div style={styles.contentBox}>
          <h2>Why Choose Us?</h2>
          <p>
            We provide a secure and user-friendly platform for authentication.
            Our system ensures smooth login and registration for all users.
          </p>
          <button style={styles.learnMoreButton}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#333",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  logoutButton: {
    padding: "10px 15px",
    fontSize: "14px",
    backgroundColor: "#FF4B4B",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  sidebar: {
    width: "220px",
    height: "100%",
    backgroundColor: "#222",
    color: "white",
    position: "fixed",
    top: "60px",
    left: 0,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  sidebarList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  sidebarListItem: {
    padding: "12px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background 0.3s",
    marginBottom: "10px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
  },
  mainContent: {
    marginLeft: "240px",
    marginTop: "80px",
    padding: "20px",
    flexGrow: 1,
    textAlign: "center",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
  contentBox: {
    marginTop: "30px",
    padding: "20px",
    width: "400px",
    textAlign: "center",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    margin: "auto",
  },
  learnMoreButton: {
    marginTop: "15px",
    padding: "10px 15px",
    fontSize: "14px",
    backgroundColor: "#008CBA",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default HomePage;
