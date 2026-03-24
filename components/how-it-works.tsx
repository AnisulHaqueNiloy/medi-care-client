'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, Smartphone, Users } from 'lucide-react'
import { Calendar } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      title: 'Download & Sign Up',
      description: 'Get the MediCare app on iOS or Android. Create your account in seconds with your email or phone number.',
    },
    {
      icon: Users,
      title: 'Choose Your Doctor',
      description: 'Browse through our network of qualified healthcare professionals. Filter by specialty, location, and ratings.',
    },
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Select your preferred date and time. Receive instant confirmation and join the video call at scheduled time.',
    },
    {
      icon: CheckCircle2,
      title: 'Get Medical Care',
      description: 'Consult with your doctor via secure video call. Access prescriptions, reports, and health records instantly.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple and secure process to connect with healthcare providers
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="p-6 relative group hover:shadow-lg transition-all duration-300 rounded-2xl border-primary/10 hover:border-primary/30 bg-white">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
