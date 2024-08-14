import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/SuccessStories.css';
import Navbar from './Navbar';

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const [newStoryContent, setNewStoryContent] = useState('');
  const [newImageURL, setNewImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/success-stories')
      .then((response) => {
        setStories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching stories:', error);
      });
  }, []);

  const handleStorySubmit = (e) => {
    e.preventDefault();

    if (newStoryContent.trim() === '' || newImageURL.trim() === '') {
      setErrorMessage('Both fields are required.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    const newStory = {
      username: `User${stories.length + 1}`,
      avatar: 'https://st2.depositphotos.com/1701651/5359/i/950/depositphotos_53590877-stock-photo-success-story.jpg',
      timestamp: new Date().toISOString(),
      content: newStoryContent.trim(),
      image: newImageURL.trim(),
    };

    axios.post('http://localhost:8080/success-stories', newStory)
      .then((response) => {
        setStories([...stories, response.data]);
        setNewStoryContent('');
        setNewImageURL('');
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error submitting story:', error);
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="success-stories">
        <h2>Success Stories</h2>
        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <img src={story.image} alt="Success Story" />
              <div className="story-content">
                <div className="story-header">
                  <img src={story.avatar} alt={story.username} className="avatar" />
                  <span className="username">{story.username}</span>
                  <span className="timestamp">{new Date(story.timestamp).toLocaleString()}</span>
                </div>
                <p>{story.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleStorySubmit} className="new-story-form">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <textarea
            placeholder="Share your success story..."
            value={newStoryContent}
            onChange={(e) => setNewStoryContent(e.target.value)}
          ></textarea>
          <input
            type="text"
            placeholder="Image URL"
            value={newImageURL}
            onChange={(e) => setNewImageURL(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Story'}
          </button>
        </form>
      </div>
    </>
  );
};

export default SuccessStories;
