import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Strayhelper.css';

const StrayDogHelperForum = () => {
  return (
    <section className="stray-dog-helper-forum">
      <div className="forum-content">
        <h2>Stray Dog Helper Forum</h2>
        <p>Join our community to discuss and find help for stray dogs.</p>
        <div className="forum-cards">
          <ForumCard
            title="General Discussions"
            description="Talk about anything related to stray dogs."
            link="/GeneralDiscussions"
            icon="fas fa-comments"
          />
          <ForumCard
            title="Find Help"
            description="Seek help and advice for stray dogs in your area."
            link="/FindHelp"
            icon="fas fa-search"
          />
          <ForumCard
            title="Success Stories"
            description="Share your success stories of helping stray dogs."
            link="/SuccessStories"
            icon="fas fa-star"
          />
        </div>
      </div>
    </section>
  );
};

const ForumCard = ({ title, description, link, icon }) => {
  return (
    <Link to={link} className="forum-card">
      <i className={`forum-icon ${icon}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
};

export default StrayDogHelperForum;
