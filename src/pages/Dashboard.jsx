import React, { useEffect, useState } from 'react'
import useStore from '../store/useStore'
import { formatDistanceToNow } from 'date-fns'
import './Dashboard.css'

function Dashboard() {
  const { sessions, userProfile, getTotalStudyTime, getSessionsThisWeek } = useStore()
  const [totalTime, setTotalTime] = useState(0)
  const [weekSessions, setWeekSessions] = useState([])

  useEffect(() => {
    setTotalTime(getTotalStudyTime())
    setWeekSessions(getSessionsThisWeek())
  }, [sessions])

  const hours = Math.floor(totalTime / 60)
  const minutes = Math.floor(totalTime % 60)

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {userProfile.name}! 👋</h2>
        <p>Track your learning journey and achieve your goals</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <h3>Total Study Time</h3>
            <p className="stat-value">{hours}h {minutes}m</p>
            <span className="stat-subtitle">{sessions.length} sessions completed</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <h3>This Week</h3>
            <p className="stat-value">{weekSessions.length}</p>
            <span className="stat-subtitle">study sessions</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <h3>Level</h3>
            <p className="stat-value">{userProfile.level}</p>
            <span className="stat-subtitle">{userProfile.points} points</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div className="stat-content">
            <h3>Current Streak</h3>
            <p className="stat-value">{userProfile.streak}</p>
            <span className="stat-subtitle">days</span>
          </div>
        </div>
      </div>

      <div className="recent-sessions">
        <h3>Recent Study Sessions</h3>
        {sessions.length > 0 ? (
          <div className="sessions-list">
            {sessions.slice(-5).reverse().map((session) => (
              <div key={session.id} className="session-item">
                <div className="session-subject">
                  <strong>{session.subject}</strong>
                  <span className="session-duration">{Math.floor(session.duration)} min</span>
                </div>
                <p className="session-time">
                  {formatDistanceToNow(new Date(session.startTime), { addSuffix: true })}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-sessions">No study sessions yet. Start studying now! 📚</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard
