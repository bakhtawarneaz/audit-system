import React from 'react'

const ProgressStatus = ({ categories, legend }) => {

  const getItemBgColor = (status) => {
    switch(status) {
      case 'completed':
        return '#10b981'
      case 'in-progress':
        return '#f59e0b'
      case 'not-started':
        return '#9ca3af'
      case 'delayed':
        return '#ef4444'
      default:
        return '#9ca3af'
    }
  }

  return (
    <div className="progress-status-section">
      <div className="progress-status-header">
        <h3 className="section-title">Progress Status</h3>
        <div className="status-legend">
          {legend.map((item, index) => (
            <div key={index} className="legend-item">
              <span 
                className="legend-dot" 
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="legend-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="progress-grid">
        {categories.map((category) => (
          <div key={category.id} className="progress-column">
            <div 
              className="category-header"
              style={{ backgroundColor: '#1D3557' }}
            >
              <span className="category-name">{category.name}</span>
              <span className="category-percentage">{category.percentage}</span>
            </div>

            <div className="subcategories">
              {category.subcategories.map((sub, subIndex) => (
                <div key={subIndex} className="subcategory">
                  <span className="subcategory-name">{sub.name}</span>
                  <div className="subcategory-items">
                    {sub.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="item-badge"
                        style={{ backgroundColor: getItemBgColor(sub.statuses[itemIndex]) }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressStatus
