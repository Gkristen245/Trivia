import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <ul>
        <li>Ritik - Rhedaoo@charlotte.edu</li>
        <li>Kristen - Kglielmi@charlotte.edu</li>
        <li>Katrina - kwils178@charlotte.edu</li>
        <li>Alexa - avazque7@charlotte.edu</li>
      </ul>
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
}

export default Contact;
