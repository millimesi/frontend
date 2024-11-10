import React from "react";
import { useState } from "react";

function JobDescription({ job }) {
  const [showFullDesc, setShowFullDesc] = useState(false);

  let description = job.description;

  if (!showFullDesc) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="job-detail">
      <div className="type">{job.type}</div>
      <h3>{job.title}</h3>
      <p>{description}</p>
      <button
        onClick={() => setShowFullDesc((prev) => !prev)}
        className="des-state"
      >
        {showFullDesc ? "Less" : "More"}
      </button>
      <div className="salary">{job.salary}/years</div>
      <div className="location">{job.location}</div>
      <div className="read-more">
        <a href="#">Read more</a>
      </div>
    </div>
  );
}

export default JobDescription;
