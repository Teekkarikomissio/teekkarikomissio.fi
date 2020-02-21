import Link from 'next/link';
import styled from 'styled-components';

const Header = props => {
  const StyledHeader = styled.header`
    background: ${props.theme.tkblue};
    color: #fff;
    position: relative;
    padding: 2em 1em;
    display: flex;
    flex-direction: row;
  `;

  const ChildrenContainer = styled.div`
    max-width: 50em;
    margin: 0 auto 5em;

    img {
      max-width: 80%;
      display: block;
      margin: 0 auto;
    }
  `;

  const Bottom = styled.div`
    overflow: hidden;
    left: 0;
    width: 100%;
    line-height: 0;
    direction: ltr;
  `;

  const Logo = styled.img`
    width: 100px;
    height: 100px;
    display: block;
    position: relative;
  `;

  const a = styled.a`
    color: #fff;
  `;

  return (
    <StyledHeader>
      <Bottom>
        <Logo src="./tklogo.svg" />
      </Bottom>
      <h2>Teekkarikomissio / Teknologkomission</h2>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
