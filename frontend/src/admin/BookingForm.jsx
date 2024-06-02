import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookingForm() {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState('');
  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  // Add state variables for other necessary fields

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bookingData = { room, guestName, checkInDate, checkOutDate /* Add other necessary fields */ };

    try {
      const response = await axios.post('http://localhost:3000/bookings', bookingData);
      console.log('Booking added:', response.data);
      // Clear form fields after successful submission
      setRoom('');
      setGuestName('');
      setCheckInDate('');
      setCheckOutDate('');
      // Clear other form fields as needed
    } catch (error) {
      console.error('Error adding booking:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="room">Room:</label>
        <select
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          required
        >
          <option value="">Select a room</option>
          {rooms.map((room) => (
            <option key={room._id} value={room._id}>
              {room.number}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guestName">Guest Name:</label>
        <input
          id="guestName"
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="checkInDate">Check-in Date:</label>
        <input
          id="checkInDate"
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="checkOutDate">Check-out Date:</label>
        <input
          id="checkOutDate"
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
        />
      </div>
      {/* Add other necessary form fields */}
      <button type="submit">Add Booking</button>
    </form>
  );
}

export default BookingForm;
