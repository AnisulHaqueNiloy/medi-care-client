'use client'

import { Card } from '@/components/ui/card'
import { Shield, Clock, Zap } from 'lucide-react'

export function ServiceBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Guaranteed Security',
      subtitle: 'of Your Data',
      description: 'Your health information is protected with enterprise-level encryption',
    },
    {
      icon: Clock,
      title: 'Visit Consultation',
      subtitle: 'Fast Response',
      description: 'Get professional medical advice within 2-3 minutes average wait time',
    },
    {
      icon: Zap,
      title: 'Service Available',
      subtitle: '24 Hours • 7 days a week',
      description: 'Round-the-clock healthcare access whenever you need it',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why Choose MediCare?</h2>
          <p className="text-lg text-muted-foreground">You are in good hands</p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-8 rounded-2xl border border-primary/10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-primary/2 group relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-accent/5 transition" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-accent font-semibold mb-3">{benefit.subtitle}</p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
