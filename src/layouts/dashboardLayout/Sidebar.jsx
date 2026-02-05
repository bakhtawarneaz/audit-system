import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Layers, 
  CheckSquare, 
  FileText, 
  BarChart3,
  Users
} from 'lucide-react'

const Sidebar = ({ collapsed }) => {

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Perspectives', icon: Layers, path: '/perspectives' },
    { name: 'Tasks', icon: CheckSquare, path: '/tasks' },
    { name: 'Documents', icon: FileText, path: '/documents' },
    { name: 'Reports', icon: BarChart3, path: '/reports' },
    { name: 'Users & Roles', icon: Users, path: '/users' },
  ]

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-logo">
        <div className="logo-icon-sidebar">
          <svg width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 40L25 10L30 25L10 40Z" fill="#C53030"/>
            <path d="M20 40L35 10L40 25L20 40Z" fill="#fff"/>
          </svg>
        </div>
        {!collapsed && (
          <div className="logo-text-wrapper">
            <span className="logo-text-sidebar">TAHWUL</span>
            <span className="logo-tagline-sidebar">Enabling Digital Transformation</span>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                title={collapsed ? item.name : ''}
              >
                <item.icon size={20} className="nav-icon" />
                {!collapsed && <span className="nav-text">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar