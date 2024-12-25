import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./notfoundpage.css";

function NotFoundPage() {
  return (
    <>
      <div className="not-found">
        <FaExclamationTriangle className="exclamation-tringle" />
        <h1>404 - Not Found</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">Go to Homepage</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
