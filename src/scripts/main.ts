const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');

// Menú móvil
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const nav = document.querySelector<HTMLElement>('[data-nav]');
const setNav = (open: boolean) => {
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  nav?.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};
toggle?.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setNav(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });

// Cabecera sólida al hacer scroll
const header = document.querySelector('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Vídeo del hero: sin reproducción con prefers-reduced-motion (queda el póster) + botón pausa/play
const video = document.querySelector<HTMLVideoElement>('[data-hero-video]');
const vToggle = document.querySelector<HTMLButtonElement>('[data-video-toggle]');
if (video) {
  if (reduced) {
    video.pause();
    video.removeAttribute('autoplay');
    video.preload = 'none';
  } else {
    video.play().catch(() => { /* autoplay bloqueado: queda el póster */ });
    vToggle?.addEventListener('click', () => {
      const paused = !video.paused;
      if (paused) video.pause(); else video.play();
      vToggle.setAttribute('aria-pressed', String(paused));
      vToggle.setAttribute('aria-label', paused ? 'Reproducir el vídeo de fondo' : 'Pausar el vídeo de fondo');
    });
    // Ahorro: pausa cuando el hero sale de pantalla
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => {
        if (vToggle?.getAttribute('aria-pressed') === 'true') return;
        if (e.isIntersecting) video.play().catch(() => {}); else video.pause();
      }).observe(video);
    }
  }
}

// Resalta el día actual en la tabla de horario
const today = new Date().getDay();
document.querySelector(`[data-hours] tr[data-day="${today}"]`)?.classList.add('is-today');

// Reveal al hacer scroll
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if (reduced || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  reveals.forEach((el) => io.observe(el));
}

// Parallax suave: hero y galería (solo transform, con rAF; desactivado con reduced-motion y en móvil)
const heroMedia = document.querySelector<HTMLElement>('[data-parallax]');
const frames = Array.from(document.querySelectorAll<HTMLElement>('[data-speed]'));
const desktop = window.matchMedia('(min-width: 901px)');
if (!reduced) {
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    if (heroMedia) heroMedia.style.setProperty('--py', `${Math.min(window.scrollY, vh) * 0.22}px`);
    if (desktop.matches) {
      frames.forEach((f) => {
        const r = f.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const center = r.top + r.height / 2 - vh / 2;
        f.style.setProperty('--gy', `${(-center * Number(f.dataset.speed)).toFixed(1)}px`);
      });
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

// Pestañas de la carta (patrón ARIA tabs, con flechas de teclado)
const tablist = document.querySelector<HTMLElement>('[data-menu-tabs]');
const mtabs = Array.from(tablist?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? []);
const select = (tab: HTMLButtonElement, focus = false) => {
  mtabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')!)?.setAttribute('data-active', String(on));
  });
  if (focus) tab.focus();
};
mtabs.forEach((tab, i) => {
  tab.addEventListener('click', () => select(tab));
  tab.addEventListener('keydown', (e) => {
    const k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowLeft' || k === 'Home' || k === 'End') {
      e.preventDefault();
      const n = k === 'Home' ? 0 : k === 'End' ? mtabs.length - 1 : (i + (k === 'ArrowRight' ? 1 : -1) + mtabs.length) % mtabs.length;
      select(mtabs[n], true);
    }
  });
});

// Botón Reservar fijo: se oculta en el hero (ya hay botón) y en la sección de reservas
const fab = document.querySelector<HTMLElement>('.fab-reserve');
const hideOn = Array.from(document.querySelectorAll<HTMLElement>('.hero, #visitanos'));
if (fab && hideOn.length && 'IntersectionObserver' in window) {
  const visible = new Set<Element>();
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
    const hide = visible.size > 0;
    fab.style.opacity = hide ? '0' : '1';
    fab.style.pointerEvents = hide ? 'none' : 'auto';
    fab.style.transform = hide ? 'translate(-50%, 140%)' : 'translate(-50%, 0)';
  }, { threshold: 0.35 });
  hideOn.forEach((el) => io2.observe(el));
}

// Mapa bajo demanda (sin cookies de Google hasta que se pide)
document.querySelector<HTMLButtonElement>('[data-map-load]')?.addEventListener('click', (e) => {
  const btn = e.currentTarget as HTMLButtonElement;
  const box = btn.closest<HTMLElement>('[data-map]');
  if (!box) return;
  const f = document.createElement('iframe');
  f.src = btn.dataset.src!;
  f.title = 'Mapa: Gildas, Carrer Sant Maure 32, Alcoy';
  f.loading = 'lazy';
  f.referrerPolicy = 'no-referrer-when-downgrade';
  box.appendChild(f);
  box.classList.add('is-loaded');
  f.focus();
});
