import React from 'react'
import { clsx } from 'clsx'

export const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  variant = 'default',
  children 
}) => {
  return (
    <div className={clsx(
      'bg-surface rounded-xl shadow-card p-6 backdrop-blur-sm',
      'animate-fade-in transition-all duration-300 hover:shadow-lg',
      variant === 'apiUsage' && 'border-t-4 border-accent',
      variant === 'featureToggle' && 'border-t-4 border-primary',
      !variant.includes('apiUsage') && !variant.includes('featureToggle') && 'border border-gray-100'
    )}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            {Icon && (
              <div className={clsx(
                'p-2 rounded-lg',
                variant === 'apiUsage' && 'bg-accent bg-opacity-10',
                variant === 'featureToggle' && 'bg-primary bg-opacity-10',
                !variant.includes('apiUsage') && !variant.includes('featureToggle') && 'bg-surface-accent'
              )}>
                <Icon className={clsx(
                  'h-5 w-5',
                  variant === 'apiUsage' && 'text-accent',
                  variant === 'featureToggle' && 'text-primary',
                  !variant.includes('apiUsage') && !variant.includes('featureToggle') && 'text-primary'
                )} />
              </div>
            )}
            <h3 className="text-subheading text-text font-bold">{title}</h3>
          </div>
          {value && (
            <div className="mt-4 flex items-baseline">
              <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-primary">{value}</p>
              {description && (
                <p className="text-sm text-muted ml-2">{description}</p>
              )}
            </div>
          )}
          {!value && description && (
            <p className="text-body text-muted mt-2">{description}</p>
          )}
        </div>
      </div>
      {children && (
        <div className="mt-5">
          {children}
        </div>
      )}
    </div>
  )
}
