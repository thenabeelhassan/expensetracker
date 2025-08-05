import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import ErrorPage from './pages/error';
import PrivateRoute from './components/privateRoute';
import HealthGuard from './components/HealthGuard';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route
          path="/login"
          element={
            <HealthGuard>
              <Login />
            </HealthGuard>
          }
        />
        <Route
          path="/register"
          element={
            <HealthGuard>
              <Register />
            </HealthGuard>
          }
        />
        <Route
          path="/dashboard"
          element={
            <HealthGuard>
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            </HealthGuard>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
