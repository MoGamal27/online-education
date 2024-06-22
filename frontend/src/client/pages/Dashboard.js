import React from 'react';
import { useSelector } from 'react-redux';
import StudentDashboard from '../components/dashboard/StudentDashboard';
import InstructorDashboard from '../components/dashboard/InstructorDashboard';
import AdminDashboard from '../components/dashboard/AdminDashboard';
import './DashboardPage.css';

const DashboardPage = () => {
  const role = useSelector((state) => state.user.role);

  return (
    <div className="dashboard-page">
      {role === 'student' && <StudentDashboard />}
      {role === 'instructor' && <InstructorDashboard />}
      {role === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default DashboardPage;
