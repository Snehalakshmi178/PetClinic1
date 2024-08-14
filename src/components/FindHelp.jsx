import React, { useState, useEffect } from 'react';
import '../assets/FindHelp.css';
import Navbar from './Navbar';

const FindHelp = () => {
  const [helpRequests, setHelpRequests] = useState([]);
  const [newHelpContent, setNewHelpContent] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/help-requests')
      .then(response => response.json())
      .then(data => setHelpRequests(data))
      .catch(error => console.error('Error fetching help requests:', error));
  }, []);

  const handleHelpSubmit = (e) => {
    e.preventDefault();

    if (newHelpContent.trim() === '' || newLocation.trim() === '') {
      setErrorMessage('Both fields are required.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    const newHelpRequest = {
      username: `User${helpRequests.length + 1}`,
      avatar: 'https://via.placeholder.com/50', // Update with dynamic avatar link if available
      location: newLocation.trim(),
      content: newHelpContent.trim(),
      image: 'https://via.placeholder.com/400', // Example image
    };

    fetch('http://localhost:8080/api/help-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHelpRequest),
    })
      .then(response => response.json())
      .then(data => {
        setHelpRequests([...helpRequests, data]);
        setNewHelpContent('');
        setNewLocation('');
        setLoading(false);
      })
      .catch(error => {
        console.error('Error submitting help request:', error);
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="find-help container">
        <h2>Find Help</h2>
        <div className="help-requests">
          {helpRequests.map((request) => (
            <div key={request.id} className="help-request">
              <img src={request.avatar} alt={request.username} className="avatar" />
              <div className="help-content">
                <div className="help-header">
                  <span className="username">{request.username}</span>
                  <span className="timestamp">{new Date(request.timestamp).toLocaleString()}</span>
                  <span className="location">{request.location}</span>
                </div>
                <p>{request.content}</p>
                {request.image && <img src={request.image} alt="Help Request" className="help-image" />}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleHelpSubmit} className="new-help-form">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="text"
            placeholder="Location"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
          <textarea
            placeholder="Describe the help you need..."
            value={newHelpContent}
            onChange={(e) => setNewHelpContent(e.target.value)}
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Help Request'}
          </button>
        </form>
      </div>
    </>
  );
};

export default FindHelp;
