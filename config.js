/* =========================================================
   GÁMEZ WEB — CONFIGURACIÓN EDITABLE
   Modifica aquí tus datos, servicios, paquetes y proyectos.
   ========================================================= */
const CONFIG = {
  marca: 'GÁMEZ WEB',
  subtitulo: 'Soluciones digitales, sistemas empresariales y desarrollo web',
  titular: 'Tecnología que organiza tu negocio y lo impulsa a crecer.',
  descripcion: 'Creamos sitios web, catálogos, tiendas en línea y sistemas de gestión para negocios. Desde soluciones listas para implementar hasta plataformas desarrolladas a la medida de tus procesos.',
  correo: 'gamez.desarrolloweb@gmail.com',
  whatsapp: '527474202033',
  ubicacion: 'Nuevo León, México',
  mostrarPrecios: true,
  servicios: [
    { icono: '◈', titulo: 'Páginas web empresariales', descripcion: 'Sitios profesionales para presentar tu empresa, servicios, sucursales, horarios y medios de contacto.' },
    { icono: '▦', titulo: 'Catálogos digitales', descripcion: 'Catálogos organizados por categorías, con fotografías, fichas de producto y contacto directo por WhatsApp.' },
    { icono: '▤', titulo: 'Tiendas en línea', descripcion: 'Experiencias de compra con catálogo, carrito y flujo de pedidos. Los pagos en línea se integran según proveedor y alcance.' },
    { icono: '◎', titulo: 'CRM y gestión de clientes', descripcion: 'Herramientas para centralizar contactos, oportunidades, seguimiento comercial y actividad del negocio.' },
    { icono: '▣', titulo: 'Sistemas administrativos', descripcion: 'Paneles para organizar operaciones, ventas, registros, usuarios e información de acuerdo con cada negocio.' },
    { icono: '▥', titulo: 'Inventarios y productos', descripcion: 'Control de productos, existencias, movimientos y consultas para tener mejor visibilidad de la operación.' },
    { icono: '▦', titulo: 'Reservaciones y agendas', descripcion: 'Sistemas para administrar citas, fechas, solicitudes y disponibilidad de servicios.' },
    { icono: '⌘', titulo: 'Automatización de procesos', descripcion: 'Reducción de tareas repetitivas mediante formularios, notificaciones, reportes e integraciones viables.' },
    { icono: '↗', titulo: 'Integraciones y soluciones a medida', descripcion: 'Conexión con herramientas externas y desarrollo de módulos especiales después de evaluar requisitos y viabilidad.' },
    { icono: '⚙', titulo: 'Mantenimiento y soporte', descripcion: 'Actualizaciones de contenido, corrección de incidencias y mejoras con un alcance previamente acordado.' }
  ],
  paquetes: [
    {
      nombre: 'Presencia Digital', precio: 2500, unidad: 'MXN', destacado: false,
      descripcion: 'Una página profesional para presentar tu negocio y facilitar que nuevos clientes te contacten.',
      caracteristicas: ['Diseño web profesional', 'Adaptación a celulares y computadoras', 'Información, servicios y ubicación', 'Botón directo a WhatsApp', 'Formulario o medios de contacto'],
      nota: 'Pago inicial. Dominio, alojamiento de pago y funciones adicionales se cotizan por separado.'
    },
    {
      nombre: 'Catálogo Digital', precio: 1500, unidad: 'MXN', destacado: true,
      descripcion: 'Muestra tus productos de forma organizada y facilita las consultas y pedidos.',
      caracteristicas: ['Catálogo web de productos', 'Organización por categorías', 'Fotografías y descripciones', 'Acceso directo a WhatsApp', 'Diseño adaptable a celulares'],
      nota: 'Precio inicial para catálogo de alcance básico. Cantidad de productos, filtros y administración se definen en la cotización.'
    },
    {
      nombre: 'GMZ CRM Base', precio: 7500, unidad: 'MXN', destacado: false,
      descripcion: 'Implementación y configuración de nuestra solución administrativa base para negocios que necesitan centralizar su operación.',
      caracteristicas: ['Acceso a la plataforma CRM base existente', 'Configuración inicial para el negocio', 'Organización de clientes y actividad comercial', 'Panel administrativo y herramientas disponibles en la versión base', 'Puesta en marcha y capacitación inicial'],
      nota: 'Desde $6,000 y hasta $8,000 MXN según configuración. Se presenta una demostración para revisar los módulos disponibles y confirmar el alcance antes de contratar.'
    },
    {
      nombre: 'CRM Especializado', precio: 10000, unidad: 'MXN', destacado: false,
      descripcion: 'Un sistema diseñado alrededor de los procesos, roles y necesidades específicas de tu empresa.',
      caracteristicas: ['Reunión de diagnóstico y levantamiento de requisitos', 'Diseño de módulos y flujos personalizados', 'Paneles, reportes y permisos según alcance', 'Integraciones y automatizaciones sujetas a viabilidad', 'Plan de implementación y capacitación'],
      nota: 'Inversión estimada de $10,000 a $18,000 MXN. El precio definitivo se establece mediante propuesta después de conocer las necesidades del negocio.'
    }
  ],
  mantenimiento: [
    {
      nombre: 'Web Care', precio: 200,
      descripcion: 'Acompañamiento básico para mantener actualizada tu página web.',
      caracteristicas: ['Ajustes menores de texto', 'Actualización sencilla de información', 'Revisión básica de enlaces y contenido'],
      nota: 'Mensualidad. Cambios grandes, nuevas secciones y rediseños se cotizan aparte.'
    },
    {
      nombre: 'Catalog Care', precio: 300,
      descripcion: 'Apoyo para negocios que actualizan productos, fotografías y promociones.',
      caracteristicas: ['Actualizaciones sencillas de productos', 'Cambios acordados de fotografías o precios', 'Apoyo para mantener categorías y contenido'],
      nota: 'Mensualidad con alcance acordado. No incluye carga ilimitada de productos.'
    },
    {
      nombre: 'Business Support', precio: 400,
      descripcion: 'Soporte y seguimiento para sistemas administrativos implementados.',
      caracteristicas: ['Soporte de uso', 'Revisión de incidencias', 'Ajustes menores previamente acordados'],
      nota: 'Disponible para sistemas implementados. No incluye nuevas funciones, integraciones ni infraestructura de terceros.'
    }
  ],
  proyectos: [
    { titulo: 'DNZ Mobiles', categoria: 'Catálogo digital · Proyecto real', descripcion: 'Catálogo de accesorios para celulares, desarrollado como muestra de trabajo comercial.', url: 'https://gamezun.github.io/DNZ-Mobiles/', iniciales: 'DNZ' }
  ],
  pasos: [
    { titulo: 'Diagnóstico', descripcion: 'Conocemos tu negocio, tus procesos y lo que quieres mejorar.' },
    { titulo: 'Propuesta y alcance', descripcion: 'Definimos entregables, tiempos, inversión y qué queda fuera del proyecto.' },
    { titulo: 'Diseño y desarrollo', descripcion: 'Construimos la solución y revisamos contigo los avances.' },
    { titulo: 'Entrega y seguimiento', descripcion: 'Publicamos, capacitamos y acordamos el soporte que necesitas.' }
  ]
};