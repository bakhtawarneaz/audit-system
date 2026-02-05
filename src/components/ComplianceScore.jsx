import React from 'react'

const ComplianceScore = ({ percentage, label }) => {
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const progressOffset = circumference - (percentage / 100) * circumference * 0.75 
  
  return (
    <div className="compliance-score-card">
      <h3 className="card-title">Overall Compliance Score</h3>
      
      <div className="gauge-container">
        <svg viewBox="0 0 200 200" className="gauge-svg">
          <path
            d="M 30 170 A 80 80 0 1 1 170 170"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <path
            d="M 30 170 A 80 80 0 1 1 170 170"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={`${circumference * 0.75}`}
            strokeDashoffset={progressOffset}
            className="gauge-progress"
          />
          <text x="100" y="110" textAnchor="middle" className="gauge-percentage">
            {percentage}%
          </text>
          <text x="100" y="140" textAnchor="middle" className="gauge-label">
            {label}
          </text>
        </svg>
      </div>
    </div>
  )
}

export default ComplianceScore