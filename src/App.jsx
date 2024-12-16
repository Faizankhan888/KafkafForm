import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [job, setJob] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && city && country && job) {
      setSubmitted(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', display:'flex' }}>
      <h1>Details Form</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '160px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '50%',
        margin: '40px auto'
      }}>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <label style={{ display: 'block', margin: '10px 0' }}>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
          </label>
          <label style={{ display: 'block', margin: '10px 0' }}>
            City:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
          </label>
          <label style={{ display: 'block', margin: '10px 0' }}>
            Country:
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
          </label>
          <label style={{ display: 'block', margin: '10px 0' }}>
            Job:
            <input type="text" value={job} onChange={(e) => setJob(e.target.value)} style={{ width: '100%', padding: '10px', fontSize: '16px' }} />
          </label>
          <input type="submit" value="Submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
        </form>
      </div>
      {submitted && (
        <div style={{ textAlign: 'left', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '50%', margin: '40px auto' }}>
          <h2>Submitted Details:</h2>
          <p>Name: {name}</p>
          <p>City: {city}</p>
          <p>Country: {country}</p>
          <p>Job: {job}</p>
        </div>
      )}
    </div>
  );
}

export default App;
