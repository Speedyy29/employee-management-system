import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve the user's name from local storage or cookies
    const storedUserName = localStorage.getItem('userName');
    setUserName(storedUserName);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {userName}!</p>
      {/* Add other dashboard components and functionality here */}
    </div>
  );
};

export default Dashboard;