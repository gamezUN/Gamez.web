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
