import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Pépinières de Judicarré</title>
      </Head>
      <Header />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}

export default App;
