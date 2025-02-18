import React, { useState } from "react";

const HomePage = ({ goToLogin, goToRegister }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(["New Message", "Profile Update"]);
  
  return (
    <div style={{ ...styles.container, backgroundColor: isDarkMode ? "#1E1E1E" : "#F5F5F5" }}>
      
      {/* Top Navbar */}
      <div style={styles.navbar}>
        <button style={styles.toggleSidebar} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "◀" : "▶"}
        </button>

        <input type="text" placeholder="Search..." style={styles.searchBar} />

        <h2 style={{ flexGrow: 1, color: isDarkMode ? "white" : "black" }}>Welcome, User! 👋</h2>

        {/* Notifications Dropdown */}
        <div style={styles.notificationContainer}>
          <button style={styles.notificationButton} onClick={() => setNotifications([])}>🔔 {notifications.length}</button>
          {notifications.length > 0 && (
            <div style={styles.notificationDropdown}>
              {notifications.map((note, index) => (
                <div key={index} style={styles.notificationItem}>{note}</div>
              ))}
            </div>
          )}
        </div>

        <button style={styles.darkModeButton} onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <button style={styles.logoutButton}>Logout</button>
      </div>

      {/* Sidebar */}
      <div style={{ ...styles.sidebar, width: isSidebarOpen ? "220px" : "60px" }}>
        <ul style={styles.sidebarList}>
          {["Home", "Login", "Register", "Profile", "Settings", "Contact"].map((item) => (
            <li
              key={item}
              style={{
                ...styles.sidebarListItem,
                backgroundColor: activeTab === item ? "#555" : "transparent",
                justifyContent: isSidebarOpen ? "flex-start" : "center",
              }}
              onClick={() => {
                setActiveTab(item);
                if (item === "Login") goToLogin();
                if (item === "Register") goToRegister();
              }}
            >
              {getIcon(item)}
              {isSidebarOpen && <span style={{ marginLeft: "10px" }}>{item}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={{ color: isDarkMode ? "white" : "black" }}>Dashboard Overview</h1>
        <p style={{ color: isDarkMode ? "#DDD" : "#333" }}>
          Manage your account, notifications, and settings from here.
        </p>

        <div style={styles.cardContainer}>
          <div style={styles.card}>📊 Analytics</div>
          <div style={styles.card}>📧 Messages</div>
          <div style={styles.card}>⚙️ Settings</div>
          <div style={styles.card}>🔔 Notifications</div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 My Website | Built with ❤️</p>
      </footer>
    </div>
  );
};

// Function to return icons for sidebar items
const getIcon = (item) => {
  const icons = {
    "Home": "🏠",
    "Login": "🔑",
    "Register": "📝",
    "Profile": "👤",
    "Settings": "⚙️",
    "Contact": "📞",
  };
  return <span>{icons[item]}</span>;
};

// Styling
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    transition: "background 0.3s ease-in-out",
    flexDirection: "column",
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
    alignItems: "center",
    padding: "0 20px",
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  toggleSidebar: {
    backgroundColor: "#444",
    border: "none",
    color: "white",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "5px",
    marginRight: "10px",
  },
  searchBar: {
    padding: "6px",
    width: "200px",
    marginRight: "20px",
    borderRadius: "5px",
    border: "none",
  },
  notificationContainer: {
    position: "relative",
    marginRight: "15px",
  },
  notificationButton: {
    backgroundColor: "#555",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  notificationDropdown: {
    position: "absolute",
    top: "30px",
    right: "0",
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    borderRadius: "5px",
  },
  notificationItem: {
    padding: "5px",
    borderBottom: "1px solid #ddd",
  },
  darkModeButton: {
    backgroundColor: "#555",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  logoutButton: {
    padding: "10px 15px",
    fontSize: "14px",
    backgroundColor: "#FF4B4B",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  sidebar: {
    height: "100%",
    backgroundColor: "#222",
    color: "white",
    position: "fixed",
    top: "60px",
    left: 0,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    transition: "width 0.3s ease-in-out",
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
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    padding: "20px",
    background: "#eee",
    borderRadius: "10px",
    width: "120px",
    textAlign: "center",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#222",
    color: "white",
    padding: "10px",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
};

export default HomePage;
