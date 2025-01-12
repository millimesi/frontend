import React from "react";
import { useEffect, useState } from "react";
import "./joblistings.css";
// import { jobs } from "../jobs.json";
import JobDescription from "./JobDescription.jsx";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/jobs");
        const data = await res.json();
        console.log(data);
        setJobs(data);
      } catch (error) {
        console.log("fetching error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const recentJobs = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="joblisiting">
      <h2>{isHome ? "Browse Jobs" : "RecentJobs"}</h2>
      <div className="container">
        {loading ? (
          <p>loading... </p>
        ) : (
          <>
            {recentJobs.map((job) => (
              <JobDescription key={job.id} job={job} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default JobListings;
