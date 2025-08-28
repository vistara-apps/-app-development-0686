import React from 'react'
import { Key, Shield, AlertTriangle } from 'lucide-react'
import { APIKeyManager } from '../components/APIKeyManager'
import { DashboardCard } from '../components/DashboardCard'

export const APIKeys = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-heading text-text">API Keys</h1>
        <p className="text-muted">Manage your Nexagent API keys for secure access</p>
      </div>

      {/* Security Notice */}
      <DashboardCard icon={Shield} title="Security Best Practices">
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium text-text">Keep your API keys secure</p>
              <p className="text-muted">Never expose API keys in client-side code or public repositories</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Key className="h-4 w-4 text-primary mt-0.5" />
            <div>
              <p className="font-medium text-text">Use environment variables</p>
              <p className="text-muted">Store API keys in environment variables or secure configuration files</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="h-4 w-4 text-accent mt-0.5" />
            <div>
              <p className="font-medium text-text">Rotate keys regularly</p>
              <p className="text-muted">Generate new API keys periodically and deactivate old ones</p>
            </div>
          </div>
        </div>
      </DashboardCard>

      {/* API Key Manager */}
      <DashboardCard>
        <APIKeyManager />
      </DashboardCard>

      {/* Usage Examples */}
      <DashboardCard title="Usage Examples" icon={Key}>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-text mb-2">REST API Call</h4>
            <pre className="bg-gray-50 p-3 rounded-md text-code text-text overflow-x-auto">
{`curl -X POST https://api.nexagent.com/v1/ai/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Summarize this text...",
    "model": "gpt-4"
  }'`}
            </pre>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-text mb-2">JavaScript/Node.js</h4>
            <pre className="bg-gray-50 p-3 rounded-md text-code text-text overflow-x-auto">
{`const response = await fetch('https://api.nexagent.com/v1/ai/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + process.env.NEXAGENT_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Analyze sentiment of this text...',
    model: 'gpt-3.5-turbo'
  })
});`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-medium text-text mb-2">Python</h4>
            <pre className="bg-gray-50 p-3 rounded-md text-code text-text overflow-x-auto">
{`import requests
import os

response = requests.post(
  'https://api.nexagent.com/v1/ai/generate',
  headers={
    'Authorization': f'Bearer {os.getenv("NEXAGENT_API_KEY")}',
    'Content-Type': 'application/json'
  },
  json={
    'prompt': 'Generate content based on...',
    'model': 'claude-3'
  }
)`}
            </pre>
          </div>
        </div>
      </DashboardCard>
    </div>
  )
}