import Link from 'next/link';

const Header = () => {
  return (
    <>
      <title>Teekkarikomissio / Teknologkomission</title>
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
    </>
  );
};

export default Header;
