// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data (e.g., remove token from local storage)
    localStorage.removeItem('token-info');

    // Redirect to the login page (or any other desired page)
    navigate('/login');
  };

  return (
    <div>
      <h1>Logging out...</h1>
      {/* You can add a loading spinner or any other UI elements here */}
      {handleLogout()}
    </div>
  );
}

export default Logout;
