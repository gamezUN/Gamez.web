/* GÁMEZ WEB — servicios, planes y precios */
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
  paquetes: [
    {
      nombre: 'GMZ Básico', precio: 1500, precioTexto: 'Desde $1,500 MXN', unidad: 'MXN', destacado: true,
      descripcion: 'Para negocios que quieren comenzar a verse profesionales en internet.',
      caracteristicas: ['Catálogo digital o landing page', 'Diseño adaptable a celulares', 'Botón de contacto por WhatsApp', 'Configuración y publicación'],
      nota: 'Catálogo desde $1,500 MXN. Landing page desde $2,500 MXN.'
    },
    {
      nombre: 'GMZ Crecimiento', precio: 6000, precioTexto: 'Desde $6,000 MXN', unidad: 'MXN', destacado: false,
      descripcion: 'Para negocios que necesitan organizar clientes, ventas y tareas administrativas.',
      caracteristicas: ['CRM administrativo base GMZ', 'Registro y seguimiento de clientes', 'Organización de oportunidades y ventas', 'Panel de consulta y control'],
      nota: 'La versión base se cotiza entre $6,000 y $8,000 MXN, según configuración y alcance.'
    },
    {
      nombre: 'GMZ Profesional', precio: 10000, precioTexto: 'Desde $10,000 MXN', unidad: 'MXN', destacado: false,
      descripcion: 'Para empresas que requieren procesos digitales diseñados a su manera.',
      caracteristicas: ['Sistemas administrativos personalizados', 'Módulos y permisos según operación', 'Reportes y flujos de trabajo', 'Integraciones sujetas a diagnóstico'],
      nota: 'Proyectos especializados de $10,000 a $18,000 MXN. Se define después del diagnóstico.'
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