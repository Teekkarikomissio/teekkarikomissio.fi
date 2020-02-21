import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Container from '../components/container';

const Footer = () => {
  const StyledFooter = styled.footer`
    background: #a11c31;
    color: #fff;
    padding: 6em 0;
    border-bottom: 0.5em solid;
  `;

  const Somes = styled.div`
    svg {
      height: 1.5em;
      width: 1.5em;
    }

    a {
      margin: 0.5em 0.8em;
      color: #fff;
      transition: color 0.3s ease;
    }
  `;

  const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 1em 0 2em;

    a {
      margin: 0.5em 0.8em;
      color: #fff;
    }

    svg {
      height: 1.5em;
      width: 1.5em;
    }
  `;

  const Logo = styled.img`
    width: 150px;
    height: 150px;
  `;

  const SomeLogo = styled.img`
    font-size: 100px;
    height: 100px;
  `;

  return (
    <StyledFooter>
      <Container>
        <Info>
          <Link href="/">
            <Logo src="/tklogo.svg" alt="TK" />
          </Link>
          <Contact>
            <a href="mailto:teekkarikomissio@lists.utu.fi">
              <FontAwesomeIcon icon={faEnvelopeSquare} size="xs" />
              <span>teekkarikomissio@lists.utu.fi</span>
            </a>
            <a href="https://www.google.fi/maps/place/Axelia/@60.455294,22.2783535,17z/data=!3m1!4b1!4m5!3m4!1s0x468c76f03394fe35:0x7f74515b5f8f6062!8m2!3d60.455294!4d22.2805422">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="xs" />
              <span>Piispankatu 8, 20500 Turku</span>
            </a>
          </Contact>
          <Somes>
            <a href="https://instagram.com/turunteekkari">
              <FontAwesomeIcon icon={faInstagram} size="xs" />
            </a>
            <a href="https://www.facebook.com/teekkarikomissio/">
              <FontAwesomeIcon icon={faFacebookSquare} size="xs" />
            </a>
          </Somes>
        </Info>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
