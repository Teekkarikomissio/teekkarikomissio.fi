import React from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeSquare,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="flex-shrink bg-red-800 text-white p-6 border-b-8 border-blue-700">
      <div className="flex flex-shrink flex-col items-center justify-center">
        <Image
          className="h-24 w-24 items-center justify-center"
          src="/tklogo.svg"
          alt="TK"
          width={100}
          height={100}
        />
        <div className="lg:flex lg:flex-row md:block items-center justify-between">
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="https://www.google.fi/maps/place/Axelia/@60.455294,22.2783535,17z/data=!3m1!4b1!4m5!3m4!1s0x468c76f03394fe35:0x7f74515b5f8f6062!8m2!3d60.455294!4d22.2805422"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Henrikinkatu 2, 20500 Turku</span>
          </a>
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="mailto:teekkarikomissio@lists.utu.fi"
          >
            <FontAwesomeIcon icon={faEnvelopeSquare} />
            <span>teekkarikomissio@lists.utu.fi</span>
          </a>
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="https://instagram.com/turunteekkari"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <span>@turunteekkari</span>
          </a>
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="https://www.facebook.com/teekkarikomissio/"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>@teekkarikomissio</span>
          </a>
        </div>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Teekkarikomissioyhdistys ry</p>
      </div>
    </div>
  );
};

export default Footer;
