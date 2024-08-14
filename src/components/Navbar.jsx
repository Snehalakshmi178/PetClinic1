import React from 'react';
import petpals from '../assets/petpals.jpg';
import '../assets/Navbar.css';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <img src={petpals} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          <Typography variant="h5" component="div" sx={{ color: '#fff' }}>
            PetPals
          </Typography>
        </Box>
        
        <Box display="flex" alignItems="center">
          <Button color="inherit" onClick={() => handleNavigation('/home')} sx={{ margin: '0 10px' }}>Home</Button>
          <Button color="inherit" onClick={() => handleNavigation('/FindAPet')} sx={{ margin: '0 10px' }}>Find a Pet</Button>
          <Button color="inherit" onClick={() => handleNavigation('/ListAPet')} sx={{ margin: '0 10px' }}>List a Pet</Button>
          <Button color="inherit" onClick={() => handleNavigation('/ClinicalServices')} sx={{ margin: '0 10px' }}>Veterinarian</Button>
          <Button color="inherit" onClick={() => handleNavigation('/StrayHelper')} sx={{ margin: '0 10px' }}>StrayHelper</Button>
          <Button color="inherit" onClick={() => handleNavigation('/ContactUs')} sx={{ margin: '0 10px' }}>ContactUs</Button>
         
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
