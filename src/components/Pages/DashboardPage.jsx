import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import BodyStatus from "../Dashboard/BodyStatus";
// import ActivityChart from "../Dashboard/ActivityChart";
import CalendarSection from "../Dashboard/CalendarSection";
import ScheduleList from "../Dashboard/ScheduleList";
import "./DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-section">
        <div className="left-panel">
          <BodyStatus />
          
        </div>
        <div className="right-panel">
          <CalendarSection />
          <ScheduleList />
        </div>
      </div>
    </div>

  );
};

export default DashboardPage;
