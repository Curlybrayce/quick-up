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
import Footer from './components/layout/Footer';
import EnrollmentForm from './pages/EnrollmentForm';
import ClassroomSession from './pages/ClassroomSession';
import ClassroomAccess from './pages/ClassroomAccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <HomePage />
          <Footer />
          </>
        } />
        <Route path="/register" element={
          <>
            <Navbar />
            <RegistrationPage /> 
            <Footer />
          </>
        } />
        <Route path="/classroom/session" element={
          <>
            <Navbar />
            <ClassroomSession /> 
            <Footer />
          </>
        } />
        <Route path="/classroom-access" element={
          <>
            <Navbar />
            <ClassroomAccess /> 
            <Footer />
          </>
        } />
        <Route path="/enroll" element={
          <>
            <Navbar />
            <EnrollmentForm /> 
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <AboutPage />
            <Footer />
          </>
        } />
        <Route path="/courses" element={
          <>
          <Navbar />
          <AllProCoursesPage />
          <Footer />
        </>
        } />
        <Route path="/all-pro-courses" element={
          <>
          <Navbar />
          <CoursesPage />
          <Footer />
        </>
        } />
        <Route path="/financial-aid" element={
          <>
          <Navbar />
          <FinancialAidPage />
          <Footer />
        </>
        } />
      </Routes>
    </Router>
  )
}

export default App
