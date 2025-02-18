import React, { useState } from "react";

const HomePage = ({ setIsLoggedIn }) => {
  const [activeContent, setActiveContent] = useState("Dashboard");

  return (
    <div style={styles.container}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <h2 style={styles.topBarTitle}>Welcome to My App</h2>
      </div>

      <div style={styles.contentWrapper}>
        {/* Sidebar */}
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
                    setIsLoggedIn(false); // Logout and go to Login Page
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

        {/* Main Content */}
        <div style={styles.mainContent}>
          <h1>{activeContent}</h1>
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
    backgroundColor: "#333",
    color: "white",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    fontSize: "18px",
  },
  topBarTitle: {
    margin: 0,
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
};

export default HomePage;
