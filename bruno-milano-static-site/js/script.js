

function setPreview(mode){
  const preview = document.getElementById('sitePreview');
  const desktopBtn = document.getElementById('desktopPreviewBtn');
  const mobileBtn = document.getElementById('mobilePreviewBtn');
  const isMobile = mode === 'mobile';

  preview.classList.toggle('force-mobile', isMobile);
  document.body.classList.toggle('mobile-preview', isMobile);
  desktopBtn.classList.toggle('active', !isMobile);
  mobileBtn.classList.toggle('active', isMobile);
  desktopBtn.setAttribute('aria-pressed', String(!isMobile));
  mobileBtn.setAttribute('aria-pressed', String(isMobile));
  localStorage.setItem('bm-preview-mode', mode);

  document.getElementById('drawer')?.classList.remove('open');
  document.body.style.overflow = '';
  window.scrollTo({top:0, behavior:'smooth'});
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('bm-preview-mode');
  if(saved === 'mobile'){
    setPreview('mobile');
  } else if(saved === 'desktop'){
    setPreview('desktop');
  } else if(window.innerWidth <= 640){
    setPreview('mobile');
  }
});

function toggleMenu(open){
  document.getElementById('drawer').classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
