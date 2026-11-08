/* GMZ ENTERPRISE — renderizado de contenido */
const $ = (id) => document.getElementById(id);
const safe = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));

const whatsappUrl = (message) =>
  "https://wa.me/" + CONFIG.whatsapp.replace(/\D/g, "") + "?text=" + encodeURIComponent(message);

if ($("lista-servicios")) {
  $("ubicacion").textContent = "⌖ " + CONFIG.ubicacion;
  $("anio").textContent = new Date().getFullYear();

  $("lista-servicios").innerHTML = CONFIG.servicios.map((service, index) => `
    <article class="service-card">
      <span class="service-card__index">CAPABILITY / 0${index + 1}</span>
      <h3>${safe(service.titulo)}</h3>
      <p>${safe(service.descripcion)}</p>
    </article>
  `).join("");

  $("lista-planes").innerHTML = CONFIG.planes.map((plan, index) => `
    <article class="plan-card ${index === 1 ? "plan-card--featured" : ""}">
      <span class="plan-card__label">SOLUTION / ${safe(plan.numero)}</span>
      <h3>${safe(plan.nombre)}</h3>
      <p class="plan-card__price">${safe(plan.precio)} MXN</p>
      <p>${safe(plan.descripcion)}</p>
      <ul>${plan.incluye.map((item) => `<li>${safe(item)}</li>`).join("")}</ul>
      <a href="${whatsappUrl(plan.mensaje)}" target="_blank" rel="noopener noreferrer">Solicitar diagnóstico ↗</a>
    </article>
  `).join("");

  $("lista-proyectos").innerHTML = CONFIG.proyectos.map((project) => `
    <article class="project-card">
      <div class="project-card__visual" aria-hidden="true">${safe(project.iniciales)}</div>
      <div class="project-card__body">
        <span class="project-card__tag">${safe(project.categoria)}</span>
        <h3>${safe(project.titulo)}</h3>
        <p>${safe(project.descripcion)}</p>
        <a href="${safe(project.url)}" target="_blank" rel="noopener noreferrer">Ver proyecto ↗</a>
      </div>
    </article>
  `).join("");

  $("lista-pasos").innerHTML = CONFIG.pasos.map((step, index) => `
    <article class="step-card">
      <span class="step-card__number">0${index + 1}</span>
      <h3>${safe(step.titulo)}</h3>
      <p>${safe(step.descripcion)}</p>
    </article>
  `).join("");

  $("boton-whatsapp").href = whatsappUrl("Hola, vi la página de GMZ ENTERPRISE y quisiera hablar sobre una solución digital para mi negocio.");
  $("boton-whatsapp").target = "_blank";
  $("boton-whatsapp").rel = "noopener noreferrer";
  $("boton-correo").href = "mailto:" + CONFIG.correo + "?subject=" + encodeURIComponent("Proyecto — GMZ ENTERPRISE");
}