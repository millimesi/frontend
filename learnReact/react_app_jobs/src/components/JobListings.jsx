import React from "react";
import "./joblistings.css";
import { jobs } from "../jobs.json";
import JobDescription from "./JobDescription.jsx";

const JobListings = ({ isHome = false }) => {
  const recentJobs = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="joblisiting">
      <h2>{isHome ? "Browse Jobs" : "RecentJobs"}</h2>
      <div className="container">
        {recentJobs.map((job) => (
          <JobDescription key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobListings;
