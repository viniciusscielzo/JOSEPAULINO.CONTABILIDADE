import './globals.css'
import Analytics from './analytics'
import { siteName, siteUrl } from '../src/site-config'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#11110f',
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Contabilidade JP | Bragança Paulista',
  description: 'Contabilidade em Bragança Paulista para empresas, produtores rurais e profissionais liberais. Diagnóstico, clareza e acompanhamento desde 1950.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Contabilidade JP | José Paulino Contabilidade',
    description: 'Diagnóstico e acompanhamento contábil para empresas, produtores rurais e profissionais liberais. Desde 1950.',
    type: 'website',
    url: '/',
    locale: 'pt_BR',
    siteName,
  },
  twitter: { card: 'summary', title: 'Contabilidade JP | Desde 1950', description: 'Diagnóstico, clareza e acompanhamento contábil em Bragança Paulista.' },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '192x192' }],
    shortcut: '/favicon.png',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href="/fonts/cormorant-500.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-400.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['AccountingService', 'LocalBusiness'],
              name: 'Escritório Contábil José Paulino Ltda',
              description: 'Diagnóstico e acompanhamento contábil para empresas, produtores rurais e profissionais liberais.',
              foundingDate: '1950',
              url: siteUrl,
              logo: `${siteUrl}/logo-jose-paulino-no-date.webp`,
              telephone: '+55 11 4033-1066',
              email: 'contabilidade@escritoriojosepaulino.com.br',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua Barão de Juqueri, 58, Centro',
                addressLocality: 'Bragança Paulista',
                addressRegion: 'SP',
                postalCode: '12900-370',
                addressCountry: 'BR',
              },
              areaServed: { '@type': 'City', name: 'Bragança Paulista' },
              openingHoursSpecification: [{
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:30',
              }],
            }),
          }}
        />
      </body>
    </html>
  )
}
