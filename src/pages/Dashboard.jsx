import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to Dashboard </h2>
      <p>You are now logged in.</p>
      <button
        onClick={handleLogout}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
