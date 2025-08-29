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
      <header className="bg-surface shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 bg-gradient-primary rounded-lg">
                <BrainCircuit className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-text">Nexagent</span>
                <div className="flex items-center text-xs text-muted">
                  <Sparkles className="h-3 w-3 mr-1" />
                  <span>AI-Powered Microservices</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/login"
                className="text-text hover:text-primary transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-gradient-primary text-white px-5 py-2.5 rounded-lg hover:shadow-md transition-all font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-surface-accent to-bg">
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary opacity-5 rounded-full blur-3xl -z-10"></div>
          
          <div className="inline-block mb-4 px-4 py-1.5 bg-surface-accent rounded-full border border-primary border-opacity-20">
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-sm font-medium text-primary">Intelligent Microservice Enhancement</span>
            </div>
          </div>
          
          <h1 className="text-display text-text mb-6 leading-tight">
            Supercharge your microservices with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-primary font-extrabold">autonomous AI</span>
          </h1>
          <p className="text-xl text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
            Seamlessly integrate intelligent capabilities into existing microservices through 
            API-driven AI modules — no code changes required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/register"
              className="flex items-center justify-center space-x-2 bg-gradient-primary text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all w-full sm:w-auto"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="flex items-center justify-center space-x-2 bg-surface border border-gray-200 text-text px-8 py-4 rounded-xl text-lg font-medium hover:shadow-md hover:border-primary hover:border-opacity-50 transition-all w-full sm:w-auto">
              <Code className="h-5 w-5" />
              <span>View Documentation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-surface-accent rounded-full border border-primary border-opacity-20">
              <span className="text-sm font-medium text-primary">Intelligent Features</span>
            </div>
            <h2 className="text-heading text-text mb-4 font-bold">
              Autonomous AI Integration
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Enhance your microservices with cutting-edge AI capabilities that adapt and evolve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-surface-accent rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all hover:border-primary hover:border-opacity-20 group">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-lg mb-5 shadow-md transform group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-subheading text-text mb-3 font-bold">{feature.title}</h3>
                <p className="text-body text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-bg to-surface-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-surface rounded-full border border-primary border-opacity-20 shadow-sm">
              <span className="text-sm font-medium text-primary">Flexible Plans</span>
            </div>
            <h2 className="text-heading text-text mb-4 font-bold">
              Transparent, Value-Based Pricing
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start free and scale as your AI capabilities grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-surface rounded-xl shadow-lg p-8 relative backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-1 ${
                  plan.popular ? 'border-2 border-primary' : 'border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-subheading text-text mb-3 font-bold">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-extrabold ${plan.popular ? 'bg-clip-text text-transparent bg-gradient-primary' : 'text-primary'}`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && <span className="text-muted ml-1">/month</span>}
                  </div>
                  <p className="text-muted mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`mt-0.5 p-1 rounded-full ${plan.popular ? 'bg-accent bg-opacity-20' : 'bg-surface-accent'}`}>
                        <CheckCircle className={`h-4 w-4 ${plan.popular ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <span className="text-text ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/register"
                  className={`block w-full text-center py-3.5 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-primary text-white hover:shadow-md'
                      : 'border border-gray-200 text-text hover:border-primary hover:border-opacity-50 hover:shadow-sm'
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
      <section className="py-24 px-6 bg-gradient-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-heading text-white mb-6 font-bold">
            Ready to build autonomous, intelligent microservices?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-10 leading-relaxed">
            Join thousands of developers who are already using Nexagent to enhance their applications with adaptive AI capabilities.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg transition-all"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-dark text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="p-1.5 bg-white bg-opacity-10 rounded-lg">
                <BrainCircuit className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Nexagent</span>
                <div className="flex items-center text-xs text-white text-opacity-70">
                  <Sparkles className="h-3 w-3 mr-1" />
                  <span>AI-Powered Microservices</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Documentation</a>
              <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">API Reference</a>
              <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Blog</a>
              <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-white border-opacity-10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white text-opacity-60 text-sm mb-4 md:mb-0">
              © 2024 Nexagent. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
