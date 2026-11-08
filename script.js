/* GMZ Digital Solutions — renderizado del sitio */
const $ = (id) => document.getElementById(id);
const safe = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
const whatsappUrl = (message) =>
  "https://wa.me/" + CONFIG.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(message);

if ($("lista-servicios")) {
  $("ubicacion").textContent = CONFIG.ubicacion;
  $("anio").textContent = new Date().getFullYear();

  $("lista-servicios").innerHTML = CONFIG.servicios.map((service) => `
    <article class="service-card">
      <span class="service-card__number">SERVICE / ${safe(service.numero)}</span>
      <h3>${safe(service.titulo)}</h3>
      <p>${safe(service.descripcion)}</p>
    </article>
  `).join("");

  $("lista-proyectos").innerHTML = CONFIG.proyectos.map((project) => `
    <article class="project-card">
      <div class="project-card__visual" aria-hidden="true"><span>${safe(project.iniciales)}</span></div>
      <div class="project-card__body">
        <span class="project-card__tag">${safe(project.categoria)}</span>
        <h3>${safe(project.titulo)}</h3>
        <p>${safe(project.descripcion)}</p>
        <a href="${safe(project.url)}" target="_blank" rel="noopener noreferrer">Ver proyecto ↗</a>
      </div>
    </article>
  `).join("");

  $("boton-whatsapp").href = whatsappUrl("Hola, vi la página de GMZ Digital Solutions y me gustaría cotizar una página web para mi negocio.");
  $("boton-whatsapp").target = "_blank";
  $("boton-whatsapp").rel = "noopener noreferrer";
  $("boton-correo").href = "mailto:" + CONFIG.correo + "?subject=" + encodeURIComponent("Cotización de página web — GMZ Digital Solutions");
}