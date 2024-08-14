import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/AdoptAPet.css'; // Assuming your CSS file is named FindAPet.css

const FindAPet = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/pets');
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleAdopt = (petId) => {
    const pet = pets.find((p) => p.id === petId);
    setSelectedPet(pet);
  };

  const handleCloseDetails = () => {
    setSelectedPet(null);
  };

  return (
    <div className="find-a-pet-container">
      <h1>Find a Pet</h1>
      <div className="pet-list">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-item">
            <img className="pet-image" src={pet.image} alt={pet.name} />
            <h2 className="pet-name">{pet.name}</h2>
            <p className="pet-type">{pet.type}</p>
            <button className="adopt-button" onClick={() => handleAdopt(pet.id)}>Adopt a Pet</button>
          </div>
        ))}
      </div>

      {selectedPet && (
        <div className="pet-details-modal">
          <div className="pet-details">
            <button className="close-button" onClick={handleCloseDetails}>×</button>
            <img className="pet-image" src={selectedPet.image} alt={selectedPet.name} />
            <h2>{selectedPet.name}</h2>
            <p>Type: {selectedPet.type}</p>
            <p>Description: {selectedPet.description}</p>
            <p>Location:{selectedPet.price}</p>
            <p>Age: {selectedPet.age} years</p>
            <p>Contact: {selectedPet.contact}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindAPet;
