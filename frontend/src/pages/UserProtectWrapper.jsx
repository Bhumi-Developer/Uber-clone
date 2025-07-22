import React, { useState, useContext, useEffect } from 'react';
import { UsersDataContext } from '../context/UsersContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserProtectWrapper({ children }) {
  const token = localStorage.getItem('token');
  const { user, setUser } = useContext(UsersDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      if (response.status === 200) {
        setUser(response.data);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.error('Auth failed:', err);
      localStorage.removeItem('token');
      navigate('/login');
    });
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default UserProtectWrapper;
