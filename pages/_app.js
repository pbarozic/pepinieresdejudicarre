import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Apropos from '../components/Apropos';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Header />
      <Welcome/>
      <Apropos/>
      <Component {...pageProps} />
    </>
  );
}

export default App;
