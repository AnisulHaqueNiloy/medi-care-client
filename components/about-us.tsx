'use client'

import { Card } from '@/components/ui/card'
import { Users, Award, Zap, Heart } from 'lucide-react'

export function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centric Care',
      description: 'Your health and wellbeing is at the center of everything we do. We prioritize your comfort and satisfaction.',
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Committed to providing the highest quality healthcare services with experienced and certified professionals.',
    },
    {
      icon: Zap,
      title: 'Innovation & Technology',
      description: 'Leveraging cutting-edge technology to make healthcare more accessible, efficient, and convenient for everyone.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building a compassionate community where healthcare is accessible to everyone regardless of location.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">About MediCare</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming healthcare access through innovative technology and compassionate care
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                MediCare is dedicated to revolutionizing healthcare accessibility by connecting patients with qualified healthcare professionals through a secure, user-friendly digital platform. We believe that quality healthcare should be available to everyone, everywhere, anytime.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where geographical boundaries don't limit access to quality medical care. Through technology and dedication, we're building a healthier future where everyone has access to trusted healthcare professionals at their fingertips.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">5M+</div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-sm text-muted-foreground">Verified Doctors</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl border border-primary/10 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
