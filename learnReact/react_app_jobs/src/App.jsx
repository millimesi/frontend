import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./MainLayout/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import { jobLoader } from "./Loader";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobsPage from "./pages/addJobsPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // Add Job
  const addJob = async (newJob) => {
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
      return;
    } catch (error) {
      console.log("Job post Error", error);
    }
  };

  // Delete Job
  const deleteJob = async (id) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
      });
      return;
    } catch (error) {
      console.log("Job Deleete Error", error);
    }
  };

  const updateJob = async (job) => {
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(job),
      });
      return;
    } catch (error) {
      console.log("Job update Error", error);
    }
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />

        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-jobs/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/add-jobs"
          element={<AddJobsPage addJobSubmit={addJob} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
