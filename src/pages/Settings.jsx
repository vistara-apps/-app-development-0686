import React, { useState } from 'react'
import { 
  User, 
  CreditCard, 
  Bell, 
  Shield, 
  Save,
  Mail,
  Phone,
  Globe
} from 'lucide-react'
import { DashboardCard } from '../components/DashboardCard'
import { SubscriptionStatusBadge } from '../components/SubscriptionStatusBadge'
import { FeatureToggle } from '../components/FeatureToggle'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'

export const Settings = () => {
  const { user } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: 'John Doe',
      email: user?.email || 'john@example.com',
      phone: '+1 (555) 123-4567',
      company: 'Acme Corporation',
      timezone: 'America/New_York'
    }
  })

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    usageNotifications: true,
    securityAlerts: true,
    marketingEmails: false
  })

  const [subscription] = useState({
    plan: 'Pro',
    status: 'active',
    billingCycle: 'monthly',
    nextBilling: '2024-02-15',
    usage: {
      apiCalls: 32450,
      limit: 50000,
      percentage: 64.9
    }
  })

  const onSubmit = (data) => {
    // Handle profile update
    toast.success('Profile updated successfully!')
  }

  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
    toast.success('Notification preferences updated')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-heading text-text">Settings</h1>
        <p className="text-muted">Manage your account, billing, and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <DashboardCard title="Profile Information" icon={User}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Full Name
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-muted" />
                </div>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-muted" />
                </div>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Company
              </label>
              <input
                type="text"
                {...register('company')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Timezone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="h-4 w-4 text-muted" />
                </div>
                <select
                  {...register('timezone')}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                  <option value="Europe/Paris">Central European Time (CET)</option>
                  <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
          </form>
        </DashboardCard>

        {/* Notification Settings */}
        <DashboardCard title="Notification Preferences" icon={Bell}>
          <div className="space-y-1">
            <FeatureToggle
              enabled={notifications.emailAlerts}
              onChange={() => toggleNotification('emailAlerts')}
              label="Email Alerts"
              description="Receive email notifications for important events"
            />
            <FeatureToggle
              enabled={notifications.smsAlerts}
              onChange={() => toggleNotification('smsAlerts')}
              label="SMS Alerts"
              description="Get text messages for critical issues"
            />
            <FeatureToggle
              enabled={notifications.usageNotifications}
              onChange={() => toggleNotification('usageNotifications')}
              label="Usage Notifications"
              description="Alerts when approaching API limits"
            />
            <FeatureToggle
              enabled={notifications.securityAlerts}
              onChange={() => toggleNotification('securityAlerts')}
              label="Security Alerts"
              description="Notifications for security-related events"
            />
            <FeatureToggle
              enabled={notifications.marketingEmails}
              onChange={() => toggleNotification('marketingEmails')}
              label="Marketing Emails"
              description="Product updates and feature announcements"
            />
          </div>
        </DashboardCard>
      </div>

      {/* Subscription & Billing */}
      <DashboardCard title="Subscription & Billing" icon={CreditCard}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-subheading text-text">Current Plan</h3>
              <SubscriptionStatusBadge status={subscription.status} />
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Plan:</span> {subscription.plan}</p>
              <p><span className="font-medium">Billing:</span> {subscription.billingCycle}</p>
              <p><span className="font-medium">Next billing:</span> {subscription.nextBilling}</p>
            </div>
            <div className="mt-4 space-x-2">
              <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                Upgrade Plan
              </button>
              <button className="border border-gray-300 text-text px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                View Billing
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-text mb-3">Usage This Month</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted">API Calls</span>
                  <span className="text-text">
                    {subscription.usage.apiCalls.toLocaleString()} / {subscription.usage.limit.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${subscription.usage.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-muted mt-1">
                  {subscription.usage.percentage}% of monthly limit used
                </p>
              </div>
            </div>
          </div>
        </div>
      </DashboardCard>

      {/* Security Settings */}
      <DashboardCard title="Security" icon={Shield}>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <h4 className="text-sm font-medium text-text">Two-Factor Authentication</h4>
              <p className="text-sm text-muted">Add an extra layer of security to your account</p>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
              Enable 2FA
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <h4 className="text-sm font-medium text-text">Change Password</h4>
              <p className="text-sm text-muted">Update your account password</p>
            </div>
            <button className="border border-gray-300 text-text px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
              Change Password
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3">
            <div>
              <h4 className="text-sm font-medium text-text">API Key Rotation</h4>
              <p className="text-sm text-muted">Automatically rotate API keys monthly</p>
            </div>
            <FeatureToggle
              enabled={false}
              onChange={() => toast.success('API key rotation setting updated')}
            />
          </div>
        </div>
      </DashboardCard>
    </div>
  )
}