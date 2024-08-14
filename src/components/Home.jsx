import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import WhyChooseUs from './WhyChooseUs';
import StatsSection from './StatsSection';
import StrayDogHelperForum from './Strayhelper';
import Footer from './Footer'; // Ensure you have Footer component

const Home = () => {
  return (
    <div className="home-page">
       <Header /> 
      <MainSection />
      <StatsSection />
      <WhyChooseUs />
      {/* <StrayDogHelperForum/> */}
     
    </div>
  );
};

export default Home;
