import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>Name: {employee.name} - Position: {employee.position}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
