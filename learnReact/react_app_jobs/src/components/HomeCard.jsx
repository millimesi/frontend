import React from "react";
import "./homeCard.css";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <section>
      <div className="container">
        <Card>
          <h2>For Developers</h2>
          <p>Browse our React jobs and start your career today</p>
          <Link to="jobs">Browse Jobs</Link>
        </Card>
        <Card bg="-bg-indigo">
          <h2>For Employers</h2>
          <p>List your job to find the perfect developer for the role</p>
          <Link to="add-jobs">Add Jobs</Link>
        </Card>
      </div>
    </section>
  );
};

export default HomeCard;
