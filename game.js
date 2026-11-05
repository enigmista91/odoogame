// ============================================================================
// ODOO 20: ERP ODYSSEY — Core Simulation & Gamified Learning Engine
// ============================================================================

const RANKS = [
  { minXp: 0, title: "STAGE 1: Stagista Galattico" },
  { minXp: 100, title: "STAGE 2: Operatore CRM Stellare" },
  { minXp: 220, title: "STAGE 3: Specialista Flussi ERP" },
  { minXp: 350, title: "STAGE 4: Architetto Supply Chain" },
  { minXp: 500, title: "STAGE 5: Odoo 20 Master Consultant" }
];

const ODOO_APPS = [
  { id: "crm", name: "CRM", icon: "🎯", color: "linear-gradient(135deg, #00b4d8, #0077b6)", desc: "Pipeline Opportunità, Lead Scoring AI e Preventivi." },
  { id: "sales", name: "Vendite", icon: "📈", color: "linear-gradient(135deg, #f77f00, #d62828)", desc: "Dal Preventivo (Quotation) al Sales Order." },
  { id: "inventory", name: "Magazzino", icon: "📦", color: "linear-gradient(135deg, #8338ec, #3a86ff)", desc: "Spedizioni, Barcode Scanner, Regole Riordino." },
  { id: "mrp", name: "Produzione", icon: "⚙️", color: "linear-gradient(135deg, #10b981, #047857)", desc: "Distinta Base (BoM), Ordini Produzione (MO) e Shop Floor." },
  { id: "accounting", name: "Contabilità", icon: "💳", color: "linear-gradient(135deg, #ec4899, #8b5cf6)", desc: "Fatturazione AI OCR, Riconciliazione Bancaria istantanea." },
  { id: "studio", name: "Studio & AI", icon: "✨", color: "linear-gradient(135deg, #ffbe0b, #fb5607)", desc: "Personalizza viste No-Code, Automazioni e Agenti AI Odoo 20." }
];

const MISSIONS = [
  {
    id: 0,
    app: "crm",
    tag: "MODULO 01 // CRM",
    title: "Cattura l'Opportunità Marziana",
    xp: 100,
    credits: 4500,
    desc: "Apri l'app CRM, usa l'AI Lead Scoring su 'Colonia Marte Alpha', spostala in 'Qualificata' e genera il Preventivo.",
    hint: "Clicca sull'icona 'CRM' nella Home (o premi Alt+K e scrivi CRM). Poi clicca '✨ AI Score & Qualifica' e infine 'Crea Preventivo'.",
    theory: `
      <h4>🎯 Come funziona il CRM in Odoo 20</h4>
      <p>In Odoo 20 i <strong>Lead</strong> e le <strong>Opportunità</strong> vivono in una vista <em>Kanban</em> fluida:</p>
      <ul>
        <li><strong>Predictive Lead Scoring AI:</strong> Odoo 20 calcola la probabilità di chiusura in base a storico, settore e velocità di risposta nel Chatter.</li>
        <li><strong>Zero Data Re-entry:</strong> Cliccando <em>"Nuovo Preventivo"</em> direttamente dall'opportunità, i dati del cliente (<code>res.partner</code>) passano automaticamente al modulo Vendite senza digitare nulla due volte!</li>
      </ul>
    `
  },
  {
    id: 1,
    app: "sales",
    tag: "MODULO 02 // VENDITE",
    title: "Up-Selling & Conferma Ordine (SO042)",
    xp: 100,
    credits: 6000,
    desc: "Nel modulo Vendite, aggiungi il 'Catalogo AI Propulsori' al preventivo SO042 e clicca 'Conferma Ordine' per bloccare lo stock.",
    hint: "Vai nell'app Vendite (o clicca lo Smart Button dal CRM). Clicca '+ Aggiungi Prodotto Suggerito AI' e poi 'Conferma Ordine'.",
    theory: `
      <h4>📈 Dal Preventivo (Quotation) all'Ordine di Vendita (Sales Order)</h4>
      <p>Finché un documento è in stato <strong>Preventivo</strong>, non muove né la merce né la contabilità. Appena premi <strong>Conferma</strong>:</p>
      <ul>
        <li>Lo stato passa a <strong>Ordine di Vendita (Sales Order)</strong>.</li>
        <li>Compare in alto a destra uno <strong>Smart Button</strong> collegato automaticamente al <em>Magazzino</em> (Consegna) e alla <em>Produzione</em> (se il prodotto è MTO / Make-to-Order).</li>
      </ul>
    `
  },
  {
    id: 2,
    app: "mrp",
    tag: "MODULO 03 // PRODUZIONE (MRP)",
    title: "Assembla i Reattori Quantici",
    xp: 100,
    credits: 7500,
    desc: "I Reattori sono Make-to-Order! Apri Produzione (MRP), verifica la Distinta Base (BoM) e completa l'Ordine di Produzione WH/MO/0019.",
    hint: "Apri l'app Produzione (MRP). Clicca 'Controlla Disponibilità Componenti' e poi 'Segna come Fatto (Shop Floor 20)'.",
    theory: `
      <h4>⚙️ Produzione (MRP) & Shop Floor in Odoo 20</h4>
      <p>Quando vendi un articolo che richiede assemblaggio, Odoo controlla la <strong>Distinta Base (BoM - Bill of Materials)</strong>:</p>
      <ul>
        <li><strong>Ordine di Produzione (MO):</strong> Scarica le materie prime (Celle al Titanio + Chip Neutrini) e carica in magazzino il prodotto finito.</li>
        <li><strong>Odoo 20 Shop Floor:</strong> L'interfaccia touch per gli operatori di linea permette di registrare tempi, numeri di serie/lotti e controlli qualità in un clic.</li>
      </ul>
    `
  },
  {
    id: 3,
    app: "inventory",
    tag: "MODULO 04 // MAGAZZINO",
    title: "Spedizione Orbitale con Barcode",
    xp: 100,
    credits: 5500,
    desc: "I Reattori sono pronti! Vai in Magazzino, scansiona i numeri di serie del trasferimento WH/OUT/0088 e valida la spedizione.",
    hint: "Apri l'app Magazzino (o usa lo Smart Button Consegne). Clicca '📱 Scansiona Barcode Lotti' e poi 'Valida Spedizione'.",
    theory: `
      <h4>📦 Magazzino & Doppia Partita Logistica</h4>
      <p>Odoo inventò la <strong> contabilità di magazzino a doppia partita</strong>: la merce non "appare" o "scompare" mai, ma si sposta sempre da una <em>Ubicazione Sorgente</em> a una <em>Ubicazione Destinazione</em>:</p>
      <ul>
        <li><strong>WH/Stock → Partner Locations/Customers:</strong> Quando validi il documento <code>WH/OUT</code>, lo stock fisico cala e l'ordine di vendita diventa "Pronto da Fatturare".</li>
      </ul>
    `
  },
  {
    id: 4,
    app: "accounting",
    tag: "MODULO 05 // CONTABILITÀ",
    title: "Fatturazione AI & Riconciliazione",
    xp: 100,
    credits: 12000,
    desc: "Emetti la fattura elettronica INV/2026/0091 in Contabilità e usa l'AI Auto-Match per riconciliare il bonifico galattico ricevuto.",
    hint: "Apri Contabilità, clicca 'Conferma & Invia Fattura', poi '⚡ Riconciliazione Bancaria AI'.",
    theory: `
      <h4>💳 Contabilità Integrata in Tempo Reale</h4>
      <p>In Odoo 20 la contabilità non è un silos separato: ogni riga fattura nasce dall'ordine di vendita consegnato.</p>
      <ul>
        <li><strong>AI Bank Reconciliation:</strong> Il motore di matching confronta causale, importo e partner bancario proponendo il pareggio automatico del mastrino clienti.</li>
      </ul>
    `
  },
  {
    id: 5,
    app: "studio",
    tag: "MODULO 06 // STUDIO & AI",
    title: "Automazione No-Code con Odoo Studio",
    xp: 120,
    credits: 15000,
    desc: "Estendi Odoo 20 senza scrivere codice! Aggiungi il campo 'Rischio Meteoriti' con Studio e attiva l'Agente AI di Riordino Automatico.",
    hint: "Apri l'app 'Studio & AI', clicca '+ Trascina Campo Personalizzato' e poi '🚀 Pubblica Automazione AI'.",
    theory: `
      <h4>✨ Odoo Studio & AI Agents 20</h4>
      <p>Con <strong>Odoo Studio</strong> puoi creare nuovi campi (<code>x_studio_...</code>), viste, report PDF e regole di automazione (Webhook, invio email, creazione task) con semplice Drag & Drop, mantenendo la compatibilità con gli aggiornamenti futuri!</p>
    `
  }
];

// ============================================================================
// GAME STATE
// ============================================================================
const defaultState = {
  xp: 0,
  credits: 12500,
  efficiency: 15,
  chaos: 85,
  activeMission: 0,
  completedMissions: [],
  currentApp: "home",
  soundEnabled: true,
  // Workflow flags
  crmScored: false,
  crmQuoted: false,
  salesUpsold: false,
  salesConfirmed: false,
  mrpChecked: false,
  mrpDone: false,
  invScanned: false,
  invValidated: false,
  accPosted: false,
  accReconciled: false,
  studioFieldAdded: false,
  studioAiDeployed: false,
  chatterMessages: [
    { author: "O.D.I.N. AI", time: "22:45", text: "Sistema Odoo 20 Enterprise inizializzato. In attesa del primo flusso operativo.", type: "system-audit" },
    { author: "Capitano Vance (CEO)", time: "22:46", text: "@Consulente I clienti su Marte aspettano i Reattori Quantici! Abbandoniamo i vecchi fogli CSV!", type: "user" }
  ]
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem("odoo20_odyssey_state");
    if (saved) return { ...defaultState, ...JSON.parse(saved) };
  } catch (e) {
    console.warn("Impossibile caricare salvataggio:", e);
  }
  return { ...defaultState };
}

function saveState() {
  try {
    localStorage.setItem("odoo20_odyssey_state", JSON.stringify(state));
  } catch (e) {}
}

// ============================================================================
// WEB AUDIO SYNTHESIZER (NO EXTERNAL ASSETS NEEDED)
// ============================================================================
const AudioFX = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  },
  play(type) {
    if (!state.soundEnabled) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.06);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === "success") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.08);
        osc.frequency.setValueAtTime(659.25, now + 0.16);
        osc.frequency.setValueAtTime(880, now + 0.24);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === "ai") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.exponentialRampToValueAtTime(1240, now + 0.18);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {}
  }
};

// ============================================================================
// UI HELPERS & CHATTER LOGGING
// ============================================================================
function showToast(msg, variant = "info") {
  const container = document.getElementById("toast-container");
  const el = document.createElement("div");
  el.className = `toast ${variant}`;
  el.innerHTML = msg;
  container.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 300);
  }, 4000);
}

function logChatter(author, text, type = "system-audit") {
  const now = new Date();
  const time = now.toTimeString().slice(0, 5);
  state.chatterMessages.unshift({ author, time, text, type });
  saveState();
  renderChatter();
}

function completeMission(missionId) {
  if (state.completedMissions.includes(missionId)) return;
  const m = MISSIONS[missionId];
  state.completedMissions.push(missionId);
  state.xp += m.xp;
  state.credits += m.credits;
  state.efficiency = Math.min(100, state.efficiency + 14);
  state.chaos = Math.max(0, state.chaos - 14);

  if (missionId + 1 < MISSIONS.length) {
    state.activeMission = missionId + 1;
  }

  AudioFX.play("success");
  showToast(`🏆 <strong>MISSIONE COMPLETATA:</strong> ${m.title} (+${m.xp} XP, +₡${m.credits})`, "gold");
  logChatter("Odoo 20 Workflow Engine", `Completato step [${m.tag}]: ${m.title}. Efficienza salita al ${state.efficiency}%.`, "system-audit");

  saveState();
  renderAll();
}

// ============================================================================
// RENDER FUNCTIONS
// ============================================================================
function renderHUD() {
  // Rank
  let currentRank = RANKS[0].title;
  for (const r of RANKS) {
    if (state.xp >= r.minXp) currentRank = r.title;
  }
  document.getElementById("player-title").textContent = currentRank;
  document.getElementById("xp-counter").textContent = `${state.xp} / 620 XP`;
  const pct = Math.min(100, Math.round((state.xp / 620) * 100));
  document.getElementById("xp-bar-fill").style.width = `${pct}%`;

  // KPIs
  document.getElementById("hud-credits").textContent = `₡ ${state.credits.toLocaleString("it-IT")}`;
  document.getElementById("hud-efficiency").textContent = `${state.efficiency}%`;
  document.getElementById("hud-chaos").textContent = `${state.chaos}%`;
  document.getElementById("btn-sound").textContent = state.soundEnabled ? "🔊" : "🔇";

  // Active Mission Mentor Speech
  const activeM = MISSIONS[state.activeMission];
  const mentorEl = document.getElementById("mentor-speech");
  if (state.completedMissions.length === MISSIONS.length) {
    mentorEl.innerHTML = `🎉 <strong>Incredibile lavoro, Master Consultant!</strong> Hai digitalizzato l'intero flusso Lead-to-Cash di Nebula Corp! Clicca su <strong>👾 Boss Audit</strong> in alto a destra per l'esame di certificazione finale!`;
  } else if (activeM) {
    mentorEl.innerHTML = `<strong>Obiettivo Attuale (${activeM.tag}):</strong><br/>${activeM.desc}`;
  }
}

function renderMissionsList() {
  const list = document.getElementById("missions-list");
  document.getElementById("mission-progress-text").textContent = `${state.completedMissions.length}/${MISSIONS.length}`;

  list.innerHTML = MISSIONS.map((m) => {
    const isDone = state.completedMissions.includes(m.id);
    const isActive = state.activeMission === m.id && !isDone;
    return `
      <div class="mission-item ${isActive ? "active" : ""} ${isDone ? "completed" : ""}" onclick="selectMission(${m.id})">
        <div class="mission-top">
          <span class="mission-tag">${isDone ? "✅ COMPLETATA" : m.tag}</span>
          <span class="mission-xp">+${m.xp} XP</span>
        </div>
        <div class="mission-title">${m.title}</div>
        <div class="mission-desc">${m.desc}</div>
      </div>
    `;
  }).join("");
}

window.selectMission = function(id) {
  AudioFX.play("click");
  state.activeMission = id;
  const m = MISSIONS[id];
  navigateApp(m.app);
  renderAll();
};

function renderChatter() {
  const feed = document.getElementById("chatter-feed");
  feed.innerHTML = state.chatterMessages.map((m) => `
    <div class="chatter-msg ${m.type}">
      <div class="chatter-msg-head">
        <strong>${m.author}</strong>
        <span>${m.time}</span>
      </div>
      <div>${m.text}</div>
    </div>
  `).join("");
}

// ============================================================================
// ODOO 20 VIEWPORT RENDERER (APPS & WORKFLOWS)
// ============================================================================
window.navigateApp = function(appId) {
  AudioFX.play("click");
  state.currentApp = appId;
  saveState();
  renderViewport();
};

function renderViewport() {
  const vp = document.getElementById("odoo-viewport");
  const titleEl = document.getElementById("odoo-current-app-title");
  const crumbsEl = document.getElementById("odoo-breadcrumbs");
  const activeM = MISSIONS[state.activeMission];

  if (state.currentApp === "home") {
    titleEl.textContent = "Odoo 20 App Dashboard";
    crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Nebula Logistics OS</span>`;
    vp.innerHTML = `
      <div class="app-home-container">
        <div class="app-home-header">
          <h2>🪐 Benvenuto in Odoo 20 Enterprise</h2>
          <p>Seleziona un modulo o premi <kbd>Alt</kbd> + <kbd>K</kbd> per aprire la Command Palette globale</p>
        </div>
        <div class="app-grid">
          ${ODOO_APPS.map(app => {
            const isTarget = activeM && activeM.app === app.id && !state.completedMissions.includes(activeM.id);
            return `
              <div class="app-tile ${isTarget ? "quest-highlight" : ""}" onclick="navigateApp('${app.id}')">
                ${isTarget ? `<span class="app-badge">MISSIONE</span>` : ""}
                <div class="app-icon" style="background: ${app.color}">${app.icon}</div>
                <div class="app-name">${app.name}</div>
                <div style="font-size:11px; color:var(--text-muted)">${app.desc}</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
    return;
  }

  // Render Specific Module
  if (state.currentApp === "crm") renderCRM(vp, titleEl, crumbsEl);
  else if (state.currentApp === "sales") renderSales(vp, titleEl, crumbsEl);
  else if (state.currentApp === "mrp") renderMRP(vp, titleEl, crumbsEl);
  else if (state.currentApp === "inventory") renderInventory(vp, titleEl, crumbsEl);
  else if (state.currentApp === "accounting") renderAccounting(vp, titleEl, crumbsEl);
  else if (state.currentApp === "studio") renderStudio(vp, titleEl, crumbsEl);
}

// -------------------- 1. CRM VIEW --------------------
function renderCRM(vp, titleEl, crumbsEl) {
  titleEl.textContent = "CRM";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Pipeline Commerciale</span> <span class="crumb-sep">/</span> <span>Colonia Marte Alpha</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-ai" onclick="actionCrmAiScore()">
          ✨ ${state.crmScored ? "AI Score: 96% (Qualificata)" : "AI Score & Qualifica Lead"}
        </button>
        <button class="btn-odoo-teal" onclick="actionCrmCreateQuote()">
          📄 ${state.crmQuoted ? "Preventivo SO042 Creato" : "Nuovo Preventivo"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.crmScored ? "current" : "done"}">Nuovo Lead</span>
        <span class="status-step ${state.crmScored && !state.crmQuoted ? "current" : state.crmQuoted ? "done" : ""}">Qualificata</span>
        <span class="status-step ${state.crmQuoted ? "current" : ""}">Preventivo Inviato</span>
      </div>
    </div>

    ${state.crmQuoted ? `
      <div class="smart-buttons-row">
        <button class="smart-button" onclick="navigateApp('sales')">
          <span class="sb-icon">📈</span>
          <div class="sb-info">
            <span class="sb-val">1 Preventivo (SO042)</span>
            <span class="sb-lbl">Vai a Vendite →</span>
          </div>
        </button>
      </div>
    ` : ""}

    <div class="kanban-board">
      <div class="kanban-col">
        <div class="kanban-col-header"><span>NUOVI LEAD</span> <span>${state.crmScored ? "0" : "1"}</span></div>
        ${!state.crmScored ? `
          <div class="kanban-card active-card">
            <div class="kc-title">🚀 Fornitura 4x Reattori Quantici</div>
            <div class="kc-partner">🏢 Colonia Marte Alpha</div>
            <div class="kc-rev">₡ 18.000</div>
            <div style="margin-top:8px; font-size:11px; color:var(--accent-cyan)">In attesa di qualifica AI...</div>
          </div>
        ` : ""}
      </div>

      <div class="kanban-col">
        <div class="kanban-col-header"><span>QUALIFICATI (AI)</span> <span>${state.crmScored && !state.crmQuoted ? "1" : "0"}</span></div>
        ${state.crmScored && !state.crmQuoted ? `
          <div class="kanban-card active-card">
            <div class="kc-title">🚀 Fornitura 4x Reattori Quantici</div>
            <div class="kc-partner">🏢 Colonia Marte Alpha</div>
            <div class="kc-rev">₡ 18.000 — ⭐ 96% Probabilità</div>
            <div style="margin-top:8px; font-size:11px; color:var(--accent-green)">Pronto per generazione Preventivo!</div>
          </div>
        ` : ""}
      </div>

      <div class="kanban-col">
        <div class="kanban-col-header"><span>PROPOSTA / PREVENTIVO</span> <span>${state.crmQuoted ? "1" : "0"}</span></div>
        ${state.crmQuoted ? `
          <div class="kanban-card active-card">
            <div class="kc-title">🚀 Fornitura 4x Reattori Quantici</div>
            <div class="kc-partner">🏢 Colonia Marte Alpha</div>
            <div class="kc-rev">₡ 18.000 — Preventivo SO042</div>
            <button class="btn-odoo-teal" style="margin-top:8px; width:100%" onclick="navigateApp('sales')">Apri SO042 in Vendite →</button>
          </div>
        ` : ""}
      </div>

      <div class="kanban-col">
        <div class="kanban-col-header"><span>VINTI</span> <span>${state.salesConfirmed ? "1" : "0"}</span></div>
        <div class="kanban-card">
          <div class="kc-title">🛰️ Sensori Stazione Europa</div>
          <div class="kc-partner">🏢 Jupiter Mining Corp</div>
          <div class="kc-rev">₡ 6.400</div>
        </div>
      </div>
    </div>
  `;
}

window.actionCrmAiScore = function() {
  AudioFX.play("ai");
  state.crmScored = true;
  showToast("✨ <strong>Odoo 20 AI Scoring:</strong> Probabilità chiusura calcolata al 96%! Opportunità spostata in <em>Qualificati</em>.", "info");
  logChatter("Odoo 20 AI Copilot", "Analisi storica completata su 'Colonia Marte Alpha': probabilità di chiusura 96.4%. Spostato nello stage Qualificati.", "system-audit");
  saveState();
  renderAll();
};

window.actionCrmCreateQuote = function() {
  if (!state.crmScored) {
    showToast("⚠️ Prima qualifica l'opportunità con il pulsante <strong>✨ AI Score & Qualifica Lead</strong>!", "info");
    return;
  }
  state.crmQuoted = true;
  logChatter("CRM → Vendite", "Generato Preventivo SO042 collegato automaticamente all'opportunità 'Colonia Marte Alpha'.", "system-audit");
  completeMission(0);
};

// -------------------- 2. SALES VIEW --------------------
function renderSales(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Vendite";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Preventivi</span> <span class="crumb-sep">/</span> <span>SO042 (Colonia Marte Alpha)</span>`;

  const totalAmount = state.salesUpsold ? "₡ 24.000" : "₡ 18.000";

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-ai" onclick="actionSalesUpsell()">
          ✨ ${state.salesUpsold ? "Kit Stabilizzatori Aggiunto (+₡6.000)" : "Aggiungi Prodotto Suggerito AI (Up-Sell)"}
        </button>
        <button class="btn-odoo-teal" onclick="actionSalesConfirm()">
          ✅ ${state.salesConfirmed ? "Ordine SO042 Confermato" : "Conferma Ordine"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.salesConfirmed ? "current" : "done"}">Preventivo</span>
        <span class="status-step ${state.salesConfirmed ? "current" : ""}">Ordine di Vendita (Sales Order)</span>
      </div>
    </div>

    ${state.salesConfirmed ? `
      <div class="smart-buttons-row">
        <button class="smart-button" onclick="navigateApp('mrp')">
          <span class="sb-icon">⚙️</span>
          <div class="sb-info">
            <span class="sb-val">1 Produzione (MO/0019)</span>
            <span class="sb-lbl">Ordine MTO Generato →</span>
          </div>
        </button>
        <button class="smart-button" onclick="navigateApp('inventory')">
          <span class="sb-icon">🚚</span>
          <div class="sb-info">
            <span class="sb-val">1 Consegna (WH/OUT/0088)</span>
            <span class="sb-lbl">Spedizione Riservata →</span>
          </div>
        </button>
      </div>
    ` : ""}

    <div class="odoo-sheet">
      <h3 style="margin-bottom:14px; font-family:var(--font-display)">ORDINE #SO042 — Colonia Marte Alpha</h3>
      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Cliente (res.partner)</span>
          <div class="field-value">🪐 Colonia Marte Alpha — Settore Tharsis 4</div>
        </div>
        <div class="field-group">
          <span class="field-label">Listino & Termini Pagamento</span>
          <div class="field-value">Listino Interplanetario (₡) // 30 Giorni</div>
        </div>
      </div>

      <table class="odoo-table">
        <thead>
          <tr>
            <th>Prodotto</th>
            <th>Rotta Logistica</th>
            <th>Quantità</th>
            <th>Prezzo Unitario</th>
            <th>Subtotale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>[Q-REACT-20] Reattore Quantico MK-IV</strong></td>
            <td><span style="color:var(--accent-cyan)">Produci su Ordine (MTO + BoM)</span></td>
            <td>4 Unità</td>
            <td>₡ 4.500</td>
            <td><strong>₡ 18.000</strong></td>
          </tr>
          ${state.salesUpsold ? `
            <tr>
              <td><strong>[STAB-AI] Kit Stabilizzatori Magnetici (AI Up-sell)</strong></td>
              <td><span style="color:var(--accent-green)">Preleva da Stock</span></td>
              <td>4 Unità</td>
              <td>₡ 1.500</td>
              <td><strong>₡ 6.000</strong></td>
            </tr>
          ` : ""}
        </tbody>
      </table>

      <div style="text-align:right; margin-top:16px; font-size:16px; font-family:var(--font-mono)">
        Totale Imponibile: <strong style="color:var(--accent-gold)">${totalAmount}</strong>
      </div>
    </div>
  `;
}

window.actionSalesUpsell = function() {
  AudioFX.play("ai");
  state.salesUpsold = true;
  showToast("✨ <strong>AI Catalog Suggestion:</strong> Aggiunto 'Kit Stabilizzatori Magnetici' al preventivo (+₡ 6.000)!", "info");
  logChatter("Odoo 20 Sales AI", "Aggiunta riga di cross-selling consigliata: 4x Kit Stabilizzatori Magnetici.", "system-audit");
  saveState();
  renderAll();
};

window.actionSalesConfirm = function() {
  if (!state.salesUpsold) {
    showToast("💡 Prima clicca <strong>✨ Aggiungi Prodotto Suggerito AI</strong> per massimizzare il valore dell'ordine!", "info");
    return;
  }
  state.salesConfirmed = true;
  logChatter("Motore Regole Logistiche", "SO042 Confermato! Generati automaticamente: Consegna WH/OUT/0088 e Ordine di Produzione WH/MO/0019.", "system-audit");
  completeMission(1);
};

// -------------------- 3. MRP (PRODUCTION) VIEW --------------------
function renderMRP(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Produzione (MRP)";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Ordini di Produzione</span> <span class="crumb-sep">/</span> <span>WH/MO/0019</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-primary" onclick="actionMrpCheck()">
          🔍 ${state.mrpChecked ? "Componenti Riservati (100%)" : "Controlla Disponibilità Componenti"}
        </button>
        <button class="btn-odoo-teal" onclick="actionMrpProduce()">
          ⚙️ ${state.mrpDone ? "Produzione Completata" : "Segna come Fatto (Shop Floor 20)"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.mrpChecked ? "current" : "done"}">Confermato</span>
        <span class="status-step ${state.mrpChecked && !state.mrpDone ? "current" : state.mrpDone ? "done" : ""}">In Corso (Shop Floor)</span>
        <span class="status-step ${state.mrpDone ? "current" : ""}">Fatto</span>
      </div>
    </div>

    ${state.mrpDone ? `
      <div class="smart-buttons-row">
        <button class="smart-button" onclick="navigateApp('inventory')">
          <span class="sb-icon">📦</span>
          <div class="sb-info">
            <span class="sb-val">Stock Caricato: 4 Unità</span>
            <span class="sb-lbl">Vai alla Spedizione WH/OUT/0088 →</span>
          </div>
        </button>
      </div>
    ` : ""}

    <div class="odoo-sheet">
      <h3 style="margin-bottom:14px; font-family:var(--font-display)">WH/MO/0019 — 4x Reattore Quantico MK-IV</h3>
      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Distinta Base (BoM)</span>
          <div class="field-value">BOM-Q-REACT-20 (Assemblaggio Laser + Test Vuoto)</div>
        </div>
        <div class="field-group">
          <span class="field-label">Documento Origine</span>
          <div class="field-value">Ordine di Vendita SO042</div>
        </div>
      </div>

      <h4 style="margin:12px 0 6px; font-size:12px; color:var(--text-muted)">COMPONENTI RICHIESTI DALLA DISTINTA BASE (BoM)</h4>
      <table class="odoo-table">
        <thead>
          <tr>
            <th>Componente</th>
            <th>Da Consumare</th>
            <th>Riservato</th>
            <th>Stato Magazzino</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🔩 Camere di Contenimento al Titanio</td>
            <td>4 Unità</td>
            <td>${state.mrpChecked ? "4 Unità" : "0 Unità"}</td>
            <td><span style="color:${state.mrpChecked ? "var(--accent-green)" : "var(--accent-gold)"}">${state.mrpChecked ? "✅ Disponibile & Riservato" : "⏳ Da Riservare"}</span></td>
          </tr>
          <tr>
            <td>⚡ Nuclei Iniettori a Neutrini</td>
            <td>8 Unità</td>
            <td>${state.mrpChecked ? "8 Unità" : "0 Unità"}</td>
            <td><span style="color:${state.mrpChecked ? "var(--accent-green)" : "var(--accent-gold)"}">${state.mrpChecked ? "✅ Disponibile & Riservato" : "⏳ Da Riservare"}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

window.actionMrpCheck = function() {
  AudioFX.play("click");
  state.mrpChecked = true;
  showToast("🔍 <strong>Controllo Disponibilità:</strong> Tutti i componenti della Distinta Base (BoM) sono stati riservati in WH/Stock!", "info");
  saveState();
  renderAll();
};

window.actionMrpProduce = function() {
  if (!state.mrpChecked) {
    showToast("⚠️ Prima clicca <strong>🔍 Controlla Disponibilità Componenti</strong> per riservare le materie prime!", "info");
    return;
  }
  state.mrpDone = true;
  logChatter("Odoo 20 Shop Floor", "WH/MO/0019 completato. Scaricati componenti e caricati +4 Reattori Quantici MK-IV in WH/Stock.", "system-audit");
  completeMission(2);
};

// -------------------- 4. INVENTORY VIEW --------------------
function renderInventory(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Magazzino";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Consegne</span> <span class="crumb-sep">/</span> <span>WH/OUT/0088</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-ai" onclick="actionInvScan()">
          📱 ${state.invScanned ? "Numeri di Serie Scansionati" : "Scansiona Barcode Lotti/Serie"}
        </button>
        <button class="btn-odoo-teal" onclick="actionInvValidate()">
          🚚 ${state.invValidated ? "Spedizione WH/OUT/0088 Validata" : "Valida Spedizione"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step done">In Attesa</span>
        <span class="status-step ${!state.invValidated ? "current" : "done"}">Pronto</span>
        <span class="status-step ${state.invValidated ? "current" : ""}">Fatto (Spedito)</span>
      </div>
    </div>

    ${state.invValidated ? `
      <div class="smart-buttons-row">
        <button class="smart-button" onclick="navigateApp('accounting')">
          <span class="sb-icon">💳</span>
          <div class="sb-info">
            <span class="sb-val">Crea Fattura (INV/2026/0091)</span>
            <span class="sb-lbl">Vai a Contabilità →</span>
          </div>
        </button>
      </div>
    ` : ""}

    <div class="odoo-sheet">
      <h3 style="margin-bottom:14px; font-family:var(--font-display)">TRASFERIMENTO IN USCITA #WH/OUT/0088</h3>
      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Movimento Doppia Partita</span>
          <div class="field-value">WH/Stock ➔ Partner Locations / Customers (Marte)</div>
        </div>
        <div class="field-group">
          <span class="field-label">Documento Origine</span>
          <div class="field-value">SO042 (Colonia Marte Alpha)</div>
        </div>
      </div>

      <table class="odoo-table">
        <thead>
          <tr>
            <th>Prodotto</th>
            <th>Domanda</th>
            <th>Lotto / Numero di Serie</th>
            <th>Fatto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>[Q-REACT-20] Reattore Quantico MK-IV</strong></td>
            <td>4 Unità</td>
            <td><span style="font-family:var(--font-mono); color:var(--accent-cyan)">${state.invScanned ? "SN-MARS-901 .. SN-MARS-904" : "Non assegnato"}</span></td>
            <td>${state.invScanned ? "4 Unità" : "0 Unità"}</td>
          </tr>
          <tr>
            <td><strong>[STAB-AI] Kit Stabilizzatori Magnetici</strong></td>
            <td>4 Unità</td>
            <td><span style="font-family:var(--font-mono); color:var(--accent-cyan)">${state.invScanned ? "LOT-STAB-2026" : "Non assegnato"}</span></td>
            <td>${state.invScanned ? "4 Unità" : "0 Unità"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

window.actionInvScan = function() {
  AudioFX.play("ai");
  state.invScanned = true;
  showToast("📱 <strong>Odoo 20 Barcode App:</strong> Scansionati istantaneamente i seriali SN-MARS-901..904!", "info");
  saveState();
  renderAll();
};

window.actionInvValidate = function() {
  if (!state.invScanned) {
    showToast("⚠️ Tracciabilità obbligatoria! Clicca prima su <strong>📱 Scansiona Barcode Lotti/Serie</strong>.", "info");
    return;
  }
  state.invValidated = true;
  logChatter("Magazzino (WH/OUT/0088)", "Merce spedita verso Partner Locations/Customers. Tracciabilità seriali registrata.", "system-audit");
  completeMission(3);
};

// -------------------- 5. ACCOUNTING VIEW --------------------
function renderAccounting(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Contabilità";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Fatture Clienti</span> <span class="crumb-sep">/</span> <span>INV/2026/0091</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-primary" onclick="actionAccPost()">
          📨 ${state.accPosted ? "Fattura Registrata a Mastrino" : "Conferma & Invia Fattura"}
        </button>
        <button class="btn-odoo-ai" onclick="actionAccReconcile()">
          ⚡ ${state.accReconciled ? "Pagata & Riconciliata (AI)" : "Riconciliazione Bancaria AI"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.accPosted ? "current" : "done"}">Bozza</span>
        <span class="status-step ${state.accPosted && !state.accReconciled ? "current" : state.accReconciled ? "done" : ""}">Registrata (Posted)</span>
        <span class="status-step ${state.accReconciled ? "current" : ""}">Pagata (In Payment / Paid)</span>
      </div>
    </div>

    <div class="odoo-sheet">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px">
        <h3 style="font-family:var(--font-display)">FATTURA #INV/2026/0091</h3>
        ${state.accReconciled ? `<span style="background:var(--accent-green); color:#000; font-weight:800; padding:4px 12px; border-radius:6px">PAGATO (RICONCILIATO)</span>` : ""}
      </div>

      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Partner Debitore</span>
          <div class="field-value">🪐 Colonia Marte Alpha (Origine: SO042)</div>
        </div>
        <div class="field-group">
          <span class="field-label">Feed Bancario Sincronizzato</span>
          <div class="field-value">Intergalactic Bank — Bonifico in entrata: <strong>+₡ 24.000</strong></div>
        </div>
      </div>

      <h4 style="margin:12px 0 6px; font-size:12px; color:var(--text-muted)">SCRITTURE CONTabili (PARTITA DOPPIA AUTOMATICA)</h4>
      <table class="odoo-table">
        <thead>
          <tr>
            <th>Conto Co.Ge.</th>
            <th>Descrizione</th>
            <th>Dare (Debit)</th>
            <th>Avere (Credit)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>110100 Crediti v/Clienti Galattici</td>
            <td>Fattura INV/2026/0091 — Marte Alpha</td>
            <td>₡ 24.000</td>
            <td>₡ 0</td>
          </tr>
          <tr>
            <td>400100 Ricavi Vendite Propulsori</td>
            <td>4x Reattori Quantici + 4x Kit Stabilizzatori</td>
            <td>₡ 0</td>
            <td>₡ 24.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

window.actionAccPost = function() {
  AudioFX.play("click");
  state.accPosted = true;
  showToast("📨 <strong>Fattura Confermata:</strong> Scritture contabili in partita doppia generate automaticamente!", "info");
  saveState();
  renderAll();
};

window.actionAccReconcile = function() {
  if (!state.accPosted) {
    showToast("⚠️ Prima registra la fattura cliccando <strong>📨 Conferma & Invia Fattura</strong>!", "info");
    return;
  }
  state.accReconciled = true;
  logChatter("AI Bank Reconciliation", "Abbinato movimento bancario #BNK-992 (+₡ 24.000) alla fattura INV/2026/0091. Residuo dovuto: ₡ 0.", "system-audit");
  completeMission(4);
};

// -------------------- 6. STUDIO & AI VIEW --------------------
function renderStudio(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Odoo Studio & AI Agents";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Personalizzazione No-Code</span> <span class="crumb-sep">/</span> <span>sale.order</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-primary" onclick="actionStudioAddField()">
          ➕ ${state.studioFieldAdded ? "Campo x_studio_rischio_meteoriti Creato" : "Trascina Campo Personalizzato"}
        </button>
        <button class="btn-odoo-ai" onclick="actionStudioDeployAi()">
          🚀 ${state.studioAiDeployed ? "Agente AI Attivo" : "Pubblica Automazione AI"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.studioAiDeployed ? "current" : "done"}">Modalità Editing Studio</span>
        <span class="status-step ${state.studioAiDeployed ? "current" : ""}">In Produzione</span>
      </div>
    </div>

    <div class="odoo-sheet">
      <h3 style="margin-bottom:14px; font-family:var(--font-display)">🛠️ ODOO 20 STUDIO — DRAG & DROP BUILDER</h3>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px">
        In Odoo 20 puoi aggiungere campi al database e creare regole di automazione senza scrivere una riga di Python o XML.
      </p>

      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Modello Target</span>
          <div class="field-value"><code>sale.order</code> (Ordine di Vendita)</div>
        </div>
        <div class="field-group">
          <span class="field-label">Nuovo Campo Studio</span>
          <div class="field-value" style="border-color:${state.studioFieldAdded ? "var(--accent-cyan)" : "var(--border-subtle)"}">
            ${state.studioFieldAdded ? "✅ <strong>x_studio_rischio_meteoriti</strong> (Selezione: Basso / Medio / Critico)" : "⏳ Nessun campo personalizzato aggiunto"}
          </div>
        </div>
      </div>

      <div class="field-group" style="margin-top:12px">
        <span class="field-label">Regola di Automazione Server & AI Agent</span>
        <div class="field-value">
          ${state.studioAiDeployed
            ? "🤖 <strong>ATTIVO:</strong> Quando <code>x_studio_rischio_meteoriti == 'Critico'</code>, l'Agente AI avvisa la Flotta nel Chatter e assegna l'assicurazione cargo automaticamente."
            : "Configura e pubblica la regola per completare la trasformazione digitale di Nebula Logistics!"}
        </div>
      </div>
    </div>
  `;
}

window.actionStudioAddField = function() {
  AudioFX.play("click");
  state.studioFieldAdded = true;
  showToast("🛠️ <strong>Odoo Studio:</strong> Creato campo <code>x_studio_rischio_meteoriti</code> nella vista Form!", "info");
  saveState();
  renderAll();
};

window.actionStudioDeployAi = function() {
  if (!state.studioFieldAdded) {
    showToast("⚠️ Prima aggiungi il campo cliccando <strong>➕ Trascina Campo Personalizzato</strong>!", "info");
    return;
  }
  state.studioAiDeployed = true;
  logChatter("Odoo Studio 20", "Pubblicato campo x_studio_rischio_meteoriti e attivato Agente AI predittivo.", "system-audit");
  completeMission(5);
};

// ============================================================================
// MODALS: CODEX, THEORY & FINAL BOSS AUDIT QUIZ
// ============================================================================
function openModal(title, htmlContent) {
  document.getElementById("modal-title").innerHTML = title;
  document.getElementById("modal-body").innerHTML = htmlContent;
  document.getElementById("info-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("info-modal").classList.add("hidden");
}

window.openCodex = function() {
  AudioFX.play("click");
  const html = `
    <div style="display:flex; flex-direction:column; gap:14px">
      <p>Questo manuale riassume i concetti chiave di <strong>Odoo 20</strong> che stai padroneggiando nella simulazione:</p>
      ${MISSIONS.map(m => `
        <div style="background:rgba(255,255,255,0.04); padding:12px; border-radius:8px; border-left:3px solid var(--accent-cyan)">
          ${m.theory}
        </div>
      `).join("")}
    </div>
  `;
  openModal("📘 Codex Ufficiale Odoo 20", html);
};

window.openBossAudit = function() {
  AudioFX.play("ai");
  const html = `
    <div>
      <p style="margin-bottom:14px"><strong>L'Ispettore Galattico ERP</strong> vuole verificare se conosci davvero il funzionamento di <strong>Odoo 20</strong>. Rispondi correttamente alle 3 domande:</p>

      <div style="margin-bottom:14px">
        <p><strong>1. Cosa succede in Odoo 20 quando clicchi "Conferma" su un Preventivo (Quotation)?</strong></p>
        <select id="quiz-q1" style="width:100%; padding:8px; margin-top:6px; background:#0f111d; color:#fff; border:1px solid var(--border-subtle); border-radius:6px">
          <option value="0">Viene cancellato il cliente dal CRM</option>
          <option value="1">Diventa un Ordine di Vendita (Sales Order) e genera in automatico Consegna/Produzione</option>
          <option value="0">Invia solo un file Excel via fax</option>
        </select>
      </div>

      <div style="margin-bottom:14px">
        <p><strong>2. Come funziona la logistica a doppia partita del Magazzino Odoo?</strong></p>
        <select id="quiz-q2" style="width:100%; padding:8px; margin-top:6px; background:#0f111d; color:#fff; border:1px solid var(--border-subtle); border-radius:6px">
          <option value="1">Ogni movimento sposta quantità da un'Ubicazione Sorgente (es. WH/Stock) a una Destinazione (es. Customers)</option>
          <option value="0">Le quantità vengono sovrascritte a mano senza storico</option>
        </select>
      </div>

      <div style="margin-bottom:18px">
        <p><strong>3. Qual è la scorciatoia globale per aprire la Command Palette in Odoo?</strong></p>
        <select id="quiz-q3" style="width:100%; padding:8px; margin-top:6px; background:#0f111d; color:#fff; border:1px solid var(--border-subtle); border-radius:6px">
          <option value="0">Ctrl + Alt + Canc</option>
          <option value="1">Alt + K (o Ctrl + K)</option>
        </select>
      </div>

      <button class="btn-odoo-teal" style="width:100%; padding:10px" onclick="submitBossQuiz()">🏆 Verifica Certificazione Odoo 20</button>
    </div>
  `;
  openModal("👾 BOSS FIGHT: Ispettore Certificazione Odoo 20", html);
};

window.submitBossQuiz = function() {
  const q1 = document.getElementById("quiz-q1").value;
  const q2 = document.getElementById("quiz-q2").value;
  const q3 = document.getElementById("quiz-q3").value;

  if (q1 === "1" && q2 === "1" && q3 === "1") {
    AudioFX.play("success");
    state.xp += 200;
    state.efficiency = 100;
    state.chaos = 0;
    saveState();
    renderAll();
    openModal("🏅 CERTIFICAZIONE ODOO 20 OTTENUTA!", `
      <div style="text-align:center; padding:16px">
        <div style="font-size:52px; margin-bottom:10px">🏆</div>
        <h2 style="font-family:var(--font-display); color:var(--accent-gold); margin-bottom:8px">ODOO 20 ARCHITECT CERTIFICATO</h2>
        <p style="margin-bottom:16px">Hai risposto correttamente a tutte le domande dell'Ispettore e hai azzerato il Caos Excel della Nebula Logistics Corp!</p>
        <div style="background:rgba(0,240,255,0.08); border:1px solid var(--accent-cyan); padding:12px; border-radius:10px; font-family:var(--font-mono)">
          PUNTEGGIO FINALE: ${state.xp} XP // EFFICIENZA AZIENDALE: 100%
        </div>
      </div>
    `);
  } else {
    showToast("❌ Alcune risposte non sono esatte! Rileggi il Codex Odoo 20 e riprova!", "info");
  }
};

// ============================================================================
// COMMAND PALETTE (ALT+K)
// ============================================================================
function toggleCmdPalette(forceState) {
  const modal = document.getElementById("cmd-palette-modal");
  const isHidden = modal.classList.contains("hidden");
  const show = forceState !== undefined ? forceState : isHidden;

  if (show) {
    modal.classList.remove("hidden");
    const inp = document.getElementById("cmd-search-input");
    inp.value = "";
    renderCmdResults("");
    setTimeout(() => inp.focus(), 50);
  } else {
    modal.classList.add("hidden");
  }
}

function renderCmdResults(query) {
  const q = query.toLowerCase().trim();
  const items = [
    { label: "🏠 Vai alla Dashboard App (Home)", action: () => navigateApp("home") },
    ...ODOO_APPS.map(a => ({
      label: `${a.icon} Apri Modulo ${a.name} — ${a.desc}`,
      action: () => navigateApp(a.id)
    })),
    { label: "📘 Apri Codex & Manuale Odoo 20", action: () => openCodex() },
    { label: "👾 Avvia Boss Fight Certificazione", action: () => openBossAudit() }
  ].filter(item => item.label.toLowerCase().includes(q));

  const resEl = document.getElementById("cmd-results");
  resEl.innerHTML = items.map((it, idx) => `
    <div class="cmd-item" data-idx="${idx}">
      <span>${it.label}</span>
      <kbd>Invio</kbd>
    </div>
  `).join("");

  resEl.querySelectorAll(".cmd-item").forEach((el, idx) => {
    el.addEventListener("click", () => {
      toggleCmdPalette(false);
      items[idx].action();
    });
  });
}

// ============================================================================
// STARFIELD CANVAS ANIMATION
// ============================================================================
function initStarfield() {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      s: Math.random() * 0.3 + 0.08
    }));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(200, 230, 255, 0.65)";
    for (const st of stars) {
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fill();
      st.y += st.s;
      if (st.y > canvas.height) {
        st.y = 0;
        st.x = Math.random() * canvas.width;
      }
    }
    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  resize();
  animate();
}

// ============================================================================
// INITIALIZATION & EVENT LISTENERS
// ============================================================================
function renderAll() {
  renderHUD();
  renderMissionsList();
  renderViewport();
  renderChatter();
}

document.addEventListener("DOMContentLoaded", () => {
  initStarfield();
  renderAll();

  // Top Navbar & HUD buttons
  document.getElementById("odoo-home-btn").addEventListener("click", () => navigateApp("home"));
  document.getElementById("odoo-cmd-palette-btn").addEventListener("click", () => toggleCmdPalette(true));
  document.getElementById("btn-codex").addEventListener("click", openCodex);
  document.getElementById("btn-boss-trigger").addEventListener("click", openBossAudit);
  document.getElementById("modal-close-btn").addEventListener("click", closeModal);

  document.getElementById("btn-sound").addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    saveState();
    renderHUD();
  });

  document.getElementById("btn-reset").addEventListener("click", () => {
    localStorage.removeItem("odoo20_odyssey_state");
    state = { ...defaultState, completedMissions: [], chatterMessages: [...defaultState.chatterMessages] };
    showToast("↺ <strong>Partita resettata!</strong> Pronti per una nuova implementazione ERP.", "info");
    renderAll();
  });

  // Mentor buttons
  document.getElementById("btn-hint").addEventListener("click", () => {
    const m = MISSIONS[state.activeMission];
    if (m) showToast(`💡 <strong>Indizio O.D.I.N.:</strong> ${m.hint}`, "info");
  });

  document.getElementById("btn-explain").addEventListener("click", () => {
    const m = MISSIONS[state.activeMission];
    if (m) openModal(`🎓 Teoria — ${m.tag}`, m.theory);
  });

  // Chatter composer
  document.getElementById("chatter-send-btn").addEventListener("click", () => {
    const inp = document.getElementById("chatter-input");
    const val = inp.value.trim();
    if (!val) return;
    logChatter("Tu (Consulente ERP)", val, "user");
    inp.value = "";
    if (val.toLowerCase().includes("ai") || val.includes("?")) {
      setTimeout(() => {
        logChatter("O.D.I.N. AI Copilot", "Ricevuto! Ricorda che ogni nota nel Chatter resta allegata al documento per l'audit aziendale.", "system-audit");
      }, 500);
    }
  });

  document.getElementById("chatter-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("chatter-send-btn").click();
  });

  // Command Palette input & keyboard shortcuts
  document.getElementById("cmd-search-input").addEventListener("input", (e) => {
    renderCmdResults(e.target.value);
  });

  window.addEventListener("keydown", (e) => {
    if ((e.altKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      toggleCmdPalette();
    } else if (e.key === "Escape") {
      toggleCmdPalette(false);
      closeModal();
    }
  });
});
