import React from 'react'
import { Mail, MapPin, Instagram } from 'lucide-react'
import Image from 'next/image'

import tklogo from '../public/logos/tklogo.svg'

const Footer = () => {
  return (
    <footer className="w-full bg-red-800 text-white py-12 border-b-4 border-blue-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <Image
            className="transition-transform hover:scale-105"
            src={tklogo}
            width={64}
            height={64}
            alt="TK"
          />
          
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
            <a
              className="flex flex-col items-center group transition-colors hover:text-yellow-100"
              href="https://www.google.com/maps/place/Aurum/@60.4556193,22.2832854,16.75z"
            >
              <MapPin className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
              <span>Henrikinkatu 2, 20500 Turku</span>
            </a>
            
            <a
              className="flex flex-col items-center group transition-colors hover:text-yellow-100"
              href="mailto:hallitus@teekkarikomissio.fi"
            >
              <Mail className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
              <span>hallitus[@]teekkarikomissio.fi</span>
            </a>
            
            <a
              className="flex flex-col items-center group transition-colors hover:text-yellow-100"
              href="https://instagram.com/turunteekkari"
            >
              <Instagram className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
              <span>@turunteekkari</span>
            </a>
          </div>
          
          <p className="text-sm mt-8 opacity-90">
            &copy; {new Date().getFullYear()} Teekkarikomissioyhdistys ry
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
