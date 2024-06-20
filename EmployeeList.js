import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/employee');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`/api/employee/${id}`);
      fetchEmployees(); // Refresh the employee list after deletion
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/employees/create">Create Employee</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.f_Name}</td>
              <td>{employee.f_Email}</td>
              <td>{employee.f_Designation}</td>
              <td>
                <Link to={`/employees/${employee._id}`}>Edit</Link>
                <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;