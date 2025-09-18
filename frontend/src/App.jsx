// Inside your App component where Routes are defined

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import HotelList from './components/HotelList';
import RoomList from './components/RoomList';
import BookingList from './components/BookingList';
import EmployeeList from './components/EmployeeList';
import ServiceList from './components/ServiceList';
import AdminPanel from './admin/AdminPanel';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import AdminRoute from './components/AdminRoute';
import axios from 'axios';

// testing the flow here

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/employees'); // Adjust the endpoint to fetch employee data
        const isAdminEmployee = JSON.parse(localStorage.getItem('user'))
        console.log("isAdminEmployee",isAdminEmployee)
        setIsAdmin(isAdminEmployee.admin);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
            <li>
              <Link to="/employees">Employees</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/admin">Admin Panel</Link>
              </li>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HotelList />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/services" element={<ServiceList />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin/*" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
