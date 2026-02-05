import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ProjectTimeline = ({ timeline }) => {
  const [selectedYear, setSelectedYear] = useState('2026')

  const getStatusDotClass = (status) => {
    switch(status) {
      case 'completed':
        return 'timeline-dot completed'
      case 'current':
        return 'timeline-dot current'
      case 'upcoming':
        return 'timeline-dot upcoming'
      default:
        return 'timeline-dot'
    }
  }

  return (
    <div className="project-timeline-card">
      <div className="timeline-header">
        <h3 className="timeline-title">Project Timeline</h3>
        <div className="year-selector">
          <span>{selectedYear}</span>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line">
          <div className="timeline-line-progress" style={{ width: '45%' }}></div>
        </div>

        <div className="timeline-items">
          {timeline.map((item, index) => (
            <div key={item.id} className="timeline-item">
              <div className={getStatusDotClass(item.status)}></div>
              <div className="timeline-item-content">
                <span className="timeline-date">{item.date}</span>
                <span className="timeline-label">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectTimeline
