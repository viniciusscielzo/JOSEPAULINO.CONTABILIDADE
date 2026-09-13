const fallbackSiteUrl = 'https://jose-paulino-contabilidade.vinicius-scielzo1.chatgpt.site'

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, '')
export const siteName = 'José Paulino Contabilidade'

