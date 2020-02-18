import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 4%;
`;

const Container = ({ children, className }) => (
  <StyledContainer className={`container ${className ? className : ''}`}>{children}</StyledContainer>
);

export default Container;
