import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RoomForm() {
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState('');
  const [number, setNumber] = useState('');
  const [type, setType] = useState('');
  // Add state variables for other necessary fields

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:3000/hotels');
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const roomData = { hotel, number, type /* Add other necessary fields */ };

    try {
      const response = await axios.post('http://localhost:3000/rooms', roomData);
      console.log('Room added:', response.data);
      // Clear form fields after successful submission
      setHotel('');
      setNumber('');
      setType('');
      // Clear other form fields as needed
    } catch (error) {
      console.error('Error adding room:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="hotel">Hotel:</label>
        <select
          id="hotel"
          value={hotel}
          onChange={(e) => setHotel(e.target.value)}
          required
        >
          <option value="">Select a hotel</option>
          {hotels.map((hotel) => (
            <option key={hotel._id} value={hotel._id}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input
          id="number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          id="type"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      {/* Add other necessary form fields */}
      <button type="submit">Add Room</button>
    </form>
  );
}

export default RoomForm;
