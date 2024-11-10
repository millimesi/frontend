import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCard from "./components/HomeCard.jsx";
import JobListings from "./components/JobListings.jsx";
import JobFooter from "./components/footer.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCard />
      <JobListings />
      <JobFooter />
    </>
  );
};
export default App;
