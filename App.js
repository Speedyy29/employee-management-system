import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employee/:id" element={<EmployeeForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
