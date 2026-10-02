const header=document.querySelector('.site-header');
const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.site-header nav');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const setHeader=()=>header.classList.toggle('scrolled',window.scrollY>30);
setHeader();window.addEventListener('scroll',setHeader,{passive:true});
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.classList.toggle('is-open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Abrir menu')}));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(section=>revealObserver.observe(section));
const numberFormat=new Intl.NumberFormat('pt-BR');
function countUp(element){const target=Number(element.dataset.count);if(reduceMotion){element.textContent=numberFormat.format(target);return}const duration=1250;const start=performance.now();const step=now=>{const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,3);element.textContent=numberFormat.format(Math.round(target*eased));if(progress<1)requestAnimationFrame(step)};requestAnimationFrame(step)}
const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.querySelectorAll('[data-count]').forEach(countUp);counterObserver.unobserve(entry.target)}}),{threshold:.45});
const authority=document.querySelector('.authority');if(authority)counterObserver.observe(authority);
if(!reduceMotion&&window.innerWidth>900&&window.Lenis){document.documentElement.style.scrollBehavior='auto';const lenis=new Lenis({duration:1.12,smoothWheel:true,wheelMultiplier:.85,touchMultiplier:1});const raf=time=>{lenis.raf(time);requestAnimationFrame(raf)};requestAnimationFrame(raf)}
document.querySelector('#year').textContent=new Date().getFullYear();
