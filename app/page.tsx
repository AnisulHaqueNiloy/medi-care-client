import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Features } from '@/components/features'
import { AboutUs } from '@/components/about-us'
import { ServiceBenefits } from '@/components/service-benefits'
import { AppDownload } from '@/components/app-download'
import { Testimonials } from '@/components/testimonials'
import { Footer } from '@/components/footer'

// Premium Healthcare Landing Page
export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="benefits">
        <ServiceBenefits />
      </div>
      <div id="contact">
        <AppDownload />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}
