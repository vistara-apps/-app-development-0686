import React from 'react'
import { Sidebar } from './Sidebar'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg">
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