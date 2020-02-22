import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="bg-red-800 text-white p-6 border-b-8 border-blue-700">
      <div className="flex flex-col items-center justify-center">
        <Link href="/">
          <img className="h-24 w-24" src="/tklogo.svg" alt="TK" />
        </Link>
        <div className="flex flex-row items-center justify-between">
          <a
            className="flex flex-col items-center m-2 hover:text-yellow-400"
            href="mailto:teekkarikomissio@lists.utu.fi"
          >
            <FontAwesomeIcon icon={faEnvelopeSquare} width="54" height="54" />
            <span>teekkarikomissio@lists.utu.fi</span>
          </a>
          <a
            className="flex flex-col items-center m-2 hover:text-yellow-400"
            href="https://www.google.fi/maps/place/Axelia/@60.455294,22.2783535,17z/data=!3m1!4b1!4m5!3m4!1s0x468c76f03394fe35:0x7f74515b5f8f6062!8m2!3d60.455294!4d22.2805422"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} width="54" height="54" />
            <span>Piispankatu 8, 20500 Turku</span>
          </a>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400"
            href="https://instagram.com/turunteekkari"
          >
            <FontAwesomeIcon icon={faInstagram} width="54" height="54" />
            <span>Instagram</span>
          </a>
          <a
            className="flex flex-col items-center m-8 hover:text-yellow-400"
            href="https://www.facebook.com/teekkarikomissio/"
          >
            <FontAwesomeIcon icon={faFacebook} width="54" height="54" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
