import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/AdditionalDetails.css';

const AdditionalDetails = () => {
  const [price, setPrice] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate();
  const location = useLocation();
  const pet = location.state.pet;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedPet = { ...pet, price, age, contact };
  
    console.log('Updated Pet:', updatedPet);
  
    try {
      const response = await axios.put('http://localhost:8080/api/pets/update', updatedPet);
      if (response.status === 200) { // Check if the response status is 200 (OK)
        console.log('Response:', response);
        setMessage('Pet added successfully!');
        setMessageType('success');
        setTimeout(() => navigate('/FindAPet'), 2000); // Redirect after 2 seconds
      } else {
        throw new Error('Failed to add pet'); // Throw an error if the status is not 200
      }
    } catch (error) {
      console.error('Error listing pet:', error);
      setMessage('Error adding pet. Please try again.');
      setMessageType('error');
    }
  };
  

  return (
    <div className="additional-details-container">
      <h1>Additional Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pet Name:</label>
          <input
            type="text"
            value={pet.name}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Pet Type:</label>
          <input
            type="text"
            value={pet.type}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Pet Description:</label>
          <textarea
            value={pet.description}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Pet Image URL:</label>
          <input
            type="text"
            value={pet.image}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Owner Details:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default AdditionalDetails;
