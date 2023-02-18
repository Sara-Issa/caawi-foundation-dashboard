import React from "react";

import Nav from "./Nav";
import Donate from "./Components/Donate";
import DonationReport from "./Components/Donation_report";
import DonationList from "./Components/donation_list";

import Volunteer from "./Components/volunteer_form";
import VolunteerList from "./Components/volunteer_list";
import VolunteerReports from "./Components/volunteer_report";


import Hiring from "./Components/job_hiring";
import JobList from "./Components/job_list";
import JobReports from "./Components/job_report";

import Dashboard from "./Dashboard";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <div className="relative">
    <Router>
    <Nav />
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

        <Route path="/donateForm" element={<Donate />} />
        <Route path="/donationReport" element={<DonationReport />} />
        <Route path="/donationList" element={<DonationList />} />

        <Route path="/volunteerList" element={<VolunteerList />} />
        <Route path="/volunteerReports" element={<VolunteerReports />} />
        <Route path="/volunteerForm" element={<Volunteer />} />


        <Route path="/hiringForm" element={<Hiring />} />
        <Route path="/jobList" element={<JobList />} />
        <Route path="/jobReports" element={<JobReports />} />

      </Routes>
    </Router>
    </div>
  </>
  );
}

export default App;
