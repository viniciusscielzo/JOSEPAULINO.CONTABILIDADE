const WHATSAPP_NUMBER = '5511912063065';
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
  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleCtas.add(entry.target);
      else visibleCtas.delete(entry.target);
    });
    mobileCta.classList.toggle('is-visible', window.scrollY > 520 && visibleCtas.size === 0);
  }, { threshold: 0.2 });
  primaryCtas.forEach((cta) => ctaObserver.observe(cta));
  window.addEventListener('scroll', () => {
    mobileCta.classList.toggle('is-visible', window.scrollY > 520 && visibleCtas.size === 0);
  }, { passive: true });
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
    const phone = String(data.get('telefone') || '').trim();
    const consent = data.get('consentimento');

    if (!name || !email || !phone || !consent) {
      toast.textContent = 'Preencha seus dados e confirme o consentimento para continuar.';
      showToast();
      return;
    }

    const message = `Olá! Quero receber o guia gratuito Consultório no CPF. Meu nome é ${name}, meu e-mail é ${email} e meu WhatsApp é ${phone}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
}

const money = (value) => `R$ ${Math.round(value).toLocaleString('pt-BR')}`;
const numberFrom = (id) => {
  const raw = String(document.getElementById(id)?.value || '').replace(/\./g, '').replace(',', '.');
  const value = Number.parseFloat(raw);
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
    return;
  }

  const individualTax = individualScenario(monthlyRevenue, monthlyExpenses);
  const businessTax = businessScenario(monthlyRevenue);
  const individualAnnual = (monthlyRevenue - monthlyExpenses - individualTax) * 12;
  const businessAnnual = businessTax === null ? null : (monthlyRevenue - monthlyExpenses - businessTax) * 12;
  const perSession = individualAnnual / sessionsPerYear;

  document.getElementById('r-fica').textContent = money(Math.max(0, perSession));
  document.getElementById('r-cpf-ano').textContent = `${money(individualAnnual)}/ano`;
  document.getElementById('r-org-ano').textContent = businessAnnual === null ? 'acima do limite' : `${money(businessAnnual)}/ano`;

  const scale = Math.max(individualAnnual, businessAnnual || 0, 1);
  document.getElementById('b-cpf').style.width = `${Math.max(4, individualAnnual / scale * 100)}%`;
  document.getElementById('b-org').style.width = `${Math.max(4, (businessAnnual || 0) / scale * 100)}%`;

  const delta = document.getElementById('r-delta');
  const difference = businessAnnual === null ? 0 : businessAnnual - individualAnnual;
  let whatsappText;
  if (businessAnnual === null) {
    delta.textContent = 'Seu faturamento ultrapassa o limite da estrutura simplificada. Esse cenário precisa de análise individual.';
    whatsappText = 'Olá! Fiz a conta na calculadora para psicólogos e meu faturamento ultrapassou o limite. Quero um diagnóstico.';
  } else if (difference > 1200) {
    delta.innerHTML = `Pela estimativa, uma estrutura organizada deixaria cerca de <strong>${money(difference)} a mais por ano</strong> com você, ou ${money(difference / sessionsPerYear)} por sessão.`;
    whatsappText = `Olá! Fiz a conta na calculadora para psicólogos e a diferença estimada foi de ${money(difference)} por ano. Quero o diagnóstico do meu caso.`;
  } else {
    delta.innerHTML = 'Pela estimativa, <strong>o CPF ainda é competitivo para você</strong>. O diagnóstico confirma como manter a rotina organizada.';
    whatsappText = 'Olá! Fiz a conta na calculadora para psicólogos e o CPF ainda parece competitivo. Quero entender meu cenário.';
  }

  const annualRevenue = monthlyRevenue * 12;
  document.getElementById('r-2027').innerHTML = annualRevenue > 40500
    ? `<strong>Atenção para 2027:</strong> com ${money(annualRevenue)} por ano, seu cenário ultrapassa o limite de R$ 40,5 mil e merece uma análise das novas obrigações.`
    : `Com ${money(annualRevenue)} por ano, você está abaixo do limite de R$ 40,5 mil considerado nesta estimativa.`;

  document.getElementById('cta-calc').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
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
