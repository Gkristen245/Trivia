import React from "react";
import { useNavigate } from "react-router-dom";
import "./Support.css";

function Support() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="support-container">
      <h1>Support</h1>
      <p>Support information and contact details will be shown here.</p>
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
}

export default Support;
