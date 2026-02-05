import React from 'react'

const AuditReadiness = ({ data }) => {
  const { percentage, overdueStds, missingEvidence } = data
  return (
    <div className="audit-readiness-card">
      <h3 className="card-title">Audit Readiness</h3>
      
      <div className="readiness-gauge-container">
        <svg viewBox="0 0 200 120" className="readiness-gauge">
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#10b981"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
          />
          
          <text x="100" y="85" textAnchor="middle" className="readiness-percentage">
            {percentage}%
          </text>
          <text x="100" y="105" textAnchor="middle" className="readiness-label">
            Readiness Level
          </text>
        </svg>
      </div>
      
      <div className="readiness-stats">
        <div className="readiness-stat">
          <span className="stat-value">{overdueStds}</span>
          <span className="stat-label">Overdue Stds</span>
        </div>
        <div className="readiness-stat">
          <span className="stat-value">{missingEvidence}</span>
          <span className="stat-label">Missing Evidence</span>
        </div>
      </div>
    </div>
  )
}

export default AuditReadiness