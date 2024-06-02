import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/hotels')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

  return (
    <div>
      <h2>Hotels</h2>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel._id}>{hotel.name} - {hotel.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
