import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "right", padding: "10px" }}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
