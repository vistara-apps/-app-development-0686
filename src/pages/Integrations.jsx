import React, { useState } from 'react'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Activity, 
  MoreVertical,
  Zap,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react'
import { IntegrationForm } from '../components/IntegrationForm'
import { DashboardCard } from '../components/DashboardCard'
import { FeatureToggle } from '../components/FeatureToggle'
import { format } from 'date-fns'
import { toast } from 'react-hot-toast'

export const Integrations = () => {
  const [showForm, setShowForm] = useState(false)
  const [editingIntegration, setEditingIntegration] = useState(null)
  const [integrations, setIntegrations] = useState([
    {
      integrationId: '1',
      name: 'User Management Service',
      description: 'Handles user authentication and profile management',
      aiModel: 'gpt-4',
      integrationType: 'api',
      capabilities: ['text-generation', 'sentiment-analysis'],
      isActive: true,
      createdAt: '2024-01-15T10:00:00Z',
      stats: {
        calls: 5420,
        successRate: 99.1,
        avgResponseTime: 142,
        lastUsed: new Date(Date.now() - 1000 * 60 * 5)
      }
    },
    {
      integrationId: '2',
      name: 'Content Service',
      description: 'Manages content creation and moderation',
      aiModel: 'claude-3',
      integrationType: 'webhook',
      capabilities: ['content-moderation', 'text-summarization'],
      isActive: true,
      createdAt: '2024-01-12T14:30:00Z',
      stats: {
        calls: 3241,
        successRate: 97.8,
        avgResponseTime: 156,
        lastUsed: new Date(Date.now() - 1000 * 60 * 15)
      }
    },
    {
      integrationId: '3',
      name: 'Analytics Service',
      description: 'Processes data analytics and insights',
      aiModel: 'google/gemini-2.0-flash-001',
      integrationType: 'container',
      capabilities: ['text-generation', 'language-translation'],
      isActive: false,
      createdAt: '2024-01-10T09:15:00Z',
      stats: {
        calls: 1876,
        successRate: 94.2,
        avgResponseTime: 201,
        lastUsed: new Date(Date.now() - 1000 * 60 * 60 * 2)
      }
    }
  ])

  const handleCreateIntegration = (data) => {
    setIntegrations(prev => [...prev, { 
      ...data, 
      stats: {
        calls: 0,
        successRate: 100,
        avgResponseTime: 0,
        lastUsed: null
      }
    }])
  }

  const handleUpdateIntegration = (data) => {
    setIntegrations(prev => prev.map(integration => 
      integration.integrationId === editingIntegration.integrationId 
        ? { ...integration, ...data }
        : integration
    ))
    setEditingIntegration(null)
  }

  const handleDeleteIntegration = (integrationId) => {
    if (confirm('Are you sure you want to delete this integration? This action cannot be undone.')) {
      setIntegrations(prev => prev.filter(integration => integration.integrationId !== integrationId))
      toast.success('Integration deleted successfully')
    }
  }

  const toggleIntegrationStatus = (integrationId) => {
    setIntegrations(prev => prev.map(integration => 
      integration.integrationId === integrationId 
        ? { ...integration, isActive: !integration.isActive }
        : integration
    ))
  }

  const getIntegrationTypeIcon = (type) => {
    switch (type) {
      case 'api': return '🔗'
      case 'webhook': return '🎣'
      case 'container': return '📦'
      default: return '🔧'
    }
  }

  const getAIModelName = (model) => {
    const models = {
      'gpt-4': 'GPT-4',
      'gpt-3.5-turbo': 'GPT-3.5 Turbo',
      'claude-3': 'Claude 3',
      'google/gemini-2.0-flash-001': 'Gemini 2.0 Flash'
    }
    return models[model] || model
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-heading text-text">Integrations</h1>
          <p className="text-muted">Manage your AI-powered microservice integrations</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>New Integration</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Integrations"
          value={integrations.length}
          description={`${integrations.filter(i => i.isActive).length} active`}
          icon={Zap}
        />
        <DashboardCard
          title="Total API Calls"
          value={integrations.reduce((sum, i) => sum + i.stats.calls, 0).toLocaleString()}
          description="This month"
          icon={Activity}
          variant="apiUsage"
        />
        <DashboardCard
          title="Avg Success Rate"
          value={`${(integrations.reduce((sum, i) => sum + i.stats.successRate, 0) / integrations.length).toFixed(1)}%`}
          description="Across all integrations"
          icon={CheckCircle}
        />
      </div>

      {/* Integrations List */}
      <div className="space-y-4">
        {integrations.map((integration) => (
          <div key={integration.integrationId} className="bg-surface rounded-lg shadow-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">
                  {getIntegrationTypeIcon(integration.integrationType)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-subheading text-text">{integration.name}</h3>
                    <span className="text-sm px-2 py-1 bg-gray-100 text-muted rounded">
                      {getAIModelName(integration.aiModel)}
                    </span>
                    {integration.isActive ? (
                      <span className="flex items-center text-sm text-accent">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center text-sm text-muted">
                        <XCircle className="h-4 w-4 mr-1" />
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-body text-muted mb-3">{integration.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {integration.capabilities.map((capability) => (
                      <span key={capability} className="text-xs px-2 py-1 bg-primary bg-opacity-10 text-primary rounded">
                        {capability.replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FeatureToggle
                  enabled={integration.isActive}
                  onChange={() => toggleIntegrationStatus(integration.integrationId)}
                />
                <div className="relative">
                  <button className="p-2 text-muted hover:text-text transition-colors">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{integration.stats.calls.toLocaleString()}</p>
                <p className="text-sm text-muted">API Calls</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">{integration.stats.successRate}%</p>
                <p className="text-sm text-muted">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-text">{integration.stats.avgResponseTime}ms</p>
                <p className="text-sm text-muted">Avg Response</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-text">
                  {integration.stats.lastUsed 
                    ? format(integration.stats.lastUsed, 'MMM d, HH:mm')
                    : 'Never'
                  }
                </p>
                <p className="text-sm text-muted">Last Used</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <p className="text-sm text-muted">
                Created {format(new Date(integration.createdAt), 'MMM d, yyyy')}
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setEditingIntegration(integration)
                    setShowForm(true)
                  }}
                  className="flex items-center space-x-1 px-3 py-1 text-sm text-muted hover:text-text transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDeleteIntegration(integration.integrationId)}
                  className="flex items-center space-x-1 px-3 py-1 text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {integrations.length === 0 && (
        <div className="text-center py-12">
          <Zap className="h-12 w-12 text-muted mx-auto mb-4" />
          <h3 className="text-subheading text-text mb-2">No integrations yet</h3>
          <p className="text-muted mb-4">Create your first AI integration to get started</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Create Integration
          </button>
        </div>
      )}

      {/* Integration Form Modal */}
      {showForm && (
        <IntegrationForm
          onClose={() => {
            setShowForm(false)
            setEditingIntegration(null)
          }}
          onSave={editingIntegration ? handleUpdateIntegration : handleCreateIntegration}
          initialData={editingIntegration}
          variant={editingIntegration ? 'edit' : 'new'}
        />
      )}
    </div>
  )
}