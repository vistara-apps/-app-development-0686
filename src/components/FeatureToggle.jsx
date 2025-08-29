import React from 'react'
import { clsx } from 'clsx'
import { Zap } from 'lucide-react'

export const FeatureToggle = ({ enabled = false, onChange, label, description }) => {
  return (
    <div className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-surface-accent transition-colors">
      <div className="flex items-start space-x-3">
        <div className={clsx(
          'p-1.5 rounded-md mt-0.5',
          enabled ? 'bg-accent bg-opacity-10' : 'bg-gray-100'
        )}>
          <Zap className={clsx(
            'h-4 w-4',
            enabled ? 'text-accent' : 'text-muted'
          )} />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-text">{label}</h4>
          {description && (
            <p className="text-xs text-muted mt-0.5">{description}</p>
          )}
        </div>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={clsx(
          'relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-200 ease-in-out focus:outline-none',
          enabled ? 'bg-gradient-primary shadow-sm' : 'bg-gray-200'
        )}
      >
        <span
          className={clsx(
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out',
            enabled ? 'translate-x-6' : 'translate-x-0'
          )}
        />
      </button>
    </div>
  )
}
