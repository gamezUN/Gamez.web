/* GÁMEZ WEB — oferta comercial simplificada */
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
  planes: [
    {
      id: 'presencia', numero: '01', nombre: 'Presencia digital', precio: '$1,500–$2,500',
      descripcion: 'Para negocios que necesitan presentarse profesionalmente en internet.',
      incluye: [
        'Página web profesional o catálogo digital',
        'Información del negocio, productos o servicios',
        'Integración con WhatsApp',
        'Diseño adaptable a celulares',
        'Publicación y configuración inicial'
      ],
      mensaje: 'Hola, me interesa el plan 01 Presencia digital de GÁMEZ WEB. Quisiera conocer el alcance para mi negocio.'
    },
    {
      id: 'business', numero: '02', nombre: 'Business', precio: '$3,500–$5,000',
      descripcion: 'Para negocios que buscan organizar clientes, prospectos y oportunidades de venta.',
      incluye: [
        'Registro de clientes y prospectos',
        'Seguimiento de oportunidades comerciales',
        'Panel administrativo básico',
        'Organización y consulta de información',
        'Opción de integrar botón de pago (costo adicional)'
      ],
      mensaje: 'Hola, me interesa el plan 02 Business de GÁMEZ WEB. Quisiera revisar cómo organizar los clientes y ventas de mi negocio.'
    },
    {
      id: 'management', numero: '03', nombre: 'Management', precio: '$5,000–$8,000',
      descripcion: 'Para negocios que necesitan digitalizar procesos administrativos internos.',
      incluye: [
        'Sistemas administrativos personalizados',
        'Módulos y procesos internos',
        'Reportes y estadísticas',
        'Automatizaciones e integraciones según alcance',
        'Opción de integrar botón de pago (costo adicional)'
      ],
      mensaje: 'Hola, me interesa el plan 03 Management de GÁMEZ WEB. Quisiera solicitar un diagnóstico para un sistema administrativo.'
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