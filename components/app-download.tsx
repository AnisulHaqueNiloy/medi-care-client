'use client'

import { Button } from '@/components/ui/button'
import { Apple, Download } from 'lucide-react'

export function AppDownload() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">Download the App</h2>
              <h3 className="text-2xl sm:text-3xl font-semibold opacity-90">And Sign In to Your Health</h3>
              <p className="text-lg opacity-80 leading-relaxed">
                Get instant access to healthcare services on your smartphone. Available on iOS and Android.
              </p>
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-white hover:bg-gray-100 text-primary rounded-full px-8 h-12 font-semibold flex items-center justify-center gap-2">
                <Apple className="w-5 h-5" />
                <span>App Store</span>
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-8 h-12 font-semibold flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                <span>Google Play</span>
              </Button>
            </div>

            {/* Benefits list */}
            <div className="space-y-3 pt-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-white/70" />
                <span>Push notifications for appointment reminders</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-white/70" />
                <span>Offline access to your medical records</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-white/70" />
                <span>Faster video consultations with doctors</span>
              </div>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex justify-center">
            <div className="relative w-64 h-96">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border-8 border-gray-900 overflow-hidden">
                {/* Screen content */}
                <div className="w-full h-full bg-gradient-to-b from-primary/30 to-accent/30 flex flex-col items-center justify-center space-y-4 p-6 text-white">
                  <div className="text-center space-y-2">
                    <div className="text-4xl font-bold">M</div>
                    <p className="text-sm font-medium">MediCare</p>
                  </div>
                  <div className="w-full space-y-3">
                    <div className="h-10 bg-white/20 rounded-lg" />
                    <div className="h-10 bg-white/20 rounded-lg" />
                    <div className="h-10 bg-accent rounded-lg" />
                  </div>
                  <div className="text-xs text-white/70 pt-4 text-center">
                    Download the app for the best experience
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-4xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
