import React from 'react'
import { Facebook, Mail, MapPin, Instagram } from 'lucide-react'
import Image from 'next/image'

import tklogo from '../public/logos/tklogo.svg'

const Footer = () => {
  return (
    <div className="items-center text-center flex-shrink bg-red-800 text-white p-6 border-b-8 border-blue-700">
      <div className="flex flex-shrink flex-col items-center justify-center">
        <Image
          className="items-center justify-center"
          src={tklogo}
          width={48}
          height={48}
          alt="TK"
        />
        <div className="lg:flex lg:flex-row md:block items-center justify-between">
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="https://www.google.com/maps/place/Aurum/@60.4556193,22.2832854,16.75z/data=!4m5!3m4!1s0x0:0xdccba43f503231bf!8m2!3d60.4548997!4d22.2825189"
          >
            <MapPin size={48} />
            <span>Henrikinkatu 2, 20500 Turku</span>
          </a>
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="mailto:teekkarikomissio@utu.fi"
          >
            <Mail size={48} />
            <span>teekkarikomissio[@]utu.fi</span>
          </a>
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="https://instagram.com/turunteekkari"
          >
            <Instagram size={48} />
            <span>@turunteekkari</span>
          </a>
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="https://www.facebook.com/teekkarikomissio/"
          >
            <Facebook size={48} />
            <span>@teekkarikomissio</span>
          </a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Teekkarikomissioyhdistys ry</p>
    </div>
  )
}

export default Footer
