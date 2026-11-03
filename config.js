/* GÁMEZ WEB — catálogo comercial */
const CONFIG = {
  marca: 'GÁMEZ WEB',
  subtitulo: 'Soluciones digitales para negocios',
  titular: 'Soluciones digitales para hacer crecer tu negocio.',
  descripcion: 'Páginas web, herramientas comerciales y sistemas administrativos diseñados según la etapa y las necesidades de cada negocio.',
  correo: 'gamez.desarrolloweb@gmail.com',
  whatsapp: '527474202033',
  ubicacion: 'Nuevo León, México',
  mostrarPrecios: true,
  servicios: [
    { icono: '◈', titulo: 'Presencia digital', descripcion: 'Páginas web y catálogos para presentar tu negocio y facilitar el contacto con clientes.' },
    { icono: '▦', titulo: 'Herramientas comerciales', descripcion: 'Soluciones para recibir solicitudes, organizar prospectos y dar seguimiento.' },
    { icono: '▣', titulo: 'Administración empresarial', descripcion: 'Sistemas y paneles para organizar información y procesos internos.' },
    { icono: '⚙', titulo: 'Desarrollo a medida', descripcion: 'Funciones e integraciones definidas a partir de un diagnóstico.' }
  ],
  categorias: [
    {
      id: 'presencia', nombre: 'Presencia', etiqueta: 'PRESENCIA DIGITAL',
      resumen: 'Haz que tu negocio se vea profesional, muestre lo que ofrece y facilite que nuevos clientes te contacten.',
      descripcion: 'Soluciones web para presentar tu negocio, exhibir productos o servicios y generar contactos.',
      planes: [
        { nombre: 'Esencial', precio: '$1,499', descripcion: 'Una primera presencia profesional para negocios que necesitan información clara en internet.', incluye: ['Landing page de una sola página', 'Información del negocio y servicios', 'Botón directo a WhatsApp', 'Diseño adaptable a celular', 'Publicación y configuración inicial'], mensaje: 'Hola, me interesa el plan Presencia Esencial de GÁMEZ WEB. Quisiera conocer el alcance y los siguientes pasos.' },
        { nombre: 'Catálogo', precio: '$1,500', descripcion: 'Muestra tus productos o servicios en un catálogo digital fácil de consultar y compartir.', incluye: ['Catálogo digital organizado por categorías', 'Fotografías, descripciones y precios proporcionados por el negocio', 'Botones para solicitar por WhatsApp', 'Diseño adaptable a celular', 'Carga inicial acordada de productos'], mensaje: 'Hola, me interesa el plan Presencia Catálogo. Quisiera mostrar mis productos en un catálogo digital. ¿Podemos revisar los detalles?' },
        { nombre: 'Empresarial', precio: '$2,999', descripcion: 'Un sitio más completo para explicar tu negocio, fortalecer tu imagen y captar solicitudes.', incluye: ['Sitio web de varias secciones', 'Información de empresa, servicios y contacto', 'Formulario de solicitud o cotización', 'Integración con WhatsApp y redes', 'Diseño adaptable y publicación'], mensaje: 'Hola, me interesa el plan Presencia Empresarial de GÁMEZ WEB. Quisiera platicar sobre el sitio web de mi negocio.' }
      ]
    },
    {
      id: 'business', nombre: 'Business', etiqueta: 'GESTIÓN COMERCIAL',
      resumen: 'Organiza prospectos, clientes y oportunidades para dar seguimiento y no perder de vista cada venta.',
      descripcion: 'Herramientas comerciales para ordenar la atención, registrar oportunidades y dar seguimiento a clientes.',
      planes: [
        { nombre: 'Business Start', precio: 'Desde $3,500', descripcion: 'Un punto de partida para registrar contactos y mantener orden comercial.', incluye: ['Registro centralizado de prospectos', 'Datos de contacto y notas', 'Estatus básico de seguimiento', 'Búsqueda y consulta de registros', 'Configuración inicial'], mensaje: 'Hola, me interesa Business Start para organizar los prospectos de mi negocio. ¿Podemos revisar qué necesito?' },
        { nombre: 'Business CRM', precio: 'Desde $6,000', descripcion: 'Un CRM administrativo base para gestionar clientes y oportunidades de venta.', incluye: ['Registro y seguimiento de clientes', 'Etapas y estatus de oportunidades', 'Historial de notas y actividades', 'Panel de consulta y control', 'Capacitación inicial'], mensaje: 'Hola, me interesa el plan Business CRM. Busco dar seguimiento a mis clientes y oportunidades de venta. Quisiera una cotización.' },
        { nombre: 'Business Pro', precio: 'Desde $8,000', descripcion: 'Una gestión comercial más completa, con reportes y procesos ajustados a tu operación.', incluye: ['Funciones del CRM base', 'Panel con indicadores y reportes', 'Filtros y organización avanzada', 'Flujos de seguimiento acordados', 'Ajustes según diagnóstico'], mensaje: 'Hola, me interesa Business Pro para mejorar el control comercial de mi empresa. ¿Podemos agendar un diagnóstico?' }
      ]
    },
    {
      id: 'management', nombre: 'Management', etiqueta: 'SISTEMAS Y ADMINISTRACIÓN',
      resumen: 'Digitaliza procesos internos con sistemas personalizados para administrar información y trabajar con mayor control.',
      descripcion: 'Sistemas administrativos y desarrollos personalizados para procesos que requieren algo más que un CRM convencional.',
      planes: [
        { nombre: 'Management Base', precio: 'Desde $7,000', descripcion: 'Un sistema administrativo sencillo para centralizar información y tareas específicas.', incluye: ['Módulo administrativo definido', 'Captura y consulta de información', 'Tablas y filtros de registros', 'Interfaz adaptable', 'Configuración y capacitación'], mensaje: 'Hola, me interesa Management Base. Necesito digitalizar un proceso administrativo de mi negocio. Quisiera explicarles cómo trabajamos.' },
        { nombre: 'Management Plus', precio: 'Desde $10,000', descripcion: 'Un sistema con varios módulos conectados para dar seguimiento a procesos internos.', incluye: ['Múltiples módulos según diagnóstico', 'Relación entre registros y procesos', 'Roles o permisos según alcance', 'Reportes operativos', 'Capacitación y puesta en marcha'], mensaje: 'Hola, me interesa Management Plus para desarrollar un sistema administrativo con varios módulos. ¿Podemos revisar mis procesos y cotizar?' },
        { nombre: 'Management Custom', precio: 'Desde $18,000', descripcion: 'Desarrollo especializado para necesidades particulares e integraciones previamente evaluadas.', incluye: ['Arquitectura y módulos personalizados', 'Flujos de trabajo específicos', 'Integraciones sujetas a viabilidad', 'Paneles y reportes a medida', 'Plan de implementación por etapas'], mensaje: 'Hola, me interesa Management Custom. Tengo un proyecto de software a medida y quisiera solicitar un diagnóstico y una propuesta.' }
      ]
    }
  ],
  proyectos: [
    { titulo: 'DNZ Mobiles', categoria: 'Catálogo digital · Proyecto real', descripcion: 'Catálogo de accesorios para celulares, desarrollado como muestra de trabajo comercial.', url: 'https://gamezun.github.io/DNZ-Mobiles/', iniciales: 'DNZ' }
  ],
  pasos: [
    { titulo: 'Diagnóstico', descripcion: 'Conocemos tu negocio y lo que necesitas mejorar.' },
    { titulo: 'Propuesta', descripcion: 'Definimos alcance, tiempos e inversión.' },
    { titulo: 'Desarrollo', descripcion: 'Diseñamos e implementamos la solución.' },
    { titulo: 'Entrega y soporte', descripcion: 'Te acompañamos después de la puesta en marcha.' }
  ]
};