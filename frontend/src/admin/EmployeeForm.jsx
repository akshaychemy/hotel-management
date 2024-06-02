import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [hotel, setHotel] = useState('');
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:3000/hotels');
        console.log('Fetched hotels:', response);
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const employeeData = { name, position, hotel };

    try {
      const response = await axios.post('http://localhost:3000/employees', employeeData);
      console.log('Employee added:', response.data);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="position">Position:</label>
        <input
          id="position"
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="hotel">Hotel:</label>
        <select
          id="hotel"
          value={hotel}
          onChange={(e) => setHotel(e.target.value)}
          required
        >
          <option value="">Select a hotel</option>
          {hotels?.map((hotel) => (
            <option key={hotel._id} value={hotel._id}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
