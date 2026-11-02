/* Este archivo construye la página a partir de config.js.
   Para editar contenido y precios, modifica solamente config.js. */
const $ = (id) => document.getElementById(id);
const texto = (valor) => String(valor ?? '');
const seguro = (valor) => texto(valor).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const urlSegura = (valor) => { try { const u = new URL(valor); return ['http:', 'https:'].includes(u.protocol) ? u.href : '#'; } catch { return '#'; } };
const formatoPrecio = (cantidad, moneda) => cantidad == null ? 'A cotizar' : '$' + Number(cantidad).toLocaleString('es-MX') + ' ' + seguro(moneda || 'MXN');

if ($('titular')) {
  $('titular').textContent = CONFIG.titular;
  $('descripcion').textContent = CONFIG.descripcion;
  $('pie-subtitulo').textContent = CONFIG.subtitulo;
  $('ubicacion').textContent = '⌖ ' + CONFIG.ubicacion;
  $('anio').textContent = new Date().getFullYear();
  $('lista-servicios').innerHTML = CONFIG.servicios.map(s => `<article class="servicio"><div class="servicio-icono" aria-hidden="true">${seguro(s.icono)}</div><h3>${seguro(s.titulo)}</h3><p>${seguro(s.descripcion)}</p></article>`).join('');
  const correo = 'mailto:' + encodeURIComponent(CONFIG.correo) + '?subject=' + encodeURIComponent('Cotización de soluciones digitales - GÁMEZ WEB');
  $('boton-correo').href = correo;
  const numero = texto(CONFIG.whatsapp).replace(/\D/g,'');
  if (numero) { $('boton-whatsapp').href = 'https://wa.me/' + numero + '?text=' + encodeURIComponent('Hola, vi tu página GÁMEZ WEB y quisiera solicitar una cotización.'); $('boton-whatsapp').target = '_blank'; $('boton-whatsapp').rel = 'noopener noreferrer'; $('boton-llamar').href = 'tel:+' + numero; } else { $('boton-whatsapp').hidden = true; $('boton-llamar').hidden = true; }
  $('lista-paquetes').innerHTML = CONFIG.paquetes.map((p,i) => `<article class="paquete ${p.destacado ? 'destacado' : ''}"><div class="paquete-etiqueta">${p.destacado ? '✦ PARA COMENZAR' : 'SOLUCIÓN GMZ'}</div><h3>${seguro(p.nombre)}</h3><div class="precio">${CONFIG.mostrarPrecios ? seguro(p.precioTexto || formatoPrecio(p.precio,p.unidad)) : 'Cotización personalizada'} <small>pago inicial</small></div><p class="descripcion">${seguro(p.descripcion)}</p><ul>${p.caracteristicas.map(c => `<li>${seguro(c)}</li>`).join('')}</ul><p class="nota">${seguro(p.nota)}</p><a class="boton boton-borde" href="soluciones.html#paquete-${i+1}">Ver más información ↗</a><a class="enlace-cotizar" href="#contacto">Solicitar cotización</a></article>`).join('');
  $('lista-mantenimiento').innerHTML = CONFIG.mantenimiento.map((m,i) => `<article class="paquete mantenimiento"><div class="paquete-etiqueta">PLAN MENSUAL</div><h3>${seguro(m.nombre)}</h3><div class="precio">${CONFIG.mostrarPrecios ? formatoPrecio(m.precio,'MXN') : 'Cotización personalizada'} <small>/ mes</small></div><p class="descripcion">${seguro(m.descripcion)}</p><ul>${m.caracteristicas.map(c => `<li>${seguro(c)}</li>`).join('')}</ul><p class="nota">${seguro(m.nota)}</p><a class="boton boton-borde" href="soluciones.html#soporte-${i+1}">Ver más información ↗</a></article>`).join('');
  $('lista-proyectos').innerHTML = CONFIG.proyectos.map(p => `<article class="proyecto"><div class="proyecto-imagen">${seguro(p.iniciales)}</div><div class="proyecto-cuerpo"><span class="proyecto-categoria">${seguro(p.categoria)}</span><h3>${seguro(p.titulo)}</h3><p>${seguro(p.descripcion)}</p><a href="${seguro(urlSegura(p.url))}" target="_blank" rel="noopener noreferrer">Ver proyecto ↗</a></div></article>`).join('') + `<article class="proyecto proyecto-invitacion"><div class="proyecto-imagen">✦</div><div class="proyecto-cuerpo"><span class="proyecto-categoria">TU NEGOCIO PUEDE SER EL SIGUIENTE</span><h3>¿Qué podemos mejorar en tu negocio?</h3><p>Cuéntanos qué necesitas y diseñaremos una propuesta con funciones y alcance claros.</p><a href="#contacto">Solicitar cotización ↗</a></div></article>`;
  $('lista-pasos').innerHTML = CONFIG.pasos.map((p,i) => `<article class="paso"><span class="paso-numero">${String(i+1).padStart(2,'0')}</span><h3>${seguro(p.titulo)}</h3><p>${seguro(p.descripcion)}</p></article>`).join('');
}

if ($('detalle-paquetes')) {
  const contacto = 'mailto:' + encodeURIComponent(CONFIG.correo) + '?subject=' + encodeURIComponent('Información sobre soluciones GMZ');
  $('detalle-paquetes').innerHTML = CONFIG.paquetes.map((p,i) => `<article class="detalle-card" id="paquete-${i+1}"><p class="etiqueta">PAQUETE 0${i+1}</p><h2>${seguro(p.nombre)}</h2><p class="detalle-precio">${seguro(p.precioTexto || formatoPrecio(p.precio,p.unidad))}</p><p class="detalle-intro">${seguro(p.descripcion)}</p><h3>¿Qué incluye?</h3><ul>${p.caracteristicas.map(c => `<li>${seguro(c)}</li>`).join('')}</ul><p>${seguro(p.nota)}</p><a class="boton boton-azul" href="${contacto}">Solicitar una propuesta ↗</a></article>`).join('');
  $('detalle-soporte').innerHTML = CONFIG.mantenimiento.map((m,i) => `<article class="detalle-card" id="soporte-${i+1}"><p class="etiqueta">SOPORTE 0${i+1}</p><h2>${seguro(m.nombre)}</h2><p class="detalle-precio">${formatoPrecio(m.precio,'MXN')} / mes</p><p class="detalle-intro">${seguro(m.descripcion)}</p><h3>¿Qué incluye?</h3><ul>${m.caracteristicas.map(c => `<li>${seguro(c)}</li>`).join('')}</ul><p>${seguro(m.nota)}</p><a class="boton boton-azul" href="${contacto}">Solicitar este soporte ↗</a></article>`).join('');
}
