import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Overlay.css';

const OverlayPage = () => {
  return (
    <div className="pageContainer">
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to PetPals</h1>
        <p>Find your new best friend today</p>
        <div className="buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default OverlayPage;
