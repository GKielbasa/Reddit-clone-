//app.tsx reprezentuje całą naszą aplikacje, wszystkie strony i karzdy komponent będzie dzieckiem tego komponentu

//import '@/src/styles/globals.css'
  //cały css bedzie dostarczony przez chakra
import type { AppProps } from 'next/app'

// import chakraProvider to coś stylu bootstrap 
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../chakra/theme';
import Layout from '../components/Layout/Layout';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>     
    </ChakraProvider>
  );
}
export default MyApp;

