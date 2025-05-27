

import React from 'react';
import './ScheduleList.css';

const ScheduleList = () => {
  return (
    <div className="schedule-container">
      <h3 className="section-title">The Upcoming Schedule</h3>

      <div className="day-group">
        <div className="day-group-1">
          <p className="day-label">On Thursday</p>
          <div className="schedule-cards">
            <div className="card">
              <h4>Health checkup complete <span>💉</span></h4>
              <p>11:00 AM</p>
            </div>
            <div className="card purple">
              <h4>Ophthalmologist <span>👁️</span></h4>
              <p>14:00 PM</p>
            </div>
          </div>
        </div>

        <div className="day-group-2">
          <p className="day-label">On Saturday</p>
          <div className="schedule-cards">
            <div className="card">
              <h4>Cardiologist <span>❤️</span></h4>
              <p>12:00 AM</p>
            </div>
            <div className="card">
              <h4>Neurologist <span>🧑‍⚕️</span></h4>
              <p>16:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
