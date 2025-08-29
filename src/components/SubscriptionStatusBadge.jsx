import React from 'react'
import { clsx } from 'clsx'
import { CheckCircle, Clock, AlertTriangle } from 'lucide-react'

export const SubscriptionStatusBadge = ({ status = 'active' }) => {
  const variants = {
    active: {
      classes: 'bg-accent bg-opacity-10 text-accent border border-accent border-opacity-20',
      text: 'Active',
      icon: CheckCircle
    },
    trial: {
      classes: 'bg-yellow-500 bg-opacity-10 text-yellow-600 border border-yellow-500 border-opacity-20',
      text: 'Trial',
      icon: Clock
    },
    expired: {
      classes: 'bg-red-500 bg-opacity-10 text-red-600 border border-red-500 border-opacity-20',
      text: 'Expired',
      icon: AlertTriangle
    }
  }

  const variant = variants[status] || variants.active
  const Icon = variant.icon

  return (
    <span className={clsx(
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium shadow-sm',
      variant.classes
    )}>
      <Icon className="h-3.5 w-3.5 mr-1.5" />
      {variant.text}
    </span>
  )
}
