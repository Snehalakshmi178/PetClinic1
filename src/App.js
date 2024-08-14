import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import FindAPet from './components/FindAPet';
import ListAPet from './components/ListAPet';
import ClinicalServices from './components/ClinicalServices';
import OverlayPage from './components/Overlay';
import LoginPage from './components/Login';
import DoctorsList from './components/DoctorsList';
import ContactUs from './components/ContactUs';
import PetList from './components/PetList';
import StrayDogHelperForum from './components/Strayhelper';
import Footer from './components/Footer';
import GeneralDiscussions from './components/GeneralDiscussions';
import FindHelp from './components/FindHelp';
import Register from './components/Register';
import SuccessStories from './components/SuccessStories';
import Appointment from './components/Appointment';
import Home from './components/Home';
import AdditionalDetails from './components/AdditionalDetails'; // Import AdditionalDetails
import './App.css';

const App = () => {
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/register', '/'];
  const noFooterRoutes = ['/login', '/register'];
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Check for authentication status on mount
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(isAuth);
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/pets');
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handlePetListed = (newPet) => {
    setPets([...pets, newPet]);
  };

  return (
    <div className="App">
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<OverlayPage />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/FindAPet"
          element={isAuthenticated ? <FindAPet pets={pets} /> : <Navigate to="/login" />}
        />
        <Route
          path="/pets/:category"
          element={isAuthenticated ? <PetList /> : <Navigate to="/login" />}
        />
        <Route
          path="/ListAPet"
          element={isAuthenticated ? <ListAPet onPetListed={handlePetListed} /> : <Navigate to="/login" />}
        />
         <Route
          path="/StrayHelper"
          element={isAuthenticated ? <StrayDogHelperForum/> : <Navigate to="/login" />}
        />

        <Route
          path="/ClinicalServices"
          element={isAuthenticated ? <ClinicalServices /> : <Navigate to="/login" />}
        />
        <Route
          path="/ClinicalServices/:service"
          element={isAuthenticated ? <DoctorsList /> : <Navigate to="/login" />}
        />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/GeneralDiscussions"
          element={isAuthenticated ? <GeneralDiscussions /> : <Navigate to="/login" />}
        />
        <Route
          path="/FindHelp"
          element={isAuthenticated ? <FindHelp /> : <Navigate to="/login" />}
        />
        <Route
          path="/SuccessStories"
          element={isAuthenticated ? <SuccessStories /> : <Navigate to="/login" />}
        />
        <Route
          path="/appointment"
          element={isAuthenticated ? <Appointment /> : <Navigate to="/login" />}
        />
        <Route
          path="/additional-details"
          element={isAuthenticated ? <AdditionalDetails /> : <Navigate to="/login" />}
        />
      </Routes>
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
