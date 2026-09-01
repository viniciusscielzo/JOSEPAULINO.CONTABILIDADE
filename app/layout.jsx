import './globals.css'

export const metadata = {
  title: 'José Paulino Contabilidade | Contabilidade Empresarial e Tributária',
  description: 'Soluções contábeis, fiscais e tributárias para empresas que buscam organização, segurança e eficiência na gestão. Conheça a José Paulino Contabilidade.',
  openGraph: {
    title: 'José Paulino Contabilidade | Contabilidade Empresarial e Tributária',
    description: 'Organização, segurança e eficiência para uma gestão empresarial mais clara.',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'José Paulino Contabilidade',
              description: 'Soluções contábeis, fiscais e tributárias para empresas.',
            }),
          }}
        />
      </body>
    </html>
  )
}
