import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import PageTransition from '@/components/PageTransition'

import { Inter, Cormorant_Garamond } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

export const metadata = {
  title: {
    default: 'Inizio Overseas | Premium Textile Needles & Machinery Parts',
    template: '%s | Inizio Overseas',
  },
  description: 'Inizio Overseas manufactures precision textile needles and machinery parts for global textile industries. Quality, reliability and excellence.',
  keywords: ['textile needles', 'textile machinery parts', 'industrial needles', 'sewing machine needles', 'Inizio Overseas'],
  metadataBase: new URL('https://iniziooverseas.com'),
  openGraph: {
    type: 'website',
    url: 'https://iniziooverseas.com',
    siteName: 'Inizio Overseas',
    title: 'Inizio Overseas | Premium Textile Needles & Machinery Parts',
    description: 'Precision textile needles and machinery parts manufacturer for global industries.',
    images: [{ url: '/images/logo/logo.png', width: 1200, height: 630, alt: 'Inizio Overseas' }],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/images/favicon.png' },
  verification: {
    google: 'tV1qPEZu-KA21dGwvWVX_r_0NF98GbvqZw-VDeal69I',   // paste your code exactly
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} min-h-screen flex flex-col antialiased`}
      >
        <Loading />
        <Header />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}