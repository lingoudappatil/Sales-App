import React, { useState, useEffect } from "react";
import "./HomePage.css"; // Import CSS

const HomePage = ({ setCurrentPage }) => {
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
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      {/* Top Bar */}
      <div className={`top-bar ${darkMode ? "dark" : "light"}`}>
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? "⬅️" : "➡️"}
        </button>
        <h2 className="top-bar-title">Welcome, Admin</h2>

        {/* Centered Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </div>

        <span style={{ marginLeft: "auto", color: "white" }}>{currentTime.toLocaleTimeString()}</span>
        <button className="dark-mode-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
        <span className="notification-bell">🔔</span>
      </div>

      <div className="content-wrapper">
        {/* Sidebar */}
        {sidebarOpen && (
          <div className="sidebar">
            <h2 className="logo">My App</h2>
            <ul className="sidebar-list">
              {["Dashboard", "Profile", "Settings", "Contact", "Logout"].map((item) => (
                <li
                  key={item}
                  className={`sidebar-list-item ${activeContent === item ? "active" : ""}`}
                  onClick={() => {
                    if (item === "Logout") {
                      if (window.confirm("Are you sure you want to log out?")) {
                        setCurrentPage("login");
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
        <div className="main-content">
          <h1>{activeContent}</h1>

          {/* Marquee in Dashboard only */}
          {activeContent === "Dashboard" && (
            <div className="marquee-wrapper">
              <marquee behavior="scroll" direction="left" className="marquee">
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
      return <p>📊 Welcome to the Dashboard Developed By Lingouda! Here you can see the overview of your activities.</p>;
    case "Profile":
      return <p>👤 This is your profile. Update your details here.</p>;
    case "Settings":
      return <p>⚙️ Change your preferences and application settings here.</p>;
    case "Contact":
      return <p>📞 Contact us at support@example.com.</p>;
    default:
      return <p>Welcome to the homepage! and Dashboard</p>;
  }
};

// Function to return icons for sidebar items
const getIcon = (item) => {
  const icons = {
    Dashboard: "📊",
    Profile: "👤",
    Settings: "⚙️",
    Contact: "📞",
    Logout: "🚪",
  };
  return <span>{icons[item]}</span>;
};

export default HomePage;
