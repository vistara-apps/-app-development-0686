import React from 'react'
import { Sidebar } from './Sidebar'
import { useTheme } from '../contexts/ThemeContext'

export const Layout = ({ children }) => {
  const { currentTheme } = useTheme();
  const isDarkTheme = currentTheme.includes('dark');
  
  return (
    <div className={`min-h-screen bg-bg theme-transition ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
