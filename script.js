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

  if ($('tabla-planes')) {
    const caracteristicas = [
      'Página web o catálogo digital',
      'Información del negocio y servicios',
      'Integración con WhatsApp',
      'Diseño adaptable a celulares',
      'Publicación y configuración inicial',
      'Registro de clientes y prospectos',
      'Seguimiento de oportunidades comerciales',
      'Panel administrativo',
      'Organización y consulta de información',
      'Sistemas y módulos personalizados',
      'Procesos administrativos internos',
      'Reportes y estadísticas',
      'Automatizaciones e integraciones',
      'Botón de pago (costo adicional)'
    ];
    const grupos = [
      {titulo:'Presencia digital', ids:[0,1,2,3,4]},
      {titulo:'Gestión comercial', ids:[5,6,7,8]},
      {titulo:'Sistemas administrativos', ids:[9,10,11,12]},
      {titulo:'Opciones adicionales', ids:[13]}
    ];
    let tabla = '<thead><tr><th class="caracteristica-col">Incluye</th>' + CONFIG.planes.map(p => '<th><span class="plan-numero">PLAN ' + p.numero + '</span><strong>' + seguro(p.nombre) + '</strong><span class="precio-tabla">' + seguro(p.precio) + ' <small>MXN</small></span><span class="descripcion-tabla">' + seguro(p.descripcion) + '</span></th>').join('') + '</tr></thead><tbody>';
    grupos.forEach(g => {
      tabla += '<tr class="grupo-fila"><th colspan="4">' + g.titulo + '</th></tr>';
      g.ids.forEach(i => {
        tabla += '<tr><th scope="row">' + seguro(caracteristicas[i]) + '</th>' + CONFIG.planes.map((p,j) => {
          let ok = (j===0 && i<=4) || (j===1 && i>=5 && i<=8) || (j===2 && i>=9 && i<=12) || (i===13 && j>=1);
          return '<td>' + (ok ? '<span class="check-plan" aria-label="Incluido">✓</span>' : '<span class="no-incluido" aria-label="No incluido">—</span>') + (i===13 && j>=1 ? '<small class="adicional-tabla">Adicional</small>' : '') + '</td>';
        }).join('') + '</tr>';
      });
    });
    tabla += '<tr class="acciones-fila"><th>Solicitar información</th>' + CONFIG.planes.map(p => '<td>' + botonWa(p.mensaje,'Cotizar plan ' + p.numero) + '</td>').join('') + '</tr></tbody>';
    $('tabla-planes').innerHTML = tabla;
  }

  $('boton-correo').href = 'mailto:' + CONFIG.correo + '?subject=' + encodeURIComponent('Cotización GÁMEZ WEB');
  $('boton-whatsapp').href = wa('Hola, vi la página de GÁMEZ WEB y quisiera solicitar información sobre sus soluciones.');
  $('boton-whatsapp').target = '_blank'; $('boton-whatsapp').rel = 'noopener noreferrer';
  $('boton-llamar').href = 'tel:+' + CONFIG.whatsapp;
  $('lista-proyectos').innerHTML = CONFIG.proyectos.map(p => '<article class="proyecto"><div class="proyecto-imagen">' + seguro(p.iniciales) + '</div><div class="proyecto-cuerpo"><span class="proyecto-categoria">' + seguro(p.categoria) + '</span><h3>' + seguro(p.titulo) + '</h3><p>' + seguro(p.descripcion) + '</p><a href="' + seguro(p.url) + '" target="_blank" rel="noopener noreferrer">Ver proyecto ↗</a></div></article>').join('');
  $('lista-pasos').innerHTML = CONFIG.pasos.map((p,i) => '<article class="paso"><span class="paso-numero">' + String(i+1).padStart(2,'0') + '</span><h3>' + seguro(p.titulo) + '</h3><p>' + seguro(p.descripcion) + '</p></article>').join('');
}
