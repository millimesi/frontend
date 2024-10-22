import React from "react";
import './joblistings.css';
import { jobs } from '../jobs.json';


const JobListings = () => {
    return(
    <section className="joblisiting">
        <h2>Browse Jobs</h2>
        <div className="container">
            {jobs.map((job, index)=> (
                <div className="job-detail" key={index}>
                    <div className="type">{job.type}</div>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <div className="salary">{job.salary}/years</div>
                    <div className="location">{job.location}</div>
                    <div className="read-more">
                        <a href="#">Read more</a>
                    </div>
                </div>
            ))}
        </div>
    </section>
    )
}

export default JobListings;
