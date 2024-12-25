import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import JobFooter from "../components/footer";

function HomePage() {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings />
      <JobFooter />
    </>
  );
}

export default HomePage;
