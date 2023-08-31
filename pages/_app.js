import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Catalogue from '../components/Catalogue';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header />
      <Welcome/>
      <Catalogue/>
      <About/>
      <Component {...pageProps} />
    </>
  );
}

export default App;
