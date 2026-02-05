import React from 'react'
import { TrendingUp, FileText, CheckCircle, FolderOpen, Upload, ClipboardCheck } from 'lucide-react'

const StatsCard = ({ stat }) => {
  const getIcon = (iconType) => {
    const iconProps = { size: 24, strokeWidth: 1.5 }
    
    switch(iconType) {
      case 'progress':
        return <TrendingUp {...iconProps} />
      case 'criteria':
        return <ClipboardCheck {...iconProps} />
      case 'completed':
        return <CheckCircle {...iconProps} />
      case 'documents':
        return <FolderOpen {...iconProps} />
      case 'evidence':
        return <FileText {...iconProps} />
      case 'uploaded':
        return <Upload {...iconProps} />
      default:
        return <FileText {...iconProps} />
    }
  }

  return (
    <div className="stats-card">
      <div className="stats-card-icon" style={{ color: stat.color }}>
        {getIcon(stat.icon)}
      </div>
      <div className="stats-card-content">
        <span className="stats-card-value">{stat.value}</span>
        <span className="stats-card-label">{stat.label}</span>
      </div>
    </div>
  )
}

export default StatsCard
