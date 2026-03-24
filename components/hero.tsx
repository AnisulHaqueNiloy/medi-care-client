'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                Your Health,
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Our Priority</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect with trusted healthcare providers, schedule appointments, and manage your health records securely from anywhere.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base">
                Schedule Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 h-12 text-base border-primary/30 hover:bg-primary/5">
                Learn More
              </Button>
            </div>

            <div className="pt-8 flex gap-8">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">2000+</p>
                <p className="text-sm text-muted-foreground">Verified Doctors</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">99.8%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right illustration area */}
          <div className="relative h-96 sm:h-[500px] flex items-center justify-center">
            {/* Floating card 1 - Appointment */}
            <div className="absolute top-0 right-0 w-64 bg-white rounded-2xl shadow-2xl p-6 space-y-4 transform -rotate-6 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Schedule An E-Visit</h3>
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm" />
              <input type="date" className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm" />
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full h-10">
                Book Appointment
              </Button>
            </div>

            {/* Floating card 2 - Stats */}
            <div className="absolute bottom-12 left-0 w-56 bg-white rounded-2xl shadow-2xl p-5 space-y-3 transform rotate-3 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 Support</span>
              </div>
              <p className="text-xs text-muted-foreground">Get instant access to healthcare services anytime, anywhere</p>
              <div className="flex gap-2 pt-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-2 h-2 rounded-full bg-primary/50" />
              </div>
            </div>

            {/* Center decorative element */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
