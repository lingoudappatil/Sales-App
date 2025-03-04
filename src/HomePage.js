import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Lead from "./Components/Lead"; // Import the Lead component
import Quotation from "./Components/Quotation"; // Import the Quotation component
import AddCustomerForm from "./Components/AddCustomerForm"; // Import the AddCustomerForm component
import Order from "./Components/Order"; // Import the Order component

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
        <div className={`sidebar ${sidebarOpen ? "expanded" : "collapsed"}`}>
          <h2 className="logo">{sidebarOpen ? "My Sale App" : "🔷"}</h2>
          <ul className="sidebar-list">
            {["Dashboard", "Add Customer", "Lead", "Quotation", "Order", "Logout"].map((item) => (
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
                📢 Welcome to the Lingouda's Dashboard! Stay updated with the latest information here.
              </marquee>
            </div>
          )}

          {renderContent(activeContent)}
        </div>
      </div>
    </div>
  );
};

// Add Order Form Component
// const Order = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Order data:', formData);
//     setFormData({ name: '', email: '', phone: '', item: '', quantity: '', amount:'', address: '' });
//     alert('Order added successfully!');
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="add-customer-form" >
//       <h2>New Order page for sale</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Full Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Phone Number:</label>
//           <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Item Name:</label>
//           <input type="text" name="item" value={formData.item} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Quantity:</label>
//           <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Amount</label>
//           <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Address:</label>
//           <textarea name="address" value={formData.address} onChange={handleChange} rows="3" />
//         </div>
//         <div className="form-group">
//           <label>State:</label>
//           <input type="text" name="state" value={formData.state} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// Content Renderer
const renderContent = (activeContent) => {
  switch (activeContent) {
    case "Dashboard":
      return (
        <div className="dashboard-content">
          <p>📊 Welcome to the Lingouda's Dashboard! Here you can see the overview of your activities.</p>
          <div className="stats-container">
            <div className="stat-box">
              <h2>Below are the Demo Data</h2>
              <h3>Total Customers</h3>
              <p>1000</p>
              <p>1230</p>
            </div>
            <div className="stat-box">
              <h3>Recent Orders</h3>
              <p>89</p>
            </div>
            <div className="stat-box">
              <h3>Monthly Revenue</h3>
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

// Sidebar Icons
const getIcon = (item) => {
  const icons = {
    Dashboard: "📊",
    Lead: "👤",
    Quotation: "⚙️",
    Order: "📞",
    AddCustomer: "➕",
    Logout: "🚪",
  };
  return <span>{icons[item]}</span>;
};

export default HomePage;