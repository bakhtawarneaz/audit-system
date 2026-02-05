import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import DashboardLayout from '../layouts/dashboardLayout/DashboardLayout'
import AuthLayout from '../layouts/authLayout/AuthLayout'
import Dashboard from '../pages/authorized/dashboard/Dashboard'
import Details from '../pages/authorized/details/Details'
// import Tracking from '../pages/authorized/tracking/Tracking'
import Login from '../pages/unAuthorized/login/Login'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perspectives" element={<Details />} />
        <Route path="/details" element={<Details />} />
        <Route path="/details/:id" element={<Details />} />
        {/* <Route path="/tracking" element={<Tracking />} />
        <Route path="/tracking/:id" element={<Tracking />} /> */}
        <Route path="/tasks" element={<Dashboard />} />
        <Route path="/documents" element={<Dashboard />} />
        <Route path="/reports" element={<Dashboard />} />
        <Route path="/users" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRouter