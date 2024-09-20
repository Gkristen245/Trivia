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
      <p>
        Contact information for the team: Ritik - Rhedaoo@charlotte.edu Kristen
        - Kglielmi@charlotte.edu Katrina - kwils178@charlotte.edu Alexa -
        avazque7@charlotte.edu
      </p>
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
    </div>
  );
}

export default Contact;
