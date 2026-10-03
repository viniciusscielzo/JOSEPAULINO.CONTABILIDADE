const fallbackSiteUrl = 'https://josepaulinocontabilidade.com.br'

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, '')
export const siteName = 'José Paulino Contabilidade'
