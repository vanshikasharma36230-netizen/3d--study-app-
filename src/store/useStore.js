import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      // Study Sessions
      sessions: [],
      currentSession: null,
      
      startSession: (subject) => set((state) => ({
        currentSession: {
          id: Date.now(),
          subject,
          startTime: new Date(),
          duration: 0,
          isActive: true,
        },
      })),
      
      endSession: () => set((state) => {
        if (state.currentSession) {
          const endTime = new Date()
          const duration = (endTime - state.currentSession.startTime) / 1000 / 60 // minutes
          const completedSession = {
            ...state.currentSession,
            endTime,
            duration,
            isActive: false,
          }
          return {
            sessions: [...state.sessions, completedSession],
            currentSession: null,
          }
        }
        return state
      }),
      
      // Statistics
      getTotalStudyTime: () => {
        const sessions = get().sessions
        return sessions.reduce((total, session) => total + session.duration, 0)
      },
      
      getStudyTimeBySubject: () => {
        const sessions = get().sessions
        return sessions.reduce((acc, session) => {
          if (!acc[session.subject]) {
            acc[session.subject] = 0
          }
          acc[session.subject] += session.duration
          return acc
        }, {})
      },
      
      getSessionsThisWeek: () => {
        const sessions = get().sessions
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        return sessions.filter(s => new Date(s.startTime) > oneWeekAgo)
      },
      
      // Communities
      communities: [],
      joinCommunity: (communityId) => set((state) => ({
        communities: [...state.communities, { id: communityId, joinedAt: new Date() }],
      })),
      
      // User Profile
      userProfile: {
        name: 'Student',
        level: 1,
        points: 0,
        streak: 0,
      },
      
      updateProfile: (profile) => set(() => ({ userProfile: profile })),
    }),
    {
      name: 'study-app-store',
    }
  )
)

export default useStore
