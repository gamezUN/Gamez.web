/* GÁMEZ WEB — renderizado del catálogo */
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
  $('lista-categorias').innerHTML = CONFIG.categorias.map((c,i) => '<article class="paquete categoria-card ' + (i===1?'destacado':'') + '"><div class="paquete-etiqueta">' + seguro(c.etiqueta) + '</div><h3>' + seguro(c.nombre) + '</h3><p class="descripcion">' + seguro(c.resumen) + '</p><ul><li>3 planes disponibles</li><li>Alcances y precios de referencia</li><li>Asesoría para elegir la opción adecuada</li></ul><a class="boton boton-borde" href="' + c.id + '.html">Explorar planes ↗</a></article>').join('');
  $('boton-correo').href = 'mailto:' + CONFIG.correo + '?subject=' + encodeURIComponent('Cotización GÁMEZ WEB');
  $('boton-whatsapp').href = wa('Hola, vi la página de GÁMEZ WEB y quisiera solicitar información sobre sus soluciones.');
  $('boton-whatsapp').target = '_blank'; $('boton-whatsapp').rel = 'noopener noreferrer';
  $('boton-llamar').href = 'tel:+' + CONFIG.whatsapp;
  $('lista-proyectos').innerHTML = CONFIG.proyectos.map(p => '<article class="proyecto"><div class="proyecto-imagen">' + seguro(p.iniciales) + '</div><div class="proyecto-cuerpo"><span class="proyecto-categoria">' + seguro(p.categoria) + '</span><h3>' + seguro(p.titulo) + '</h3><p>' + seguro(p.descripcion) + '</p><a href="' + seguro(p.url) + '" target="_blank" rel="noopener noreferrer">Ver proyecto ↗</a></div></article>').join('');
  $('lista-pasos').innerHTML = CONFIG.pasos.map((p,i) => '<article class="paso"><span class="paso-numero">' + String(i+1).padStart(2,'0') + '</span><h3>' + seguro(p.titulo) + '</h3><p>' + seguro(p.descripcion) + '</p></article>').join('');
}

if ($('planes-categoria')) {
  const id = document.body.dataset.categoria;
  const categoria = CONFIG.categorias.find(c => c.id === id);
  if (categoria) {
    $('categoria-etiqueta').textContent = categoria.etiqueta;
    $('categoria-titulo').textContent = categoria.nombre;
    $('categoria-descripcion').textContent = categoria.descripcion;
    $('planes-categoria').innerHTML = categoria.planes.map((p,i) => '<article class="detalle-card plan-detalle"><p class="etiqueta">PLAN 0' + (i+1) + '</p><h2>' + seguro(p.nombre) + '</h2><p class="detalle-precio">' + seguro(p.precio) + ' <small>MXN · precio inicial</small></p><p class="detalle-intro">' + seguro(p.descripcion) + '</p><h3>¿Qué incluye?</h3><ul>' + p.incluye.map(x => '<li>' + seguro(x) + '</li>').join('') + '</ul><p class="nota">El precio final depende del alcance, contenido, integraciones y requerimientos acordados. Se entrega una propuesta antes de iniciar.</p>' + botonWa(p.mensaje,'Solicitar este plan') + '</article>').join('');
  }
}
