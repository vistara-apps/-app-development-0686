import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Key, Copy, Eye, EyeOff, Plus, Trash2 } from 'lucide-react'

export const APIKeyManager = () => {
  const [apiKeys, setApiKeys] = useState([
    {
      id: '1',
      name: 'Production API Key',
      key: 'nx_prod_1234567890abcdef',
      created: '2024-01-15',
      lastUsed: '2024-01-20',
      visible: false
    },
    {
      id: '2',
      name: 'Development API Key',
      key: 'nx_dev_0987654321fedcba',
      created: '2024-01-10',
      lastUsed: '2024-01-19',
      visible: false
    }
  ])
  const [newKeyName, setNewKeyName] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(false)

  const toggleVisibility = (id) => {
    setApiKeys(keys => keys.map(key => 
      key.id === id ? { ...key, visible: !key.visible } : key
    ))
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast.success('API key copied to clipboard!')
  }

  const generateApiKey = () => {
    if (!newKeyName.trim()) {
      toast.error('Please enter a name for the API key')
      return
    }

    const newKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: `nx_${Date.now()}_${Math.random().toString(36).substring(2)}`,
      created: new Date().toISOString().split('T')[0],
      lastUsed: null,
      visible: true
    }

    setApiKeys(keys => [...keys, newKey])
    setNewKeyName('')
    setShowCreateForm(false)
    toast.success('New API key generated!')
  }

  const deleteApiKey = (id) => {
    if (confirm('Are you sure you want to delete this API key? This action cannot be undone.')) {
      setApiKeys(keys => keys.filter(key => key.id !== id))
      toast.success('API key deleted')
    }
  }

  const maskKey = (key) => {
    return key.substring(0, 8) + '...' + key.substring(key.length - 8)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-subheading">API Keys</h3>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Generate New Key</span>
        </button>
      </div>

      {showCreateForm && (
        <div className="bg-surface border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-text mb-3">Generate New API Key</h4>
          <div className="flex space-x-3">
            <input
              type="text"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="API key name (e.g., Production, Staging)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
            />
            <button
              onClick={generateApiKey}
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Generate
            </button>
            <button
              onClick={() => setShowCreateForm(false)}
              className="px-4 py-2 text-sm font-medium text-muted hover:text-text transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {apiKeys.map((apiKey) => (
          <div key={apiKey.id} className="bg-surface border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Key className="h-4 w-4 text-primary" />
                <span className="font-medium text-text">{apiKey.name}</span>
              </div>
              <button
                onClick={() => deleteApiKey(apiKey.id)}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex items-center space-x-2 mb-3">
              <code className="flex-1 px-3 py-2 bg-gray-50 border rounded text-code text-text">
                {apiKey.visible ? apiKey.key : maskKey(apiKey.key)}
              </code>
              <button
                onClick={() => toggleVisibility(apiKey.id)}
                className="p-2 text-muted hover:text-text transition-colors"
                title={apiKey.visible ? 'Hide key' : 'Show key'}
              >
                {apiKey.visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              <button
                onClick={() => copyToClipboard(apiKey.key)}
                className="p-2 text-muted hover:text-text transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex justify-between text-sm text-muted">
              <span>Created: {apiKey.created}</span>
              <span>Last used: {apiKey.lastUsed || 'Never'}</span>
            </div>
          </div>
        ))}
      </div>

      {apiKeys.length === 0 && (
        <div className="text-center py-8">
          <Key className="h-12 w-12 text-muted mx-auto mb-4" />
          <p className="text-muted">No API keys generated yet</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="mt-2 text-primary hover:text-opacity-80 transition-colors"
          >
            Generate your first API key
          </button>
        </div>
      )}
    </div>
  )
}