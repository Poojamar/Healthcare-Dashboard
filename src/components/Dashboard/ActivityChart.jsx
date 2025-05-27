import React from 'react';
import './ActivityChart.css';

const ActivityChart = () => {
  const activity = [4, 7, 5, 6, 9, 3, 6]; // Sample values for Mon-Sun

  return (
    <div className="activity-chart">
      <h3>Activity</h3>
      <div className="chart">
        {activity.map((value, index) => (
          <div key={index} className="bar" style={{ height: `${value * 10}px` }}></div>
        ))}
      </div>
      <div className="days">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
          <span key={idx}>{day}</span>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
