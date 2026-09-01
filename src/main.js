const services = [
  ['01','Contabilidade Empresarial','Organização e acompanhamento das rotinas contábeis para manter informações consistentes e apoiar a gestão do negócio.',['Maior organização','Informações confiáveis','Apoio à gestão']],
  ['02','Fiscal e Tributário','Apoio na apuração de tributos e no cumprimento das obrigações fiscais da empresa.',['Maior segurança fiscal','Prevenção de inconsistências','Organização tributária']],
  ['03','Planejamento Tributário','Análise da realidade da empresa para identificar, dentro da legislação, alternativas tributárias mais adequadas ao negócio.',['Oportunidades legais de economia','Prevenção de pagamentos indevidos','Eficiência tributária']],
  ['04','Departamento Pessoal','Apoio nas rotinas de folha, admissões, férias, desligamentos e obrigações relacionadas.',['Mais organização','Menos retrabalho','Segurança nos processos']],
  ['05','Abertura e Regularização','Orientação durante processos relacionados à abertura, alteração e regularização empresarial.',['Menos burocracia','Orientação profissional','Processos organizados']],
  ['06','Apoio Contábil Consultivo','Informações e orientações contábeis que ajudam o empresário a compreender melhor os números da empresa.',['Mais clareza','Melhores informações','Apoio à decisão']]
]

const benefits = [
  ['Mais organização','Processos e informações estruturados para reduzir confusão e retrabalho.'],
  ['Mais clareza','Melhor compreensão da realidade contábil e fiscal da empresa.'],
  ['Segurança fiscal','Maior atenção às obrigações e à conformidade da empresa.'],
  ['Apoio à decisão','Informações que ajudam a avaliar melhor os próximos passos.'],
  ['Eficiência tributária','Análise de oportunidades possíveis dentro da legislação.'],
  ['Menos desperdícios','Estrutura para identificar custos, erros ou pagamentos desnecessários.']
]

const icon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>`
const arrow = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`

export const markup = `
  <header class="header" id="header">
    <a class="brand" href="#inicio" aria-label="José Paulino Contabilidade — início">
      <img src="/logo-jose-paulino-dark.png" alt="José Paulino Contabilidade — Desde 1928">
    </a>
    <nav id="nav" aria-label="Navegação principal">
      <a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#beneficios">Benefícios</a><a href="#diferenciais">Diferenciais</a><a href="#faq">FAQ</a><a href="#contato">Contato</a>
    </nav>
    <a class="btn btn-small desktop-cta" href="#contato">Falar com um especialista ${arrow}</a>
    <button class="menu" id="menu" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span></button>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-grain"></div><div class="hero-line line-a"></div><div class="hero-line line-b"></div>
      <div class="hero-copy reveal">
        <div class="eyebrow light">CONTABILIDADE · GESTÃO · ESTRATÉGIA</div>
        <h1>Mais do que números.<br><em>Clareza</em> para decisões melhores.</h1>
        <p>Soluções contábeis, fiscais e tributárias para empresas que buscam mais organização, conformidade, clareza e eficiência na gestão.</p>
        <div class="actions"><a class="btn" href="#contato">Falar com um especialista ${arrow}</a><a class="btn-link" href="#servicos">Conhecer nossos serviços <span>↓</span></a></div>
      </div>
      <div class="hero-art reveal" aria-label="Composição abstrata que representa estratégia e crescimento">
        <div class="monogram">JP</div>
        <div class="orbital-scene" aria-hidden="true"><div class="orb"></div></div>
        <div class="strategy-card"><span>VISÃO ESTRATÉGICA</span><strong>Organização que<br>orienta decisões.</strong><div class="mini-chart"><i></i><i></i><i></i><i></i><i></i></div></div>
        <div class="seal"><span>SEGURANÇA</span><b>+</b><span>CLAREZA</span></div>
      </div>
      <div class="hero-pillars">
        ${[['Atendimento consultivo','Entendimento do negócio para orientações mais adequadas.'],['Organização e clareza','Informações organizadas para facilitar a gestão.'],['Apoio estratégico','Mais segurança para tomar decisões.']].map((x,i)=>`<article><span>0${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}
      </div>
    </section>

    <section class="section about" id="sobre">
      <div class="about-mark">JP</div>
      <div class="section-heading reveal"><div class="eyebrow">SOBRE A EMPRESA</div><h2>Confiança construída com trabalho sério e <em>proximidade.</em></h2></div>
      <div class="about-copy reveal"><p>A José Paulino Contabilidade apoia empresas na organização de suas rotinas contábeis, fiscais e trabalhistas, oferecendo informações e orientações que contribuem para uma gestão mais segura e eficiente.</p><p>Nosso papel vai além do cumprimento de obrigações. Buscamos tornar a contabilidade uma fonte de informação útil para o empresário entender melhor sua empresa e tomar decisões com mais clareza.</p><div class="signature-line"><span></span>CONTABILIDADE QUE APOIA A GESTÃO</div></div>
    </section>

    <section class="section services" id="servicos">
      <div class="section-intro reveal"><div><div class="eyebrow">NOSSAS SOLUÇÕES</div><h2>Soluções contábeis para diferentes necessidades da sua empresa.</h2></div><p>Estrutura, orientação e segurança para apoiar a rotina e o crescimento do negócio.</p></div>
      <div class="service-grid">${services.map(s=>`<article class="service-card reveal"><div class="card-top"><span>${s[0]}</span><div class="card-arrow">↗</div></div><h3>${s[1]}</h3><p>${s[2]}</p><ul>${s[3].map(v=>`<li>${icon}${v}</li>`).join('')}</ul></article>`).join('')}</div>
    </section>

    <section class="section benefits" id="beneficios">
      <div class="eyebrow reveal">O QUE UMA CONTABILIDADE BEM ESTRUTURADA PODE REPRESENTAR</div>
      <div class="benefit-layout"><h2 class="reveal">Uma base mais sólida para gerir, decidir e <em>avançar.</em></h2><div class="benefit-list">${benefits.map((b,i)=>`<article class="reveal"><span>0${i+1}</span><div><h3>${b[0]}</h3><p>${b[1]}</p></div></article>`).join('')}</div></div>
    </section>

    <section class="impact">
      <div class="impact-grid"></div>
      <div class="impact-copy reveal"><div class="eyebrow light">EFICIÊNCIA COM RESPONSABILIDADE</div><h2>Pagar corretamente é tão importante quanto <em>não pagar mais</em> do que o necessário.</h2><p>Uma estrutura contábil e tributária bem organizada permite analisar a realidade da empresa, identificar inconsistências e avaliar oportunidades previstas na legislação.</p><p>O objetivo não é prometer reduções artificiais de impostos, mas buscar eficiência, segurança e uma estrutura tributária adequada à realidade do negócio.</p><a class="btn" href="#contato">Quero entender minha situação ${arrow}</a></div>
      <div class="impact-points reveal">${[['Planejamento','Análise da realidade da empresa.'],['Conformidade','Segurança no cumprimento das obrigações.'],['Eficiência','Possíveis oportunidades legais de economia.']].map((x,i)=>`<article><span>${i+1}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div>
    </section>

    <section class="section differences" id="diferenciais">
      <div class="section-heading reveal"><div class="eyebrow">NOSSO JEITO DE ATUAR</div><h2>Contabilidade próxima do <em>empresário.</em></h2><p>Orientação técnica com uma comunicação clara, responsável e conectada à realidade do negócio.</p></div>
      <div class="difference-grid">${[['Atendimento consultivo','Entender antes de orientar.'],['Comunicação clara','Traduzir questões contábeis e fiscais.'],['Organização','Processos estruturados e informações acessíveis.'],['Segurança','Atuação responsável e alinhada à legislação.'],['Foco no negócio','Contabilidade como apoio à gestão.']].map((x,i)=>`<article class="reveal"><span>${String(i+1).padStart(2,'0')}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div>
    </section>

    <section class="social-proof">
      <div class="quote-mark">“</div><div class="reveal"><div class="eyebrow light">A EXPERIÊNCIA DOS NOSSOS CLIENTES</div><h2>Confiança se constrói em cada atendimento.</h2><p>Este espaço está preparado para receber avaliações reais da José Paulino Contabilidade.</p><span class="placeholder-label">DEPOIMENTOS REAIS SERÃO ADICIONADOS AQUI</span></div>
    </section>

    <section class="section faq" id="faq">
      <div class="section-heading reveal"><div class="eyebrow">DÚVIDAS FREQUENTES</div><h2>Informação clara desde o <em>primeiro contato.</em></h2></div>
      <div class="accordion reveal">
        ${[
          ['Quais tipos de empresas a José Paulino Contabilidade atende?','O atendimento pode variar conforme o perfil, atividade e necessidades da empresa. Entre em contato para avaliarmos o seu caso.'],
          ['Posso trocar de contador?','Sim. A empresa pode solicitar orientação para conduzir o processo de transição e organizar a documentação necessária.'],
          ['Vocês realizam abertura de empresa?','A abertura e a regularização de empresas fazem parte das soluções apresentadas. Entre em contato para avaliarmos as necessidades do seu caso.'],
          ['O planejamento tributário pode reduzir meus impostos?','O planejamento tributário busca analisar a realidade da empresa e identificar alternativas previstas na legislação. Eventuais economias dependem das características específicas de cada negócio.'],
          ['Como solicitar uma análise?','Preencha o formulário ou utilize o botão de contato. A equipe retornará para compreender o contexto e orientar os próximos passos.']
        ].map((f,i)=>`<article class="faq-item ${i===0?'open':''}"><button aria-expanded="${i===0}"><span>${f[0]}</span><b></b></button><div class="answer"><p>${f[1]}</p></div></article>`).join('')}
      </div>
    </section>

    <section class="contact" id="contato">
      <div class="contact-copy reveal"><div class="eyebrow light">VAMOS CONVERSAR</div><h2>Sua contabilidade pode ser mais do que uma obrigação.</h2><p>Converse com a José Paulino Contabilidade e entenda como uma gestão contábil mais organizada pode apoiar sua empresa.</p><div class="contact-note"><span>→</span> O envio será conectado ao canal oficial da empresa.</div></div>
      <form class="contact-form reveal" id="contact-form"><label>Nome<input name="nome" autocomplete="name" required placeholder="Seu nome"></label><label>Empresa<input name="empresa" placeholder="Nome da empresa"></label><div class="form-row"><label>Telefone / WhatsApp<input name="telefone" autocomplete="tel" required placeholder="(00) 00000-0000"></label><label>E-mail<input name="email" type="email" autocomplete="email" placeholder="voce@empresa.com.br"></label></div><label>Mensagem<textarea name="mensagem" rows="3" placeholder="Como podemos ajudar?"></textarea></label><button class="btn light-btn" type="submit">Solicitar contato ${arrow}</button><p class="form-status" aria-live="polite"></p></form>
    </section>
  </main>

  <footer><div class="footer-main"><a class="brand footer-brand" href="#inicio"><img src="/logo-jose-paulino-dark.png" alt="José Paulino Contabilidade — Desde 1928"></a><p>Soluções contábeis, fiscais e tributárias para uma gestão mais organizada, segura e eficiente.</p><div><h4>Navegação</h4><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#beneficios">Benefícios</a><a href="#faq">FAQ</a></div><div><h4>Serviços</h4><a href="#servicos">Contabilidade empresarial</a><a href="#servicos">Fiscal e tributário</a><a href="#servicos">Planejamento tributário</a><a href="#servicos">Departamento pessoal</a></div><div><h4>Contato</h4><span>Dados de contato serão inseridos após confirmação.</span></div></div><div class="footer-bottom"><span>© <span id="year"></span> José Paulino Contabilidade.</span><a href="#">Política de Privacidade</a><span>Conteúdo institucional sujeito à validação.</span></div></footer>

  <a class="whatsapp" href="#contato" aria-label="Falar com um especialista"><span>◔</span><b>Falar conosco</b></a>
`

export function initSite() {
const header = document.querySelector('#header')
const onScroll = () => header?.classList.toggle('scrolled', scrollY > 30)
addEventListener('scroll', onScroll)
document.querySelector('#menu')?.addEventListener('click', e => {
  const open = document.body.classList.toggle('nav-open')
  e.currentTarget.setAttribute('aria-expanded', open)
})
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')))
document.querySelectorAll('.faq-item button').forEach(btn=>btn.addEventListener('click',()=>{
  const item=btn.parentElement, open=item.classList.toggle('open'); btn.setAttribute('aria-expanded',open)
}))
const observer = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12})
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))
document.querySelector('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();e.currentTarget.querySelector('.form-status').textContent='Formulário pronto. Configure o número oficial para ativar o envio pelo WhatsApp.'})
const year = document.querySelector('#year')
if (year) year.textContent=new Date().getFullYear()
return () => removeEventListener('scroll', onScroll)
}
