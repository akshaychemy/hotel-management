import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking._id}>Guest Name: {booking.guestName} - Check-in: {booking.checkInDate}, Check-out: {booking.checkOutDate}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
