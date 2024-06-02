import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/rooms')
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => {
        console.error('Error fetching rooms:', error);
      });
  }, []);

  return (
    <div>
      <h2>Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room._id}>Room Number: {room.number} - Type: {room.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
