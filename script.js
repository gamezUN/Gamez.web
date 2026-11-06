/* GÁMEZ WEB — renderizado del sitio */
const $ = id => document.getElementById(id);
const seguro = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const wa = mensaje => 'https://wa.me/' + CONFIG.whatsapp.replace(/\D/g,'') + '?text=' + encodeURIComponent(mensaje);
const botonWa = (mensaje, label='Consultar por WhatsApp') => '<a class="boton boton-azul" target="_blank" rel="noopener noreferrer" href="' + wa(mensaje) + '">' + label + ' ↗</a>';

if ($('titular')) {
  $('titular').textContent = CONFIG.titular;
  $('descripcion').textContent = CONFIG.descripcion;
  $('pie-subtitulo').textContent = CONFIG.subtitulo;
  $('ubicacion').textContent = '⌖ ' + CONFIG.ubicacion;
  $('anio').textContent = new Date().getFullYear();
  $('lista-servicios').innerHTML = CONFIG.servicios.map(s => '<article class="servicio"><div class="servicio-icono">' + seguro(s.icono) + '</div><h3>' + seguro(s.titulo) + '</h3><p>' + seguro(s.descripcion) + '</p></article>').join('');

  if ($('lista-planes')) {
    $('lista-planes').innerHTML = CONFIG.planes.map((p, i) =>
      '<article class="paquete ' + (i === 1 ? 'destacado' : '') + '">' +
        '<span class="paquete-etiqueta">PLAN ' + seguro(p.numero) + (i === 1 ? ' · MÁS SOLICITADO' : '') + '</span>' +
        '<h3>' + seguro(p.nombre) + '</h3>' +
        '<p class="precio">' + seguro(p.precio) + ' <small>MXN</small></p>' +
        '<p class="descripcion">' + seguro(p.descripcion) + '</p>' +
        '<ul>' + p.incluye.map(item => '<li>' + seguro(item) + '</li>').join('') + '</ul>' +
        botonWa(p.mensaje, 'Solicitar cotización ↗') +
      '</article>'
    ).join('');
  }

  $('boton-correo').href = 'mailto:' + CONFIG.correo + '?subject=' + encodeURIComponent('Cotización GÁMEZ WEB');
  $('boton-whatsapp').href = wa('Hola, vi la página de GÁMEZ WEB y quisiera solicitar información sobre sus soluciones.');
  $('boton-whatsapp').target = '_blank'; $('boton-whatsapp').rel = 'noopener noreferrer';
  $('boton-llamar').href = 'tel:+' + CONFIG.whatsapp;
  $('lista-proyectos').innerHTML = CONFIG.proyectos.map(p => '<article class="proyecto"><div class="proyecto-imagen">' + seguro(p.iniciales) + '</div><div class="proyecto-cuerpo"><span class="proyecto-categoria">' + seguro(p.categoria) + '</span><h3>' + seguro(p.titulo) + '</h3><p>' + seguro(p.descripcion) + '</p><a href="' + seguro(p.url) + '" target="_blank" rel="noopener noreferrer">Ver proyecto ↗</a></div></article>').join('');
  $('lista-pasos').innerHTML = CONFIG.pasos.map((p,i) => '<article class="paso"><span class="paso-numero">' + String(i+1).padStart(2,'0') + '</span><h3>' + seguro(p.titulo) + '</h3><p>' + seguro(p.descripcion) + '</p></article>').join('');
}


/* Construcción progresiva al recorrer la página */
(() => {
  const progress = document.getElementById('scroll-progress-bar');
  const cursorLayer = document.querySelector('.cursor-layer');
  const cursors = cursorLayer ? [...cursorLayer.querySelectorAll('.fake-cursor')] : [];
  const sections = [...document.querySelectorAll('.build-section')];
  if (!sections.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cursorTargets = [
    {x:.24,y:.32},{x:.56,y:.48},{x:.77,y:.62}
  ];
  let ticking = false;

  function updateBuild(){
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    if(progress) progress.style.width = (ratio * 100) + '%';

    const viewportMid = window.innerHeight * .72;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top < viewportMid && rect.bottom > 90) section.classList.add('is-built');
    });

    if(cursorLayer && !reduceMotion && window.innerWidth > 700){
      const active = sections.some(section => {
        const r=section.getBoundingClientRect();
        return r.top < window.innerHeight*.72 && r.bottom > window.innerHeight*.22;
      });
      cursorLayer.classList.toggle('active',active && window.scrollY > 120);
      const phase = Math.floor(window.scrollY / Math.max(1,window.innerHeight*.62));
      cursors.forEach((cursor,i) => {
        const target=cursorTargets[(i+phase)%cursorTargets.length];
        const drift=Math.sin((window.scrollY/230)+i*1.7)*28;
        cursor.style.opacity=active && window.scrollY>120 ? '.92' : '0';
        cursor.style.transform='translate('+(window.innerWidth*target.x+drift)+'px,'+(window.innerHeight*target.y+Math.cos(window.scrollY/260+i)*22)+'px)';
      });
    }
    ticking=false;
  }

  function onScroll(){
    if(!ticking){window.requestAnimationFrame(updateBuild);ticking=true;}
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  updateBuild();
  if(!reduceMotion && 'IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('is-built');});
    },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    sections.forEach(section=>observer.observe(section));
  } else {
    sections.forEach(section=>section.classList.add('is-built'));
  }
})();
