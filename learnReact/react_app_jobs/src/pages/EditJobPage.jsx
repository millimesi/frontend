import React from "react";
// import "./editJobPage.css";
import { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditJobPage({ updateJobSubmit }) {
  const { id } = useParams();
  const job = useLoaderData();
  const navigate = useNavigate();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  // Handle submit Job
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission action (which is page reload)

    const updateJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description,
        companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateJobSubmit(updateJob);

    toast.success("Job updated successfully.");

    return navigate(`/jobs/${job.id}`);
  };

  return (
    <section className="bg-indigo-50">
      <div className="clontainer">
        <div className="boxx">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h2 className="addjobheading">Add Job</h2>
              <label htmlFor="type" className="labelstyle">
                Job Type
              </label>
              <select
                name="type"
                id="type"
                className="selectt"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internshipe</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="labelstyle">Job Listing Name</label>
              <input
                type="text"
                id="title"
                name="title"
                className="selectt"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="labelstyle">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="selectt"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="salary" className="labelstyle">
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="selectt"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="labelstyle">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="selectt"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <h3 className="companyinfoh">Company Info</h3>
            <div className="mb-4">
              <label htmlFor="company" className="labelstyle">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="selectt"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company_description" className="labelstyle">
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="selectt"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="contact_email" className="labelstyle">
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="selectt"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contact_phone" className="labelstyle">
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="selectt"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button className="companyButton" type="submit">
                Edit Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditJobPage;
