import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Bot, Mail, Lock, User } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const password = watch('password')

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      await signUp(data.email, data.password)
      navigate('/dashboard')
      toast.success('Account created successfully!')
    } catch (error) {
      toast.error('Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDemoSignup = () => {
    // Demo signup functionality
    toast.success('Demo account created!')
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-surface rounded-lg shadow-card p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-heading text-primary">Nexagent</span>
          </div>
          <h2 className="text-subheading text-text">Create your account</h2>
          <p className="text-muted">Start supercharging your microservices with AI</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Full name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-muted" />
              </div>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your full name"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-muted" />
              </div>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-muted" />
              </div>
              <input
                type="password"
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Confirm password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-4 w-4 text-muted" />
              </div>
              <input
                type="password"
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Confirm your password"
              />
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-surface text-muted">Or try the demo</span>
            </div>
          </div>
          
          <button
            onClick={handleDemoSignup}
            className="mt-4 w-full border border-gray-300 text-text py-2 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            Demo Account
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:text-opacity-80 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}