import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Ensure axios is correctly imported
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    f_Id: '',
    f_Image: '',
    f_Name: '',
    f_Email: '',
    f_Mobile: '',
    f_Designation: '',
    f_gender: '',
    f_Course: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchEmployeeById(id);
    }
  }, [id]);

  const fetchEmployeeById = async (id) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`/api/employee/${id}`);
      setEmployee(response.data);
    } catch (error) {
      setError('Error fetching employee.');
      console.error('Error fetching employee:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (id) {
        await axios.put(`/api/employee/${id}`, employee);
      } else {
        await axios.post('/api/employee', employee);
      }
      navigate('/employees');
    } catch (error) {
      setError('Error submitting employee.');
      console.error('Error submitting employee:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Employee' : 'Create Employee'}</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="f_Id">ID</label>
          <input
            type="text"
            id="f_Id"
            name="f_Id"
            value={employee.f_Id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="f_Image">Image</label>
          <input
            type="text"
            id="f_Image"
            name="f_Image"
            value={employee.f_Image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="f_Name">Name</label>
          <input
            type="text"
            id="f_Name"
            name="f_Name"
            value={employee.f_Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="f_Email">Email</label>
          <input
            type="email"
            id="f_Email"
            name="f_Email"
            value={employee.f_Email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="f_Mobile">Mobile</label>
          <input
            type="text"
            id="f_Mobile"
            name="f_Mobile"
            value={employee.f_Mobile}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="f_Designation">Designation</label>
          <input
            type="text"
            id="f_Designation"
            name="f_Designation"
            value={employee.f_Designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="f_gender">Gender</label>
          <input
            type="text"
            id="f_gender"
            name="f_gender"
            value={employee.f_gender}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="f_Course">Course</label>
          <input
            type="text"
            id="f_Course"
            name="f_Course"
            value={employee.f_Course}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {id ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
