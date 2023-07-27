import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { JetBrains_Mono } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'

const jetmono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jet',
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={`${jetmono.variable} font-jetmono bg-colors-light dark:bg-colors-dark w-full min-h-screen`}>
        <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
  </>
  )
}