import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import GlobalStyle from './GlobalStyle';
import FloatingNavbar from './components/FloatingNavbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Marketplace from './pages/Marketplace';
import CreatePost from './pages/CreatePost';
import AIChat from './pages/AIChat';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <FloatingNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/ai-chat" element={<AIChat />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;