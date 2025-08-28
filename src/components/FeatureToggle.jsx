import React from 'react'
import { clsx } from 'clsx'

export const FeatureToggle = ({ enabled = false, onChange, label, description }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex-1">
        <h4 className="text-sm font-medium text-text">{label}</h4>
        {description && (
          <p className="text-sm text-muted">{description}</p>
        )}
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={clsx(
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          enabled ? 'bg-accent' : 'bg-gray-200'
        )}
      >
        <span
          className={clsx(
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
            enabled ? 'translate-x-5' : 'translate-x-0'
          )}
        />
      </button>
    </div>
  )
}