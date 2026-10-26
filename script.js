/* Este archivo construye la página a partir de config.js.
   Para editar contenido y precios, modifica solamente config.js. */
const $ = (id) => document.getElementById(id);
const texto = (valor) => String(valor ?? '');
const seguro = (valor) => texto(valor).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const urlSegura = (valor) => { try { const u = new URL(valor); return ['http:', 'https:'].includes(u.protocol) ? u.href : '#'; } catch { return '#'; } };
const formatoPrecio = (cantidad, moneda) => cantidad == null ? 'A cotizar' : '$' + Number(cantidad).toLocaleString('es-MX') + ' ' + seguro(moneda || 'MXN');
$('titular').textContent = CONFIG.titular;
$('descripcion').textContent = CONFIG.descripcion;
$('pie-subtitulo').textContent = CONFIG.subtitulo;
$('ubicacion').textContent = '⌖ ' + CONFIG.ubicacion;
$('anio').textContent = new Date().getFullYear();
$('lista-servicios').innerHTML = CONFIG.servicios.map(s => `<article class="servicio"><div class="servicio-icono" aria-hidden="true">${seguro(s.icono)}</div><h3>${seguro(s.titulo)}</h3><p>${seguro(s.descripcion)}</p></article>`).join('');
const correo = 'mailto:' + encodeURIComponent(CONFIG.correo) + '?subject=' + encodeURIComponent('Cotización de página web - GÁMEZ WEB');
$('boton-correo').href = correo;

const numero = texto(CONFIG.whatsapp).replace(/\D/g,'');
if (numero) { $('boton-whatsapp').href = 'https://wa.me/' + numero + '?text=' + encodeURIComponent('Hola, vi tu página GÁMEZ WEB y quisiera solicitar una cotización.'); $('boton-whatsapp').target = '_blank'; $('boton-whatsapp').rel = 'noopener noreferrer'; $('boton-llamar').href = 'tel:+' + numero; } else { $('boton-whatsapp').hidden = true; $('boton-llamar').hidden = true; }
$('lista-paquetes').innerHTML = CONFIG.paquetes.map(p => `<article class="paquete ${p.destacado ? 'destacado' : ''}"><div class="paquete-etiqueta">${p.destacado ? '✦ PRECIO DE LANZAMIENTO' : 'SERVICIO DISPONIBLE'}</div><h3>${seguro(p.nombre)}</h3><div class="precio">${CONFIG.mostrarPrecios ? formatoPrecio(p.precio,p.unidad) : 'Cotización personalizada'}</div><p class="descripcion">${seguro(p.descripcion)}</p><ul>${p.caracteristicas.map(c => `<li>${seguro(c)}</li>`).join('')}</ul><p class="nota">${seguro(p.nota)}</p><a class="boton ${p.destacado ? 'boton-azul' : 'boton-borde'}" href="${seguro(correo)}">Solicitar información ↗</a></article>`).join('');
$('lista-proyectos').innerHTML = CONFIG.proyectos.map(p => `<article class="proyecto"><div class="proyecto-imagen">${seguro(p.iniciales)}</div><div class="proyecto-cuerpo"><span class="proyecto-categoria">${seguro(p.categoria)}</span><h3>${seguro(p.titulo)}</h3><p>${seguro(p.descripcion)}</p><a href="${seguro(urlSegura(p.url))}" target="_blank" rel="noopener noreferrer">Ver proyecto ↗</a></div></article>`).join('') + `<article class="proyecto proyecto-invitacion"><div class="proyecto-imagen">✦</div><div class="proyecto-cuerpo"><span class="proyecto-categoria">TU NEGOCIO PUEDE SER EL SIGUIENTE</span><h3>¿Quieres un catálogo como este?</h3><p>Podemos organizar tus productos, mostrar fotografías y facilitar que tus clientes te contacten directamente.</p><a href="#contacto">Solicitar cotización ↗</a></div></article>`;
$('lista-pasos').innerHTML = CONFIG.pasos.map((p,i) => `<article class="paso"><span class="paso-numero">${String(i+1).padStart(2,'0')}</span><h3>${seguro(p.titulo)}</h3><p>${seguro(p.descripcion)}</p></article>`).join('');
