import '@/styles/globals.css'
import Header from '@/components/Header'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />    
      <Analytics />
    </>
  )
}
