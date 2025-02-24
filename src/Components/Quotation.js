import './Lead.css';

const Lead = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Lead added:', { name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
    };
  
    return (
      <div className="add-customer-form">
        <h2>Add Lead Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Lead Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Lead</button>
        </form>
      </div>
    );
  };