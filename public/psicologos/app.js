const WHATSAPP_NUMBER = '5511912063065';
document.documentElement.classList.add('has-js');
const MEASUREMENT = { GA4: '', ADS: '', ADS_LABEL: '', PIXEL: '' };
let measurementLoaded = false;

function loadMeasurement() {
  if (measurementLoaded || !(MEASUREMENT.GA4 || MEASUREMENT.ADS || MEASUREMENT.PIXEL)) return;
  measurementLoaded = true;

  if (MEASUREMENT.GA4 || MEASUREMENT.ADS) {
    const googleScript = document.createElement('script');
    googleScript.async = true;
    googleScript.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT.GA4 || MEASUREMENT.ADS}`;
    document.head.appendChild(googleScript);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    if (MEASUREMENT.GA4) window.gtag('config', MEASUREMENT.GA4);
    if (MEASUREMENT.ADS) window.gtag('config', MEASUREMENT.ADS);
  }

  if (MEASUREMENT.PIXEL) {
    (function pixel(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=true;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=true;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)})(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', MEASUREMENT.PIXEL);
    window.fbq('track', 'PageView');
  }
}

const measurementActive = Boolean(MEASUREMENT.GA4 || MEASUREMENT.ADS || MEASUREMENT.PIXEL);
const cookieNotice = document.querySelector('#cookie-notice');
let savedConsent = null;
try { savedConsent = localStorage.getItem('jp_cookies'); } catch (error) {}
if (measurementActive) {
  if (savedConsent === 'sim') loadMeasurement();
  else if (savedConsent !== 'nao') cookieNotice.hidden = false;
}
document.querySelector('#cookie-accept')?.addEventListener('click', () => {
  try { localStorage.setItem('jp_cookies', 'sim'); } catch (error) {}
  cookieNotice.hidden = true;
  loadMeasurement();
});
document.querySelector('#cookie-reject')?.addEventListener('click', () => {
  try { localStorage.setItem('jp_cookies', 'nao'); } catch (error) {}
  cookieNotice.hidden = true;
});
document.querySelector('#rever-cookies')?.addEventListener('click', (event) => {
  event.preventDefault();
  if (measurementActive) cookieNotice.hidden = false;
});

const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach((element) => revealObserver.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('is-visible'));
}

const primaryCtas = [...document.querySelectorAll('.js-cta')];
const mobileCta = document.querySelector('.js-mobile-cta');

if (mobileCta && 'IntersectionObserver' in window) {
  const visibleCtas = new Set();
  const updateMobileCta = () => {
    const calculator = document.querySelector('#calculadora');
    const passedCalculator = calculator && calculator.getBoundingClientRect().bottom < window.innerHeight * .35;
    mobileCta.textContent = passedCalculator ? 'SOLICITAR DIAGNÓSTICO GRATUITO' : 'FAZER MINHA CONTA';
    mobileCta.href = passedCalculator ? '#diagnostico' : '#calculadora';
    const visible = window.scrollY > 520 && visibleCtas.size === 0 && window.matchMedia('(max-width: 640px)').matches;
    mobileCta.classList.toggle('is-visible', visible);
    mobileCta.tabIndex = visible ? 0 : -1;
    mobileCta.setAttribute('aria-hidden', String(!visible));
  };
  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleCtas.add(entry.target);
      else visibleCtas.delete(entry.target);
    });
    updateMobileCta();
  }, { threshold: 0.2 });
  primaryCtas.forEach((cta) => ctaObserver.observe(cta));
  window.addEventListener('scroll', updateMobileCta, { passive: true });
  window.addEventListener('resize', updateMobileCta);
  updateMobileCta();
}

const toast = document.querySelector('.toast');
let toastTimer;
const showToast = () => {
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4200);
};

const form = document.querySelector('.lead-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('nome') || '').trim();
    const email = String(data.get('email') || '').trim();
    const consent = data.get('consentimento');

    if (!name || !email || !consent) {
      toast.textContent = 'Preencha seus dados e confirme o consentimento para continuar.';
      showToast();
      return;
    }
    if (!form.elements.email.validity.valid) {
      toast.textContent = 'Confira seu e-mail antes de continuar.';
      form.elements.email.focus();
      showToast();
      return;
    }

    const message = `Olá! Quero receber o guia gratuito Consultório no CPF. Meu nome é ${name} e meu e-mail é ${email}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
}

const money = (value) => `R$ ${Math.round(value).toLocaleString('pt-BR')}`;
const numberFrom = (id) => {
  let raw = String(document.getElementById(id)?.value || '').trim().replace(/\s/g, '');
  if (raw.includes(',')) raw = raw.replace(/\./g, '').replace(',', '.');
  else if (/^\d{1,3}(\.\d{3})+$/.test(raw)) raw = raw.replace(/\./g, '');
  const value = Number(raw);
  return Number.isFinite(value) && value > 0 ? value : 0;
};

const INSS_CEILING = 8475.55;
const MINIMUM_WAGE = 1621;
const ACCOUNTING_FEE = 400;
const ANNEX_3 = [[180000,.06,0],[360000,.112,9360],[720000,.135,17640],[1800000,.16,35640],[3600000,.21,125640],[4800000,.33,648000]];
const ANNEX_5 = [[180000,.155,0],[360000,.18,4500],[720000,.195,9900],[1800000,.205,17100],[3600000,.23,62100],[4800000,.305,540000]];

function monthlyIncomeTax(base) {
  if (base <= 2428.80) return 0;
  if (base <= 2826.65) return base * .075 - 182.16;
  if (base <= 3751.05) return base * .15 - 394.16;
  if (base <= 4664.68) return base * .225 - 675.49;
  return base * .275 - 908.73;
}

function incomeTaxWithReduction(base, taxableIncome) {
  const tax = Math.max(0, monthlyIncomeTax(base));
  let reduction = 0;
  if (taxableIncome <= 5000) reduction = tax;
  else if (taxableIncome <= 7350) reduction = Math.max(0, 978.62 - .133145 * taxableIncome);
  return Math.max(0, tax - Math.min(tax, reduction));
}

function effectiveRate(table, annualRevenue) {
  for (const row of table) {
    if (annualRevenue <= row[0]) return annualRevenue ? (annualRevenue * row[1] - row[2]) / annualRevenue : table[0][1];
  }
  return null;
}

function payrollCost(proLabore) {
  const inss = Math.min(proLabore, INSS_CEILING) * .11;
  const base = proLabore - Math.max(inss, 607.20);
  return inss + incomeTaxWithReduction(base, proLabore);
}

function businessScenario(monthlyRevenue) {
  const annualRevenue = monthlyRevenue * 12;
  const annex3 = effectiveRate(ANNEX_3, annualRevenue);
  const annex5 = effectiveRate(ANNEX_5, annualRevenue);
  if (annex3 === null) return null;
  const proLabore3 = Math.max(MINIMUM_WAGE, monthlyRevenue * .28);
  const cost3 = monthlyRevenue * annex3 + payrollCost(proLabore3);
  const cost5 = monthlyRevenue * annex5 + payrollCost(MINIMUM_WAGE);
  return Math.min(cost3, cost5) + ACCOUNTING_FEE;
}

function individualScenario(monthlyRevenue, monthlyExpenses) {
  const inss = Math.min(monthlyRevenue, INSS_CEILING) * .20;
  const taxableIncome = Math.max(0, monthlyRevenue - monthlyExpenses);
  const base = Math.max(0, taxableIncome - inss);
  return inss + incomeTaxWithReduction(base, taxableIncome);
}

function updateCalculator() {
  const sessionValue = numberFrom('sessao');
  const sessionsPerWeek = numberFrom('semana');
  const weeksPerYear = Math.min(numberFrom('semanas'), 52);
  const monthlyExpenses = numberFrom('despesas');
  const sessionsPerYear = sessionValue ? sessionsPerWeek * weeksPerYear : 0;
  const monthlyRevenue = sessionValue * sessionsPerWeek * weeksPerYear / 12;

  document.getElementById('r-sessao').textContent = money(sessionValue);
  if (!monthlyRevenue || !sessionsPerYear) {
    document.getElementById('r-fica').textContent = '—';
    document.getElementById('r-hundred').textContent = '—';
    document.getElementById('r-cpf-ano').textContent = '—';
    document.getElementById('r-org-ano').textContent = '—';
    document.getElementById('b-cpf').style.width = '0';
    document.getElementById('b-org').style.width = '0';
    document.getElementById('r-delta').textContent = 'Preencha o valor médio da sessão, o número de sessões e as semanas trabalhadas para comparar os cenários.';
    document.getElementById('r-2027').textContent = 'A análise para 2027 aparece quando você informar o faturamento.';
    return;
  }

  const individualTax = individualScenario(monthlyRevenue, monthlyExpenses);
  const businessTax = businessScenario(monthlyRevenue);
  const individualAnnual = (monthlyRevenue - monthlyExpenses - individualTax) * 12;
  const businessAnnual = businessTax === null ? null : (monthlyRevenue - monthlyExpenses - businessTax) * 12;
  const perSession = individualAnnual / sessionsPerYear;

  document.getElementById('r-fica').textContent = money(perSession);
  document.getElementById('r-hundred').textContent = money(perSession / sessionValue * 100);
  document.getElementById('r-cpf-ano').textContent = `${money(individualAnnual)}/ano`;
  document.getElementById('r-org-ano').textContent = businessAnnual === null ? 'acima do limite' : `${money(businessAnnual)}/ano`;

  const scale = Math.max(individualAnnual, businessAnnual || 0, 1);
  document.getElementById('b-cpf').style.width = `${Math.max(0, individualAnnual / scale * 100)}%`;
  document.getElementById('b-org').style.width = `${Math.max(0, (businessAnnual || 0) / scale * 100)}%`;

  const delta = document.getElementById('r-delta');
  const difference = businessAnnual === null ? 0 : businessAnnual - individualAnnual;
  if (businessAnnual === null) {
    delta.textContent = 'Seu faturamento ultrapassa o limite da estrutura simplificada. Esse cenário precisa de análise individual.';
  } else if (individualAnnual < 0) {
    delta.textContent = 'Nesta estimativa, as despesas e os tributos superam o faturamento no CPF. Vale revisar os valores e investigar seu cenário com o contador.';
  } else if (difference > 1200) {
    delta.innerHTML = `Com a mesma agenda, a estrutura empresarial simulada deixaria cerca de <strong>${money(difference)} a mais por ano</strong> com você, ou ${money(difference / sessionsPerYear)} por sessão. Confirme se essa diferença se aplica ao seu caso.`;
  } else {
    delta.innerHTML = 'Pela estimativa, <strong>o CPF ainda é competitivo para você.</strong> Não é preciso mudar de estrutura sem motivo. O diagnóstico ajuda a organizar a sua rotina.';
  }

  const annualRevenue = monthlyRevenue * 12;
  document.getElementById('r-2027').innerHTML = annualRevenue >= 40500
    ? `<strong>Atenção para 2027:</strong> com ${money(annualRevenue)} por ano, seu faturamento é igual ou superior à referência de R$ 40,5 mil. Vale verificar se as novas obrigações se aplicam ao seu caso.`
    : `Com ${money(annualRevenue)} por ano, você está abaixo da referência de R$ 40,5 mil. Confirme seu enquadramento com o contador.`;
}

['sessao', 'semana', 'semanas', 'despesas'].forEach((id) => {
  document.getElementById(id)?.addEventListener('input', updateCalculator);
});
updateCalculator();

const progressBar = document.querySelector('.scroll-progress i');
const depthElements = [...document.querySelectorAll('[data-depth]')];
const readingBlocks = [...document.querySelectorAll('[data-reading]')];

readingBlocks.forEach((block) => {
  const words = block.textContent.trim().split(/\s+/);
  block.textContent = '';
  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'reading-word';
    span.textContent = word;
    block.appendChild(span);
    if (index < words.length - 1) block.appendChild(document.createTextNode(' '));
  });
});

let motionFrame = 0;
function updateGuidedMotion() {
  motionFrame = 0;
  const viewport = window.innerHeight || 1;
  const scrollable = Math.max(1, document.documentElement.scrollHeight - viewport);
  if (progressBar) progressBar.style.width = `${Math.min(100, window.scrollY / scrollable * 100)}%`;

  depthElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const depth = Number(element.dataset.depth || 0);
    const distance = (viewport / 2 - (rect.top + rect.height / 2)) / viewport;
    element.style.setProperty('--motion-y', `${Math.max(-1, Math.min(1, distance)) * depth}px`);
  });

  readingBlocks.forEach((block) => {
    const rect = block.getBoundingClientRect();
    const start = viewport * .82;
    const finish = viewport * .28;
    const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - finish)));
    const words = [...block.querySelectorAll('.reading-word')];
    const visibleWords = Math.ceil(progress * words.length);
    words.forEach((word, index) => word.classList.toggle('is-read', index < visibleWords));
  });
}

function requestGuidedMotion() {
  if (!motionFrame) motionFrame = window.requestAnimationFrame(updateGuidedMotion);
}
window.addEventListener('scroll', requestGuidedMotion, { passive: true });
window.addEventListener('resize', requestGuidedMotion);
updateGuidedMotion();

const chapters = [...document.querySelectorAll('.guide-chapter')];
const pages = [...document.querySelectorAll('.guide-page')];
const folioCounter = document.querySelector('.guide-folio__counter b');
function activateChapter(number) {
  chapters.forEach((chapter) => chapter.classList.toggle('is-active', chapter.dataset.chapter === number));
  pages.forEach((page) => page.classList.toggle('is-active', page.dataset.page === number));
  if (folioCounter) folioCounter.textContent = String(number).padStart(2, '0');
}

if ('IntersectionObserver' in window && chapters.length) {
  const chapterObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) activateChapter(visible.target.dataset.chapter);
  }, { rootMargin: '-28% 0px -42% 0px', threshold: [0, .2, .5, .8] });
  chapters.forEach((chapter) => chapterObserver.observe(chapter));
}
