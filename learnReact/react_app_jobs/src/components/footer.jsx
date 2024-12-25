import React from "react";
import { Link } from "react-router-dom";
import "./footers.css";
function JobFooter() {
  return (
    <footer>
      <div className="footer-container">
        <Link to="jobs">View All Jobs</Link>
      </div>
    </footer>
  );
}

export default JobFooter;
