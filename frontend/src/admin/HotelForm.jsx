import React, { useState } from 'react';
import axios from 'axios';

function HotelForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/hotels', { name, location });
      alert('Hotel added successfully!');
      setName('');
      setLocation('');
    } catch (error) {
      console.error('Error adding hotel:', error);
      alert('Error adding hotel');
    }
  };

  return (
    <div>
      <h2>Add Hotel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
}

export default HotelForm;
