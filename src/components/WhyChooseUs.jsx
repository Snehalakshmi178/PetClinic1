import React from 'react';
import { FaPaw, FaUserFriends, FaHeart } from 'react-icons/fa'; // Import icons
import '../assets/WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-content">
        <h2>Why Choose PetPals?</h2>
        <p>We enable direct pet adoption from one good home to another, ensuring pets find the love and care they deserve.</p>
        <div className="why-cards">
          <WhyCard
            icon={<FaPaw />}
            title="Trusted by Many"
            description="PetPals has helped thousands of pets find their forever homes."
          />
          <WhyCard
            icon={<FaUserFriends />}
            title="Easy to Use"
            description="Our platform is user-friendly, making it easy to list and adopt pets."
          />
          <WhyCard
            icon={<FaHeart />}
            title="Community Support"
            description="Join our community of pet lovers and get support and advice."
          />
        </div>
      </div>
    </section>
  );
};

const WhyCard = ({ icon, title, description }) => {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WhyChooseUs;
