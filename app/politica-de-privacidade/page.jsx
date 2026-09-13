import { siteUrl } from '../../src/site-config'

export const metadata = {
  title: 'Política de Privacidade | Contabilidade JP',
  description: 'Informações sobre o tratamento de dados pessoais nos canais digitais da José Paulino Contabilidade.',
  alternates: { canonical: '/politica-de-privacidade/' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <a href="/" aria-label="Voltar ao início"><img src="/logo-jose-paulino-dark.webp" alt="JP | José Paulino Contabilidade | Desde 1928" width="900" height="301" /></a>
        <a href="/">Voltar ao site</a>
      </header>
      <article>
        <span>TRANSPARÊNCIA E SEGURANÇA</span>
        <h1>Política de Privacidade</h1>
        <p>Esta página explica, de forma objetiva, como os dados enviados pelos canais digitais da José Paulino Contabilidade podem ser utilizados.</p>
        <h2>Dados informados por você</h2>
        <p>Ao iniciar uma conversa ou preencher um formulário, você pode fornecer nome, empresa ou atividade, telefone, e-mail e informações sobre a situação que deseja analisar.</p>
        <h2>Finalidade do contato</h2>
        <p>Esses dados são utilizados para responder à sua solicitação, entender o contexto apresentado e viabilizar o atendimento comercial ou profissional solicitado.</p>
        <h2>WhatsApp e ferramentas de medição</h2>
        <p>Ao clicar nos botões de WhatsApp, você passa a utilizar uma plataforma de terceiros, sujeita aos próprios termos. O site também pode utilizar ferramentas de medição e publicidade quando configuradas, com a finalidade de compreender a navegação e avaliar campanhas.</p>
        <h2>Seus direitos</h2>
        <p>Você pode solicitar informações, correção ou exclusão dos dados fornecidos pelos canais digitais, observadas as obrigações legais aplicáveis.</p>
        <h2>Contato</h2>
        <p>Para dúvidas sobre privacidade, escreva para <a href="mailto:contabilidade@escritoriojosepaulino.com.br">contabilidade@escritoriojosepaulino.com.br</a>.</p>
        <small>Última atualização: 12 de setembro de 2026 · <a href={siteUrl}>{siteUrl.replace(/^https?:\/\//, '')}</a></small>
      </article>
      <footer className="privacy-footer">© José Paulino Contabilidade · <a href="https://viniciusscielzo.com.br" target="_blank" rel="noopener">Site desenvolvido por <b>Vinicius Scielzo</b></a></footer>
    </main>
  )
}
