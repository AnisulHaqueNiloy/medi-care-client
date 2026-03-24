'use client'

import { Button } from '@/components/ui/button'

export function Header() {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">MediCare</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
