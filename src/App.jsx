import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/shared/ProtectedRoute';

// Public Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Student Protected Pages
import StudentDashboard from './pages/student/Dashboard';
import NewComplaint from './pages/student/NewComplaint';
import StudentComplaintDetail from './pages/student/ComplaintDetail';
import EditComplaint from './pages/student/EditComplaint';

// Admin Protected Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminComplaints from './pages/admin/Complaints';
import AdminComplaintDetail from './pages/admin/ComplaintDetail';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
{/* Sai */}
            {/* Student Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/new-complaint" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <NewComplaint />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/complaint/:id" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentComplaintDetail />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/complaint/:id/edit" 
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <EditComplaint />
                </ProtectedRoute>
              } 
            />

            {/* Admin Protected Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/complaints" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminComplaints />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/complaint/:id" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminComplaintDetail />
                </ProtectedRoute>
              } 
            />

            {/* Catch-all 404 - Redirect to landing for now */}
            <Route path="*" element={<Landing />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
