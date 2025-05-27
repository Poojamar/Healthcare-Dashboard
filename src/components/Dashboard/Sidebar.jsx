import React from 'react';
import './Sidebar.css';
import { 
  FiGrid, FiClock, FiCalendar, FiUsers, FiBarChart2, 
  FiMessageCircle, FiPhone, FiSettings 
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">
        <h3 className="highlight">Health<span>care</span ></h3>
      </h2>

      <div className="section">
        <p className="section-title">General</p>
        <ul>
          <li className="active"><FiGrid /> Dashboard</li>
          <li><FiClock /> History</li>
          <li><FiCalendar /> Calendar</li>
          <li><FiUsers /> Appointments</li>
          <li><FiBarChart2 /> Statistics</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-title">Tools</p>
        <ul>
          <li><FiMessageCircle /> Chat</li>
          <li><FiPhone /> Support</li>
        </ul>
      </div>

      <div className="setting">
        <FiSettings /> Setting
      </div>
    </div>
  );
};

export default Sidebar;