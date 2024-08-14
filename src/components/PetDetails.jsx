// src/components/PetDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/PetDetails.css';

const PetDetails = () => {
  const location = useLocation();
  const pet = location.state.pet;

  return (
    <div className="pet-details-container">
      <h1>{pet.name}</h1>
      <img src={pet.image} alt={pet.name} />
      <p><strong>Type:</strong> {pet.type}</p>
      <p><strong>Description:</strong> {pet.description}</p>
      <p><strong>Price:</strong> {pet.price}</p>
      <p><strong>Age:</strong> {pet.age}</p>
      <p><strong>Contact Owner:</strong> {pet.contact}</p>
    </div>
  );
};

export default PetDetails;
