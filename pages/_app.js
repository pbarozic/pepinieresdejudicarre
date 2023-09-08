import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <meta
          name="keywords"
          content="Végétaux d'ornement, pépinières, Pépinière professionnelle, Plantes de jardin, Arbres et arbustes décoratifs, Plantes à fleurs, Plantes en pot"
        />

        {/* Add Open Graph (OG) meta tags */}
        <meta property="og:title" content="Pépinières de Judicarré" />
        <meta
          property="og:description"
          content="Spécialiste des végétaux d'ornement depuis 1985"
        />
        <meta property="og:image" content="/welcome.jpg" />
        <meta
          property="og:url"
          content="https://www.pepinieresdejudicarre.com/"
        />
        <meta property="og:type" content="website" />

        {/* Optimize for WhatsApp sharing */}
        <meta property="og:site_name" content="Pépinières de Judicarré" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Header />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}

export default App;
