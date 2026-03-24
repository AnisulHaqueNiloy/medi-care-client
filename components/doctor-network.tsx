'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Star } from 'lucide-react'

export function DoctorNetwork() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      location: 'New York, NY',
      rating: 4.9,
      reviews: 256,
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'General Practitioner',
      location: 'San Francisco, CA',
      rating: 4.8,
      reviews: 189,
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    },
    {
      name: 'Dr. Emma Williams',
      specialty: 'Dermatologist',
      location: 'Los Angeles, CA',
      rating: 5.0,
      reviews: 342,
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
    {
      name: 'Dr. James Lee',
      specialty: 'Neurologist',
      location: 'Boston, MA',
      rating: 4.9,
      reviews: 218,
      image: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    },
  ]

  return (
    <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Meet Our Doctors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualified healthcare professionals ready to help you anytime
          </p>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl border border-primary/10 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white"
            >
              {/* Doctor image placeholder */}
              <div className={`w-full h-40 rounded-xl ${doctor.image} mb-4 flex items-end justify-end p-4`}>
                <div className="text-white text-3xl font-bold opacity-90">{doctor.name.charAt(4)}</div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-foreground mb-1">{doctor.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{doctor.specialty}</p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <MapPin className="w-4 h-4" />
                <span>{doctor.location}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(doctor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-foreground">{doctor.rating}</span>
                <span className="text-xs text-muted-foreground">({doctor.reviews})</span>
              </div>

              {/* CTA */}
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-lg h-10 text-sm font-medium">
                Book Now
              </Button>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary/5"
          >
            View All 2000+ Doctors
          </Button>
        </div>
      </div>
    </section>
  )
}
