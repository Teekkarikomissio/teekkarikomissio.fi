import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    tkred: '#A11C31',
    tkblue: '#313186',
    tkyellow: '#FBCC7A',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
