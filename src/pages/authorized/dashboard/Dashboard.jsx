import React from 'react'
import './Dashboard.css'

import StatsCard from '../../../components/StatsCard'
import ProjectTimeline from '../../../components/ProjectTimeline'
import ProgressStatus from '../../../components/ProgressStatus'
import ComplianceScore from '../../../components/Compliancescore'
import TopLeaders from '../../../components/TopLeaders'
import RecentActivities from '../../../components/RecentActivities'
import MonthlyPerformance from '../../../components/MonthlyPerformance'
import AuditReadiness from '../../../components/AuditReadiness'

import { 
  dashboardStats, 
  projectTimeline, 
  progressCategories,
  complianceScore,
  topLeaders,
  recentActivities,
  monthlyPerformance,
  auditReadiness,
  statusLegend
} from '../../../data/mockData'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <ProjectTimeline timeline={projectTimeline} />

      <div className="stats-row">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.id} stat={stat} />
        ))}
      </div>

      <ProgressStatus categories={progressCategories} legend={statusLegend} />

      <div className="bottom-section">
        <div className="bottom-column">
          <ComplianceScore 
            percentage={complianceScore.percentage} 
            label={complianceScore.label} 
          />
          <TopLeaders leaders={topLeaders} />
          <RecentActivities activities={recentActivities} />
        </div>
        <div className="bottom-column">
          <MonthlyPerformance data={monthlyPerformance} />
          <AuditReadiness data={auditReadiness} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard