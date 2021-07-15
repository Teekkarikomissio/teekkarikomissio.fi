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

import FooterStyles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={FooterStyles['footer']}>
      <Image src="/tklogo.svg" alt="TK logo" width="54" height="54" />
      <div className={FooterStyles['somes']}>
        <a href="https://www.google.fi/maps/place/Axelia/@60.455294,22.2783535,17z/data=!3m1!4b1!4m5!3m4!1s0x468c76f03394fe35:0x7f74515b5f8f6062!8m2!3d60.455294!4d22.2805422">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Piispankatu 8, 20500 Turku</span>
        </a>
        <a href="mailto:teekkarikomissio@lists.utu.fi">
          <FontAwesomeIcon icon={faEnvelopeSquare} />
          <span>teekkarikomissio@lists.utu.fi</span>
        </a>
        <a href="https://instagram.com/turunteekkari">
          <FontAwesomeIcon icon={faInstagram} />
          <span>@turunteekkari</span>
        </a>
        <a href="https://www.facebook.com/teekkarikomissio/">
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>@teekkarikomissio</span>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Teekkarikomissioyhdistys ry</p>
    </div>
  );
};
