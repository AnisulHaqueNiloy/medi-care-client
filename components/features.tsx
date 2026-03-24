'use client'

import { Card } from '@/components/ui/card'
import { FileText, Lock, Zap, Heart, Video, Clock } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Video,
      title: 'Video Consultations',
      description: 'Crystal clear HD video calls with instant screen sharing for better diagnosis and consultation.',
    },
    {
      icon: FileText,
      title: 'Digital Prescriptions',
      description: 'Receive prescriptions digitally and get medicines delivered to your doorstep conveniently.',
    },
    {
      icon: Heart,
      title: 'Health Records',
      description: 'Secure access to all your medical history, test reports, and vaccination records in one place.',
    },
    {
      icon: Lock,
      title: 'HIPAA Compliant',
      description: 'Military-grade encryption ensures your personal health information stays completely private.',
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Average response time of 2 minutes. Chat with doctors 24/7 without waiting in queues.',
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book appointments instantly. No forms to fill, no long registration processes needed.',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Premium Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for comprehensive online healthcare
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 rounded-2xl border border-primary/10 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gradient-to-br from-white to-primary/2 hover:to-accent/5"
              >
                {/* Icon container */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
