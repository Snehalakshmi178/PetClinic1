import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/MainSection.css';
import { FaPaw } from 'react-icons/fa';

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="row">
          <Card
            imageSrc="https://images.pexels.com/photos/16652368/pexels-photo-16652368/free-photo-of-cute-dog-on-leash-in-park.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Adopt a Pet"
            description="Open your Hearts and Home for Love #AdoptLove "
            buttonText="Get Started->"
            link="/FindAPet"
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ imageSrc, title, description, buttonText, link }) => {
  return (
    <div className="col-md-12">
      <div className="card">
        <img src={imageSrc} alt={title} className="card-img" />
        <div className="card-content">
          <h2><FaPaw className="icon" /> {title}</h2>
          <p>{description}</p>
          <Link to={link}>
            <button>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
