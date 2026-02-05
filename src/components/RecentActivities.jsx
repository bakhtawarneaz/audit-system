import React from 'react'

const RecentActivities = ({ activities }) => {
  return (
    <div className="recent-activities-card">
      <h3 className="card-title">Recent Activities</h3>
      
      <div className="activities-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <p className="activity-text">{activity.text}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivities