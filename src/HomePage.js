import React, { useState, useEffect } from "react";

const HomePage = ({ setIsLoggedIn }) => {
  const [activeContent, setActiveContent] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ ...styles.container, backgroundColor: darkMode ? "#121212" : "#f5f5f5" }}>
      {/* Top Bar */}
      <div style={{ ...styles.topBar, backgroundColor: darkMode ? "#222" : "#333" }}>
        <button style={styles.sidebarToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? "⬅️" : "➡️"}
        </button>
        <h2 style={styles.topBarTitle}>Welcome, User</h2>

        {/* Centered Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchBar}
          />
        </div>

        <span style={{ marginLeft: "auto", color: "white" }}>{currentTime.toLocaleTimeString()}</span>
        <button style={styles.darkModeButton} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
        <span style={styles.notificationBell}>🔔</span>
      </div>

      <div style={styles.contentWrapper}>
        {/* Sidebar */}
        {sidebarOpen && (
          <div style={styles.sidebar}>
            <h2 style={styles.logo}>My App</h2>
            <ul style={styles.sidebarList}>
              {["Dashboard", "Profile", "Settings", "Contact", "Logout"].map((item) => (
                <li
                  key={item}
                  style={{
                    ...styles.sidebarListItem,
                    backgroundColor: activeContent === item ? "#555" : "transparent",
                  }}
                  onClick={() => {
                    if (item === "Logout") {
                      if (window.confirm("Are you sure you want to log out?")) {
                        setIsLoggedIn(false);
                      }
                    } else {
                      setActiveContent(item);
                    }
                  }}
                >
                  {getIcon(item)}
                  <span style={{ marginLeft: "10px" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content */}
        <div style={styles.mainContent}>
          <h1>{activeContent}</h1>
          
          {/* Marquee in Dashboard only */}
          {activeContent === "Dashboard" && (
            <div style={styles.marqueeWrapper}>
              <marquee behavior="scroll" direction="left" style={styles.marquee}>
                📢 Welcome to the Dashboard! Stay updated with the latest information here.
              </marquee>
            </div>
          )}
          
          {renderContent(activeContent)}
        </div>
      </div>
    </div>
  );
};

// Function to display different content based on the selected section
const renderContent = (activeContent) => {
  switch (activeContent) {
    case "Dashboard":
      return <p>📊 Welcome to the Dashboard! Here you can see the overview of your activities.</p>;
    case "Profile":
      return <p>👤 This is your profile. Update your details here.</p>;
    case "Settings":
      return <p>⚙️ Change your preferences and application settings here.</p>;
    case "Contact":
      return <p>📞 Contact us at support@example.com.</p>;
    default:
      return <p>Welcome to the homepage!</p>;
  }
};

// Function to return icons for sidebar items
const getIcon = (item) => {
  const icons = {
    "Dashboard": "📊",
    "Profile": "👤",
    "Settings": "⚙️",
    "Contact": "📞",
    "Logout": "🚪",
  };
  return <span>{icons[item]}</span>;
};

// Styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  topBar: {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    color: "white",
    position: "relative",
  },
  searchContainer: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  searchBar: {
    width: "300px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
  topBarTitle: {
    margin: 0,
  },
  sidebarToggle: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    marginRight: "15px",
  },
  darkModeButton: {
    marginLeft: "20px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  notificationBell: {
    fontSize: "20px",
    marginLeft: "15px",
    cursor: "pointer",
  },
  contentWrapper: {
    display: "flex",
    flexGrow: 1,
  },
  sidebar: {
    width: "220px",
    height: "100%",
    backgroundColor: "#222",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    textAlign: "center",
    fontSize: "20px",
    marginBottom: "20px",
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
    display: "flex",
    alignItems: "center",
  },
  mainContent: {
    flexGrow: 1,
    padding: "20px",
  },
  marqueeWrapper: {
    width: "100%",
    backgroundColor: "transparent",
    textAlign: "center",
    padding: "5px 0",
    marginTop: "10px",
  },
  marquee: {
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default HomePage;
