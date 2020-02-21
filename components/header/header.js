import styled from 'styled-components';

import Container from '../container';

const Header = props => {
  const StyledHeader = styled.header`
    position: relative;
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

      @media ${props.device.medium} {
        max-width: 70%;
      }
    }
  `;

  const Hero = styled.img`
    max-width: 100%;
    display: block;
    margin: auto;
  `;

  return (
    <StyledHeader>
      <Hero src="/tk-hero.jpg" />
      <Container>
        <ChildrenContainer>{props.children}</ChildrenContainer>
      </Container>
    </StyledHeader>
  );
};

export default Header;
