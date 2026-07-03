# StudyHub 3D - A Productive Study Tracking App

## 📚 Overview

StudyHub 3D is a modern web application designed to help students track their study sessions, visualize their learning progress, and connect with study communities. It combines an intuitive interface with powerful analytics to make learning more productive and engaging.

## ✨ Features

### 1. **Study Timer** ⏱️
- Real-time study session tracking
- Subject/topic categorization
- Start, pause, and stop functionality
- Automatic session logging
- Study tips and recommendations

### 2. **Learning Statistics** 📊
- Track total study time
- View study sessions by day of week
- Analyze study time by subject
- Achievement system with badges
- Visual charts and graphs

### 3. **Study Communities** 👥
- Join subject-specific study groups
- Connect with other learners
- Share resources and tips
- Community discussions

### 4. **Dashboard** 🎯
- Quick overview of study statistics
- Recent study sessions
- Level and points system
- Streak tracking

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vanshikasharma36230-netizen/3d--study-app-.git
cd 3d--study-app-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
3d--study-app-/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── StudyTimer.jsx
│   │   ├── Statistics.jsx
│   │   ├── Communities.jsx
│   │   └── (CSS files for each page)
│   ├── store/
│   │   └── useStore.js (Zustand state management)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **State Management**: Zustand
- **Styling**: CSS3 (with gradients and animations)
- **Build Tool**: Vite
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **HTTP Client**: Axios (for future backend integration)

## 📊 Features in Detail

### Study Timer
- Set study subject/topic before starting
- Real-time session tracking
- Pause and resume functionality
- Save completed sessions automatically
- Integrated study tips

### Statistics Dashboard
- **Total Sessions**: Count of completed study sessions
- **Study Time Breakdown**: Visual representation of time spent on different subjects
- **Weekly Progress**: Track study minutes per day
- **Achievements**: Unlock badges as you reach milestones

### Communities
- 6 pre-made communities to join
- Categories: Math, Science, Programming, Languages, History, Art & Design
- View member count and community description
- Community interaction features

## 💾 Data Persistence

The app uses Zustand with localStorage persistence to save:
- Study sessions
- User profile data
- Community memberships

Data is automatically saved to browser storage and persists across sessions.

## 🎨 UI/UX Highlights

- **Gradient Theme**: Purple and blue gradient design
- **Responsive Layout**: Works on desktop and mobile devices
- **Smooth Animations**: Hover effects and transitions
- **Icon Integration**: Lucide React icons for visual clarity
- **Clean Interface**: Minimal and user-friendly design

## 📈 Future Enhancements

- [ ] 3D visualization of study progress
- [ ] Backend integration with database
- [ ] User authentication
- [ ] Social features (comments, likes)
- [ ] Real-time community chat
- [ ] Mobile app version
- [ ] Export study reports
- [ ] Advanced analytics
- [ ] Gamification features (leaderboards, badges)
- [ ] Study group scheduling

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 💬 Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

**Happy Studying! 📚✨**
