const whatsapp = 'https://wa.me/551140331066'
const arrow = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`

const header = (medical = false) => `
<header class="header${medical ? ' campaign-header' : ''}" id="header">
  <a class="brand header-brand" href="/" aria-label="José Paulino Contabilidade, início"><img src="/logo-jose-paulino-no-date.webp" alt="JP | José Paulino Contabilidade" width="1600" height="559"></a>
  ${medical
    ? '<span class="campaign-context">Contabilidade para médicos</span>'
    : '<nav id="nav" aria-label="Navegação principal"><a href="#sobre">O escritório</a><a href="#especialidades">Especialidades</a><a href="#como">Como trabalhamos</a><a href="/contabilidade-para-medicos/">Para médicos</a><a href="#contato">Contato</a></nav>'}
  <a class="btn btn-small desktop-cta" href="${medical ? whatsapp : '#contato'}"${medical ? ' target="_blank" rel="noopener"' : ''}>${medical ? 'Faça um diagnóstico gratuito' : 'Agendar Diagnóstico Gratuito'} ${arrow}</a>
  ${medical ? '' : '<button class="menu" id="menu" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span></button>'}
</header>`

const footer = `
<footer>
  <div class="footer-main">
    <div class="footer-intro"><a class="brand footer-brand" href="/"><img src="/logo-jose-paulino-no-date.webp" alt="José Paulino Contabilidade" width="1600" height="559" loading="lazy" decoding="async"></a><p>Diagnóstico e acompanhamento contábil para médicos, empresas, produtores rurais e outros profissionais liberais.</p></div>
    <div><h4>Navegação</h4><a href="/#sobre">O escritório</a><a href="/#especialidades">Especialidades</a><a href="/#como">Como trabalhamos</a><a href="/contabilidade-para-medicos/">Para médicos</a></div>
    <div><h4>Especialidades</h4><a href="/contabilidade-para-medicos/">Saúde</a><a href="/#rural">Contabilidade rural</a><a href="/#especialidades">Regularização</a><a href="/#especialidades">Fiscal e societário</a></div>
    <div><h4>Contato</h4><a href="${whatsapp}" target="_blank" rel="noopener">(11) 4033-1066</a><a href="mailto:contabilidade@escritoriojosepaulino.com.br">contabilidade@escritoriojosepaulino.com.br</a><span>Rua Barão de Juqueri, 58, Centro<br>Bragança Paulista/SP</span></div>
    <div class="footer-map"><h4>Localização</h4><iframe title="Localização do Escritório José Paulino em Bragança Paulista" src="https://www.google.com/maps?q=Rua%20Bar%C3%A3o%20de%20Juqueri%2C%2058%2C%20Bragan%C3%A7a%20Paulista%2C%20SP&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
  <div class="footer-bottom"><span>© <span class="year"></span> Escritório Contábil José Paulino Ltda.</span><a class="made-by" href="https://viniciusscielzo.com.br" target="_blank" rel="noopener">Site desenvolvido por <b>Vinicius Scielzo</b></a><a href="/politica-de-privacidade/">Política de Privacidade</a></div>
</footer>`

const faqs = [
  ['Trocar de contador dá trabalho?','Não para você. Solicitamos a documentação ao escritório anterior, conferimos o que foi entregue, identificamos pendências e assumimos a partir do mês seguinte. Se encontrarmos problemas na escrituração anterior, avisamos antes de assumir.'],
  ['Quais documentos preciso enviar todo mês?','Depende do regime e da atividade. Na reunião inicial você recebe uma lista específica para o seu caso, em vez de uma lista genérica.'],
  ['Atendem fora de Bragança Paulista?','Sim. Atendemos presencialmente na região e à distância em todo o estado.'],
  ['Em quanto tempo vocês respondem?','Em até 1 dia útil, para qualquer solicitação.'],
  ['Sou médico e ganho por plantão e repasse. Compensa abrir empresa?','Depende do volume de receita, das despesas e da origem dos pagamentos. Fazemos a simulação com seus números e mostramos os dois cenários. Em muitos casos compensa. Em alguns, não, e também deixamos isso claro.'],
  ['Quanto custa o diagnóstico?','É gratuito. Após entender sua situação, apresentamos o valor dos serviços de forma transparente, sem surpresas.'],
  ['Atendo em outra cidade, posso ser cliente?','Sim! Atendemos presencialmente em Bragança Paulista e 100% digital em todo o Brasil.']
]

export const homeMarkup = `
${header()}
<main>
  <section class="hero hero-diagnostic" id="inicio">
    <div class="hero-grain" aria-hidden="true"></div>
    <div class="hero-copy reveal">
      <div class="eyebrow light">DESDE 1950 · BRAGANÇA PAULISTA</div>
      <h1>Contabilidade que começa com diagnóstico. <em>Sem surpresas, sem imposto inesperado.</em></h1>
      <p>Três gerações em Bragança Paulista cuidando de empresas, produtores rurais e profissionais liberais desde 1950.</p>
      <div class="actions"><a class="btn" href="#contato">Agendar Diagnóstico Gratuito ${arrow}</a><a class="btn-link" href="${whatsapp}" target="_blank" rel="noopener">Falar com a equipe no WhatsApp <span>↗</span></a></div>
    </div>
    <div class="hero-art heritage-art reveal" aria-hidden="true">
      <div class="heritage-identity">
        <span class="jp-emblem"><img src="/jp-emblem.webp" alt="" width="700" height="656" decoding="async"></span>
        <div class="heritage-year"><span>DESDE</span><strong>1950</strong></div>
      </div>
      <p class="heritage-caption">Três gerações.<br><em>A mesma responsabilidade.</em></p>
      <div class="heritage-note">Bragança Paulista · São Paulo</div>
    </div>
    <div class="proof-strip"><span><b>Desde 1950</b> três gerações</span><span><b>250 clientes</b> atendidos</span><span><b>8 profissionais</b> equipe própria</span><span><b>1 dia útil</b> prazo de retorno</span></div>
  </section>

  <section class="section about heritage" id="sobre">
    <div class="about-mark">1950</div>
    <div class="section-heading reveal"><div class="eyebrow">QUEM SOMOS</div><h2>Três gerações na <em>mesma cidade.</em></h2></div>
    <div class="about-copy reveal"><p>Desde 1950, o Escritório José Paulino faz parte da história empresarial de Bragança Paulista. Ao longo de três gerações, a tradição ganhou novos processos, novas especialidades e a mesma responsabilidade pelo trabalho entregue.</p><p>Hoje a responsabilidade técnica está com <strong>André Nogueira Leme</strong> e <strong>Antonio Fernando Leme</strong>, à frente de uma equipe própria de 8 profissionais que atende 250 clientes entre empresas, produtores rurais e profissionais liberais.</p><p class="about-closing">Quem nos procura encontra atendimento direto, memória sobre cada caso e profissionais que respondem pelo que fazem.</p></div>
    <blockquote class="about-wide-quote reveal">Antes de assumir sua contabilidade, entendemos o que precisa ser organizado.</blockquote>
  </section>

  <section class="principals" aria-label="Responsáveis técnicos">
    <div class="principals-intro reveal"><div class="eyebrow light">RESPONSABILIDADE TÉCNICA</div><h2>Quem assina o trabalho também participa da conversa.</h2><p>Uma estrutura próxima, com responsabilidade clara e atendimento conduzido por quem conhece o contexto de cada cliente.</p></div>
    <div class="principal-list reveal"><article><span>01</span><div><h3>André Nogueira Leme</h3><p>Responsável técnico</p></div></article><article><span>02</span><div><h3>Antonio Fernando Leme</h3><p>Responsável técnico</p></div></article></div>
  </section>

  <section class="medical-entry" id="medicos">
    <div class="medical-entry-copy reveal"><div class="eyebrow light">CONTABILIDADE PARA MÉDICOS</div><h2>Médico não deveria descobrir quanto vai pagar de imposto só em abril.</h2><p>Plantões, cooperativas, consultório, convênios. Quando a renda vem de diferentes fontes, a decisão entre PF e PJ precisa ser feita com números, não com opinião.</p><div class="medical-mini"><span>Livro Caixa</span><span>Carnê-leão</span><span>Simulação PF × PJ</span><span>IRPF</span></div><a class="btn" href="/contabilidade-para-medicos/">Conhecer a assessoria para médicos ${arrow}</a></div>
    <div class="medical-entry-visual reveal"><span class="specialty-label">SUA CARREIRA. SEUS NÚMEROS.</span><div class="med-number">PF <i>×</i> PJ</div><p>Receitas, despesas e forma de atuação analisadas juntas para orientar a escolha.</p><a href="/contabilidade-para-medicos/">Conhecer a assessoria médica <b>↗</b></a></div>
  </section>

  <section class="section services" id="especialidades">
    <div class="section-intro reveal"><div><div class="eyebrow">ÁREAS DE ATUAÇÃO</div><h2>Conhecimento técnico para situações que não aceitam resposta genérica.</h2></div><p>Da rotina mensal aos casos que exigem regularização, diagnóstico e reorganização.</p></div>
    <div class="service-grid">
      ${[
        ['01','Contabilidade para Médicos','Saiba o imposto ANTES, não em abril.','/contabilidade-para-medicos/'],
        ['02','Contabilidade Rural','LCDPR, ITR e sucessão sem complicações.','#rural'],
        ['03','Regularização','Débitos e atrasos resolvidos.','#contato'],
        ['04','Fiscal','Enquadramento correto, sem surpresas.','#contato'],
        ['05','Societário','Abertura, alterações e baixa simplificadas.','#contato']
      ].map(s=>`<a class="service-card reveal" href="${s[3]}"><div class="card-top"><span>${s[0]}</span><div class="card-arrow">↗</div></div><h3>${s[1]}</h3><p class="service-benefit">${s[2]}</p><small>Saiba mais</small></a>`).join('')}
    </div>
  </section>

  <section class="rural-feature" id="rural"><div class="rural-index">10</div><div class="rural-copy reveal"><div class="eyebrow light">CONTABILIDADE RURAL</div><h2>Experiência construída junto ao produtor rural.</h2><p>Hoje temos <strong>10 carvoarias</strong> na carteira. É uma atividade com exigências ambientais, trabalhistas e fiscais que poucos escritórios dominam.</p><p>A mesma lógica vale para o produtor rural: LCDPR, Funrural, apuração da atividade e terras familiares que nunca foram formalizadas. Atendemos o campo da região há décadas. Conhecemos o setor porque convivemos com ele.</p></div><div class="rural-facts reveal"><span>LCDPR</span><span>FUNRURAL</span><span>ITR</span><span>SUCESSÃO</span></div></section>

  <section class="section process" id="como"><div class="section-heading reveal"><div class="eyebrow">COMO TRABALHAMOS</div><h2>Antes da proposta, a <em>situação real.</em></h2></div><div class="process-grid">
    <article class="reveal"><span>01</span><h3>Diagnóstico</h3><p>Analisamos sua situação fiscal, societária e trabalhista. Você descobre onde estão os problemas mesmo que não feche com a gente. Sem compromisso.</p></article>
    <article class="reveal"><span>02</span><h3>Proposta</h3><p>Apresentamos o que precisa ser feito, em qual ordem e quanto custa. Sem pacote vendido antes de entender seu caso.</p></article>
    <article class="reveal"><span>03</span><h3>Acompanhamento</h3><p>Você fala direto com quem decide. Toda solicitação tem retorno em até 1 dia útil.</p></article>
  </div></section>

  <section class="section reasons"><div class="reasons-heading reveal"><div><div class="eyebrow">POR QUE NOS ESCOLHEM</div><h2>Tradição que ainda atende pelo nome.</h2></div><p>Uma estrutura construída para unir permanência, responsabilidade técnica e proximidade no dia a dia.</p></div><div class="reason-rail">
    <article class="reveal"><span>01</span><strong>Desde 1950</strong><p>Três gerações em Bragança Paulista</p><small>Estabilidade que não desaparece</small></article><article class="reveal"><span>02</span><strong>250 clientes</strong><p>Empresas, rurais e liberais</p><small>Especialização comprovada</small></article><article class="reveal"><span>03</span><strong>1 dia útil</strong><p>Prazo de resposta</p><small>Você não fica esperando</small></article>
  </div><div class="reason-principles"><article class="reveal"><span>Equipe própria</span><p>8 profissionais, sem terceirização</p><small>Controle total do seu trabalho</small></article><article class="reveal"><span>Sócio no atendimento</span><p>Você fala com quem assina</p><small>Decisão na hora</small></article><article class="reveal"><span>Especialização real</span><p>Rural e Saúde na rotina</p><small>Contabilidade feita para você</small></article></div></section>

  <section class="section faq" id="faq"><div class="section-heading reveal"><div class="eyebrow">DÚVIDAS FREQUENTES</div><h2>Respostas diretas, desde o <em>primeiro contato.</em></h2></div><div class="accordion reveal">${faqs.map((f,i)=>`<article class="faq-item ${i===0?'open':''}"><button aria-expanded="${i===0}"><span>${f[0]}</span><b></b></button><div class="answer"><p>${f[1]}</p></div></article>`).join('')}</div></section>

  <section class="contact" id="contato"><div class="contact-copy reveal"><div class="eyebrow light">AGENDE SEU DIAGNÓSTICO GRATUITO</div><h2>Primeiro entendemos. Depois propomos.</h2><p>Conte o que está acontecendo e marque uma conversa com quem analisa e decide. Sem vendedores, sem pressão. Apenas uma avaliação honesta da sua situação.</p><div class="contact-details"><a href="${whatsapp}" target="_blank" rel="noopener">(11) 4033-1066</a><a href="mailto:contabilidade@escritoriojosepaulino.com.br">contabilidade@escritoriojosepaulino.com.br</a><span>Segunda a sexta, das 8h às 17h30.<br>Outros horários podem ser agendados.</span></div></div>
    <form class="contact-form reveal" id="contact-form"><label>Nome<input name="nome" autocomplete="name" required placeholder="Seu nome"></label><label>Empresa ou atividade<input name="empresa" autocomplete="organization" placeholder="Como você atua?"></label><div class="form-row"><label>WhatsApp<input name="telefone" autocomplete="tel" inputmode="tel" required placeholder="(00) 00000-0000"></label><label>E-mail<input name="email" type="email" autocomplete="email" inputmode="email" placeholder="voce@email.com"></label></div><label>O que precisa ser analisado?<textarea name="mensagem" rows="3" placeholder="Conte brevemente sua situação"></textarea></label><button class="btn light-btn" type="submit">Solicitar Diagnóstico Gratuito ${arrow}</button><p class="form-status" aria-live="polite"></p></form>
  </section>
</main>
${footer}<a class="whatsapp" href="${whatsapp}" target="_blank" rel="noopener" aria-label="Agendar diagnóstico gratuito pelo WhatsApp"><span>◔</span><b>Diagnóstico gratuito</b></a>`

const medicalFaqs = [
  ['Médico precisa ter CNPJ?','Não necessariamente. A decisão depende da receita, despesas, fontes pagadoras e forma de atuação. A análise compara os dois cenários.'],
  ['Quando vale a pena abrir uma empresa?','Quando a simulação completa, incluindo pró-labore, Fator R, custos e obrigações, mostra vantagem e adequação para a rotina do médico.'],
  ['Vocês organizam o carnê-leão e o Livro Caixa?','Sim. As receitas são conciliadas mensalmente e as despesas dedutíveis são classificadas ao longo do ano.'],
  ['Atendem fora do horário comercial?','Sim. Para quem faz plantão ou não consegue comparecer em horário normal, outros horários podem ser agendados.'],
  ['Atendem clínicas e consultórios?','Sim. A estrutura apresentada atende médicos autônomos, consultórios e clínicas, conforme o diagnóstico de cada operação.']
]

export const medicalMarkup = `
${header(true)}
<main class="medical-page">
  <section class="med-hero campaign-hero">
    <figure class="campaign-photo"><img src="/medico-gestao-fiscal.webp" alt="Médico e contador analisando juntos informações financeiras e fiscais" width="1672" height="941" fetchpriority="high" decoding="async"><figcaption><span>DIAGNÓSTICO</span><strong>Clareza para cuidar também do seu negócio.</strong></figcaption></figure>
    <div class="med-hero-copy reveal"><div class="eyebrow light">CONTABILIDADE PARA MÉDICOS</div><h1>Seu imposto não deveria ser uma surpresa em <em>abril.</em></h1><p>Plantões, cooperativas, consultório e convênios geram receitas em lugares diferentes. Organizamos o ano e colocamos PF e PJ lado a lado para você decidir com números.</p><div class="actions"><a class="btn campaign-primary" href="${whatsapp}" target="_blank" rel="noopener">Faça um diagnóstico gratuito ${arrow}</a><a class="btn-link" href="#diagnostico">Ver o que analisamos <span>↓</span></a></div><div class="campaign-assurance">Diagnóstico com seus números. Não com opinião.</div></div>
  </section>

  <section class="medical-trust-strip" aria-label="Informações do escritório"><article><strong>Desde 1950</strong><span>tradição em Bragança Paulista</span></article><article><strong>250 clientes</strong><span>em diferentes atividades</span></article><article><strong>1 dia útil</strong><span>prazo de retorno</span></article><article><strong>Horário agendado</strong><span>inclusive fora do expediente</span></article></section>

  <section class="section med-problem"><div class="section-heading reveal"><div class="eyebrow">O PROBLEMA COMEÇA ANTES DO IMPOSTO</div><h2>A renda entra de quatro lugares. A visão do todo não vem de <em>nenhum.</em></h2></div><div class="about-copy reveal"><p>Plantão em hospital, repasse de cooperativa, atendimento no consultório, convênio que paga com atraso. Cada fonte chega de um jeito e em uma data.</p><p>Quando ninguém concilia essas informações durante o ano, o carnê-leão é feito às pressas, despesas dedutíveis ficam de fora e abril vira uma surpresa evitável.</p><p class="campaign-question">A pergunta certa não é “todo médico precisa de PJ?”. É: <strong>qual estrutura faz sentido para os seus números?</strong></p><a class="text-cta" href="${whatsapp}" target="_blank" rel="noopener">Faça um diagnóstico gratuito ${arrow}</a></div></section>

  <section class="section med-audience" id="para-quem"><div class="audience-heading reveal"><div class="eyebrow">PARA QUEM ESTA ANÁLISE FAZ SENTIDO</div><h2>Para quem atende pacientes e precisa enxergar a própria atividade como um negócio.</h2></div><div class="audience-grid">${['Médicos autônomos','Médicos plantonistas','Médicos com CNPJ','Consultórios particulares','Clínicas médicas','Quem pretende abrir empresa'].map((x,i)=>`<article class="reveal"><span>0${i+1}</span><h3>${x}</h3></article>`).join('')}</div></section>

  <section class="med-solutions" id="diagnostico"><div class="med-solutions-head reveal"><div class="eyebrow light">O QUE PRECISA SER ORGANIZADO</div><h2>Antes de decidir, os números precisam conversar.</h2><p>O diagnóstico combina as partes que normalmente chegam separadas.</p></div><div class="med-solution-list">
    ${[
      ['Apuração mensal do carnê-leão','Receitas de todas as fontes conciliadas.'],
      ['Livro Caixa o ano inteiro','Cada despesa dedutível classificada corretamente.'],
      ['Simulação PF × PJ','Comparação com Fator R, pró-labore e volume real de receita.'],
      ['Abertura e enquadramento','A PJ é estruturada quando a conta fecha.'],
      ['IRPF sem susto','A declaração parte de um ano já acompanhado.']
    ].map((x,i)=>`<article class="reveal"><span>0${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}
  </div></section>

  <section class="section pf-pj" id="pf-pj"><div class="pf-title reveal"><div class="eyebrow">DECISÃO COM NÚMEROS</div><h2>A pergunta não é se PJ paga menos. É qual estrutura faz sentido para você.</h2><p>Receita, despesas, origem dos pagamentos, pró-labore, Fator R e custos da estrutura mudam a conta. Por isso, não existe resposta pronta.</p><a class="btn" href="${whatsapp}" target="_blank" rel="noopener">Comparar meu cenário ${arrow}</a><small>Eventuais economias dependem das características de cada caso.</small></div><div class="comparison reveal"><div><span>PF</span><h3>Pessoa física</h3><p>Carnê-leão, Livro Caixa, despesas dedutíveis e IRPF precisam conversar mês a mês.</p></div><b>×</b><div><span>PJ</span><h3>Pessoa jurídica</h3><p>Regime tributário, Fator R, pró-labore e custos da estrutura entram na simulação.</p></div></div></section>

  <section class="med-proof"><div class="med-proof-number">1950</div><div class="reveal"><div class="eyebrow light">EXPERIÊNCIA ANTES DA CAMPANHA</div><h2>Esta assessoria não começou com este anúncio.</h2><p>O escritório já opera Livro Caixa, carnê-leão e assessoria mensal para profissionais liberais da saúde. É uma rotina real, conduzida por uma equipe própria de 8 profissionais.</p><blockquote>Quem faz plantão nem sempre pode falar com o contador numa terça às 14h. Fora do expediente normal, agendamos.</blockquote><div class="proof-facts"><span><b>Desde 1950</b> em Bragança Paulista</span><span><b>Até 1 dia útil</b> para retornar</span></div></div></section>

  <section class="section process campaign-process"><div class="section-heading reveal"><div class="eyebrow">COMO FUNCIONA</div><h2>Uma conversa. Dois cenários. Uma decisão mais <em>clara.</em></h2></div><div class="process-grid"><article><span>01</span><h3>Entendimento</h3><p>Mapeamos fontes de receita, despesas e forma de atuação.</p></article><article><span>02</span><h3>Simulação</h3><p>Comparamos PF e PJ com os seus números reais.</p></article><article><span>03</span><h3>Próximo passo</h3><p>Mostramos a estrutura indicada e, se fizer sentido, organizamos a rotina mensal.</p></article></div><a class="btn campaign-process-cta" href="${whatsapp}" target="_blank" rel="noopener">Faça um diagnóstico gratuito ${arrow}</a></section>

  <section class="section faq" id="faq"><div class="section-heading reveal"><div class="eyebrow">DÚVIDAS DE MÉDICOS</div><h2>Sem respostas prontas para situações <em>diferentes.</em></h2></div><div class="accordion reveal">${medicalFaqs.map((f,i)=>`<article class="faq-item ${i===0?'open':''}"><button aria-expanded="${i===0}"><span>${f[0]}</span><b></b></button><div class="answer"><p>${f[1]}</p></div></article>`).join('')}</div></section>

  <section class="contact med-contact"><div class="contact-copy reveal"><div class="eyebrow light">O PRÓXIMO ABRIL COMEÇA AGORA</div><h2>Pare de esperar a declaração para descobrir se sua estrutura está certa.</h2><p>Converse com a José Paulino Contabilidade e compare PF e PJ com os seus números.</p></div><div class="contact-cta reveal"><a class="btn light-btn" href="${whatsapp}" target="_blank" rel="noopener">Faça um diagnóstico gratuito ${arrow}</a><p><strong>Retorno em até 1 dia útil.</strong><br>Outros horários podem ser agendados.</p></div></section>
</main>
${footer}<a class="whatsapp medical-whatsapp" href="${whatsapp}" target="_blank" rel="noopener" aria-label="Solicitar diagnóstico gratuito pelo WhatsApp"><span>◔</span><b>Diagnóstico gratuito</b></a><a class="campaign-mobile-cta is-hidden" href="${whatsapp}" target="_blank" rel="noopener">Faça um diagnóstico gratuito ${arrow}</a>`

export function initSite() {
  const controller = new AbortController()
  const options = { signal: controller.signal }
  const headerEl = document.querySelector('#header')
  const menu = document.querySelector('#menu')
  const onScroll = () => headerEl?.classList.toggle('scrolled', scrollY > 30)
  const closeMenu = () => {
    document.body.classList.remove('nav-open')
    menu?.setAttribute('aria-expanded', 'false')
    menu?.setAttribute('aria-label', 'Abrir menu')
  }
  onScroll()
  addEventListener('scroll', onScroll, { ...options, passive: true })
  menu?.addEventListener('click', e => {
    const open = document.body.classList.toggle('nav-open')
    e.currentTarget.setAttribute('aria-expanded', open)
    e.currentTarget.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu')
  }, options)
  document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu,options))
  addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu() }, options)
  addEventListener('resize', () => { if (innerWidth > 1190) closeMenu() }, options)
  document.querySelectorAll('.faq-item button').forEach(btn=>btn.addEventListener('click',()=>{
    const item=btn.parentElement, open=item.classList.toggle('open')
    btn.setAttribute('aria-expanded',open)
  }, options))
  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08})
    : null
  document.querySelectorAll('.reveal').forEach(el=>observer ? observer.observe(el) : el.classList.add('visible'))
  const floatingCampaignCta = document.querySelector('.campaign-mobile-cta')
  let campaignCtaObserver = null
  if (floatingCampaignCta && 'IntersectionObserver' in window) {
    const visibleCtas = new Set()
    const inlineCtas = document.querySelectorAll(`.medical-page a[href^="${whatsapp}"]`)
    const syncFloatingCta = () => floatingCampaignCta.classList.toggle('is-hidden', visibleCtas.size > 0)
    campaignCtaObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visibleCtas.add(entry.target) : visibleCtas.delete(entry.target))
      syncFloatingCta()
    }, { threshold: .2, rootMargin: '-6% 0px -6% 0px' })
    inlineCtas.forEach(cta => campaignCtaObserver.observe(cta))
    if (!inlineCtas.length) floatingCampaignCta.classList.remove('is-hidden')
  } else {
    floatingCampaignCta?.classList.remove('is-hidden')
  }
  const isMedical = Boolean(document.querySelector('.medical-page'))
  const campaign = new URLSearchParams(location.search)
  const source = campaign.get('utm_source') || ''
  const fromSocial = /instagram|facebook|meta/i.test(source)
  const whatsappMessage = isMedical
    ? `Olá! ${fromSocial ? 'Vim pelo Instagram e ' : ''}gostaria de solicitar um diagnóstico contábil gratuito para minha atuação como médico.`
    : 'Olá! Gostaria de agendar um diagnóstico contábil.'
  const trackLead = label => {
    window.gtag?.('event', 'generate_lead', { event_category: 'whatsapp', event_label: label, page_path: location.pathname })
    window.fbq?.('track', 'Lead', { content_name: label })
  }
  document.querySelectorAll(`a[href^="${whatsapp}"]`).forEach(link => {
    link.href = `${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    link.addEventListener('click', () => trackLead(link.textContent.trim()), options)
  })
  document.querySelector('#contact-form')?.addEventListener('submit',e=>{
    e.preventDefault()
    const data=new FormData(e.currentTarget)
    const message=`Olá! Meu nome é ${data.get('nome')}. Gostaria de agendar um diagnóstico para ${data.get('empresa') || 'minha atividade'}. ${data.get('mensagem') || ''}`
    trackLead('Formulário de diagnóstico')
    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener')
  }, options)
  document.querySelectorAll('.year').forEach(y=>y.textContent=new Date().getFullYear())
  return () => {
    controller.abort()
    observer?.disconnect()
    campaignCtaObserver?.disconnect()
    closeMenu()
  }
}
