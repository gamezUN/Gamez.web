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
      nombre: 'GMZ Básico', precio: 1500, unidad: 'MXN', destacado: true,
      descripcion: 'La presencia digital que tu negocio necesita para comenzar a captar clientes.',
      caracteristicas: ['Catálogo digital desde $1,500 MXN', 'Landing page empresarial desde $2,500 MXN', 'Diseño adaptable a celulares', 'Contacto directo por WhatsApp', 'Configuración y publicación'],
      nota: 'El precio depende del tipo de página, contenido y alcance. Se define antes de iniciar.'
    },
    {
      nombre: 'GMZ Profesional', precio: 10000, unidad: 'MXN', destacado: false,
      descripcion: 'Herramientas digitales para empresas que necesitan organizar y optimizar sus procesos.',
      caracteristicas: ['CRM y sistemas administrativos', 'Gestión de clientes y seguimiento comercial', 'Módulos según las necesidades del negocio', 'Reportes, usuarios y procesos personalizados', 'Diagnóstico empresarial y propuesta de desarrollo'],
      nota: 'Proyectos especializados de $10,000 a $18,000 MXN. El presupuesto final se presenta después del diagnóstico y definición de alcance.'
    }
  ],
  mantenimiento: [
    {
      nombre: 'Soporte Básico', precio: 300,
      descripcion: 'Acompañamiento para mantener tu página o catálogo actualizado.',
      caracteristicas: ['Actualizaciones menores de contenido', 'Cambios sencillos de productos o información', 'Revisión básica de funcionamiento'],
      nota: 'Mensualidad. No incluye rediseños, nuevas secciones ni cambios ilimitados.'
    },
    {
      nombre: 'Soporte Profesional', precio: 600,
      descripcion: 'Seguimiento para sistemas administrativos y soluciones empresariales.',
      caracteristicas: ['Soporte de uso y atención de incidencias', 'Revisión general del sistema', 'Ajustes menores previamente acordados', 'Acompañamiento operativo'],
      nota: 'Mensualidad. Nuevos módulos, integraciones, infraestructura y cambios mayores se cotizan por separado.'
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