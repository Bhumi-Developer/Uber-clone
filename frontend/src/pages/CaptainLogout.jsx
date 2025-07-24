import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        // Successfully logged out
        localStorage.removeItem("token");
        navigate("/captain-login");
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          console.log("Already logged out or invalid token");
          localStorage.removeItem("token");
          navigate("/captain-login");
        } else {
          console.error("Logout error:", err);
        }
      });
  }, []);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
