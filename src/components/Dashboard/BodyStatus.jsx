
import React from 'react';
import './BodyStatus.css';
import { FaHeart, FaTooth, FaLungs, FaBone } from 'react-icons/fa';
import ActivityChart from './ActivityChart';
import { FiSearch } from 'react-icons/fi';

const BodyStatus = () => {
  return (
    <div className="body-status-container">
      
      <div className="search-bar">
        {/* <FiSearch className="search-icon" /> */}
        <input
          type="name"
          placeholder="Search"
          id="searchs-input"

        />
      </div>

      <h2 className="body-status-title">Dashboard</h2>

      <div className="body-status-main">
        <div className="body-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQ-ZR81wNJUaOC2t2JXynALAdQBzNdQcJqVUq5Wcn-9ap-jVl" alt="Human Body" className="body-img" />
          <div className="label heart"><FaHeart /> Healthy Heart</div>
          <div className="label leg">🏃 Healthy Leg</div>
        </div>

        <div className="status-cards">
          <div className="card">
            <FaLungs className="icon lungs" />
            <div className="text">
              <h4>Lungs</h4>
              <p>Date: 26 Okt 2021</p>
              <div className="bar red" />
            </div>
          </div>

          <div className="card">
            <FaTooth className="icon tooth" />
            <div className="text">
              <h4>Teeth</h4>
              <p>Date: 26 Okt 2021</p>
              <div className="bar green" />
            </div>
          </div>

          <div className="card">
            <FaBone className="icon bone" />
            <div className="text">
              <h4>Bone</h4>
              <p>Date: 26 Okt 2021</p>
              <div className="bar orange" />
            </div>
          </div>
        </div>
      </div>

      <ActivityChart />
    </div>
  );
};

export default BodyStatus;
