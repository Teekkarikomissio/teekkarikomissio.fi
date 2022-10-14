import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaMailBulk, FaLocationArrow } from 'react-icons/fa';
import { Spacer, Box, Flex } from '@chakra-ui/react';

const CenteredFlexColumn = ({ children }) => {
  return (
    <Flex my={4} direction="column" justify="center" align="center" w={64} h="auto">
      {children}
    </Flex>
  );
};

const Footer = () => {
  return (
    <Flex p={2} direction="column" justify="center" align="center" bg="red.600" color="yellow.300">
      <Image width={54} height={54} src="/tklogo.svg" alt="TK" />
      <Flex m={5} direction={{ base: 'column', md: 'row' }}>
        <a href="https://www.google.com/maps/place/Aurum/@60.4556193,22.2832854,16.75z/data=!4m5!3m4!1s0x0:0xdccba43f503231bf!8m2!3d60.4548997!4d22.2825189">
          <CenteredFlexColumn>
            <FaLocationArrow />
            <span>Henrikinkatu 2, 20500 Turku</span>
          </CenteredFlexColumn>
        </a>
        <Spacer />
        <a href="mailto:teekkarikomissio@utu.fi">
          <CenteredFlexColumn>
            <FaMailBulk />
            <span>teekkarikomissio@utu.fi</span>
          </CenteredFlexColumn>
        </a>
        <Spacer />
        <a href="https://instagram.com/turunteekkari">
          <CenteredFlexColumn>
            <FaInstagram />
            <span>@turunteekkari</span>
          </CenteredFlexColumn>
        </a>
        <Spacer />
        <Box w={64} h="auto">
          <a href="https://www.facebook.com/teekkarikomissio/">
            <CenteredFlexColumn>
              <FaFacebookF />
              <span>@teekkarikomissio</span>
            </CenteredFlexColumn>
          </a>
        </Box>
      </Flex>
      <p>&copy; {new Date().getFullYear()} Teekkarikomissioyhdistys ry</p>
    </Flex>
  );
};

export default Footer;
