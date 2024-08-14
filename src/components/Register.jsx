import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'; // Import axios

import '../assets/Register.css';

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const userData = {
        username: username,
        email: email,
        password: password
      };

      axios.post('http://localhost:8080/register', userData)
        .then(response => {
          console.log(response);
          window.alert("Registration successful. Move to Login Page!");
          window.location.href = '/';
        })
        .catch(error => {
          console.error("There was an error registering the user!", error);
          window.alert("Registration failed. Please try again.");
        });
    } else {
      window.alert("Please fill in all the required fields properly.");
    }
  };

  const validateForm = () => {
    return username && email && password && confirmPassword && (password === confirmPassword);
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Sign Up</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            id="userName"
            name="userName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="6"
          />
          <button type="submit">Sign Up</button>
          <br />
          <center>
            <p>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Registration;
