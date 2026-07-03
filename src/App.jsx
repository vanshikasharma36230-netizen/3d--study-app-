import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import StudyTimer from './pages/StudyTimer'
import Statistics from './pages/Statistics'
import Communities from './pages/Communities'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'timer' && <StudyTimer />}
        {currentPage === 'stats' && <Statistics />}
        {currentPage === 'communities' && <Communities />}
      </main>
    </div>
  )
}

export default App
