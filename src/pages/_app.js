import { ChakraProvider } from '@chakra-ui/react'

function TKApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default TKApp
