import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Zap, 
  Key, 
  Settings,
  LogOut,
  Bot
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext'
import { clsx } from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Integrations', href: '/integrations', icon: Zap },
  { name: 'API Keys', href: '/api-keys', icon: Key },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export const Sidebar = () => {
  const location = useLocation()
  const { signOut, user } = useAuth()
  const { currentTheme } = useTheme()
  const isDarkTheme = currentTheme.includes('dark')

  return (
    <div className={clsx(
      "fixed inset-y-0 left-0 z-50 w-64 bg-surface shadow-card sidebar theme-transition",
      isDarkTheme && "dark-sidebar"
    )}>
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Bot className="h-8 w-8 text-primary" />
          <span className="text-heading text-primary">Nexagent</span>
        </div>
      </div>
      
      <nav className="mt-8 px-4">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={clsx(
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  location.pathname === item.href
                    ? 'bg-primary text-white'
                    : `text-muted hover:text-text ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`
                )}
              >
                <item.icon
                  className={clsx(
                    'mr-3 h-5 w-5',
                    location.pathname === item.href
                      ? 'text-white'
                      : 'text-muted group-hover:text-text'
                  )}
                />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              {user?.email?.[0]?.toUpperCase() || 'U'}
            </span>
          </div>
          <div className="truncate">
            <p className="text-sm font-medium text-text truncate">
              {user?.email || 'User'}
            </p>
          </div>
        </div>
        <button
          onClick={signOut}
          className={`flex items-center w-full px-3 py-2 text-sm text-muted hover:text-text rounded-md ${isDarkTheme ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors`}
        >
          <LogOut className="mr-3 h-4 w-4" />
          Sign out
        </button>
      </div>
    </div>
  )
}
