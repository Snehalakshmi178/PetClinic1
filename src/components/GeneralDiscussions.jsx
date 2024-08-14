import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GeneralDiscussions = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch existing submissions when the component mounts
    axios.get('http://localhost:8080/general-discussions')
      .then(response => setSubmissions(response.data))
      .catch(error => console.error('Error fetching discussions:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
        alert('Please fill in all fields.');
        return;
    }

    axios.post('http://localhost:8080/general-discussions', { name, message })
        .then(response => {
            // Add the new submission to the list
            setSubmissions([...submissions, response.data]);
            // Clear the form
            setName('');
            setMessage('');
        })
        .catch(error => {
            console.error('Error posting discussion:', error);
            alert('Failed to submit discussion. Please try again.');
        });
};


  const styles = {
    pageContainer: {
      backgroundColor: '#df6c2d', // Light blue background for the entire page
      minHeight: '100vh', // Full viewport height
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      maxWidth: '800px',
      width: '100%',
      padding: '2rem',
      backgroundColor: '#f9f9f9', // Different background for the form container
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    headerImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '1rem',
    },
    input: {
      display: 'block',
      width: '100%',
      padding: '0.8rem',
      margin: '0.5rem 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
    },
    textarea: {
      display: 'block',
      width: '100%',
      padding: '0.8rem',
      margin: '0.5rem 0',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '1rem',
      minHeight: '150px',
    },
    button: {
      padding: '0.8rem 1.5rem',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: 'black',
      color: '#fff',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: 'grey',
    },
    discussionList: {
      marginTop: '2rem',
      textAlign: 'left',
    },
    discussionItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      borderBottom: '1px solid #ddd',
      marginBottom: '1rem',
    },
    userAvatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '1rem',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h2>General Discussions</h2>
        <img 
          src="https://www.aspca.org/sites/default/files/general-pet-care_facebook.jpg" 
          alt="Pet Care" 
          style={styles.headerImage} 
        />
        <p>Share your experiences, ask questions, and discuss anything related to pet adoption and clinic services.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
          <textarea
            placeholder="Your message or discussion topic"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={styles.textarea}
          ></textarea>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Submit
          </button>
        </form>
        
        <div style={styles.discussionList}>
          <h3>Recent Discussions</h3>
          {submissions.length === 0 ? (
            <p>No discussions yet. Be the first to start a conversation!</p>
          ) : (
            submissions.map((submission, index) => (
              <div key={index} style={styles.discussionItem}>
                <img 
                  src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" 
                  alt="User Avatar" 
                  style={styles.userAvatar} 
                />
                <div>
                  <h4>{submission.name}</h4>
                  <p>{submission.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralDiscussions;