import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Zap, 
  Key, 
  Settings,
  LogOut,
  Bot,
  Sparkles,
  BrainCircuit,
  ChevronRight
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { clsx } from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Integrations', href: '/integrations', icon: Zap },
  { name: 'API Keys', href: '/api-keys', icon: Key },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export const Sidebar = ({ open = true, onClose }) => {
  const location = useLocation()
  const { signOut, user } = useAuth()

  return (
    <div 
      className={clsx(
        "fixed inset-y-0 left-0 z-40 bg-surface shadow-xl transition-transform duration-300 ease-in-out",
        "lg:translate-x-0 lg:w-72",
        open ? "translate-x-0 w-72" : "-translate-x-full w-72"
      )}
    >
      {/* Logo and branding */}
      <div className="h-20 flex items-center px-6 bg-gradient-primary">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
            <BrainCircuit className="h-8 w-8 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-white">Nexagent</span>
            <div className="flex items-center text-xs text-white text-opacity-80">
              <Sparkles className="h-3 w-3 mr-1" />
              <span>AI-Powered Microservices</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="mt-8 px-4">
        <div className="mb-4 px-3">
          <h3 className="text-xs uppercase tracking-wider text-muted font-semibold">Main Navigation</h3>
        </div>
        <ul className="space-y-1.5">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={clsx(
                    'group flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-lg transition-all',
                    isActive
                      ? 'bg-gradient-primary text-white shadow-md'
                      : 'text-text hover:bg-surface-accent hover:text-primary'
                  )}
                  onClick={() => onClose && onClose()}
                >
                  <div className="flex items-center">
                    <item.icon
                      className={clsx(
                        'h-5 w-5 mr-3',
                        isActive ? 'text-white' : 'text-muted group-hover:text-primary'
                      )}
                    />
                    {item.name}
                  </div>
                  {isActive && <ChevronRight className="h-4 w-4 text-white opacity-70" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* AI Status Section */}
      <div className="px-4 mt-8">
        <div className="bg-surface-accent rounded-lg p-4 border border-primary border-opacity-20">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-text">AI System Status</h4>
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-accent mr-1.5 animate-pulse"></span>
              <span className="text-xs text-accent">Active</span>
            </div>
          </div>
          <div className="text-xs text-muted">
            <p>All AI services operational</p>
            <p className="mt-1">Last updated: 2 min ago</p>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 bg-surface-accent">
        <div className="flex items-center space-x-3 mb-3">
          <div className="h-10 w-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-sm font-medium">
              {user?.email?.[0]?.toUpperCase() || 'U'}
            </span>
          </div>
          <div className="truncate">
            <p className="text-sm font-medium text-text truncate">
              {user?.email || 'User'}
            </p>
            <p className="text-xs text-muted">
              Pro Account
            </p>
          </div>
        </div>
        <button
          onClick={signOut}
          className="flex items-center w-full px-3 py-2 text-sm text-muted hover:text-text rounded-md hover:bg-surface hover:shadow-sm transition-all"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Sign out
        </button>
      </div>
    </div>
  )
}
