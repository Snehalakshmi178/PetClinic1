import React from 'react';
import '../assets/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 style={{ fontSize: '4rem', fontWeight: '800' }}>PetPals</h1>
        <p style={{ fontSize: '1.5rem', fontWeight: '400' }}>Your One Stop Place for Pet Adoption and Pet Clinic</p>
        {/* Add icons or other elements here */}
      </div>
    </header>
  );
};

export default Header;
