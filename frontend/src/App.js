import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import HomePage from './client/pages/HomePage';
import CoursesPage from './client/pages/CoursesPage';
import LoginPage from './client/pages/LoginPage';
import RegisterPage from './client/pages/RegisterPage';
import DashboardPage from './client/pages/DashboardPage';
import NotFoundPage from './client/pages/NotFoundPage';
import './client/styles/main.css';
import Header from './client/component/layout/Header';
import Footer from './client/component/layout/Footer';
import MainContent from './client/component/layout/MainContent';
import './App.css';

const App = () => (

  <Router>
   




    <div className="app">
      <Header/>
      <MainContent>
        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
        </Routes>
      </MainContent>
      <Footer/>
    </div>
   
  </Router>
);

export default App;
