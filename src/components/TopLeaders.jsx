import React from 'react'

const TopLeaders = ({ leaders }) => {
  return (
    <div className="top-leaders-card">
      <h3 className="card-title">Top Performing Perspective Leaders</h3>
      
      <div className="leaders-list">
        {leaders.map((leader, index) => (
          <div key={leader.id} className="leader-item">
            <div className="leader-info">
              <div className="leader-avatar">
                <img 
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=${index === 0 ? '3b82f6' : index === 1 ? '10b981' : '8b5cf6'}&color=fff&size=44`}
                  alt={leader.name}
                />
              </div>
              <div className="leader-details">
                <span className="leader-name">{leader.name}</span>
                <span className="leader-perspective">{leader.perspective}</span>
              </div>
            </div>
            <div className="leader-score">
              <span className="score-value">{leader.score}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopLeaders