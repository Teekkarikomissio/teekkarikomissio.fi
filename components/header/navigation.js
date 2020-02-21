import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Container from '../container';

const Navigation = props => {
  const links = [
    {
      url: '/yhdistys',
      text: 'Yhdistys',
    },
    {
      url: '/kulttuuri',
      text: 'Kulttuuri',
    },
    {
      url: '/yrityksille',
      text: 'Yrityksille',
    },
  ];

  const state = { menuOpen: false };

  const Navigation = styled.div`
    background: #000;
    color: ${props.theme.tkred};
    position: sticky;
    top: 0;
    padding: 0.5em 0 1em;
    z-index: 10;
    height: 9em;

    @media ${props.device.small} {
      padding: 2em 0 1em;
    }

    @media ${props.device.xxlarge} {
      padding: 1em 0;
    }

    img {
      margin-right: 0.4em;
    }

    p {
      text-align: center;
      max-width: 35em;
      margin: 0 auto;
    }

    a {
      color: ${props.theme.tkblue};
      text-decoration: none;

      &:hover,
      &.active {
        color: ${props.theme.tkyellow};
      }
    }
  `;

  const Nav = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5em;
    justify-content: space-between;

    @media ${props.device.small} {
      margin-bottom: 7em;
    }

    img {
      max-width: 120px;
      z-index: 2;

      @media ${props.device.medium} {
        max-width: 30%;
        min-width: 126px;
      }
    }
  `;

  const DesktopLinks = styled.div`
    display: none;

    img {
      max-width: 1em;
      max-height: 1em;
    }

    @media ${props.device.medium} {
      display: flex;
      flex-shrink: 0;
      align-items: center;

      a {
        margin-left: 1.5em;
        font-size: 2em;
      }
    }
  `;

  const Logo = styled.img`
    width: 100px;
    height: 100px;
    display: block;
    position: relative;
  `;

  return (
    <Navigation>
      <Container>
        <Nav>
          <Link href="/">
            <Logo src="./tklogo.svg" />
          </Link>
          <DesktopLinks>
            {links.map(link => (
              <Link href={link.url} key={link.text}>
                <a>{link.text}</a>
              </Link>
            ))}
          </DesktopLinks>
        </Nav>
      </Container>
    </Navigation>
  );
};

export default Navigation;
