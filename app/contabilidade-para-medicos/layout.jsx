import { siteName, siteUrl } from '../../src/site-config'

export const metadata = {
  title: 'Contabilidade para Médicos | Contabilidade JP',
  description: 'Carnê-leão, Livro Caixa e comparação PF × PJ para médicos, consultórios e clínicas. Diagnóstico tributário com seus números.',
  alternates: { canonical: '/contabilidade-para-medicos/' },
  openGraph: {
    title: 'Contabilidade para Médicos | Diagnóstico PF × PJ',
    description: 'Organize receitas e despesas e compare PF × PJ com seus números. Atendimento contábil para médicos, consultórios e clínicas.',
    type: 'website',
    url: '/contabilidade-para-medicos/',
    locale: 'pt_BR',
    siteName,
  },
  twitter: { card: 'summary', title: 'Contabilidade para Médicos | José Paulino', description: 'Diagnóstico PF × PJ, Livro Caixa, carnê-leão e acompanhamento mensal.' },
}

export default function MedicalLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Contabilidade para Médicos',
            serviceType: 'Assessoria contábil e tributária para médicos',
            url: `${siteUrl}/contabilidade-para-medicos/`,
            areaServed: [{ '@type': 'City', name: 'Bragança Paulista' }, { '@type': 'State', name: 'São Paulo' }],
            provider: {
              '@type': 'AccountingService',
              name: 'Escritório Contábil José Paulino Ltda',
              telephone: '+55 11 4033-1066',
              foundingDate: '1928',
            },
          }),
        }}
      />
    </>
  )
}
