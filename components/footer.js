import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="flex-shrink bg-red-800 text-white p-6 border-b-8 border-blue-700">
      <div className="flex flex-shrink flex-col items-center justify-center">
        <img className="h-24 w-24 items-center justify-center" src="/tklogo.svg" alt="TK" />
        <div className="lg:flex lg:flex-row md:block items-center justify-between">
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="https://www.google.com/maps/place/Aurum/@60.4556193,22.2832854,16.75z/data=!4m5!3m4!1s0x0:0xdccba43f503231bf!8m2!3d60.4548997!4d22.2825189"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Henrikinkatu 2, 20500 Turku</span>
          </a>
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400 h-16"
            href="mailto:teekkarikomissio@utu.fi"
          >
            <FontAwesomeIcon icon={faEnvelopeSquare} />
            <span>teekkarikomissio@utu.fi</span>
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
