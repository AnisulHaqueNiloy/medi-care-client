'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-foreground/5 to-foreground/10 py-16 px-4 sm:px-6 lg:px-8 text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-bold text-lg">MediCare</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming healthcare by connecting patients with trusted medical professionals.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-primary hover:text-accent transition text-sm">
                Twitter
              </a>
              <a href="#" className="text-primary hover:text-accent transition text-sm">
                Facebook
              </a>
              <a href="#" className="text-primary hover:text-accent transition text-sm">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground hover:text-primary transition cursor-pointer">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>support@medicare.com</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground hover:text-primary transition cursor-pointer">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground hover:text-primary transition cursor-pointer">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Medical Center Drive, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 py-8 space-y-4">
          {/* Links */}
          <div className="flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
            <Link href="#" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary transition">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary transition">
              Cookie Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary transition">
              Accessibility
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-muted-foreground">
            <p>© 2024 MediCare Inc. All rights reserved. HIPAA Compliant & Certified.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
