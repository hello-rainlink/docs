import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import type { FC, ReactNode } from 'react'
import { getPageMap } from 'nextra/page-map'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  description: 'RainLink is a cross-chain bridge technology designed specifically for multi-chain ecology, dedicated to achieving secure and efficient asset transfer between different blockchain networks.',
  metadataBase: new URL('https://docs.rainlink.io'),
  keywords: ['rainlink', 'rainlink.io', 'rainlink docs', 'rainlink documentation', 'rainlink blockchain', 'rainlink web3'],
  generator: 'RainLink',
  applicationName: 'RainLink',
  appleWebApp: {
    title: 'RainLink',
  },
  title: {
    default: 'RainLink – Cross-chain Asset Transfer',
    template: '%s | RainLink'
  },
  openGraph: {
    url: './',
    siteName: 'RainLink',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileImage': '',
    'msapplication-TileColor': '#F77D30'
  },
  twitter: {
    site: 'https://docs.rainlink.io'
  },
  alternates: {
    canonical: './'
  }
}

// const banner = <Banner storageKey="some-key">🎉</Banner>
const navbar = (
  <Navbar
    logo={
      <>
      <img
        src="/logo.svg"
        alt="RainLink Logo"
        style={{ height: '1.5em', width: 'auto' }}
      />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        RainLink
      </span>
    </>
    }
    projectLink="https://github.com/hello-rainlink/docs"
  />
)
const footer = <Footer>{new Date().getFullYear()} © RainLink.</Footer>

const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      data-theme="cupcake"
    >
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="RainLink" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="min-h-screen">
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/hello-rainlink/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout