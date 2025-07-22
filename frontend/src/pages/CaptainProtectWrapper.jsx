import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

function CaptainProtectWrapper({ children }) {
  const {  captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || token === 'undefined' || !token.includes('.')) {
        console.warn('Invalid token format:', token);
        localStorage.removeItem('token');
        navigate('/captain-login');
        return;
      }

    setIsLoading(true);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setCaptain(response.data);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.error('Auth failed:', err);
      localStorage.removeItem('token');
      navigate('/captain-login');
    });
  }, [navigate, setCaptain, setIsLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default CaptainProtectWrapper;
