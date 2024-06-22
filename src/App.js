import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

const App = () => (
  <Router>
    <div className="app">
      <Header/>
      <MainContent>

    

   
  
      <Route path="/" exact component={HomePage} />
      <Route path="/courses" exact component={CoursesPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route component={NotFoundPage} />
   
    </MainContent>
    <Footer/>
    
    </div>
  </Router>
);

export default App;
