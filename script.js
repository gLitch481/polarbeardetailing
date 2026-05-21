document.addEventListener('DOMContentLoaded', () => {
  const D = SITE_DATA;
  // Nav
  document.getElementById('nav-logo').innerHTML = `<img src="${D.business.logo}" alt="${D.business.name}"><span>${D.business.name}</span>`;
  // Hero
  document.getElementById('hero-call').href = `tel:${D.business.phone}`;
  // Stats
  const sg = document.getElementById('stats-grid');
  D.stats.forEach(s => { sg.innerHTML += `<div class="stat-item"><div class="stat-number" data-target="${s.number}" data-suffix="${s.suffix}">0${s.suffix}</div><div class="stat-label">${s.label}</div></div>`; });
  // Trust Badges
  const tg = document.getElementById('trust-grid');
  D.trustBadges.forEach(b => { tg.innerHTML += `<div class="trust-item"><div class="trust-icon">${b.icon}</div><h4>${b.text}</h4><p>${b.desc||''}</p></div>`; });
  // Why Us
  const wg = document.getElementById('why-grid');
  D.whyUs.forEach((w, i) => { wg.innerHTML += `<div class="why-card" data-reveal style="transition-delay:${i*.1}s"><div class="why-icon">${w.icon}</div><h4>${w.title}</h4><p>${w.desc}</p></div>`; });
  // How It Works
  const stg = document.getElementById('steps-grid');
  D.howItWorks.forEach((h, i) => { stg.innerHTML += `<div class="step-card" data-reveal style="transition-delay:${i*.15}s"><div class="step-number">${h.step}</div><h3>${h.title}</h3><p>${h.desc}</p></div>`; });
  // Services
  const sGrid = document.getElementById('services-grid');
  D.services.forEach((s, i) => {
    const items = s.items.map(x => `<li>${x}</li>`).join('');
    sGrid.innerHTML += `<div class="service-card ${s.popular?'popular':''}" data-reveal style="transition-delay:${i*.08}s">${s.popular?'<div class="popular-badge">Most Popular</div>':''}<span class="service-icon">${s.icon}</span><h3>${s.name}</h3><p class="service-desc">${s.description}</p><ul class="service-items">${items}</ul><a href="#contact" class="btn btn-primary btn-sm">Get a Quote</a></div>`;
  });
  if (D.pricingNote) {
    sGrid.insertAdjacentHTML('afterend', `<div class="pricing-note" data-reveal><p>${D.pricingNote}</p><a href="#contact" class="btn btn-primary" style="margin-top:20px">Get Your Free Quote →</a></div>`);
  }
  // Gallery (unified: items with `before` get B/A slider in lightbox)
  const gGrid = document.getElementById('gallery-grid');
  D.gallery.forEach((g, i) => {
    const hasBa = g.before ? 'data-before="'+g.before+'"' : '';
    const badge = g.before ? '<span class="ba-badge">Before & After</span>' : '';
    gGrid.innerHTML += `<div class="gallery-item" data-after="${g.after}" ${hasBa} data-reveal style="transition-delay:${i*.1}s"><img src="${g.after}" alt="${g.caption}" loading="lazy"><div class="overlay">${badge}<span>${g.caption}</span></div></div>`;
  });
  // Reviews
  const rTrack = document.getElementById('reviews-track');
  D.reviews.forEach(r => {
    const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
    const init = r.name.split(' ').map(w => w[0]).join('');
    rTrack.innerHTML += `<div class="review-card"><div class="review-stars">${stars}</div><p class="review-text">${r.text}</p><div class="review-author"><div class="review-avatar">${init}</div><div><div class="review-name">${r.name}</div><div class="review-location">${r.location}</div></div></div></div>`;
  });
  initCarousel();
  // Areas
  const aGrid = document.getElementById('areas-grid');
  const icons = ['🏙️','🌉','🏡'];
  D.serviceAreas.forEach((a, i) => { aGrid.innerHTML += `<div class="area-card ${a.primary?'primary':''}" data-reveal style="transition-delay:${i*.1}s"><div class="area-icon">${icons[i]||'📍'}</div><h3>${a.area}</h3><p>${a.detail}</p></div>`; });

  // SEO Block
  const seoBlock = document.getElementById('seo-block');
  if (seoBlock && D.seoText) {
    seoBlock.innerHTML = `<p>${D.seoText}</p>`;
  }

  // FAQ Accordion
  const faqList = document.getElementById('faq-list');
  if (faqList && D.faq) {
    D.faq.forEach((item, i) => {
      faqList.innerHTML += `
        <div class="faq-item" data-reveal style="transition-delay:${i*.08}s">
          <button class="faq-question">
            <span>${item.q}</span>
            <span class="faq-toggle">+</span>
          </button>
          <div class="faq-answer">
            <p>${item.a}</p>
          </div>
        </div>
      `;
    });

    faqList.addEventListener('click', e => {
      const btn = e.target.closest('.faq-question');
      if (!btn) return;
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      faqList.querySelectorAll('.faq-item').forEach(x => x.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  }
  // Contact
  const cm = document.getElementById('contact-methods');
  cm.innerHTML = `<a href="tel:${D.business.phone}" class="contact-method"><div class="cm-icon">📞</div><div><div class="cm-label">Call Us</div><div class="cm-value">${D.business.phoneFormatted}</div></div></a><a href="${D.business.instagramUrl}" target="_blank" class="contact-method"><div class="cm-icon">📸</div><div><div class="cm-label">Instagram</div><div class="cm-value">@${D.business.instagram}</div></div></a>`;
  if (D.business.email) cm.innerHTML += `<a href="mailto:${D.business.email}" class="contact-method"><div class="cm-icon">✉️</div><div><div class="cm-label">Email</div><div class="cm-value">${D.business.email}</div></div></a>`;
  const fSvc = document.getElementById('f-service');
  fSvc.innerHTML = '<option value="">Select a service...</option>' + D.services.map(s => `<option value="${s.name}">${s.name}</option>`).join('');
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const n=document.getElementById('f-name').value, svc=document.getElementById('f-service').value, msg=document.getElementById('f-msg').value;
    window.open(`sms:${D.business.phone}?body=${encodeURIComponent(`Hi! I'm ${n}. Interested in ${svc||'your services'}. ${msg}`.trim())}`, '_self');
  });
  // Footer
  document.getElementById('footer-logo').innerHTML = `<img src="${D.business.logo}" alt="${D.business.name}"><span>${D.business.name}</span>`;
  document.getElementById('footer-tagline').textContent = D.footer.tagline;
  document.getElementById('footer-bottom').textContent = D.footer.copyright;
  const fsList = document.getElementById('footer-services');
  D.services.forEach(s => fsList.innerHTML += `<li><a href="#services">${s.name}</a></li>`);
  const fSocial = document.getElementById('footer-social');
  if (D.business.instagramUrl) fSocial.innerHTML += `<a href="${D.business.instagramUrl}" target="_blank">📸</a>`;
  fSocial.innerHTML += `<a href="tel:${D.business.phone}">📞</a>`;
  // Floating CTA
  document.getElementById('float-call').href = `tel:${D.business.phone}`;
  document.getElementById('float-insta').href = D.business.instagramUrl;
  // Init
  initReveal(); initNav(); initParticles(); initLightbox(); initStats(); initFloating();
});

function initLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const baC = document.getElementById('ba-lightbox');
  const baOverlay = document.getElementById('ba-lb-overlay');
  const baSlider = document.getElementById('ba-lb-slider');
  const baAfter = document.getElementById('ba-lb-after');
  const baBefore = document.getElementById('ba-lb-before');
  let drag = false;

  function closeLb() { lb.classList.remove('active'); drag = false; }

  function setSlider(x) {
    const r = baC.getBoundingClientRect();
    let p = ((x - r.left) / r.width) * 100;
    p = Math.max(2, Math.min(98, p));
    baOverlay.style.width = p + '%';
    baSlider.style.left = p + '%';
  }

  // Open lightbox on gallery click
  document.addEventListener('click', e => {
    const it = e.target.closest('.gallery-item');
    if (!it) return;
    const before = it.dataset.before;
    const after = it.dataset.after;
    if (before) {
      // B/A mode
      img.style.display = 'none';
      baC.style.display = 'block';
      baAfter.src = after;
      baBefore.src = before;
      lb.classList.add('active');
      // Reset to 50%
      setTimeout(() => {
        const r = baC.getBoundingClientRect();
        setSlider(r.left + r.width * 0.5);
      }, 50);
    } else {
      // Simple image mode
      baC.style.display = 'none';
      img.style.display = 'block';
      img.src = after;
      lb.classList.add('active');
    }
  });

  // Slider drag
  baSlider.addEventListener('mousedown', () => drag = true);
  baSlider.addEventListener('touchstart', () => drag = true);
  document.addEventListener('mouseup', () => drag = false);
  document.addEventListener('touchend', () => drag = false);
  baC.addEventListener('mousemove', e => { if (drag) setSlider(e.clientX); });
  baC.addEventListener('touchmove', e => { if (drag) setSlider(e.touches[0].clientX); });
  baC.addEventListener('click', e => { if (e.target.closest('.ba-lb-slider')) return; setSlider(e.clientX); });

  // Close
  document.getElementById('lightbox-close').onclick = closeLb;
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
}

function initCarousel() {
  const track=document.getElementById('reviews-track'), cards=track.querySelectorAll('.review-card');
  if(!cards.length) return; let idx=0;
  const dots=document.getElementById('reviews-dots');
  cards.forEach((_,i)=>{const d=document.createElement('button');d.className='dot'+(i===0?' active':'');d.onclick=()=>go(i);dots.appendChild(d);});
  function go(i){idx=Math.max(0,Math.min(i,cards.length-1));const w=track.parentElement.offsetWidth,cW=cards[0].offsetWidth+24,off=idx*cW-(w/2-cards[0].offsetWidth/2);track.style.transform=`translateX(${-Math.max(0,off)}px)`;dots.querySelectorAll('.dot').forEach((d,j)=>d.classList.toggle('active',j===idx));}
  document.getElementById('rev-prev').onclick=()=>go(idx-1);
  document.getElementById('rev-next').onclick=()=>go(idx+1);
  let auto=setInterval(()=>go((idx+1)%cards.length),5000);
  track.parentElement.onmouseenter=()=>clearInterval(auto);
  track.parentElement.onmouseleave=()=>{auto=setInterval(()=>go((idx+1)%cards.length),5000);};
  go(0);
}

function initReveal() {
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('revealed');});},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('[data-reveal]').forEach(el=>obs.observe(el));
}

function initStats() {
  let done=false;
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting&&!done){done=true;document.querySelectorAll('.stat-number').forEach(el=>{const t=+el.dataset.target,s=el.dataset.suffix,dur=2000,st=performance.now();(function up(now){const p=Math.min((now-st)/dur,1),ease=1-Math.pow(1-p,4);el.textContent=Math.floor(ease*t)+s;if(p<1)requestAnimationFrame(up);})(st);});}});},{threshold:.5});
  const sec=document.getElementById('stats-section');if(sec)obs.observe(sec);
}

function initNav() {
  const nav=document.getElementById('navbar'),ham=document.getElementById('hamburger'),menu=document.getElementById('mobile-menu');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>80));
  ham.addEventListener('click',()=>menu.classList.toggle('active'));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('active')));
}

function initFloating() {
  const fc=document.getElementById('floating-cta');
  window.addEventListener('scroll',()=>{fc.classList.toggle('visible',scrollY>600);});
}

function initParticles() {
  const canvas=document.getElementById('particles-canvas'); if(!canvas) return;
  const ctx=canvas.getContext('2d'); let parts=[];
  function resize(){const hero=document.getElementById('hero');canvas.width=hero.offsetWidth;canvas.height=hero.offsetHeight;parts=Array.from({length:Math.floor(canvas.width/30)},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+.5,sy:Math.random()*.3+.1,sx:Math.random()*.2-.1,o:Math.random()*.3+.05}));}
  function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);parts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(168,216,234,${p.o})`;ctx.fill();p.y+=p.sy;p.x+=p.sx;if(p.y>canvas.height){p.y=-5;p.x=Math.random()*canvas.width;}if(p.x>canvas.width)p.x=0;if(p.x<0)p.x=canvas.width;});requestAnimationFrame(draw);}
  resize();draw();window.addEventListener('resize',resize);
}

