import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import {
  Flex,
  Stack,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import LocaleSwitcher from '../LocaleSwitcher';

const navContent = {
  fi: {
    indexTitle: 'Teekkarikomissio',
    yhdistys: 'Yhdistys',
    fukseille: 'Fukseille',
    teekkarilakki: 'Teekkarilakki',
    kulttuuri: 'Kulttuuri',
    yrityksille: 'Yrityksille',
    jaynakilpailut: 'Jäynäkilpailut',
    viralliset: 'Dokumentit',
  },
  sv: {
    indexTitle: 'Teknologkommissionen',
    yhdistys: 'Föreningen',
    fukseille: 'Gulis',
    teekkarilakki: 'Teknologmössa',
    kulttuuri: 'Kultur',
    yrityksille: 'Till Företag',
    jaynakilpailut: 'Jäynätävlingen',
    viralliset: 'Dokument',
  },
};

const Header = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const content = navContent[locale];
  const [isOpen, toggleOpen] = useState(false);

  const navData = [
    {
      label: content.viralliset,
      href: '/viralliset',
    },
    {
      label: content.jaynakilpailut,
      href: '/jaynakilpailut',
    },
    {
      label: content.yhdistys,
      href: '/yhdistys',
    },
    {
      label: content.fukseille,
      href: '/fukseille',
    },
    {
      label: content.teekkarilakki,
      href: '/teekkarilakki',
    },
    {
      label: content.kulttuuri,
      href: '/kulttuuri',
    },
    {
      label: content.yrityksille,
      href: '/yrityksille',
    },
  ];

  function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
      <Flex display={{ base: 'flex', md: 'none' }}>
        <Drawer placement="right" isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent bg="red.600" color="yellow.300">
            <DrawerCloseButton />
            <DrawerHeader>{content.indexTitle}</DrawerHeader>
            <DrawerBody>
              <VStack alignItems="left">
                {navData.map((item) => (
                  <Link key={item.href} href={item.href} passHref>
                    <Button>{item.label}</Button>
                  </Link>
                ))}
                <LocaleSwitcher />
                <Image src="/tklogo.svg" alt="TK logo" width="64" height="64" />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Button bg="red.600" ref={btnRef} onClick={onOpen}>
          <FaBars />
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      direction={['column', 'row']}
      bg="red.600"
      color="yellow.300"
    >
      <HStack as="nav" display={{ base: 'none', md: 'flex' }}>
        <Link href="/">
          <a>{content.indexTitle}</a>
        </Link>
        <Image src="/tklogo.svg" alt="TK logo" width="64" height="64" />
        {navData.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <Button variant="nav">{item.label}</Button>
          </Link>
        ))}
        <LocaleSwitcher />
      </HStack>
      <HStack>
        <MobileDrawer />
      </HStack>
    </Flex>
  );
};

export default Header;
