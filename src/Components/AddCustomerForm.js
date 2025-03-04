import React, { useState } from "react";

const AddCustomerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    state: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer data:', formData);
    setFormData({ name: '', email: '', phone: '', address: '', state: '' });
    alert('Customer added successfully!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-customer-form">
      <h2>New Customer's Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email Id:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone Num:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} rows="3" />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default AddCustomerForm;