import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React avançado - BoilerPlate</title>
        <link rel="stylesheet" href="" />
        <meta name="description" content="A single" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
