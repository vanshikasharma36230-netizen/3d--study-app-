import React, { useState } from 'react'
import useStore from '../store/useStore'
import { Users, Plus, MessageCircle, Heart } from 'lucide-react'
import './Communities.css'

function Communities() {
  const { joinCommunity, communities } = useStore()
  const [selectedCommunity, setSelectedCommunity] = useState(null)

  const availableCommunities = [
    {
      id: 1,
      name: 'Mathematics Masters',
      category: 'Math',
      members: 1250,
      description: 'Collaborate on mathematics problems and solutions',
      icon: '📐',
    },
    {
      id: 2,
      name: 'Science Enthusiasts',
      category: 'Science',
      members: 890,
      description: 'Discuss physics, chemistry, and biology concepts',
      icon: '🔬',
    },
    {
      id: 3,
      name: 'Code Warriors',
      category: 'Programming',
      members: 2150,
      description: 'Share code snippets and programming tips',
      icon: '💻',
    },
    {
      id: 4,
      name: 'Language Learners',
      category: 'Languages',
      members: 1560,
      description: 'Practice and share language learning resources',
      icon: '🌍',
    },
    {
      id: 5,
      name: 'History Buffs',
      category: 'History',
      members: 640,
      description: 'Explore historical events and timelines',
      icon: '📜',
    },
    {
      id: 6,
      name: 'Art & Design',
      category: 'Creative',
      members: 1120,
      description: 'Share artwork and design projects',
      icon: '🎨',
    },
  ]

  const isMember = (communityId) => {
    return communities.some((c) => c.id === communityId)
  }

  const handleJoin = (communityId) => {
    if (!isMember(communityId)) {
      joinCommunity(communityId)
    }
  }

  return (
    <div className="communities">
      <h2>Study Communities</h2>
      <p className="communities-subtitle">Join communities and learn together with other students</p>

      <div className="communities-tabs">
        <button className="tab-btn active">All Communities</button>
        <button className="tab-btn">My Communities ({communities.length})</button>
      </div>

      <div className="communities-grid">
        {availableCommunities.map((community) => {
          const joined = isMember(community.id)
          return (
            <div key={community.id} className={`community-card ${joined ? 'joined' : ''}`}>
              <div className="community-header">
                <div className="community-icon">{community.icon}</div>
                <span className="community-badge">{community.category}</span>
              </div>

              <h3>{community.name}</h3>
              <p className="community-desc">{community.description}</p>

              <div className="community-stats">
                <span className="stat">
                  <Users size={16} />
                  {community.members} members
                </span>
              </div>

              <button
                className={`join-btn ${joined ? 'joined' : ''}`}
                onClick={() => handleJoin(community.id)}
              >
                {joined ? '✓ Joined' : 'Join Community'}
              </button>

              {joined && (
                <div className="community-actions">
                  <button className="action-btn">
                    <MessageCircle size={16} />
                    Discussion
                  </button>
                  <button className="action-btn">
                    <Heart size={16} />
                    Like
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="create-community">
        <h3>Want to create your own community?</h3>
        <button className="create-btn">
          <Plus size={20} />
          Create Community
        </button>
      </div>
    </div>
  )
}

export default Communities
