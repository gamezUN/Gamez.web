/* =========================================================
   GÁMEZ WEB — CONFIGURACIÓN EDITABLE
   Modifica aquí tus datos, servicios, paquetes y proyectos.
   No necesitas cambiar index.html ni styles.css para precios.
   ========================================================= */
const CONFIG = {
  marca: 'GÁMEZ WEB',
  subtitulo: 'Desarrollo web independiente',
  titular: 'Tu negocio merece una mejor presencia en internet.',
  descripcion: 'Diseño páginas informativas y catálogos digitales para negocios que quieren mostrar sus productos, explicar sus servicios y facilitar el contacto con sus clientes.',
  correo: 'gamez.desarrolloweb@gmail.com',
  whatsapp: '527474202033', // México (52) + 10 dígitos; sin espacios ni +
  ubicacion: 'Nuevo León, México',
  mostrarPrecios: true, // false = sustituye precios por "Cotización personalizada"
  servicios: [
    { icono: '◈', titulo: 'Páginas informativas', descripcion: 'Presenta tu negocio, horarios, ubicación y medios de contacto.' },
    { icono: '▦', titulo: 'Catálogos digitales', descripcion: 'Muestra productos o servicios con fotografías y detalles.' },
    { icono: '↗', titulo: 'Contacto por WhatsApp', descripcion: 'Facilita que tus visitantes te escriban directamente.' },
    { icono: '⚙', titulo: 'Actualizaciones', descripcion: 'Cambios de texto, fotografías y contenido acordados previamente.' }
  ],
  paquetes: [
    {
      nombre: 'Página esencial', precio: 1500, unidad: 'MXN', destacado: true,
      descripcion: 'Precio de lanzamiento para los primeros proyectos.',
      caracteristicas: ['Una página adaptable a celular', 'Hasta 50 fotografías proporcionadas por el cliente', 'Información, horarios y ubicación', 'Botón de contacto', 'Una ronda de correcciones'],
      nota: 'No incluye dominio de pago ni mantenimiento ilimitado.'
    },
    {
      nombre: 'Catálogo digital', precio: 700, unidad: 'MXN', destacado: false,
      descripcion: 'Para mostrar tus productos y facilitar consultas.',
      caracteristicas: ['Diseño adaptado al negocio', 'Productos organizados por categorías', 'Fotografías y descripciones', 'Contacto para solicitar información', 'Alcance y cantidad de productos por acordar'],
      nota: 'Se cotiza según la cantidad de productos y funciones.'
    },
    {
      nombre: 'Actualizaciones', precio: 100, unidad: 'MXN', destacado: false,
      descripcion: 'Cambios pequeños a una página existente.',
      caracteristicas: ['Corrección de textos o precios', 'Hasta 3 cambios sencillos de imagen', 'Cotización previa de cambios grandes'],
      nota: 'Precio por solicitud sencilla; no es una mensualidad.'
    }
  ],
  proyectos: [
    { titulo: 'DNZ Mobiles', categoria: 'Catálogo digital · Proyecto real', descripcion: 'Catálogo de accesorios para celulares, desarrollado como muestra de trabajo comercial.', url: 'https://gamezun.github.io/DNZ-Mobiles/', iniciales: 'DNZ' }
  ],
  pasos: [
    { titulo: 'Me cuentas tu idea', descripcion: 'Revisamos qué necesita realmente tu negocio.' },
    { titulo: 'Definimos el alcance', descripcion: 'Te presento una cotización con entregables y tiempos.' },
    { titulo: 'Diseño y desarrollo', descripcion: 'Preparo tu página y revisamos una primera versión.' },
    { titulo: 'Publicación', descripcion: 'Con tu aprobación, dejamos la página disponible en internet.' }
  ]
};
