import React from 'react';
import '../assets/StatsSection.css';

const StatsSection = () => {
  return (
    <div>
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-card">
            <i className="fas fa-users stats-icon"></i>
            <h3>Number of Users</h3>
            <p>1,234</p>
          </div>
          <div className="stats-card">
            <i className="fas fa-paw stats-icon"></i>
            <h3>Pets Adopted</h3>
            <p>567</p>
          </div>
          <div className="stats-card">
            <i className="fas fa-heart stats-icon"></i>
            <h3>Happy Families</h3>
            <p>890</p>
          </div>
          <div className="stats-card">
            <i className="fas fa-thumbs-up stats-icon"></i>
            <h3>Positive Reviews</h3>
            <p>345</p>
          </div>
        </div>
      </section>

      <section className="innovations-section">
        <div className="innovations-content">
          <h2>New Innovations in Progress</h2>
          <p>We are constantly working on new features and improvements to make pet adoption easier and more enjoyable. Stay tuned for updates on our latest innovations!</p>
          <div className="innovation-cards">
            <InnovationCard
              title="AI-Powered Pet Matching"
              description="Using artificial intelligence to better match pets with potential adopters."
              icon="fas fa-robot"
            />
            <InnovationCard
              title="Virtual Pet Meetups"
              description="Host virtual meetups to interact with pets and their owners before adopting."
              icon="fas fa-video"
            />
            <InnovationCard
              title="Enhanced User Profiles"
              description="New features for creating more detailed and engaging user profiles."
              icon="fas fa-user-edit"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const InnovationCard = ({ title, description, icon }) => {
  return (
    <div className="innovation-card">
      <i className={`innovation-icon ${icon}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StatsSection;
