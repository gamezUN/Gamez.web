/* =========================================================
   GÁMEZ WEB — CONFIGURACIÓN EDITABLE
   Modifica aquí tus datos, servicios, paquetes y proyectos.
   ========================================================= */
const CONFIG = {
  marca: 'GÁMEZ WEB',
  subtitulo: 'Soluciones digitales y desarrollo web',
  titular: 'Tu negocio merece una mejor presencia y operación digital.',
  descripcion: 'Diseñamos y desarrollamos páginas web, catálogos digitales y herramientas de gestión para negocios. Primero entendemos tus necesidades; después proponemos una solución con alcance, tiempos y costos claros.',
  correo: 'gamez.desarrolloweb@gmail.com',
  whatsapp: '527474202033',
  ubicacion: 'Nuevo León, México',
  mostrarPrecios: true,
  servicios: [
    { icono: '◈', titulo: 'Páginas web', descripcion: 'Presenta tu negocio, servicios, horarios y medios de contacto con una experiencia profesional y adaptable a celulares.' },
    { icono: '▦', titulo: 'Catálogos digitales', descripcion: 'Organiza tus productos por categorías, muestra fotografías y facilita que tus clientes soliciten información.' },
    { icono: '⚙', titulo: 'Sistemas de gestión', descripcion: 'Diseño de paneles administrativos y herramientas para organizar clientes, proyectos y procesos del negocio, según diagnóstico.' },
    { icono: '↗', titulo: 'Soporte y evolución', descripcion: 'Actualizaciones de contenido, mejoras y acompañamiento con un alcance acordado.' }
  ],
  paquetes: [
    {
      nombre: 'Presencia Digital', precio: 1499, unidad: 'MXN', destacado: false,
      descripcion: 'Una presencia profesional para que tus clientes encuentren y conozcan tu negocio.',
      caracteristicas: ['Página web informativa', 'Diseño adaptable a celulares', 'Información, horarios y ubicación', 'Botón directo a WhatsApp', 'Catálogo básico o muestra de servicios'],
      nota: 'Pago inicial. Dominio propio y funciones adicionales se cotizan por separado.'
    },
    {
      nombre: 'Digital Business', precio: 2999, unidad: 'MXN', destacado: true,
      descripcion: 'Para negocios que necesitan presentar y actualizar sus productos o servicios.',
      caracteristicas: ['Todo lo incluido en Presencia Digital', 'Catálogo digital administrable', 'Organización de productos por categorías', 'Formularios de contacto', 'Configuración y capacitación básica'],
      nota: 'Pago inicial. La cantidad de productos y el alcance de administración se definen en la cotización.'
    },
    {
      nombre: 'Business Management', precio: 4999, unidad: 'MXN', destacado: false,
      descripcion: 'Una solución administrativa diseñada alrededor de los procesos de tu negocio.',
      caracteristicas: ['Sitio web y catálogo según alcance', 'Diagnóstico de procesos administrativos', 'Diseño de CRM para clientes y proyectos', 'Planeación de control de pagos y seguimiento', 'Configuración y capacitación acordadas'],
      nota: 'Desde este precio. El CRM y sus módulos requieren diagnóstico, cotización y validación técnica; no se ofrece aún como plataforma multiempresa lista para usar. Integraciones de pago e IA no están incluidas.'
    }
  ],
  mantenimiento: [
    {
      nombre: 'Web Care', precio: 149,
      descripcion: 'Para mantener actualizada la información de tu página.',
      caracteristicas: ['Ajustes menores de texto', 'Actualización sencilla de información', 'Revisión básica de enlaces y contenido'],
      nota: 'Mensualidad. Cambios grandes, nuevas secciones y rediseños se cotizan aparte.'
    },
    {
      nombre: 'Catalog Care', precio: 249,
      descripcion: 'Para negocios que actualizan productos y promociones.',
      caracteristicas: ['Actualizaciones sencillas de productos', 'Cambios acordados de fotografías o precios', 'Apoyo para mantener categorías y contenido'],
      nota: 'Mensualidad con alcance acordado. No incluye carga ilimitada de productos.'
    },
    {
      nombre: 'Business Support', precio: 399,
      descripcion: 'Acompañamiento para sistemas administrativos implementados.',
      caracteristicas: ['Soporte de uso', 'Revisión de incidencias', 'Ajustes menores previamente acordados'],
      nota: 'Disponible cuando el sistema esté implementado y validado. No incluye nuevas funciones ni infraestructura de terceros.'
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