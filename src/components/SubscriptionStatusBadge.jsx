import React from 'react'
import { clsx } from 'clsx'

export const SubscriptionStatusBadge = ({ status = 'active' }) => {
  const variants = {
    active: {
      classes: 'bg-accent text-white',
      text: 'Active'
    },
    trial: {
      classes: 'bg-yellow-500 text-white',
      text: 'Trial'
    },
    expired: {
      classes: 'bg-red-500 text-white',
      text: 'Expired'
    }
  }

  const variant = variants[status] || variants.active

  return (
    <span className={clsx(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      variant.classes
    )}>
      {variant.text}
    </span>
  )
}