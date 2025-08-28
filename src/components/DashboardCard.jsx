import React from 'react'
import { clsx } from 'clsx'
import { useTheme } from '../contexts/ThemeContext'

export const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  variant = 'default',
  children 
}) => {
  const { currentTheme } = useTheme();
  const isDarkTheme = currentTheme.includes('dark');
  
  return (
    <div className={clsx(
      'bg-surface rounded-lg shadow-card p-6 theme-transition',
      'animate-fade-in',
      variant === 'apiUsage' && 'border-l-4 border-accent',
      variant === 'featureToggle' && 'border-l-4 border-primary',
      isDarkTheme && 'dark-card'
    )}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-5 w-5 text-muted" />}
            <h3 className="text-subheading text-text">{title}</h3>
          </div>
          {value && (
            <p className="text-3xl font-bold text-primary mt-2">{value}</p>
          )}
          {description && (
            <p className="text-body text-muted mt-1">{description}</p>
          )}
        </div>
      </div>
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  )
}
