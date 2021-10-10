import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PP - Challenge - API Marvel</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e62429" />
        <meta name="description" content="PP - Challenge - API Marvel" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
