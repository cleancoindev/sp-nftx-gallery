import React from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as locales from '../lang';
import '../styles/globals.css';

const App = ({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: {
    [key: string]: any;
  };
}) => {
  const router = useRouter();
  const { locale = 'en', defaultLocale = 'en' } = router;

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={locales[locale] || locales[defaultLocale]}
    >
      <div className="bg-gray-900 min-h-screen flex flex-col">
        <Header />
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
