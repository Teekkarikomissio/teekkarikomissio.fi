import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  const size = {
    small: '48em', // 768px
    medium: '64em', // 1024px
    large: '85.375em', // 1366px
    xlarge: '120em', // 1920px
    xxlarge: '160em', // 2560px
  };

  const device = {
    small: `(min-width: ${size.small})`,
    medium: `(min-width: ${size.medium})`,
    large: `(min-width: ${size.large})`,
    xlarge: `(min-width: ${size.xlarge})`,
    xxlarge: `(min-width: ${size.xxlarge})`,
    retina: `(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`,
  };

  const StyledContainer = styled.div`
    margin: 0 4%;

    @media ${device.medium} {
      margin: 0 8%;
    }

    @media ${device.large} {
      margin: 0 12%;
    }

    @media ${device.xlarge} {
      margin: 0 18%;
    }
  `;

  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
