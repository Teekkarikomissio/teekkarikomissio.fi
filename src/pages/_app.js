import React from 'react';
import '../styles/global/globals.css';
import '../styles/layout.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
