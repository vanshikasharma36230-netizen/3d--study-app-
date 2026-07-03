import React from 'react'
import { BookOpen, Clock, BarChart3, Users } from 'lucide-react'
import './Navbar.css'

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <BookOpen size={32} className="navbar-icon" />
        <h1>StudyHub 3D</h1>
      </div>
      
      <ul className="navbar-menu">
        <li>
          <button
            className={`nav-btn ${currentPage === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentPage('dashboard')}
          >
            <BookOpen size={20} />
            <span>Dashboard</span>
          </button>
        </li>
        <li>
          <button
            className={`nav-btn ${currentPage === 'timer' ? 'active' : ''}`}
            onClick={() => setCurrentPage('timer')}
          >
            <Clock size={20} />
            <span>Timer</span>
          </button>
        </li>
        <li>
          <button
            className={`nav-btn ${currentPage === 'stats' ? 'active' : ''}`}
            onClick={() => setCurrentPage('stats')}
          >
            <BarChart3 size={20} />
            <span>Statistics</span>
          </button>
        </li>
        <li>
          <button
            className={`nav-btn ${currentPage === 'communities' ? 'active' : ''}`}
            onClick={() => setCurrentPage('communities')}
          >
            <Users size={20} />
            <span>Communities</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
