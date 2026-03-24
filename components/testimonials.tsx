'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Martinez',
      role: 'Patient',
      text: 'MediCare made healthcare so convenient. I booked an appointment with a specialist in minutes and got my prescription digitally. Amazing experience!',
      rating: 5,
      initials: 'AM',
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Priya Patel',
      role: 'Working Professional',
      text: 'As someone with a busy schedule, having 24/7 access to doctors is a lifesaver. The app is intuitive and the quality of service is excellent.',
      rating: 5,
      initials: 'PP',
      color: 'from-purple-400 to-purple-600',
    },
    {
      name: 'John Wilson',
      role: 'Senior Citizen',
      text: 'My family helped me set up the app. Now I can consult doctors from home. No more trips to the clinic. Highly recommended!',
      rating: 5,
      initials: 'JW',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      name: 'Sarah Ahmed',
      role: 'Patient',
      text: 'The doctor I consulted was very professional and thorough. The video quality was perfect and I could see my medical records instantly.',
      rating: 5,
      initials: 'SA',
      color: 'from-cyan-400 to-cyan-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thousands of satisfied patients trust MediCare for their healthcare needs
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl border border-primary/10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg bg-white group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
