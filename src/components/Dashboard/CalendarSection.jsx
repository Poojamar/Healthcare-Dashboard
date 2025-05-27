
import React from 'react';
import './CalendarSection.css';
import { FiUser, FiPlus } from 'react-icons/fi';
import ScheduleList from './ScheduleList';

const CalendarSection = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-month">
          <h3>October 2021</h3>
        </div>
        <div className="calendar-actions">
          <div className="icon-container">
            <FiUser className="action-icon" />
            <span className="action-label">Sign In</span>
          </div>
          <div className="icon-container purple">
            <FiPlus className="action-icon" />
            <span className="action-label">Sign Up</span>
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={index} className="day-column">
            <span className="day-label">{day}</span>
            <span className="day-number">{25 + index}</span>
            <div className="time-slots">
              <div className={day === 'Tues' ? 'slot active' : 'slot'}>09:00</div>
              <div className="slot">10:00</div>
              <div className="slot">11:00</div>
            </div>
          </div>
        ))}
      </div>

      <div className="appointments">
        <div className="appointment dentist">
          <p>Dentist</p>
          <span>09:00-11:00<br />Dr. Cameron Williamson</span>
        </div>
        <div className="appointment physio">
          <p>Physiotherapy Appointment</p>
          <span>11:00-12:00<br />Dr. Kevin Djones</span>
        </div>
      </div>
    </div>
  );
};
<ScheduleList/>

export default CalendarSection;
