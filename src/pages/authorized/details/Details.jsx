import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, FileText, Clock, CheckCircle, AlertCircle, Send, ArrowUpDown } from 'lucide-react'
import './Details.css'
import { detailsPageData } from '../../../data/mockData'

const Details = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [comment, setComment] = useState('')
  const data = detailsPageData

  const evidenceCards = [
    { 
      id: 1, 
      value: data.evidence.total, 
      label: 'Total Evidence', 
      icon: FileText,
      color: '#1a365d'
    },
    { 
      id: 2, 
      value: data.evidence.underReview, 
      label: 'Under Review Evidence', 
      icon: AlertCircle,
      color: '#dc2626'
    },
    { 
      id: 3, 
      value: data.evidence.inProgress, 
      label: 'In Progress Evidence', 
      icon: Clock,
      color: '#dc2626'
    },
    { 
      id: 4, 
      value: data.evidence.completed, 
      label: 'Completed Evidence', 
      icon: CheckCircle,
      color: '#dc2626'
    },
  ]

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'approved':
        return 'status-approved'
      case 'pending review':
        return 'status-pending'
      default:
        return ''
    }
  }

  const handlePostComment = () => {
    if (comment.trim()) {
      console.log('Posting comment:', comment)
      setComment('')
    }
  }

  return (
    <div className="details-page">
      <div className="details-page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <h1 className="page-title">{data.title}</h1>
      </div>

      <div className="details-main-card">
        <div className="details-card-header">
          <div className="header-left">
            <span className="category-badge">{data.category}</span>
            <h2 className="details-title">{data.title}</h2>
            <p className="details-description">{data.description}</p>
          </div>
          <div className="header-right">
            <div className="progress-circle" data-progress={data.progress}>
              <svg viewBox="0 0 100 100">
                <circle 
                  className="progress-bg" 
                  cx="50" 
                  cy="50" 
                  r="45"
                />
                <circle 
                  className="progress-fill" 
                  cx="50" 
                  cy="50" 
                  r="45"
                  style={{
                    strokeDasharray: `${2 * Math.PI * 45}`,
                    strokeDashoffset: `${2 * Math.PI * 45 * (1 - data.progress / 100)}`
                  }}
                />
              </svg>
              <span className="progress-text">{data.progress}%</span>
            </div>
          </div>
        </div>

        <div className="evidence-stats-row">
          {evidenceCards.map((card) => (
            <div key={card.id} className="evidence-stat-card">
              <div className="evidence-icon" style={{ color: card.color }}>
                <card.icon size={24} />
              </div>
              <div className="evidence-content">
                <span className="evidence-value">{card.value}</span>
                <span className="evidence-label">{card.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="details-tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'evidence' ? 'active' : ''}`}
            onClick={() => setActiveTab('evidence')}
          >
            Evidence
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="content-row">
                <div className="content-label">Objective</div>
                <div className="content-value">{data.sections.objective}</div>
              </div>

              <div className="content-row">
                <div className="content-label">
                  Implementation<br />Requirements
                </div>
                <div className="content-value requirements-box">
                  {data.sections.implementationRequirements.map((req, index) => (
                    <p key={index}>{req}</p>
                  ))}
                </div>
              </div>

              <div className="content-row">
                <div className="content-label">
                  Evidence<br />Documents
                </div>
                <div className="content-value">{data.sections.evidenceDocuments}</div>
              </div>

              <div className="content-row">
                <div className="content-label">
                  Related<br />Regulations
                </div>
                <div className="content-value">{data.sections.relatedRegulations}</div>
              </div>

              <div className="content-row">
                <div className="content-label">Scope</div>
                <div className="content-value">{data.sections.scope}</div>
              </div>

              <div className="content-row leaders-row">
                <div className="content-label">Leaders</div>
                <div className="content-value leaders-list">
                  {data.leaders.map((leader) => (
                    <div key={leader.id} className="leader-card">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=3b82f6&color=fff&size=40`}
                        alt={leader.name}
                        className="leader-avatar"
                      />
                      <div className="leader-info">
                        <span className="leader-name">{leader.name}</span>
                        <span className="leader-role">{leader.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evidence' && (
            <div className="evidence-tab-content">
              <div className="documents-table-container">
                <table className="documents-table">
                  <thead>
                    <tr>
                      <th>
                        <span className="th-content">
                          Document Number
                          <ArrowUpDown size={14} />
                        </span>
                      </th>
                      <th>
                        <span className="th-content">
                          Document Name
                          <ArrowUpDown size={14} />
                        </span>
                      </th>
                      <th>
                        <span className="th-content">
                          Document Lead
                          <ArrowUpDown size={14} />
                        </span>
                      </th>
                      <th>
                        <span className="th-content">
                          Document Preparer
                          <ArrowUpDown size={14} />
                        </span>
                      </th>
                      <th>
                        <span className="th-content">
                          Date
                          <ArrowUpDown size={14} />
                        </span>
                      </th>
                      <th>
                        <span className="th-content">
                          Due Date
                          <ArrowUpDown size={14} />
                        </span>
                      </th>
                      <th>
                        <span className="th-content">
                          Status
                          <ArrowUpDown size={14} />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.evidenceDocuments.map((doc) => (
                      <tr key={doc.id}>
                        <td>{doc.documentNumber}</td>
                        <td className="doc-name">{doc.documentName}</td>
                        <td>{doc.documentLead}</td>
                        <td>{doc.documentPreparer}</td>
                        <td>{doc.date}</td>
                        <td>{doc.dueDate}</td>
                        <td>
                          <span className={`status-badge ${getStatusClass(doc.status)}`}>
                            {doc.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="evidence-bottom-section">
                <div className="comments-section">
                  <h4 className="section-heading">Comments</h4>
                  
                  <div className="comments-list">
                    {data.comments.map((cmt) => (
                      <div key={cmt.id} className="comment-item">
                        <div className="comment-header">
                          <div className="comment-user">
                            <span className="user-initial">{cmt.initial}</span>
                            <span className="user-name">{cmt.user}</span>
                          </div>
                          <span className="comment-date">{cmt.date}</span>
                        </div>
                        <p className="comment-text">{cmt.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="comment-input-section">
                    <textarea 
                      className="comment-textarea"
                      placeholder="Write a comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <button className="post-comment-btn" onClick={handlePostComment}>
                      <Send size={16} />
                      Post Comment
                    </button>
                  </div>
                </div>

                <div className="evidence-activities">
                  <h4 className="section-heading">Recent Activities</h4>
                  
                  <div className="activities-list">
                    {data.evidenceActivities.map((activity) => (
                      <div key={activity.id} className="activity-item">
                        <span className="activity-dot"></span>
                        <div className="activity-content">
                          <p className="activity-text">{activity.text}</p>
                          <span className="activity-time">{activity.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Details
