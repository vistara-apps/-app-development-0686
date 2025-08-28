import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { Layout } from './components/Layout'
import { Landing } from './pages/Landing'
import { Dashboard } from './pages/Dashboard'
import { Integrations } from './pages/Integrations'
import { APIKeys } from './pages/APIKeys'
import { Settings } from './pages/Settings'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/integrations" element={<Layout><Integrations /></Layout>} />
        <Route path="/api-keys" element={<Layout><APIKeys /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
      </Routes>
    </AuthProvider>
  )
}

export default App