import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pépinières de Judicarré</title>
        <meta
          name="description"
          content="Bienvenue aux Pépinières de Judicarré - Spécialiste des végétaux d’ornement pour professionnels du paysage, jardineries, collectivités et particuliers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.pepinieresdejudicarre.com/" />
        <meta name="keywords" content="Végétaux d'ornement, pépinières, Pépinière professionnelle, Plantes de jardin, Arbres et arbustes décoratifs, Plantes à fleurs, Plantes en pot" />
      </Head>
      <Header />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}

export default App;
