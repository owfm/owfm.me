import Footer from '@/components/footer'
import { Metadata } from 'next'
import '../global.css'
import '../styles/global.css'
import '../styles/inter.css'
import '../styles/markdown.css'
import '../styles/nprogress.css'
import '../styles/syntax.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://www.olliemansell.co.uk'),
  title: { template: 'Ollie Mansell | %s', default: 'Ollie Mansell CV' },
  description: 'Personal CV of Ollie Mansell',
  authors: [{ name: 'Ollie Mansell' }],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="preload"
          href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="container flex flex-col min-h-screen mx-auto max-w-3xl">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
