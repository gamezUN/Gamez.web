/* GÁMEZ WEB — servicios, líneas comerciales y precios iniciales */
const CONFIG = {
  marca: 'GÁMEZ WEB',
  subtitulo: 'Soluciones digitales para negocios',
  titular: 'Tu negocio, listo para crecer en digital.',
  descripcion: 'Creamos páginas web, catálogos y sistemas que ayudan a los negocios a vender, organizarse y trabajar mejor.',
  correo: 'gamez.desarrolloweb@gmail.com',
  whatsapp: '527474202033',
  ubicacion: 'Nuevo León, México',
  mostrarPrecios: true,
  servicios: [
    { icono: '◈', titulo: 'Presencia digital', descripcion: 'Landing pages y páginas web empresariales para presentar tu negocio y atraer clientes.' },
    { icono: '▦', titulo: 'Catálogos y ventas', descripcion: 'Catálogos digitales y tiendas en línea para mostrar productos y recibir pedidos.' },
    { icono: '▣', titulo: 'Administración empresarial', descripcion: 'CRM, control de clientes, ventas y herramientas para organizar la operación.' },
    { icono: '⚙', titulo: 'Desarrollo personalizado', descripcion: 'Sistemas e integraciones diseñados a partir de las necesidades de cada empresa.' }
  ],
  lineas: [
    {
      slug: 'presencia',
      nombre: 'Presencia Digital',
      precioDesde: 'Desde $1,500 MXN',
      resumen: 'Haz que tu negocio se vea profesional, sea fácil de encontrar y tenga un canal claro para recibir consultas.',
      enfoque: 'Ideal para negocios que necesitan presentar sus servicios, productos y datos de contacto en internet.',
      planes: [
        {
          nombre: 'Catálogo Esencial',
          precio: '$1,500 MXN',
          descripcion: 'Muestra tus productos o servicios en un catálogo digital sencillo y fácil de compartir.',
          caracteristicas: ['Diseño visual con identidad del negocio', 'Secciones de productos o servicios', 'Botón directo a WhatsApp', 'Diseño adaptable a celular'],
          mensaje: 'Hola, me interesa el plan Catálogo Esencial de GÁMEZ WEB. Quiero mostrar mis productos o servicios en un catálogo digital. ¿Podemos revisar qué información necesitas y los siguientes pasos?'
        },
        {
          nombre: 'Landing Profesional',
          precio: '$2,500 MXN',
          descripcion: 'Una página enfocada en presentar tu negocio y convertir visitas en consultas.',
          caracteristicas: ['Sección principal y presentación del negocio', 'Servicios o productos destacados', 'Formulario o contacto por WhatsApp', 'Diseño adaptable y publicación'],
          mensaje: 'Hola, vi el plan Landing Profesional de GÁMEZ WEB y me interesa para mi negocio. Quiero una página que presente mis servicios y ayude a recibir clientes. ¿Podemos agendar un diagnóstico?'
        },
        {
          nombre: 'Sitio Empresarial',
          precio: '$4,500 MXN',
          descripcion: 'Un sitio web más completo para comunicar la propuesta de valor y generar confianza.',
          caracteristicas: ['Varias secciones informativas', 'Presentación de servicios y empresa', 'Galería o portafolio', 'Contacto y enlaces a redes sociales', 'Diseño adaptable a celulares'],
          mensaje: 'Hola, me interesa el plan Sitio Empresarial de GÁMEZ WEB. Busco una página más completa para presentar mi empresa y sus servicios. ¿Podemos conversar sobre el alcance y una cotización?'
        }
      ]
    },
    {
      slug: 'business',
      nombre: 'Business',
      precioDesde: 'Desde $2,999 MXN',
      resumen: 'Convierte tu presencia digital en una herramienta comercial para mostrar productos, recibir pedidos y facilitar el proceso de venta.',
      enfoque: 'Pensado para negocios que quieren organizar mejor su catálogo y hacer más sencillo el contacto con sus clientes.',
      planes: [
        {
          nombre: 'Business Catalog',
          precio: '$2,999 MXN',
          descripcion: 'Un catálogo comercial estructurado para presentar productos y facilitar solicitudes de compra.',
          caracteristicas: ['Catálogo organizado por categorías', 'Fichas con imágenes y descripción', 'Búsqueda o filtros básicos', 'Solicitudes de pedido por WhatsApp'],
          mensaje: 'Hola, me interesa Business Catalog de GÁMEZ WEB. Quiero organizar mis productos en un catálogo comercial y recibir solicitudes por WhatsApp. ¿Qué necesitas para preparar mi propuesta?'
        },
        {
          nombre: 'Business Sales',
          precio: '$4,999 MXN',
          descripcion: 'Una experiencia comercial con más herramientas para recibir y dar seguimiento a solicitudes.',
          caracteristicas: ['Catálogo comercial', 'Formulario de solicitud o pedido', 'Registro de datos del cliente', 'Flujo de contacto y seguimiento', 'Panel básico según alcance'],
          mensaje: 'Hola, quiero información del plan Business Sales de GÁMEZ WEB. Me interesa facilitar los pedidos y dar seguimiento a mis clientes desde una solución digital. ¿Podemos revisar mi proceso actual?'
        },
        {
          nombre: 'Business Online',
          precio: 'Desde $7,500 MXN',
          descripcion: 'Una tienda en línea con funciones comerciales definidas de acuerdo con el tipo de producto y operación.',
          caracteristicas: ['Catálogo y páginas de producto', 'Carrito o flujo de pedido según proyecto', 'Integración de pago sujeta al proveedor', 'Confirmaciones y datos de compra', 'Configuración y pruebas antes de publicar'],
          mensaje: 'Hola, me interesa Business Online de GÁMEZ WEB para vender mis productos por internet. Quisiera revisar el catálogo, el proceso de compra y las opciones de pago para recibir una cotización.'
        }
      ]
    },
    {
      slug: 'management',
      nombre: 'Management',
      precioDesde: 'Desde $7,000 MXN',
      resumen: 'Digitaliza tareas administrativas y mejora el control de clientes, oportunidades, ventas y procesos internos.',
      enfoque: 'Para empresas que necesitan centralizar información y reducir el trabajo manual en su operación.',
      planes: [
        {
          nombre: 'Management Basic',
          precio: '$7,000 MXN',
          descripcion: 'Un CRM administrativo inicial para registrar clientes y mantener seguimiento de oportunidades.',
          caracteristicas: ['Registro y consulta de clientes', 'Etapas básicas de seguimiento', 'Notas y datos de contacto', 'Panel general de registros'],
          mensaje: 'Hola, me interesa Management Basic de GÁMEZ WEB. Necesito organizar los datos de mis clientes y dar seguimiento a mis oportunidades de venta. ¿Podemos revisar cómo trabaja actualmente mi negocio?'
        },
        {
          nombre: 'Management Advanced',
          precio: 'Desde $10,000 MXN',
          descripcion: 'Un sistema de gestión con módulos y reportes ajustados al flujo de trabajo del negocio.',
          caracteristicas: ['Módulos según las necesidades detectadas', 'Filtros y búsqueda de registros', 'Indicadores y reportes básicos', 'Roles o permisos según alcance', 'Capacitación inicial'],
          mensaje: 'Hola, quiero información de Management Advanced de GÁMEZ WEB. Busco un sistema para administrar mejor mis procesos, consultar información y obtener reportes. Me gustaría solicitar un diagnóstico.'
        },
        {
          nombre: 'Management Custom',
          precio: '$16,000–$18,000 MXN',
          descripcion: 'Desarrollo de un sistema administrativo especializado, definido a partir de un diagnóstico y alcance acordado.',
          caracteristicas: ['Análisis del proceso de la empresa', 'Diseño de módulos personalizados', 'Flujos de trabajo específicos', 'Reportes e integraciones por alcance', 'Pruebas, entrega y capacitación'],
          mensaje: 'Hola, me interesa Management Custom de GÁMEZ WEB. Necesito evaluar un sistema administrativo personalizado para mi empresa. Quisiera agendar un diagnóstico para definir módulos, tiempos e inversión.'
        }
      ]
    }
  ],
  mantenimiento: [
    {
      nombre: 'Soporte Básico', precio: 300,
      descripcion: 'Para páginas y catálogos que requieren actualizaciones ocasionales.',
      caracteristicas: ['Cambios menores de texto e imágenes', 'Actualización sencilla de productos', 'Revisión básica de funcionamiento'],
      nota: 'Mensualidad. No incluye rediseños ni cambios ilimitados.'
    },
    {
      nombre: 'Soporte Crecimiento', precio: 600,
      descripcion: 'Para negocios que utilizan su sitio o CRM de forma continua.',
      caracteristicas: ['Soporte de uso y dudas', 'Revisión general mensual', 'Ajustes menores previamente acordados', 'Apoyo con registros y configuración'],
      nota: 'Mensualidad. Nuevos módulos y funciones se cotizan por separado.'
    },
    {
      nombre: 'Soporte Profesional', precio: 1000,
      descripcion: 'Para sistemas personalizados que necesitan seguimiento más cercano.',
      caracteristicas: ['Atención prioritaria de incidencias', 'Revisión preventiva del sistema', 'Ajustes menores acordados', 'Acompañamiento operativo'],
      nota: 'Mensualidad. No incluye infraestructura, servicios externos ni desarrollo de módulos nuevos.'
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