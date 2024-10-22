import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import HomeCard from './components/HomeCard.jsx';
import JobListings from './components/JobListings.jsx';

const App = () => {
  return (
    <>
        <NavBar />
        <Hero /> 
        <HomeCard />
        <JobListings />
    </>
  )
}
export default App;
