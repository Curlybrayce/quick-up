import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import CoursesPage from './pages/AllProCoursesPage';
import AllProCoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import './global.css';
import FinancialAidPage from './pages/FinancialAidPage';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <HomePage />
          </>
        } />
        <Route path="/register" element={
          <>
            <Navbar />
            <RegistrationPage />          
          </>
        } />
        <Route path="/about" element={
          <>
            <AboutPage />
          </>
        } />
        <Route path="/courses" element={
          <>
          <Navbar />
          <AllProCoursesPage />
        </>
        } />
        <Route path="/all-pro-courses" element={
          <>
          <Navbar />
          <CoursesPage />
        </>
        } />
        <Route path="/financial-aid" element={
          <>
          <Navbar />
          <FinancialAidPage />
        </>
        } />
      </Routes>
    </Router>
  )
}

export default App
