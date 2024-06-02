import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ServiceForm() {
  const [hotels, setHotels] = useState([]);
  const [hotel, setHotel] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
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
    const serviceData = { hotel, name, description, price /* Add other necessary fields */ };

    try {
      const response = await axios.post('http://localhost:3000/services', serviceData);
      console.log('Service added:', response.data);
      // Clear form fields after successful submission
      setHotel('');
      setName('');
      setDescription('');
      setPrice('');
      // Clear other form fields as needed
    } catch (error) {
      console.error('Error adding service:', error);
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      {/* Add other necessary form fields */}
      <button type="submit">Add Service</button>
    </form>
  );
}

export default ServiceForm;
