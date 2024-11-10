import React from "react";
import "./joblistings.css";
import { jobs } from "../jobs.json";
import JobDescription from "./JobDescription.jsx";

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);
  return (
    <section className="joblisiting">
      <h2>Browse Jobs</h2>
      <div className="container">
        {recentJobs.map((job) => (
          <JobDescription key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobListings;
