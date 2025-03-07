import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Lead from "./Components/Lead";
import Quotation from "./Components/Quotation";
import AddCustomerForm from "./Components/AddCustomerForm";
import Order from "./Components/Order";

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

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setCurrentPage("login"); // Use prop from App.js
    }
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      {/* Top Bar */}
      <div className={`top-bar ${darkMode ? "dark" : "light"}`}>
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? "⬅️" : "➡️"}
        </button>
        <h2 className="top-bar-title">Welcome, Admin</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </div>

        <span style={{ marginLeft: "auto", color: "white" }}>
          {currentTime.toLocaleTimeString()}
        </span>
        <button className="dark-mode-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
        <span className="notification-bell">🔔</span>
      </div>

      <div className="content-wrapper">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? "expanded" : "collapsed"}`}>
          <h2 className="logo">{sidebarOpen ? "My Sale App" : "🔷"}</h2>
          <ul className="sidebar-list">
            {["Dashboard", "Add Customer", "Lead", "Quotation", "Order", "Logout"].map((item) => (
              <li
                key={item}
                className={`sidebar-list-item ${activeContent === item ? "active" : ""}`}
                onClick={() => (item === "Logout" ? handleLogout() : setActiveContent(item))}
              >
                {getIcon(item)}
                {sidebarOpen && <span style={{ marginLeft: "10px" }}>{item}</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h1>{activeContent}</h1>
          {activeContent === "Dashboard" && (
            <div className="marquee-wrapper">
              <marquee behavior="scroll" direction="left" className="marquee">
                📢 Welcome to Sales's Dashboard! Stay updated with the latest information here.
              </marquee>
            </div>
          )}
          {renderContent(activeContent)}
        </div>
      </div>
    </div>
  );
};

// Helper function to render content
const renderContent = (activeContent) => {
  switch (activeContent) {
    case "Dashboard":
      return (
        <div className="dashboard-content">
          <p>📊 Welcome to Lingouda's Dashboard! Here you can see an overview of your activities.</p>
          <div className="stats-container">
            <div className="stat-box">
              <h2>Sales Data Overview</h2>
              <h3>Total Customers</h3>
              <p>1000</p>            
            </div>
            <div className="stat-box">
              <h3>Today's Leads</h3>
              <p>89</p>
            </div>
            <div className="stat-box">
              <h3>Today's Quotations</h3>
              <p>89</p>
            </div>
            <div className="stat-box">
              <h3>Today Orders</h3>
              <p>Rs.12</p>
            </div>
            <div className="stat-box">
              <h3>Todays Orders Amount</h3>
              <p>Rs.45,678 /-</p>
            </div>
          </div>
        </div>
      );
    case "Lead":
      return <Lead />;
    case "Quotation":
      return <Quotation />;
    case "Order":
      return <Order />;
    case "Add Customer":
      return <AddCustomerForm />;
    default:
      return <div>Welcome to the Dashboard Lingouda, This includes Sales Operations</div>;
  }
};

// Helper function for sidebar icons
const getIcon = (item) => {
  const icons = {
    Dashboard: "📊",
    Lead: "👤",
    Quotation: "⚙️",
    Order: "📞",
    "Add Customer": "➕",
    Logout: "🚪",
  };
  return <span>{icons[item]}</span>;
};

export default HomePage;