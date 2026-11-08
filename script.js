/* GMZ Digital Solutions — renderizado del sitio */
const $ = (id) => document.getElementById(id);
const safe = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[char]));
const whatsappUrl = (message) => "https://wa.me/" + CONFIG.whatsapp.replace(/\D/g,"") + "?text=" + encodeURIComponent(message);
const sectionList = (title, items) => `<section class="detail-block"><h3>${safe(title)}</h3><ul>${items.map(item=>`<li>${safe(item)}</li>`).join("")}</ul></section>`;

if ($("lista-servicios")) {
  $("ubicacion").textContent=CONFIG.ubicacion;
  $("anio").textContent=new Date().getFullYear();
  $("lista-servicios").innerHTML=CONFIG.servicios.map(service=>`
    <article class="service-card">
      <span class="service-card__number">SERVICE / ${safe(service.numero)}</span>
      <h3>${safe(service.titulo)}</h3><p>${safe(service.descripcion)}</p>
      <button class="text-action" type="button" data-detail="service" data-id="${safe(service.numero)}">Conocer el servicio</button>
    </article>`).join("");
  document.querySelectorAll(".price-card").forEach((card,index)=>{
    const button=document.createElement("button");
    button.type="button";button.className="text-action";button.dataset.detail="plan";button.dataset.id=String(index);
    button.textContent="Ver detalles del paquete";card.append(button);
  });
  const detail=$("detalle"), serviceSection=$("servicios"), pricingSection=$("precios"), workSection=$("proyectos");
  let previousSection=serviceSection;
  function openDetail(type,id){
    let item, blocks=[];
    if(type==="service"){
      item=CONFIG.servicios.find(x=>x.numero===id);
      if(!item)return;
      blocks.push(sectionList("Qué incluye",item.incluye));
      blocks.push(`<section class="detail-block"><h3>Qué necesitamos de tu negocio</h3><p>${safe(item.requiere)}</p></section>`);
    } else {
      item=CONFIG.planes[Number(id)];
      if(!item)return;
      blocks.push(sectionList("Qué incluye",item.incluye));
      blocks.push(sectionList("Qué influye en el precio",item.factores));
      blocks.push(sectionList("Qué no incluye",item.noIncluye));
      blocks.push(`<section class="detail-block"><h3>Qué necesitamos de tu negocio</h3><p>${safe(item.requiere)}</p></section>`);
    }
    previousSection=type==="service"?serviceSection:pricingSection;
    $("detalle-titulo").textContent=type==="service"?item.titulo:item.nombre+" · "+item.precio;
    $("detalle-intro").textContent=type==="service"?item.detalle:item.resumen+" El rango mostrado es orientativo; la propuesta final se define después de revisar el alcance.";
    $("detalle-contenido").innerHTML=blocks.join("");
    $("detalle-cotizar").href=whatsappUrl("Hola, quiero solicitar una cotización de "+(type==="service"?item.titulo:item.nombre)+". ¿Podemos revisar el alcance?");
    $("detalle-cotizar").target="_blank";$("detalle-cotizar").rel="noopener noreferrer";
    serviceSection.hidden=true;pricingSection.hidden=true;workSection.hidden=true;detail.hidden=false;
    detail.scrollIntoView({behavior:"smooth",block:"start"});
  }
  function closeDetail(){
    detail.hidden=true;serviceSection.hidden=false;pricingSection.hidden=false;workSection.hidden=false;
    previousSection.scrollIntoView({behavior:"smooth",block:"start"});
  }
  document.addEventListener("click",event=>{
    const button=event.target.closest("[data-detail]");
    if(button)openDetail(button.dataset.detail,button.dataset.id);
  });
  $("detalle-regresar").addEventListener("click",closeDetail);
  $("detalle-regresar-secundario").addEventListener("click",closeDetail);
  $("lista-proyectos").innerHTML=CONFIG.proyectos.map(project=>`
    <article class="project-card"><div class="project-card__visual" aria-hidden="true"><span>${safe(project.iniciales)}</span></div>
    <div class="project-card__body"><span class="project-card__tag">${safe(project.categoria)}</span><h3>${safe(project.titulo)}</h3>
    <p>${safe(project.descripcion)}</p><a href="${safe(project.url)}" target="_blank" rel="noopener noreferrer">Ver proyecto</a></div></article>`).join("");
  $("boton-whatsapp").href=whatsappUrl("Hola, vi la página de GMZ Digital Solutions y me gustaría cotizar una página web para mi negocio.");
  $("boton-whatsapp").target="_blank";$("boton-whatsapp").rel="noopener noreferrer";
  $("boton-correo").href="mailto:"+CONFIG.correo+"?subject="+encodeURIComponent("Cotización de página web — GMZ Digital Solutions");
}