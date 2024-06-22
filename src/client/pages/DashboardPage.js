import React from 'react';
import { useSelector } from 'react-redux';
import StudentDashboard from '../component/dashboard/StudentDashboard';
import InstructorDashboard from '../component/dashboard/InstructorDashboard';
import AdminDashboard from '../component/dashboard/AdminDashboard';


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
