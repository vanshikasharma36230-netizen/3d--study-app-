import React, { useState, useEffect } from 'react'
import useStore from '../store/useStore'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import './Statistics.css'

function Statistics() {
  const { sessions, getStudyTimeBySubject, getSessionsThisWeek } = useStore()
  const [chartData, setChartData] = useState([])
  const [subjectData, setSubjectData] = useState([])

  useEffect(() => {
    // Prepare data for bar chart (sessions per day this week)
    const weekSessions = getSessionsThisWeek()
    const dayMap = {}
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    
    weekSessions.forEach((session) => {
      const date = new Date(session.startTime)
      const dayName = days[date.getDay()]
      dayMap[dayName] = (dayMap[dayName] || 0) + Math.floor(session.duration)
    })
    
    const barData = days.map((day) => ({
      name: day,
      minutes: dayMap[day] || 0,
    }))
    
    setChartData(barData)
    
    // Prepare data for pie chart (time by subject)
    const timeBySubject = getStudyTimeBySubject()
    const pieData = Object.entries(timeBySubject).map(([subject, time]) => ({
      name: subject,
      value: Math.floor(time),
    }))
    
    setSubjectData(pieData)
  }, [sessions])

  const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#43e97b', '#fa709a']

  const totalTime = sessions.reduce((sum, session) => sum + session.duration, 0)
  const avgSessionTime = sessions.length > 0 ? (totalTime / sessions.length).toFixed(1) : 0

  return (
    <div className="statistics">
      <h2>Learning Statistics</h2>

      <div className="stats-summary">
        <div className="summary-card">
          <h3>Total Sessions</h3>
          <p className="summary-value">{sessions.length}</p>
        </div>
        <div className="summary-card">
          <h3>Total Study Time</h3>
          <p className="summary-value">{Math.floor(totalTime / 60)}h {Math.floor(totalTime % 60)}m</p>
        </div>
        <div className="summary-card">
          <h3>Average Session</h3>
          <p className="summary-value">{avgSessionTime} min</p>
        </div>
        <div className="summary-card">
          <h3>This Week</h3>
          <p className="summary-value">{getSessionsThisWeek().length}</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart">
          <h3>Study Minutes This Week</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="minutes" fill="#667eea" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Study Time by Subject</h3>
          {subjectData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={subjectData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}m`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {subjectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="no-data">No study data available yet</p>
          )}
        </div>
      </div>

      <div className="achievements">
        <h3>Achievements 🏆</h3>
        <div className="achievement-grid">
          <div className="achievement-card achieved">
            <span className="achievement-icon">📚</span>
            <p>First Steps</p>
            <small>Complete your first study session</small>
          </div>
          {sessions.length >= 5 && (
            <div className="achievement-card achieved">
              <span className="achievement-icon">🚀</span>
              <p>Getting Started</p>
              <small>Complete 5 study sessions</small>
            </div>
          )}
          {sessions.length >= 10 && (
            <div className="achievement-card achieved">
              <span className="achievement-icon">⭐</span>
              <p>Dedicated Learner</p>
              <small>Complete 10 study sessions</small>
            </div>
          )}
          {sessions.length >= 20 && (
            <div className="achievement-card achieved">
              <span className="achievement-icon">🏅</span>
              <p>Study Master</p>
              <small>Complete 20 study sessions</small>
            </div>
          )}
          <div className="achievement-card">
            <span className="achievement-icon">⏱️</span>
            <p>Marathoner</p>
            <small>Study for 100+ hours total</small>
          </div>
          <div className="achievement-card">
            <span className="achievement-icon">🔥</span>
            <p>On Fire</p>
            <small>Maintain a 7-day streak</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
