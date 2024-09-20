import React from "react";
import { useNavigate } from "react-router-dom";
import "./Languages.css";

function Languages() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="footer-page">
      <h1>Languages</h1>
      <p>Languages available: Spanish</p>
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
}

export default Languages;
