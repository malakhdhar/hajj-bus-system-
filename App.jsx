import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import CompanyDashboard from './pages/Company/CompanyDashboard';
import SupervisorDashboard from './pages/Supervisor/SupervisorDashboard';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div className="flex h-screen items-center justify-center p-8">جاري التحميل...</div>;
  if (!user) return <Navigate to="/login" replace />;

  if (allowedRole && user.organization !== allowedRole) {
    if (user.organization === 'nusuk_marhaba') return <Navigate to="/company" replace />;
    if (user.organization === 'ministry_of_hajj') return <Navigate to="/supervisor" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/company/*" element={
            <ProtectedRoute allowedRole="nusuk_marhaba">
              <CompanyDashboard />
            </ProtectedRoute>
          } />

          <Route path="/supervisor/*" element={
            <ProtectedRoute allowedRole="ministry_of_hajj">
              <SupervisorDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
