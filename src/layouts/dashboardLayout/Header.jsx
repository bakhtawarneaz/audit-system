import React, { useState } from 'react'
import { 
  Menu, 
  Search, 
  Bell, 
  ChevronDown,
} from 'lucide-react'

const Header = ({ onToggleSidebar, collapsed }) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={onToggleSidebar}>
          <Menu size={20} />
        </button>
        
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="header-right">
        <button className="header-icon-btn notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>

        <div className="user-menu">
          <img 
            src="https://ui-avatars.com/api/?name=Mohamed&background=0066FF&color=fff&size=36" 
            alt="User" 
            className="user-menu-avatar"
          />
          <span className="user-menu-name">Mohamed</span>
          <ChevronDown size={16} className="user-menu-arrow" />
        </div>
      </div>
    </header>
  )
}

export default Header