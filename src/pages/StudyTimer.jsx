import React, { useState, useEffect } from 'react'
import useStore from '../store/useStore'
import { Play, Pause, StopCircle } from 'lucide-react'
import './StudyTimer.css'

function StudyTimer() {
  const { startSession, endSession, currentSession } = useStore()
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [subject, setSubject] = useState('General')
  const [sessionStarted, setSessionStarted] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const handleStart = () => {
    if (!sessionStarted) {
      startSession(subject)
      setSessionStarted(true)
    }
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleStop = () => {
    setIsRunning(false)
    endSession()
    setSessionStarted(false)
    setTime(0)
    setSubject('General')
  }

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="study-timer">
      <h2>Study Timer</h2>
      
      <div className="timer-container">
        <div className="timer-display">
          <div className="timer-time">{formatTime(time)}</div>
          <div className="timer-subject">{sessionStarted ? subject : 'Select a subject'}</div>
        </div>

        <div className="subject-input">
          <label>Subject/Topic:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={sessionStarted}
            placeholder="Enter subject name"
          />
        </div>

        <div className="timer-controls">
          <button
            className="control-btn start-btn"
            onClick={handleStart}
            disabled={isRunning}
          >
            <Play size={20} />
            Start
          </button>
          <button
            className="control-btn pause-btn"
            onClick={handlePause}
            disabled={!isRunning}
          >
            <Pause size={20} />
            Pause
          </button>
          <button
            className="control-btn stop-btn"
            onClick={handleStop}
            disabled={!sessionStarted}
          >
            <StopCircle size={20} />
            Stop & Save
          </button>
        </div>

        {sessionStarted && (
          <div className="session-info">
            <p>✅ Session in progress - Keep studying!</p>
          </div>
        )}
      </div>

      <div className="timer-tips">
        <h3>Study Tips:</h3>
        <ul>
          <li>🎯 Set clear study goals before starting</li>
          <li>⏰ Use the Pomodoro technique (25 min focus, 5 min break)</li>
          <li>🌿 Take regular breaks to maintain focus</li>
          <li>📱 Minimize distractions during study sessions</li>
          <li>💧 Stay hydrated and maintain good posture</li>
        </ul>
      </div>
    </div>
  )
}

export default StudyTimer
