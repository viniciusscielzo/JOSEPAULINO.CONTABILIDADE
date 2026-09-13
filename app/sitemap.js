import { siteUrl } from '../src/site-config'

export const dynamic = 'force-static'

export default function sitemap() {
  return [
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/contabilidade-para-medicos/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/politica-de-privacidade/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
