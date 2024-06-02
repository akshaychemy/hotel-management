import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HotelForm from './HotelForm';
import RoomForm from './RoomForm';
import BookingForm from './BookingForm';
import EmployeeForm from './EmployeeForm';
import ServiceForm from './ServiceForm';

function AdminPanel() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/admin/hotels">Add Hotel</Link>
          </li>
          <li>
            <Link to="/admin/rooms">Add Room</Link>
          </li>
          <li>
            <Link to="/admin/bookings">Add Booking</Link>
          </li>
          <li>
            <Link to="/admin/employees">Add Employee</Link>
          </li>
          <li>
            <Link to="/admin/services">Add Service</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/*" element={<AdminRoutes />} />
      </Routes>
    </div>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="hotels" element={<HotelForm />} />
      <Route path="rooms" element={<RoomForm />} />
      <Route path="bookings" element={<BookingForm />} />
      <Route path="employees" element={<EmployeeForm />} />
      <Route path="services" element={<ServiceForm />} />
    </Routes>
  );
}

export default AdminPanel;
