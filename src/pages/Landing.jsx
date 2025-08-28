import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Bot, 
  Zap, 
  Shield, 
  Code, 
  ArrowRight,
  CheckCircle,
  Cpu,
  Cloud,
  Users
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'API-First AI Augmentation',
    description: 'Inject AI capabilities into your microservices through simple API calls. No code changes required.'
  },
  {
    icon: Cpu,
    title: 'Intelligent Task Automation',
    description: 'Automate routine tasks and decision-making processes with advanced AI models.'
  },
  {
    icon: Users,
    title: 'Enhanced User Experiences',
    description: 'Deliver personalized interactions and optimize service delivery with AI-powered insights.'
  },
  {
    icon: Cloud,
    title: 'Containerized AI Modules',
    description: 'Deploy AI logic in isolated, self-contained containers for seamless integration.'
  }
]

const pricing = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      '1,000 API calls/month',
      'Basic AI models',
      'Email support',
      'Community access'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For growing applications',
    features: [
      '50,000 API calls/month',
      'Advanced AI models',
      'Priority support',
      'Custom integrations',
      'Analytics dashboard'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale deployments',
    features: [
      'Unlimited API calls',
      'Custom AI models',
      'Dedicated support',
      'On-premise deployment',
      'SLA guarantees'
    ]
  }
]

export const Landing = () => {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface shadow-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-heading text-primary">Nexagent</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-text hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-display text-text mb-6">
            Supercharge your microservices with AI,{' '}
            <span className="text-primary">no code changes needed</span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
            Seamlessly integrate AI capabilities into existing microservices by augmenting them 
            with custom AI modules via APIs, enhancing functionality and performance.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link
              to="/register"
              className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="flex items-center space-x-2 border border-gray-300 text-text px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
              <Code className="h-5 w-5" />
              <span>View Documentation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading text-text mb-4">
              Powerful AI Integration Features
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Everything you need to enhance your microservices with cutting-edge AI capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary bg-opacity-10 rounded-lg mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-subheading text-text mb-2">{feature.title}</h3>
                <p className="text-body text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading text-text mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start free and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-surface rounded-lg shadow-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-subheading text-text mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-muted ml-1">/month</span>}
                  </div>
                  <p className="text-muted mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      <span className="text-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/register"
                  className={`block w-full text-center py-3 rounded-md font-medium transition-colors ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-opacity-90'
                      : 'border border-gray-300 text-text hover:bg-gray-50'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading text-white mb-4">
            Ready to supercharge your microservices?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Join thousands of developers who are already using Nexagent to enhance their applications with AI.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Nexagent</span>
            </div>
            <p className="text-muted">
              © 2024 Nexagent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}