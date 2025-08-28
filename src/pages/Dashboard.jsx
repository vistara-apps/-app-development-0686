import React, { useState, useEffect } from 'react'
import { 
  Activity, 
  Zap, 
  TrendingUp, 
  Users,
  BarChart3,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'
import { DashboardCard } from '../components/DashboardCard'
import { SubscriptionStatusBadge } from '../components/SubscriptionStatusBadge'
import { FeatureToggle } from '../components/FeatureToggle'
import { format } from 'date-fns'

export const Dashboard = () => {
  const [stats, setStats] = useState({
    apiCalls: 12847,
    activeIntegrations: 5,
    successRate: 99.2,
    responseTime: 145
  })

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'api_call',
      service: 'User Management',
      action: 'Text generation',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      status: 'success'
    },
    {
      id: 2,
      type: 'integration',
      service: 'Content Service',
      action: 'Sentiment analysis enabled',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      status: 'success'
    },
    {
      id: 3,
      type: 'api_call',
      service: 'Analytics Service',
      action: 'Data summarization',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      status: 'error'
    }
  ])

  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: 'User Management Service',
      enabled: true,
      calls: 5420,
      lastUsed: new Date(Date.now() - 1000 * 60 * 5)
    },
    {
      id: 2,
      name: 'Content Service',
      enabled: true,
      calls: 3241,
      lastUsed: new Date(Date.now() - 1000 * 60 * 15)
    },
    {
      id: 3,
      name: 'Analytics Service',
      enabled: false,
      calls: 1876,
      lastUsed: new Date(Date.now() - 1000 * 60 * 60 * 2)
    }
  ])

  const toggleIntegration = (id) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === id 
        ? { ...integration, enabled: !integration.enabled }
        : integration
    ))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading text-text">Dashboard</h1>
          <p className="text-muted">Monitor your AI-enhanced microservices</p>
        </div>
        <div className="flex items-center space-x-4">
          <SubscriptionStatusBadge status="active" />
          <span className="text-sm text-muted">
            Last updated: {format(new Date(), 'MMM d, HH:mm')}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="API Calls"
          value={stats.apiCalls.toLocaleString()}
          description="This month"
          icon={Activity}
          variant="apiUsage"
        />
        <DashboardCard
          title="Active Integrations"
          value={stats.activeIntegrations}
          description="Currently running"
          icon={Zap}
        />
        <DashboardCard
          title="Success Rate"
          value={`${stats.successRate}%`}
          description="Last 24 hours"
          icon={TrendingUp}
        />
        <DashboardCard
          title="Avg Response Time"
          value={`${stats.responseTime}ms`}
          description="Across all services"
          icon={Clock}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <DashboardCard title="Recent Activity" icon={BarChart3}>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div className="flex items-center space-x-3">
                  {activity.status === 'success' ? (
                    <CheckCircle className="h-4 w-4 text-accent" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-text">{activity.service}</p>
                    <p className="text-xs text-muted">{activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-muted">
                  {format(activity.timestamp, 'HH:mm')}
                </span>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Integration Controls */}
        <DashboardCard title="Quick Controls" icon={Users} variant="featureToggle">
          <div className="space-y-1">
            {integrations.map((integration) => (
              <FeatureToggle
                key={integration.id}
                enabled={integration.enabled}
                onChange={() => toggleIntegration(integration.id)}
                label={integration.name}
                description={`${integration.calls.toLocaleString()} calls • Last used ${format(integration.lastUsed, 'MMM d, HH:mm')}`}
              />
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Usage Chart Placeholder */}
      <DashboardCard title="API Usage Trends" icon={BarChart3}>
        <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-muted mx-auto mb-4" />
            <p className="text-muted">Usage analytics chart would be displayed here</p>
            <p className="text-sm text-muted mt-1">Connect your analytics to view detailed metrics</p>
          </div>
        </div>
      </DashboardCard>
    </div>
  )
}