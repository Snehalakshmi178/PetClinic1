import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/PetList.css';

const petsData = {
  dogs: [
    {
      id: 1,
      name: 'Buddy',
      breed: 'Golden Retriever',
      age: '2 years',
      description: 'Friendly and energetic dog looking for a forever home.',
      image: 'https://www.hepper.com/wp-content/uploads/2021/11/golden-retriever_Shutterstock.jpg'
    },
    {
      id: 2,
      name: 'Rocky',
      breed: 'Boxer',
      age: '3 years',
      description: 'Loyal and energetic dog looking for an active owner.',
      image: 'https://media-be.chewy.com/wp-content/uploads/2021/04/18143927/iStock-1453345538-616x615.jpg'
    },
    {
      id: 3,
      name: 'Bella',
      breed: 'Labrador Retriever',
      age: '4 years',
      description: 'Gentle and loving dog perfect for families.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceK8uELoy6Qt_6cThRM9U0DLyWXEvYUBvbg&s'
    }
  ],
  cats: [
    {
      id: 1,
      name: 'Whiskers',
      breed: 'Siamese Cat',
      age: '1 year',
      description: 'Playful and affectionate cat looking for a loving owner.',
      image: 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg'
    },
    {
      id: 2,
      name: 'Luna',
      breed: 'Ragdoll Cat',
      age: '2 years',
      description: 'Calm and gentle cat looking for a quiet home.',
      image: 'https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg'
    },
    {
      id: 3,
      name: 'Shadow',
      breed: 'Black Cat',
      age: '3 years',
      description: 'Mysterious and independent cat looking for an experienced owner.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuemGHSMtdz0Ibm5by2KGTugQI0Ey2bykttg&s'
    }
  ],
  rabbits: [
    {
      id: 1,
      name: 'Thumper',
      breed: 'Netherland Dwarf',
      age: '1 year',
      description: 'Small and cuddly rabbit looking for a cozy home.',
      image: 'https://image.petmd.com/files/styles/863x625/public/2023-08/netherland.dwarf_.jpg'
    },
    {
      id: 2,
      name: 'Snowball',
      breed: 'White Rabbit',
      age: '2 years',
      description: 'Gentle and friendly rabbit perfect for families.',
      image: 'https://i.pinimg.com/originals/b8/25/e1/b825e1484a21bb183466a3890df21c39.jpg'
    },
    {
      id: 3,
      name: 'Oreo',
      breed: 'Dutch Rabbit',
      age: '1.5 years',
      description: 'Curious and playful rabbit looking for an active owner.',
      image: 'https://rabbitbreeders.us/wp-content/uploads/Dutch-Rabbit-Breed.jpg'
    }
  ]
};

const PetList = () => {
  const { category } = useParams();
  const pets = petsData[category] || [];

  return (
    <div className="pet-list-page">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <ul className="pet-list">
        {pets.map(pet => (
          <li key={pet.id}>
            <img src={pet.image} alt={pet.name} />
            <h2>{pet.name}</h2>
            <p>{pet.breed}</p>
            <p>{pet.age}</p>
            <p>{pet.description}</p>
            <button>Adopt {pet.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;