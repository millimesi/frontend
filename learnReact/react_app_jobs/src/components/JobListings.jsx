import React from "react";
import { useEffect, useState } from "react";
import "./joblistings.css";
// import { jobs } from "../jobs.json";
import JobDescription from "./JobDescription.jsx";
import Spinner from "./Spinner.jsx";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // console.log(data);
        setJobs(data);
      } catch (error) {
        console.log("fetching error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // const recentJobs = isHome ? jobs.slice(0, 3) : jobs; // this can work also but it is better to do the slicing with url limit
  return (
    <section className="joblisiting">
      <h2>{isHome ? "Browse Jobs" : "RecentJobs"}</h2>
      <div className="container">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            {jobs.map((job) => (
              <JobDescription key={job.id} job={job} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default JobListings;
