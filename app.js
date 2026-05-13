const stages = ["Nuevo", "Calificado", "Visita", "Reserva", "Cierre"];
const sources = ["WhatsApp", "Facebook", "Instagram", "X", "Recomendaciones", "Otros"];

const seedLeads = [
  {
    id: 1,
    name: "Mariana Dupont",
    source: "WhatsApp",
    stage: "Calificado",
    priority: "Alta",
    need: "Departamento 2 dormitorios para renta corporativa",
    zone: "Villa Morra",
    budget: 185000,
    timeframe: "0-30 dias",
    project: "Nostrum Villa Morra",
    developer: "Alto Desarrollos",
    owner: "Agente",
    followup: "2026-05-12T15:30",
    country: "Francia",
    clientType: "Extranjero",
    status: "Activo",
    history: ["WhatsApp inicial: pidio opciones de 2 dormitorios en Villa Morra."],
    notes: "Quiere escritura clara, amenities y administracion profesional para renta.",
  },
  {
    id: 2,
    name: "Rafael Benitez",
    source: "Instagram",
    stage: "Nuevo",
    priority: "Media",
    need: "Monoambiente premium para inversion",
    zone: "Ycua Sati",
    budget: 92000,
    timeframe: "1-3 meses",
    project: "Urban Ycua Sati",
    developer: "Habita Group",
    owner: "Asistente",
    followup: "2026-05-13T09:00",
    country: "Paraguay",
    clientType: "Local",
    status: "Activo",
    history: ["Instagram: respondio a reel de amenities y solicito precios."],
    notes: "Llego por reel de amenities. Pregunto por financiacion propia.",
  },
  {
    id: 3,
    name: "Camila Rojas",
    source: "Facebook",
    stage: "Visita",
    priority: "Alta",
    need: "Departamento familiar 3 dormitorios",
    zone: "Carmelitas",
    budget: 310000,
    timeframe: "0-30 dias",
    project: "Carmelitas Park",
    developer: "Grupo Nodo",
    owner: "Agente",
    followup: "2026-05-12T18:00",
    country: "Chile",
    clientType: "Extranjero",
    status: "Activo",
    history: ["Facebook: cliente de campana anterior, ya pidio visita presencial."],
    notes: "Viaja este fin de semana. Necesita recorrido corto y comparativo de unidades.",
  },
  {
    id: 4,
    name: "Diego Alvarez",
    source: "Recomendaciones",
    stage: "Reserva",
    priority: "Alta",
    need: "Piso alto con vista y cochera doble",
    zone: "Las Lomas",
    budget: 420000,
    timeframe: "0-30 dias",
    project: "Lomas Prime",
    developer: "Atria Developments",
    owner: "Agente",
    followup: "2026-05-15T11:00",
    country: "Uruguay",
    clientType: "Extranjero",
    status: "Activo",
    history: ["Recomendacion: contacto referido por oficina, revisando contrato."],
    notes: "Analiza contrato. Recordar explicacion de comision incluida en operacion.",
  },
  {
    id: 5,
    name: "Sofia Kim",
    source: "WhatsApp",
    stage: "Calificado",
    priority: "Media",
    need: "Unidad para expatriado cerca de oficinas",
    zone: "Mburucuya",
    budget: 165000,
    timeframe: "3-6 meses",
    project: "Mburucuya 360",
    developer: "Axis Real Estate",
    owner: "Asistente",
    followup: "2026-05-14T10:30",
    country: "Corea del Sur",
    clientType: "Extranjero",
    status: "Activo",
    history: ["WhatsApp: pidio atencion en ingles y propuesta para expatriado."],
    notes: "Busca proceso en ingles y alternativas con administracion de alquiler.",
  },
  {
    id: 6,
    name: "Grupo Ventura",
    source: "Recomendaciones",
    stage: "Cierre",
    priority: "Alta",
    need: "Compra de 2 unidades para cartera familiar",
    zone: "Villa Morra",
    budget: 520000,
    timeframe: "0-30 dias",
    project: "Nostrum Villa Morra",
    developer: "Alto Desarrollos",
    owner: "Agente",
    followup: "2026-05-12T12:00",
    country: "Argentina",
    clientType: "Inversionista",
    status: "Activo",
    history: ["Recomendacion: cartera familiar interesada en dos unidades."],
    notes: "Enviar flujo de pagos y unidades disponibles actualizadas.",
  },
  {
    id: 7,
    name: "Nicolas Paez",
    source: "Instagram",
    stage: "Nuevo",
    priority: "Baja",
    need: "Primera vivienda cerca de vida nocturna",
    zone: "Sajonia",
    budget: 78000,
    timeframe: "+6 meses",
    project: "Sajonia Rio",
    developer: "Orilla Urbana",
    owner: "Asistente",
    followup: "2026-05-18T16:00",
    country: "Paraguay",
    clientType: "Local",
    status: "Activo",
    history: ["Instagram: lead frio, necesita educacion financiera."],
    notes: "Aun compara alquiler vs compra. Nutrir con contenido educativo.",
  },
  {
    id: 8,
    name: "Valentina Estevez",
    source: "WhatsApp",
    stage: "Visita",
    priority: "Alta",
    need: "Departamento 1 dormitorio para Airbnb ejecutivo",
    zone: "Carmelitas",
    budget: 145000,
    timeframe: "1-3 meses",
    project: "Carmelitas Park",
    developer: "Grupo Nodo",
    owner: "Agente",
    followup: "2026-05-13T17:00",
    country: "Espana",
    clientType: "Extranjero",
    status: "Activo",
    history: ["WhatsApp: pidio ROI estimado y reglamento de alquiler temporal."],
    notes: "Quiere ROI estimado y reglamento de alquiler temporario.",
  },
];

const seedProjects = [
  { id: 101, name: "Nostrum Villa Morra", zone: "Villa Morra", developer: "Alto Desarrollos", priceFrom: 118000, priceTo: 340000, inventory: 18, commission: 5, status: "Activo", delivery: "2027-08", notes: "Producto premium para renta corporativa y compradores extranjeros." },
  { id: 102, name: "Carmelitas Park", zone: "Carmelitas", developer: "Grupo Nodo", priceFrom: 135000, priceTo: 390000, inventory: 11, commission: 5, status: "Activo", delivery: "2026-12", notes: "Buenas unidades para familias y Airbnb ejecutivo." },
  { id: 103, name: "Lomas Prime", zone: "Las Lomas", developer: "Atria Developments", priceFrom: 210000, priceTo: 620000, inventory: 7, commission: 5, status: "Activo", delivery: "2028-03", notes: "Ticket alto, ideal para clientes patrimoniales." },
  { id: 104, name: "Urban Ycua Sati", zone: "Ycua Sati", developer: "Habita Group", priceFrom: 82000, priceTo: 210000, inventory: 24, commission: 5, status: "Activo", delivery: "2027-02", notes: "Entrada competitiva para inversionistas chicos." },
  { id: 105, name: "Mburucuya 360", zone: "Mburucuya", developer: "Axis Real Estate", priceFrom: 126000, priceTo: 280000, inventory: 15, commission: 5, status: "Activo", delivery: "2026-10", notes: "Cerca de oficinas, bueno para expatriados." },
  { id: 106, name: "Sajonia Rio", zone: "Sajonia", developer: "Orilla Urbana", priceFrom: 69000, priceTo: 180000, inventory: 21, commission: 5, status: "Activo", delivery: "2027-06", notes: "Proyecto de entrada con narrativa de crecimiento urbano." },
];

const seedUsers = [
  { id: 1, name: "Admin RE/MAX", email: "admin@remax.py", password: "admin123", role: "Admin", status: "Activo" },
  { id: 2, name: "Agente Comercial", email: "agente@remax.py", password: "agente123", role: "Agente", status: "Activo" },
  { id: 3, name: "Asistente CRM", email: "asistente@remax.py", password: "asistente123", role: "Asistente", status: "Activo" },
];

let leads = loadLeads();
let projects = loadProjects();
let users = loadUsers();
let currentUserId = Number(localStorage.getItem("remaxCrmSession") || 0);
let sortByPriority = false;
const paginationState = {
  dashboard: { page: 1, pageSize: 5 },
  directory: { page: 1, pageSize: 6 },
};

saveLeads();
saveProjects();
saveUsers();

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const pygCurrency = new Intl.NumberFormat("es-PY", {
  style: "currency",
  currency: "PYG",
  maximumFractionDigits: 0,
});

function loadLeads() {
  const stored = localStorage.getItem("remaxCrmLeads");
  const raw = stored ? JSON.parse(stored) : seedLeads;
  return raw.map(normalizeLead);
}

function normalizeLead(lead) {
  const migratedSource = lead.source === "Excel" ? "Facebook" : ["Corporativo", "Asistente"].includes(lead.source) ? "Recomendaciones" : lead.source;
  const history = (lead.history?.length ? lead.history : [`Lead creado desde ${lead.source || "canal sin definir"}.`]).map(migrateHistoryText);
  return {
    status: "Activo",
    clientType: lead.country && lead.country !== "Paraguay" ? "Extranjero" : "Local",
    source: migratedSource || "Otros",
    history,
    ...lead,
    source: migratedSource || lead.source || "Otros",
    followup: normalizeFollowup(lead.followup),
    history,
  };
}

function migrateHistoryText(text) {
  return String(text)
    .replaceAll("Excel importado", "Facebook")
    .replaceAll("desde Excel", "desde Facebook")
    .replaceAll("desde Corporativo", "desde Recomendaciones")
    .replaceAll("desde Asistente", "desde Recomendaciones")
    .replaceAll("Corporativo:", "Recomendacion:")
    .replaceAll("Asistente:", "Recomendacion:");
}

function normalizeFollowup(value) {
  if (!value) return localDateTimeValue(24);
  if (!Number.isNaN(new Date(value).getTime())) return value;
  const text = String(value).toLowerCase();
  const time = text.match(/(\d{1,2}):(\d{2})/);
  const hour = time ? time[1].padStart(2, "0") : "10";
  const minute = time ? time[2] : "00";
  let date = "2026-05-12";
  if (text.includes("manana")) date = "2026-05-13";
  if (text.includes("jueves")) date = "2026-05-14";
  if (text.includes("viernes")) date = "2026-05-15";
  if (text.includes("lunes")) date = "2026-05-18";
  return `${date}T${hour}:${minute}`;
}

function saveLeads() {
  localStorage.setItem("remaxCrmLeads", JSON.stringify(leads));
}

function loadProjects() {
  const stored = localStorage.getItem("remaxCrmProjects");
  return stored ? JSON.parse(stored) : seedProjects;
}

function saveProjects() {
  localStorage.setItem("remaxCrmProjects", JSON.stringify(projects));
}

function loadUsers() {
  const stored = localStorage.getItem("remaxCrmUsers");
  return stored ? JSON.parse(stored) : seedUsers;
}

function saveUsers() {
  localStorage.setItem("remaxCrmUsers", JSON.stringify(users));
}

function currentUser() {
  return users.find((user) => user.id === currentUserId && user.status === "Activo");
}

function getFilters() {
  return {
    search: qs("#searchInput").value.trim().toLowerCase(),
    source: qs("#sourceFilter").value,
    stage: qs("#stageFilter").value,
    zone: qs("#zoneFilter").value,
    priority: qs("#priorityFilter").value,
  };
}

function filteredLeads() {
  const filters = getFilters();
  let result = leads.filter((lead) => {
    const haystack = [lead.name, lead.need, lead.zone, lead.project, lead.country, lead.clientType, lead.status, lead.followup, lead.notes, ...(lead.history || [])]
      .join(" ")
      .toLowerCase();
    return (
      (!filters.search || haystack.includes(filters.search)) &&
      (filters.source === "all" || lead.source === filters.source) &&
      (filters.stage === "all" || lead.stage === filters.stage) &&
      (filters.zone === "all" || lead.zone === filters.zone) &&
      (filters.priority === "all" || lead.priority === filters.priority)
    );
  });

  if (sortByPriority) {
    const order = { Alta: 1, Media: 2, Baja: 3 };
    result = result.sort((a, b) => order[a.priority] - order[b.priority] || b.budget - a.budget);
  }

  return result;
}

function priorityClass(priority) {
  return priority === "Alta" ? "red" : priority === "Media" ? "gold" : "green";
}

function sourceClass(source) {
  if (source === "WhatsApp") return "green";
  if (["Instagram", "Facebook"].includes(source)) return "red";
  if (source === "X") return "blue";
  if (source === "Recomendaciones") return "gold";
  return "blue";
}

function formatFollowup(value) {
  if (!value) return "Sin fecha";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("es-PY", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function localDateTimeValue(offsetHours = 24) {
  const date = new Date(Date.now() + offsetHours * 60 * 60 * 1000);
  date.setMinutes(Math.ceil(date.getMinutes() / 15) * 15, 0, 0);
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function projectPrice(project) {
  return `${currency.format(project.priceFrom)} - ${currency.format(project.priceTo)}`;
}

function renderMetrics(data) {
  const totalValue = data.reduce((sum, lead) => sum + lead.budget, 0);
  const hot = data.filter((lead) => lead.priority === "Alta").length;
  const foreign = data.filter((lead) => lead.clientType === "Extranjero" || lead.country !== "Paraguay").length;
  const visits = data.filter((lead) => ["Visita", "Reserva", "Cierre"].includes(lead.stage)).length;

  qs("#hotLeadsCount").textContent = hot;
  qs("#monthValue").textContent = currency.format(totalValue);
  qs("#commissionValue").textContent = currency.format(totalValue * 0.05);

  qs("#metricGrid").innerHTML = [
    ["Leads activos", data.length, "Base centralizada"],
    ["Clientes extranjeros", foreign, "Atencion bilingue"],
    ["Visitas y cierres", visits, "Oportunidades maduras"],
    ["Comision estimada", currency.format(totalValue * 0.05), "Departamentos al 5%"],
  ]
    .map(
      ([label, value, note]) => `
        <article class="metric">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${note}</small>
        </article>
      `,
    )
    .join("");
}

function renderValuation() {
  const usd = Number(qs("#valuationUsd")?.value || 0);
  const rate = Number(qs("#valuationRate")?.value || 0);
  const area = Number(qs("#valuationArea")?.value || 0);
  const pyg = usd * rate;
  qs("#valuationPyg").textContent = pygCurrency.format(pyg);
  qs("#valuationM2").textContent = area > 0 ? `${currency.format(usd / area)} / m2` : "$0 / m2";
  qs("#valuationUsdLabel").textContent = currency.format(usd);
}

function renderPipeline(data) {
  const max = Math.max(...stages.map((stage) => data.filter((lead) => lead.stage === stage).length), 1);
  qs("#pipelineBars").innerHTML = stages
    .map((stage) => {
      const count = data.filter((lead) => lead.stage === stage).length;
      const value = data.filter((lead) => lead.stage === stage).reduce((sum, lead) => sum + lead.budget, 0);
      return `
        <div class="stage-row">
          <strong>${stage}</strong>
          <div class="bar-track"><div class="bar-fill" style="width:${(count / max) * 100}%"></div></div>
          <span>${count} | ${currency.format(value)}</span>
        </div>
      `;
    })
    .join("");
}

function renderSourceChart(data) {
  const max = Math.max(...sources.map((source) => data.filter((lead) => lead.source === source).length), 1);
  qs("#sourceChart").innerHTML = sources
    .map((source) => {
      const count = data.filter((lead) => lead.source === source).length;
      const value = data.filter((lead) => lead.source === source).reduce((sum, lead) => sum + lead.budget, 0);
      return `
        <button class="source-card" type="button" data-source="${source}">
          <span class="source-label"><i class="source-dot ${sourceClass(source)}"></i>${source}</span>
          <strong>${count}</strong>
          <div class="source-card-bar"><span style="width:${(count / max) * 100}%"></span></div>
          <small>${currency.format(value)}</small>
        </button>
      `;
    })
    .join("");
}

function leadRow(lead) {
  return `
    <button class="lead-row" type="button" data-id="${lead.id}">
      <span class="lead-name">
        <strong>${lead.name}</strong>
        <span>${lead.need}</span>
      </span>
      <span class="mini-meta">
        <strong>${lead.zone}</strong>
        <span>${lead.project} · ${lead.country}</span>
      </span>
      <span class="pill ${sourceClass(lead.source)}">${lead.source}</span>
      <span class="mini-meta">
        <strong>${currency.format(lead.budget)}</strong>
        <span>${lead.timeframe}</span>
      </span>
      <span class="pill ${priorityClass(lead.priority)}">${lead.priority}</span>
    </button>
  `;
}

function renderLeadTables(data) {
  const empty = `<div class="detail-box"><strong>No hay resultados</strong><span>Ajusta los filtros o crea un nuevo lead.</span></div>`;
  const dashboardPage = paginate(data, paginationState.dashboard);
  const directoryPage = paginate(data, paginationState.directory);
  qs("#leadTable").innerHTML = dashboardPage.items.length ? dashboardPage.items.map(leadRow).join("") : empty;
  qs("#leadDirectory").innerHTML = directoryPage.items.length ? directoryPage.items.map(leadRow).join("") : empty;
  renderPagination("#leadTablePagination", "dashboard", dashboardPage);
  renderPagination("#leadDirectoryPagination", "directory", directoryPage);
}

function paginate(items, state) {
  const totalPages = Math.max(1, Math.ceil(items.length / state.pageSize));
  state.page = Math.min(Math.max(1, state.page), totalPages);
  const start = (state.page - 1) * state.pageSize;
  return {
    items: items.slice(start, start + state.pageSize),
    start,
    end: Math.min(start + state.pageSize, items.length),
    total: items.length,
    totalPages,
    page: state.page,
  };
}

function renderPagination(selector, scope, pageData) {
  const el = qs(selector);
  if (!el) return;
  el.innerHTML = `
    <span>API paginada · ${pageData.total ? pageData.start + 1 : 0}-${pageData.end} de ${pageData.total} registros</span>
    <div>
      <button class="pager-button" type="button" data-page-scope="${scope}" data-page-dir="-1" ${pageData.page <= 1 ? "disabled" : ""}>Anterior</button>
      <strong>${pageData.page}/${pageData.totalPages}</strong>
      <button class="pager-button" type="button" data-page-scope="${scope}" data-page-dir="1" ${pageData.page >= pageData.totalPages ? "disabled" : ""}>Siguiente</button>
    </div>
  `;
}

function renderKanban(data) {
  qs("#kanbanBoard").innerHTML = stages
    .map((stage) => {
      const items = data.filter((lead) => lead.stage === stage);
      return `
        <section class="kanban-column" data-stage="${stage}">
          <h3>${stage} <span class="pill">${items.length}</span></h3>
          ${items
            .map(
              (lead) => `
                <article class="kanban-card" draggable="true" data-id="${lead.id}">
                  <div class="drag-handle" aria-hidden="true">⋮⋮</div>
                  <strong>${lead.name}</strong>
                  <span>${lead.zone} · ${currency.format(lead.budget)}</span>
                  <small>${lead.source} · ${lead.clientType} · ${formatFollowup(lead.followup)}</small>
                  <span class="pill ${priorityClass(lead.priority)}">${lead.priority}</span>
                  <div class="kanban-actions">
                    <button class="icon-stage-button" title="Mover a etapa anterior" type="button" data-id="${lead.id}" data-action="back">←</button>
                    <button class="icon-stage-button primary-stage" title="Mover a siguiente etapa" type="button" data-id="${lead.id}" data-action="advance">→</button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </section>
      `;
    })
    .join("");
}

function filteredProjects() {
  const filters = getFilters();
  const scopedLeads = filteredLeads();
  const leadScoped = filters.source !== "all" || filters.stage !== "all" || filters.priority !== "all";
  return projects.filter((project) => {
    const haystack = [project.name, project.zone, project.developer, project.status, project.notes].join(" ").toLowerCase();
    const matchesProject = (!filters.search || haystack.includes(filters.search)) && (filters.zone === "all" || project.zone === filters.zone);
    const hasMatchingLead = scopedLeads.some((lead) => lead.project === project.name);
    return matchesProject && (!leadScoped || hasMatchingLead);
  });
}

function renderProjects() {
  const data = filteredProjects();
  qs("#projectGrid").innerHTML = data.length
    ? data
    .map(
      (project) => `
        <button class="project-card" type="button" data-project-id="${project.id}">
          <div class="project-topline">
            <div>
              <p class="eyebrow">${project.zone}</p>
              <h3>${project.name}</h3>
            </div>
            <span class="pill blue">${project.commission}%</span>
          </div>
          <span>${project.developer}</span>
          <strong>${projectPrice(project)}</strong>
          <div class="project-stats">
            <div><strong>${project.inventory}</strong><span>unidades</span></div>
            <div><strong>${filteredLeads().filter((lead) => lead.project === project.name).length}</strong><span>leads</span></div>
            <div><strong>${project.commission}%</strong><span>comision</span></div>
          </div>
          <small>Entrega ${project.delivery || "por confirmar"} · ${project.status}</small>
        </button>
      `,
    )
    .join("")
    : `<div class="detail-box"><strong>No hay desarrollos para estos filtros</strong><span>Proba con otra zona o crea un nuevo desarrollo.</span></div>`;
}

function renderFollowups(data) {
  const sorted = [...data].sort((a, b) => new Date(a.followup) - new Date(b.followup));
  qs("#followupTimeline").innerHTML = sorted
    .map(
      (lead) => `
        <button class="timeline-item" type="button" data-id="${lead.id}">
          <strong>${formatFollowup(lead.followup)}</strong>
          <span><b>${lead.name}</b><br />${lead.history?.[lead.history.length - 1] || lead.notes}</span>
          <span class="pill ${priorityClass(lead.priority)}">${lead.priority}</span>
        </button>
      `,
    )
    .join("");
}

function renderUsers() {
  const activeUser = currentUser();
  qs("#userGrid").innerHTML = users
    .map(
      (user) => `
        <article class="user-card">
          <header>
            <div>
              <p class="eyebrow">${user.role}</p>
              <strong>${user.name}</strong>
              <span>${user.email}</span>
            </div>
            <span class="pill ${user.status === "Activo" ? "green" : "gold"}">${user.status}</span>
          </header>
          <div class="user-card-actions">
            <button class="small-button" type="button" data-user-id="${user.id}" data-user-action="toggle">${user.status === "Activo" ? "Pausar" : "Activar"}</button>
            <button class="danger-button" type="button" data-user-id="${user.id}" data-user-action="delete" ${activeUser?.id === user.id ? "disabled" : ""}>Eliminar</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDetail(id) {
  const lead = leads.find((item) => item.id === Number(id));
  if (!lead) return;
  qs("#clientDetail").innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">${lead.source} · ${lead.owner} · ${lead.status}</p>
      <h3>${lead.name}</h3>
      <span class="pill ${priorityClass(lead.priority)}">${lead.priority}</span>
    </div>
    <div class="detail-stack">
      <div class="detail-box"><strong>Requerimiento</strong><span>${lead.need}</span></div>
      <div class="detail-box"><strong>Zona y presupuesto</strong><span>${lead.zone} · ${currency.format(lead.budget)} · ${lead.timeframe}</span></div>
      <div class="detail-box"><strong>Proyecto recomendado</strong><span>${lead.project} / ${lead.developer}</span></div>
      <div class="detail-box"><strong>Cliente</strong><span>${lead.country} · ${lead.clientType} · etapa ${lead.stage}</span></div>
      <div class="detail-box"><strong>Proximo seguimiento</strong><span>${formatFollowup(lead.followup)}</span></div>
      <div class="detail-box"><strong>Notas comerciales</strong><span>${lead.notes}</span></div>
      <div class="detail-box"><strong>Comision potencial</strong><span>${currency.format(lead.budget * 0.05)}</span></div>
      <div class="detail-box">
        <strong>Historial comercial</strong>
        <ul class="history-list">${(lead.history || []).map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="detail-actions">
      <button class="ghost-button" type="button" data-id="${lead.id}" data-action="back">Retroceder</button>
      <button class="ghost-button" type="button" data-id="${lead.id}" data-action="advance">Avanzar</button>
      <button class="ghost-button" type="button" data-id="${lead.id}" data-action="lost">Cancelar venta</button>
      <button class="ghost-button" type="button" data-id="${lead.id}" data-action="close-sale">Cerrar venta</button>
      <button class="primary-button detail-wide" type="button" data-id="${lead.id}" data-action="contact">Registrar contacto</button>
    </div>
  `;
  qs(".detail-panel").classList.add("open");
}

function renderProjectDetail(id) {
  const project = projects.find((item) => item.id === Number(id));
  if (!project) return;
  const projectLeads = leads.filter((lead) => lead.project === project.name);
  const value = projectLeads.reduce((sum, lead) => sum + lead.budget, 0);
  qs("#clientDetail").innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">${project.zone} · ${project.status}</p>
      <h3>${project.name}</h3>
      <span class="pill blue">${project.commission}% comision</span>
    </div>
    <div class="detail-stack">
      <div class="detail-box"><strong>Desarrollador</strong><span>${project.developer}</span></div>
      <div class="detail-box"><strong>Rango de precio</strong><span>${projectPrice(project)}</span></div>
      <div class="detail-box"><strong>Inventario disponible</strong><span>${project.inventory} unidades</span></div>
      <div class="detail-box"><strong>Entrega estimada</strong><span>${project.delivery || "Por confirmar"}</span></div>
      <div class="detail-box"><strong>Demanda vinculada</strong><span>${projectLeads.length} leads · ${currency.format(value)} en presupuesto</span></div>
      <div class="detail-box"><strong>Notas comerciales</strong><span>${project.notes || "Sin notas cargadas."}</span></div>
      <div class="detail-box">
        <strong>Clientes interesados</strong>
        <ul class="history-list">${projectLeads.length ? projectLeads.map((lead) => `<li>${lead.name} · ${lead.stage} · ${currency.format(lead.budget)}</li>`).join("") : "<li>No hay leads vinculados todavia.</li>"}</ul>
      </div>
    </div>
    <div class="detail-actions">
      <button class="primary-button detail-wide" type="button" data-project-filter="${project.name}">Ver leads del desarrollo</button>
    </div>
  `;
  qs(".detail-panel").classList.add("open");
}

function advanceLead(id) {
  const lead = leads.find((item) => item.id === Number(id));
  const current = stages.indexOf(lead.stage);
  lead.stage = stages[Math.min(current + 1, stages.length - 1)];
  lead.history = [...(lead.history || []), `Etapa actualizada a ${lead.stage}.`];
  saveLeads();
  render();
  renderDetail(id);
  showToast(`${lead.name} avanzo a ${lead.stage}`);
}

function moveLeadBack(id) {
  const lead = leads.find((item) => item.id === Number(id));
  const current = stages.indexOf(lead.stage);
  lead.stage = stages[Math.max(current - 1, 0)];
  lead.history = [...(lead.history || []), `Etapa retrocedida a ${lead.stage}.`];
  saveLeads();
  render();
  renderDetail(id);
  showToast(`${lead.name} volvio a ${lead.stage}`);
}

function cancelSale(id) {
  const lead = leads.find((item) => item.id === Number(id));
  lead.status = "Venta cancelada";
  lead.history = [...(lead.history || []), "Venta cancelada o lead pausado. Revisar motivo antes de reactivar."];
  saveLeads();
  render();
  renderDetail(id);
  showToast("Venta cancelada en la ficha comercial");
}

function closeSale(id) {
  const lead = leads.find((item) => item.id === Number(id));
  lead.stage = "Cierre";
  lead.status = "Venta cerrada";
  lead.history = [...(lead.history || []), `Venta cerrada. Comision estimada: ${currency.format(lead.budget * 0.05)}.`];
  saveLeads();
  render();
  renderDetail(id);
  showToast("Venta cerrada y comision estimada actualizada");
}

function moveLeadToStage(id, stage) {
  const lead = leads.find((item) => item.id === Number(id));
  if (!lead || !stages.includes(stage) || lead.stage === stage) return;
  lead.stage = stage;
  lead.history = [...(lead.history || []), `Tarjeta movida a ${stage} desde el tablero kanban.`];
  saveLeads();
  render();
  showToast(`${lead.name} movido a ${stage}`);
}

function openContactDialog(id) {
  const form = qs("#contactForm");
  form.reset();
  form.elements.leadId.value = id;
  form.elements.nextFollowup.value = localDateTimeValue(24);
  syncPremiumControls();
  qs("#contactDialog").showModal();
}

function registerContact(form) {
  const formData = new FormData(form);
  const lead = leads.find((item) => item.id === Number(formData.get("leadId")));
  const contact = `${formData.get("type")}: ${formData.get("summary")}`;
  lead.followup = formData.get("nextFollowup");
  lead.history = [...(lead.history || []), contact];
  saveLeads();
  render();
  renderDetail(lead.id);
  showToast("Contacto guardado en historial comercial");
}

function addLead(form) {
  const formData = new FormData(form);
  const lead = {
    id: Date.now(),
    name: formData.get("name"),
    source: formData.get("source"),
    stage: "Nuevo",
    priority: formData.get("priority"),
    need: formData.get("need"),
    zone: formData.get("zone"),
    budget: Number(formData.get("budget")),
    timeframe: formData.get("timeframe"),
    project: formData.get("project") || "Por asignar",
    developer: "Por confirmar",
    owner: "Agente",
    followup: formData.get("followup"),
    country: formData.get("country"),
    clientType: formData.get("clientType"),
    status: "Activo",
    history: [`Lead creado desde ${formData.get("source")}.`],
    notes: formData.get("notes") || "Lead creado desde alta rapida.",
  };
  leads = [lead, ...leads];
  saveLeads();
  form.reset();
  render();
  showToast("Lead creado y agregado al pipeline");
}

function addProject(form) {
  const formData = new FormData(form);
  const project = {
    id: Date.now(),
    name: formData.get("name"),
    developer: formData.get("developer"),
    zone: formData.get("zone"),
    status: formData.get("status"),
    priceFrom: Number(formData.get("priceFrom")),
    priceTo: Number(formData.get("priceTo")),
    inventory: Number(formData.get("inventory")),
    commission: Number(formData.get("commission")),
    delivery: formData.get("delivery") || "Por confirmar",
    notes: formData.get("notes") || "Desarrollo cargado manualmente.",
  };
  projects = [project, ...projects];
  saveProjects();
  form.reset();
  render();
  renderProjectDetail(project.id);
  showToast("Desarrollo creado en inventario comercial");
}

function addUser(form) {
  const formData = new FormData(form);
  const email = String(formData.get("email")).trim().toLowerCase();
  if (users.some((user) => user.email.toLowerCase() === email)) {
    showToast("Ese email ya existe en usuarios");
    return false;
  }
  const user = {
    id: Date.now(),
    name: formData.get("name"),
    email,
    password: formData.get("password"),
    role: formData.get("role"),
    status: formData.get("status"),
  };
  users = [user, ...users];
  saveUsers();
  form.reset();
  renderUsers();
  showToast("Usuario creado para el workspace");
  return true;
}

function toggleUser(id) {
  const user = users.find((item) => item.id === Number(id));
  if (!user) return;
  user.status = user.status === "Activo" ? "Pausado" : "Activo";
  saveUsers();
  renderUsers();
  renderAuth();
  showToast(`${user.name} ahora esta ${user.status.toLowerCase()}`);
}

function deleteUser(id) {
  if (Number(id) === currentUserId) {
    showToast("No podes eliminar tu usuario activo");
    return;
  }
  users = users.filter((user) => user.id !== Number(id));
  saveUsers();
  renderUsers();
  showToast("Usuario eliminado");
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function renderAuth() {
  const user = currentUser();
  const loginScreen = qs("#loginScreen");
  if (user) {
    document.body.classList.remove("auth-locked");
    loginScreen.classList.add("hidden");
    qs("#currentUserBtn").textContent = `${user.name} · ${user.role}`;
  } else {
    document.body.classList.add("auth-locked");
    loginScreen.classList.remove("hidden");
    qs("#currentUserBtn").textContent = "";
  }
}

function render() {
  const data = filteredLeads();
  renderMetrics(data);
  renderValuation();
  renderPipeline(data);
  renderSourceChart(data);
  renderLeadTables(data);
  renderKanban(data);
  renderProjects();
  renderFollowups(data);
  renderUsers();
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatPremiumDate(value, type) {
  if (!value) return type === "month" ? "Seleccionar mes" : "Seleccionar fecha y hora";
  if (type === "month") {
    const [year, month] = value.split("-");
    const date = new Date(Number(year), Number(month) - 1, 1);
    return new Intl.DateTimeFormat("es-PY", { month: "long", year: "numeric" }).format(date);
  }
  return formatFollowup(value);
}

function dateValue(date, time = "09:00") {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${time}`;
}

function monthValue(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

function enhanceDateFields() {
  qsa('input[type="datetime-local"], input[type="month"]').forEach((input) => {
    if (input.dataset.enhanced === "true") return;
    input.dataset.enhanced = "true";
    const type = input.type;
    input.classList.add("native-premium-field");

    const shell = document.createElement("div");
    shell.className = "premium-date";
    input.parentNode.insertBefore(shell, input);
    shell.appendChild(input);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "premium-date-button";
    button.setAttribute("aria-haspopup", "dialog");
    shell.appendChild(button);

    const menu = document.createElement("div");
    menu.className = "premium-date-menu";
    shell.appendChild(menu);

    let cursor = input.value ? new Date(type === "month" ? `${input.value}-01T12:00` : input.value) : new Date();

    const sync = () => {
      if (input.value) cursor = new Date(type === "month" ? `${input.value}-01T12:00` : input.value);
      button.textContent = formatPremiumDate(input.value, type);
      renderDateMenu(input, menu, cursor, type, (nextCursor) => {
        cursor = nextCursor;
        sync();
      });
    };

    button.addEventListener("click", () => {
      qsa(".premium-date.open").forEach((item) => {
        if (item !== shell) item.classList.remove("open");
      });
      qsa(".premium-select.open").forEach((item) => item.classList.remove("open"));
      shell.classList.toggle("open");
      sync();
    });

    input.addEventListener("input", sync);
    input.addEventListener("change", sync);
    sync();
  });
}

function renderDateMenu(input, menu, cursor, type, setCursor) {
  const selected = input.value ? new Date(type === "month" ? `${input.value}-01T12:00` : input.value) : null;
  const year = cursor.getFullYear();
  const month = cursor.getMonth();

  if (type === "month") {
    const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"];
    menu.innerHTML = `
      <div class="premium-date-top">
        <button class="premium-date-nav" type="button" data-date-nav="-1">‹</button>
        <strong class="premium-date-title">${year}</strong>
        <button class="premium-date-nav" type="button" data-date-nav="1">›</button>
      </div>
      <div class="premium-date-grid premium-month-grid">
        ${months
          .map((label, index) => {
            const value = `${year}-${pad(index + 1)}`;
            return `<button class="premium-date-option${input.value === value ? " selected" : ""}" type="button" data-month="${value}">${label}</button>`;
          })
          .join("")}
      </div>
      <div class="premium-time-row">
        <button class="small-button premium-date-quick" type="button" data-month="">Borrar</button>
        <button class="small-button premium-date-quick" type="button" data-month="${monthValue(new Date())}">Este mes</button>
      </div>
    `;
  } else {
    const first = new Date(year, month, 1);
    const start = new Date(first);
    start.setDate(1 - ((first.getDay() + 6) % 7));
    const currentTime = input.value?.slice(11, 16) || "09:00";
    const weekdays = ["lun", "mar", "mie", "jue", "vie", "sab", "dom"];
    const days = Array.from({ length: 42 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      const selectedDay = selected && date.toDateString() === selected.toDateString();
      return `<button class="premium-date-option${date.getMonth() !== month ? " muted" : ""}${selectedDay ? " selected" : ""}" type="button" data-day="${dateValue(date, currentTime)}">${date.getDate()}</button>`;
    }).join("");

    menu.innerHTML = `
      <div class="premium-date-top">
        <button class="premium-date-nav" type="button" data-date-nav="-1">‹</button>
        <strong class="premium-date-title">${new Intl.DateTimeFormat("es-PY", { month: "long", year: "numeric" }).format(cursor)}</strong>
        <button class="premium-date-nav" type="button" data-date-nav="1">›</button>
      </div>
      <div class="premium-date-grid">
        ${weekdays.map((day) => `<span class="premium-date-weekday">${day}</span>`).join("")}
        ${days}
      </div>
      <div class="premium-time-row">
        <input type="time" value="${currentTime}" data-time-picker />
        <button class="small-button premium-date-quick" type="button" data-day="${localDateTimeValue(24)}">Manana</button>
      </div>
    `;
  }

  menu.onclick = (event) => {
    const nav = event.target.closest("[data-date-nav]");
    if (nav) {
      const next = new Date(cursor);
      type === "month" ? next.setFullYear(year + Number(nav.dataset.dateNav)) : next.setMonth(month + Number(nav.dataset.dateNav));
      setCursor(next);
      return;
    }

    const timePicker = event.target.closest("[data-time-picker]");
    if (timePicker) return;

    const day = event.target.closest("[data-day]");
    if (day) {
      input.value = day.dataset.day;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.closest(".premium-date")?.classList.remove("open");
      return;
    }

    const monthButton = event.target.closest("[data-month]");
    if (monthButton) {
      input.value = monthButton.dataset.month;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.closest(".premium-date")?.classList.remove("open");
    }
  };

  const timeInput = menu.querySelector("[data-time-picker]");
  timeInput?.addEventListener("input", () => {
    if (!input.value) return;
    input.value = `${input.value.slice(0, 11)}${timeInput.value}`;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

function syncPremiumControls() {
  qsa(".native-premium-field").forEach((field) => {
    field.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

function enhancePremiumControls() {
  qsa("select").forEach((select) => {
    if (select.dataset.enhanced === "true") return;
    select.dataset.enhanced = "true";
    select.classList.add("native-filter-select", "native-premium-field");

    const shell = document.createElement("div");
    shell.className = "premium-select";
    select.parentNode.insertBefore(shell, select);
    shell.appendChild(select);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "premium-select-button";
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    shell.appendChild(button);

    const menu = document.createElement("div");
    menu.className = "premium-select-menu";
    menu.setAttribute("role", "listbox");
    shell.appendChild(menu);

    const sync = () => {
      button.textContent = select.options[select.selectedIndex]?.textContent || "";
      menu.innerHTML = [...select.options]
        .map(
          (option) => `
            <button class="premium-select-option${option.value === select.value ? " selected" : ""}" type="button" role="option" data-value="${option.value}" aria-selected="${option.value === select.value}">
              ${option.textContent}
            </button>
          `,
        )
        .join("");
    };

    button.addEventListener("click", () => {
      qsa(".premium-select.open").forEach((item) => {
        if (item !== shell) item.classList.remove("open");
      });
      shell.classList.toggle("open");
      button.setAttribute("aria-expanded", shell.classList.contains("open"));
    });

    menu.addEventListener("click", (event) => {
      const option = event.target.closest("[data-value]");
      if (!option) return;
      select.value = option.dataset.value;
      select.dispatchEvent(new Event("input", { bubbles: true }));
      select.dispatchEvent(new Event("change", { bubbles: true }));
      shell.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      sync();
    });

    select.addEventListener("input", sync);
    select.addEventListener("change", sync);
    sync();
  });

  enhanceDateFields();

  document.addEventListener("click", (event) => {
    if (event.target.closest(".premium-select, .premium-date")) return;
    qsa(".premium-select.open").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".premium-select-button")?.setAttribute("aria-expanded", "false");
    });
    qsa(".premium-date.open").forEach((item) => item.classList.remove("open"));
  });
}

function bindKanbanDrag() {
  document.addEventListener("dragstart", (event) => {
    const card = event.target.closest(".kanban-card");
    if (!card) return;
    event.dataTransfer.setData("text/plain", card.dataset.id);
    card.classList.add("dragging");
  });

  document.addEventListener("dragend", (event) => {
    const card = event.target.closest(".kanban-card");
    if (card) card.classList.remove("dragging");
    qsa(".kanban-column").forEach((column) => column.classList.remove("drop-target"));
  });

  document.addEventListener("dragover", (event) => {
    const column = event.target.closest(".kanban-column");
    if (!column) return;
    event.preventDefault();
    qsa(".kanban-column").forEach((item) => item.classList.remove("drop-target"));
    column.classList.add("drop-target");
  });

  document.addEventListener("drop", (event) => {
    const column = event.target.closest(".kanban-column");
    if (!column) return;
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    column.classList.remove("drop-target");
    moveLeadToStage(id, column.dataset.stage);
  });
}

function bindEvents() {
  qs("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email")).trim().toLowerCase();
    const password = String(formData.get("password"));
    const user = users.find((item) => item.email.toLowerCase() === email && item.password === password && item.status === "Activo");
    if (!user) {
      qs("#loginError").textContent = "Credenciales invalidas o usuario pausado.";
      return;
    }
    currentUserId = user.id;
    localStorage.setItem("remaxCrmSession", String(user.id));
    qs("#loginError").textContent = "";
    event.currentTarget.reset();
    renderAuth();
    showToast(`Bienvenido, ${user.name}`);
  });

  qs("#logoutBtn").addEventListener("click", () => {
    currentUserId = 0;
    localStorage.removeItem("remaxCrmSession");
    renderAuth();
  });

  qsa(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      qsa(".nav-item").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      qsa(".view").forEach((view) => view.classList.remove("active"));
      qs(`#${button.dataset.view}View`).classList.add("active");
      qs("#viewTitle").textContent = button.dataset.title || button.textContent.trim();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  ["#searchInput", "#sourceFilter", "#stageFilter", "#zoneFilter", "#priorityFilter"].forEach((selector) => {
    qs(selector).addEventListener("input", () => {
      paginationState.dashboard.page = 1;
      paginationState.directory.page = 1;
      render();
    });
  });

  ["#valuationUsd", "#valuationRate", "#valuationArea"].forEach((selector) => {
    qs(selector)?.addEventListener("input", renderValuation);
  });

  document.addEventListener("click", (event) => {
    const sourceButton = event.target.closest("[data-source]");
    if (sourceButton) {
      qs("#sourceFilter").value = sourceButton.dataset.source;
      render();
      showToast(`Segmento aplicado: ${sourceButton.dataset.source}`);
      return;
    }

    const projectFilter = event.target.closest("[data-project-filter]");
    if (projectFilter) {
      qs("#searchInput").value = projectFilter.dataset.projectFilter;
      qsa(".nav-item").forEach((item) => item.classList.remove("active"));
      const leadsNav = qs('[data-view="leads"]');
      leadsNav.classList.add("active");
      qsa(".view").forEach((view) => view.classList.remove("active"));
      qs("#leadsView").classList.add("active");
      qs("#viewTitle").textContent = "Leads";
      render();
      return;
    }

    const projectCard = event.target.closest("[data-project-id]");
    if (projectCard) {
      renderProjectDetail(projectCard.dataset.projectId);
      return;
    }

    const userAction = event.target.closest("[data-user-action]");
    if (userAction) {
      if (userAction.dataset.userAction === "toggle") toggleUser(userAction.dataset.userId);
      if (userAction.dataset.userAction === "delete") deleteUser(userAction.dataset.userId);
      return;
    }

    const row = event.target.closest("[data-id]");
    const pager = event.target.closest("[data-page-scope]");
    if (pager) {
      const scope = pager.dataset.pageScope;
      paginationState[scope].page += Number(pager.dataset.pageDir);
      render();
      return;
    }

    if (!row) return;
    if (row.dataset.action === "advance") {
      advanceLead(row.dataset.id);
      return;
    }
    if (row.dataset.action === "back") {
      moveLeadBack(row.dataset.id);
      return;
    }
    if (row.dataset.action === "lost") {
      cancelSale(row.dataset.id);
      return;
    }
    if (row.dataset.action === "close-sale") {
      closeSale(row.dataset.id);
      return;
    }
    if (row.dataset.action === "contact") {
      openContactDialog(row.dataset.id);
      return;
    }
    renderDetail(row.dataset.id);
  });

  qs("#newLeadBtn").addEventListener("click", () => {
    const form = qs("#leadForm");
    form.reset();
    form.elements.followup.value = localDateTimeValue(24);
    syncPremiumControls();
    qs("#leadDialog").showModal();
  });
  qs("#closeLeadDialogBtn").addEventListener("click", () => qs("#leadDialog").close());
  qs("#cancelLeadBtn").addEventListener("click", () => qs("#leadDialog").close());
  qs("#leadForm").addEventListener("submit", (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    addLead(event.currentTarget);
    qs("#leadDialog").close();
  });

  qs("#closeContactDialogBtn").addEventListener("click", () => qs("#contactDialog").close());
  qs("#cancelContactBtn").addEventListener("click", () => qs("#contactDialog").close());
  qs("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    registerContact(event.currentTarget);
    qs("#contactDialog").close();
  });

  qs("#newProjectBtn").addEventListener("click", () => {
    syncPremiumControls();
    qs("#projectDialog").showModal();
  });
  qs("#closeProjectDialogBtn").addEventListener("click", () => qs("#projectDialog").close());
  qs("#cancelProjectBtn").addEventListener("click", () => qs("#projectDialog").close());
  qs("#projectForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addProject(event.currentTarget);
    qs("#projectDialog").close();
  });

  qs("#newUserBtn").addEventListener("click", () => {
    const form = qs("#userForm");
    form.reset();
    syncPremiumControls();
    qs("#userDialog").showModal();
  });
  qs("#closeUserDialogBtn").addEventListener("click", () => qs("#userDialog").close());
  qs("#cancelUserBtn").addEventListener("click", () => qs("#userDialog").close());
  qs("#userForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (addUser(event.currentTarget)) qs("#userDialog").close();
  });

  qs("#closeDetailBtn").addEventListener("click", () => qs(".detail-panel").classList.remove("open"));
  qs("#sortPriorityBtn").addEventListener("click", () => {
    sortByPriority = !sortByPriority;
    render();
    showToast(sortByPriority ? "Ordenado por prioridad comercial" : "Orden natural restaurado");
  });
  qs("#todayBtn").addEventListener("click", () => {
    qs("#searchInput").value = "hoy";
    render();
  });
  qs("#exportBtn").addEventListener("click", () => {
    const rows = filteredLeads()
      .map((lead) =>
        [lead.name, lead.source, lead.stage, lead.status, lead.zone, lead.budget, lead.country, lead.clientType, lead.project, lead.followup]
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(","),
      )
      .join("\n");
    const csv = `Cliente,Canal,Etapa,Estado,Zona,Presupuesto,Pais,Tipo,Proyecto,Proximo seguimiento\n${rows}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "remax-crm-leads.csv";
    link.click();
    URL.revokeObjectURL(url);
    showToast("Exportacion CSV generada");
  });
}

bindKanbanDrag();
bindEvents();
enhancePremiumControls();
render();
renderAuth();
