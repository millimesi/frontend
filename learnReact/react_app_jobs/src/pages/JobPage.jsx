import React from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import "./jobpage.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
// import Spinner from "../components/Spinner";
// // import { useEffect, useState } from "react";

function JobPage() {
  // Data fetching and using it with useEffect
  // const { id } = useParams();
  // const [job, setJob] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchJob = async () => {
  //     try {
  //       const res = await fetch(`/api/jobs/${id}`);
  //       const data = await res.json();
  //       setJob(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log("Error fetching data: ", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchJob();
  // }, []);

  // return loading ? <Spinner /> : <h1>{job.title}</h1>;

  const { id } = useParams();
  const job = useLoaderData();

  return (
    <>
      <section>
        <div className="back-container">
          <Link to="/jobs" className="linked">
            <FaArrowLeft className="left-arrow" /> Back to Job Listings
          </Link>
        </div>
      </section>
      <section className="indigowhite">
        <div className="container">
          <div className="gridded">
            <main>
              <div className="titleArea">
                <div className="workcondition">{job.type}</div>
                <h1>{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="locationIcon" />
                  <p className="workarea">{job.location}</p>
                </div>
              </div>

              <div className="titleArea">
                <h3 className="jobdesc">Job Description</h3>

                <p className="desc">{job.description}</p>

                <h3 className="jobdesc">Salary</h3>

                <p className="jobdesc">{job.salary} / Year</p>
              </div>
            </main>
            <aside>
              {/* <!-- Company Info --> */}
              <div className="titleArea">
                <h3 className="companyinfo">Company Info</h3>

                <h2 className="companyName">{job.company.name}</h2>

                <p className="companydesc">{job.company.description}</p>

                <hr className="desc" />

                <h3 className="conttype">Contact Email:</h3>

                <p className="contdesc">{job.company.contactEmail}</p>

                <h3 className="conttype">Contact Phone:</h3>

                <p className="contdesc">{job.company.contactPhone}</p>
              </div>

              {/* <!-- Manage --> */}
              <div className="titleArea">
                <h3 className="companyinfo">Manage Job</h3>
                <Link to={`/jobs/edit/${job.id}`} className="editJob">
                  Edit Job
                </Link>
                <button className="editJobb">Delete Job</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
export default JobPage;
