import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Save, X } from 'lucide-react'

const AI_MODELS = [
  { id: 'gpt-4', name: 'GPT-4', provider: 'OpenAI' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', provider: 'OpenAI' },
  { id: 'claude-3', name: 'Claude 3', provider: 'Anthropic' },
  { id: 'google/gemini-2.0-flash-001', name: 'Gemini 2.0 Flash', provider: 'Google' },
]

const AI_CAPABILITIES = [
  { id: 'text-generation', name: 'Text Generation', description: 'Generate human-like text content' },
  { id: 'sentiment-analysis', name: 'Sentiment Analysis', description: 'Analyze emotional tone of text' },
  { id: 'text-summarization', name: 'Text Summarization', description: 'Create concise summaries' },
  { id: 'language-translation', name: 'Language Translation', description: 'Translate between languages' },
  { id: 'content-moderation', name: 'Content Moderation', description: 'Filter inappropriate content' },
]

export const IntegrationForm = ({ onClose, onSave, initialData = null, variant = 'new' }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  })
  const [selectedCapabilities, setSelectedCapabilities] = useState(
    initialData?.capabilities || []
  )

  const onSubmit = async (data) => {
    try {
      const integrationData = {
        ...data,
        capabilities: selectedCapabilities,
        createdAt: new Date().toISOString(),
        isActive: true,
        integrationId: Date.now().toString(), // Demo ID generation
      }
      
      await onSave(integrationData)
      toast.success(variant === 'new' ? 'Integration created!' : 'Integration updated!')
      onClose()
    } catch (error) {
      toast.error('Failed to save integration')
    }
  }

  const toggleCapability = (capabilityId) => {
    setSelectedCapabilities(prev => 
      prev.includes(capabilityId)
        ? prev.filter(id => id !== capabilityId)
        : [...prev, capabilityId]
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-surface rounded-lg shadow-card w-full max-w-2xl m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-heading">
            {variant === 'new' ? 'New Integration' : 'Edit Integration'}
          </h2>
          <button
            onClick={onClose}
            className="text-muted hover:text-text transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Microservice Name
            </label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="e.g., User Management Service"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Description
            </label>
            <textarea
              {...register('description')}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="Describe what this microservice does..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              AI Model
            </label>
            <select
              {...register('aiModel', { required: 'Please select an AI model' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select a model...</option>
              {AI_MODELS.map(model => (
                <option key={model.id} value={model.id}>
                  {model.name} ({model.provider})
                </option>
              ))}
            </select>
            {errors.aiModel && (
              <p className="mt-1 text-sm text-red-600">{errors.aiModel.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              AI Capabilities
            </label>
            <div className="space-y-2">
              {AI_CAPABILITIES.map(capability => (
                <label key={capability.id} className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedCapabilities.includes(capability.id)}
                    onChange={() => toggleCapability(capability.id)}
                    className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <div>
                    <span className="text-sm font-medium text-text">
                      {capability.name}
                    </span>
                    <p className="text-sm text-muted">{capability.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Integration Type
            </label>
            <select
              {...register('integrationType', { required: 'Please select integration type' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select type...</option>
              <option value="api">API Integration</option>
              <option value="webhook">Webhook</option>
              <option value="container">Container Module</option>
            </select>
            {errors.integrationType && (
              <p className="mt-1 text-sm text-red-600">{errors.integrationType.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-muted hover:text-text transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>{variant === 'new' ? 'Create Integration' : 'Update Integration'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}