import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../assets/ListAPet.css';

const ListAPet = ({ onPetListed }) => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petDescription, setPetDescription] = useState('');
  const [petImage, setPetImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPet = { name: petName, type: petType, description: petDescription, image: petImage };
    navigate('/additional-details', { state: { pet: newPet } });
    try {
      const response = await axios.post('http://localhost:8080/api/pets/list', newPet);
      onPetListed(response.data); // Notify parent component about the new pet
      setPetName('');
      setPetType('');
      setPetDescription('');
      setPetImage('');
    } catch (error) {
      console.error('Error listing pet:', error);
    }
  };

  return (
    <div className="list-a-pet-container">
      <div className="description-box">
        <h1>List a Pet</h1>
        <p>
          To list a pet, please fill out the form below with your pet's details. Add a picture and a brief description to help potential adopters get to know your pet better.
        </p>
      </div>

      <div className="info-box">
        <h2>Before you start…</h2>
        <p>Please make sure you’ve read and agree to these points before you create a listing:</p>
        <ol>
          <li>You won’t get paid for your pet but it is free to list them with our Charity.</li>
          <li>We can't help with emergency rehoming. You will need to be able to keep your pet for at least 4-6 weeks minimum before rehoming (more during peak holiday times when people are often away).</li>
          <li>All listings are subject to approval by the PetPals team. Before we post your listing on the site, we’ll check your pet’s profile thoroughly. If we have any questions, we will give you a call.</li>
          <li>If your listing does not provide a detailed description of your pet which must include a detailed description and a good quality photos, we will REJECT the listing and you will need to resubmit a new listing.</li>
          <li>We are NOT a rescue centre so we can't take pets directly into our care. We help you find a suitable adopter.</li>
          <li>We ONLY support the rehoming of pets that are living in Coimbatore.</li>
          <li>To help keep everyone safe, we monitor messages between rehomers and adopters.</li>
        </ol>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Pet Name:</label>
          <input
            type="text"
            value={petName}
            onChange={(event) => setPetName(event.target.value)}
          />
          <br />
          <label>Pet Type:</label>
          <input
            type="text"
            value={petType}
            onChange={(event) => setPetType(event.target.value)}
          />
          <br />
          <label>Pet Description:</label>
          <textarea
            value={petDescription}
            onChange={(event) => setPetDescription(event.target.value)}
          />
          <br />
          <label>Pet Image URL:</label>
          <input
            type="text"
            value={petImage}
            onChange={(event) => setPetImage(event.target.value)}
          />
          <br />
          <button type="submit">List Pet</button>
        </form>
      </div>
    </div>
  );
};

export default ListAPet;
