// ============================================================================
// ODOO 20: ERP ODYSSEY — Core Simulation & Gamified Learning Engine (11 Modules)
// ============================================================================

const RANKS = [
  { minXp: 0, title: "STAGE 1: Stagista Galattico" },
  { minXp: 150, title: "STAGE 2: Operatore CRM Stellare" },
  { minXp: 350, title: "STAGE 3: Specialista Flussi ERP" },
  { minXp: 600, title: "STAGE 4: Architetto Supply Chain" },
  { minXp: 850, title: "STAGE 5: Fiscal & HR Strategist" },
  { minXp: 1100, title: "STAGE 6: Odoo 20 Master Consultant" }
];

const ODOO_APPS = [
  { id: "crm", name: "CRM", icon: "🎯", color: "linear-gradient(135deg, #00b4d8, #0077b6)", desc: "Pipeline Opportunità, Lead Scoring AI e Preventivi." },
  { id: "sales", name: "Vendite", icon: "📈", color: "linear-gradient(135deg, #f77f00, #d62828)", desc: "Dal Preventivo (Quotation) al Sales Order." },
  { id: "purchase", name: "Acquisti", icon: "🛒", color: "linear-gradient(135deg, #06d6a0, #118ab2)", desc: "Richieste di Preventivo (RfQ), Purchase Order e Fornitori." },
  { id: "mrp", name: "Produzione", icon: "⚙️", color: "linear-gradient(135deg, #10b981, #047857)", desc: "Distinta Base (BoM), Ordini Produzione (MO) e Shop Floor." },
  { id: "inventory", name: "Magazzino", icon: "📦", color: "linear-gradient(135deg, #8338ec, #3a86ff)", desc: "Spedizioni, Barcode Scanner, Regole Riordino." },
  { id: "accounting", name: "Contabilità", icon: "💳", color: "linear-gradient(135deg, #ec4899, #8b5cf6)", desc: "Partita Doppia, Mastrino e Riconciliazione Bancaria AI." },
  { id: "einvoice", name: "FatturaPA & SDI", icon: "🧾", color: "linear-gradient(135deg, #ef4444, #b91c1c)", desc: "Fatturazione Elettronica Online XML, SDI / PEPPOL e VIES." },
  { id: "website", name: "Sito & eCommerce", icon: "🌐", color: "linear-gradient(135deg, #3b82f6, #1d4ed8)", desc: "AI Website Builder, Catalogo Online e Checkout Integrato." },
  { id: "project", name: "Progetti & Ore", icon: "📋", color: "linear-gradient(135deg, #14b8a6, #0f766e)", desc: "Task di Installazione, Timesheet e Fatturazione a Tempo." },
  { id: "hr", name: "Risorse Umane", icon: "👥", color: "linear-gradient(135deg, #a855f7, #6d28d9)", desc: "Dipendenti, Competenze (Skills), Ferie e Note Spese OCR." },
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
    hint: "Clicca sull'icona 'CRM' nella Home (o premi Alt+K e scrivi CRM). Poi clicca '✨ AI Score & Qualifica' e infine 'Nuovo Preventivo'.",
    theory: `
      <h4>🎯 Come funziona il CRM in Odoo 20</h4>
      <p>In Odoo 20 i <strong>Lead</strong> e le <strong>Opportunità</strong> vivono in una vista <em>Kanban</em> fluida:</p>
      <ul>
        <li><strong>Predictive Lead Scoring AI:</strong> Odoo 20 calcola la probabilità di chiusura in base a storico, settore e velocità di risposta nel Chatter.</li>
        <li><strong>Zero Data Re-entry:</strong> Cliccando <em>"Nuovo Preventivo"</em> direttamente dall'opportunità, i dati del cliente (<code>res.partner</code>) passano automaticamente al modulo Vendite!</li>
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
    desc: "Nel modulo Vendite, aggiungi il 'Kit Stabilizzatori AI' al preventivo SO042 e clicca 'Conferma Ordine' per attivare le rotte logistiche.",
    hint: "Vai nell'app Vendite. Clicca '✨ Aggiungi Prodotto Suggerito AI' e poi '✅ Conferma Ordine'.",
    theory: `
      <h4>📈 Dal Preventivo (Quotation) all'Ordine di Vendita (Sales Order)</h4>
      <p>Finché un documento è in stato <strong>Preventivo</strong>, non muove né la merce né la contabilità. Appena premi <strong>Conferma</strong>:</p>
      <ul>
        <li>Lo stato passa a <strong>Ordine di Vendita (Sales Order)</strong>.</li>
        <li>Compaiono in alto a destra gli <strong>Smart Button</strong> collegati automaticamente al <em>Magazzino</em> (Consegna) e alla <em>Produzione</em>.</li>
      </ul>
    `
  },
  {
    id: 2,
    app: "purchase",
    tag: "MODULO 03 // ACQUISTI",
    title: "Approvvigionamento Neutrini (PO007)",
    xp: 100,
    credits: 5000,
    desc: "Per produrre i Reattori servono materie prime! Apri Acquisti, invia la Richiesta di Preventivo (RfQ) a ' Saturn Mining Ltd' e conferma l'Ordine di Acquisto PO007.",
    hint: "Apri l'app Acquisti. Clicca '📧 Invia RfQ via Email/Portale' e poi '✅ Conferma Ordine d'Acquisto & Ricevi Merce'.",
    theory: `
      <h4>🛒 Acquisti (Purchase) & Regole di Riordino</h4>
      <p>Quando lo stock scende sotto la soglia minima o scatta una regola MTO, Odoo genera automaticamente una <strong>Richiesta di Preventivo (RfQ - Request for Quotation)</strong> verso il fornitore predefinito:</p>
      <ul>
        <li>Confermando la RfQ, essa diventa un <strong>Purchase Order (PO)</strong> e genera il movimento di ingresso merce <code>WH/IN</code> in Magazzino!</li>
      </ul>
    `
  },
  {
    id: 3,
    app: "mrp",
    tag: "MODULO 04 // PRODUZIONE (MRP)",
    title: "Assembla i Reattori Quantici",
    xp: 100,
    credits: 7500,
    desc: "Le materie prime sono arrivate! Apri Produzione (MRP), verifica la Distinta Base (BoM) e completa l'Ordine di Produzione WH/MO/0019.",
    hint: "Apri l'app Produzione (MRP). Clicca '🔍 Controlla Disponibilità Componenti' e poi '⚙️ Segna come Fatto (Shop Floor 20)'.",
    theory: `
      <h4>⚙️ Produzione (MRP) & Shop Floor in Odoo 20</h4>
      <p>Quando produci un articolo complesso, Odoo controlla la <strong>Distinta Base (BoM - Bill of Materials)</strong>:</p>
      <ul>
        <li><strong>Ordine di Produzione (MO):</strong> Scarica le materie prime (Camere al Titanio + Nuclei Neutrini) e carica in magazzino il prodotto finito.</li>
        <li><strong>Odoo 20 Shop Floor:</strong> L'interfaccia touch per gli operatori di linea permette di registrare tempi, lotti e controlli qualità in un clic.</li>
      </ul>
    `
  },
  {
    id: 4,
    app: "inventory",
    tag: "MODULO 05 // MAGAZZINO",
    title: "Spedizione Orbitale con Barcode",
    xp: 100,
    credits: 5500,
    desc: "I Reattori sono pronti! Vai in Magazzino, scansiona i numeri di serie del trasferimento WH/OUT/0088 e valida la spedizione.",
    hint: "Apri l'app Magazzino. Clicca '📱 Scansiona Barcode Lotti/Serie' e poi '🚚 Valida Spedizione'.",
    theory: `
      <h4>📦 Magazzino & Doppia Partita Logistica</h4>
      <p>Odoo utilizza la <strong>contabilità di magazzino a doppia partita</strong>: la merce non "appare" o "scompare" mai, ma si sposta sempre da una <em>Ubicazione Sorgente</em> a una <em>Ubicazione Destinazione</em>:</p>
      <ul>
        <li><strong>WH/Stock → Partner Locations/Customers:</strong> Quando validi il documento <code>WH/OUT</code>, lo stock fisico cala e l'ordine di vendita diventa "Pronto da Fatturare".</li>
      </ul>
    `
  },
  {
    id: 5,
    app: "accounting",
    tag: "MODULO 06 // CONTABILITÀ",
    title: "Registrazione Contabile & Riconciliazione AI",
    xp: 100,
    credits: 9000,
    desc: "Registra a mastrino la fattura INV/2026/0091 in Contabilità e usa l'AI Auto-Match per riconciliare il bonifico galattico ricevuto.",
    hint: "Apri Contabilità, clicca '📨 Conferma & Registra Fattura', poi '⚡ Riconciliazione Bancaria AI'.",
    theory: `
      <h4>💳 Contabilità Integrata in Tempo Reale</h4>
      <p>In Odoo 20 la contabilità nasce direttamente dai documenti operativi:</p>
      <ul>
        <li><strong>Partita Doppia Automatica:</strong> Registrando la fattura, Odoo movimenta all'istante il conto <em>Crediti v/Clienti</em> (Dare) e il conto <em>Ricavi</em> (Avere).</li>
        <li><strong>AI Bank Reconciliation:</strong> Il motore AI abbina l'estratto conto bancario chiudendo la partita aperta.</li>
      </ul>
    `
  },
  {
    id: 6,
    app: "einvoice",
    tag: "MODULO 07 // FATTURAZIONE ELETTRONICA ONLINE",
    title: "FatturaPA XML, Controllo AI & Invio SDI/PEPPOL",
    xp: 130,
    credits: 11000,
    desc: "Invia la fattura elettronica online! Apri 'FatturaPA & SDI', valida Codice Destinatario/CIG con l'AI, genera il tracciato XML e trasmettilo allo SDI/PEPPOL.",
    hint: "Apri l'app 'FatturaPA & SDI'. Clicca '🤖 Verifica AI Campi Fiscali (SDI/PEPPOL)' e poi '📡 Genera XML & Invia Online allo SDI'.",
    theory: `
      <h4>🧾 Fatturazione Elettronica Online (SDI / FatturaPA & PEPPOL) in Odoo 20</h4>
      <p>Odoo 20 gestisce nativamente la <strong>Fatturazione Elettronica Italiana (FatturaPA via Sistema di Interscambio - SDI)</strong> ed Europea (<strong>Rete PEPPOL</strong>) senza bisogno di software esterni:</p>
      <ul>
        <li><strong>Pre-Validazione AI:</strong> Prima dell'invio, Odoo controlla Partita IVA (VIES), Codice Destinatario (7 caratteri o PEC), Split Payment, Bollo Virtuale e codici Natura IVA (es. N1..N7).</li>
        <li><strong>Generazione & Firma XML:</strong> Odoo genera il file XML strutturato standard <code>FatturaPA v1.2.2</code> / <code>UBL PEPPOL</code> e lo trasmette via Web-Service diretto.</li>
        <li><strong>Notifiche nel Chatter:</strong> Le ricevute ufficiali dello SDI (<em>RC - Ricevuta di Consegna</em> o <em>NS - Notifica di Scarto</em>) arrivano automaticamente dentro il Chatter della fattura!</li>
      </ul>
    `
  },
  {
    id: 7,
    app: "website",
    tag: "MODULO 08 // SITO WEB & ECOMMERCE",
    title: "Pubblica lo Store B2B/B2C Galattico",
    xp: 100,
    credits: 8500,
    desc: "Vendi online 24/7! Apri 'Sito & eCommerce', genera la vetrina con l'AI Website Builder e pubblica il 'Reattore Quantico' sincronizzato con lo stock reale.",
    hint: "Apri l'app 'Sito & eCommerce'. Clicca '🎨 Genera Pagina con AI Builder' e poi '🟢 Pubblica Prodotto sull'eCommerce'.",
    theory: `
      <h4>🌐 Sito Web & eCommerce Unificati</h4>
      <p>A differenza degli eCommerce esterni che richiedono connettori fragili, l'eCommerce di Odoo 20 legge <strong>lo stesso identico database</strong> del Magazzino e della Contabilità:</p>
      <ul>
        <li>Disponibilità di magazzino, listini B2B personalizzati e portale clienti (dove il cliente scarica le sue fatture PDF/XML) sono aggiornati in tempo reale!</li>
      </ul>
    `
  },
  {
    id: 8,
    app: "project",
    tag: "MODULO 09 // PROGETTI & TIMESHEET",
    title: "Collaudo in Orbita & Fatturazione Ore",
    xp: 100,
    credits: 7000,
    desc: "L'ordine includeva il servizio di installazione! Apri 'Progetti & Ore', registra 8 ore di Timesheet sul task di collaudo e chiudi il progetto.",
    hint: "Apri l'app 'Progetti & Ore'. Clicca '⏱️ Registra 8h su Timesheet' e poi '✅ Completa Task & Sincronizza SAL'.",
    theory: `
      <h4>📋 Progetti, Task & Timesheet Integrati</h4>
      <p>Quando vendi un prodotto di tipo <strong>Servizio</strong> impostato su <em>"Crea Task in Progetto"</em>, la conferma dell'ordine di vendita genera automaticamente la commessa operativa per i tecnici!</p>
    `
  },
  {
    id: 9,
    app: "hr",
    tag: "MODULO 10 // RISORSE UMANE (HR)",
    title: "Ingegneri Spaziali & Note Spese OCR",
    xp: 100,
    credits: 6500,
    desc: "Gestisci il team! Apri 'Risorse Umane', assegna la certificazione 'Fisica Quantistica' all'Ingegnere Capo e approva la sua Nota Spese scansionata con AI OCR.",
    hint: "Apri l'app 'Risorse Umane'. Clicca '🎓 Certifica Skill Dipendente' e poi '🧾 Approva Nota Spese AI OCR'.",
    theory: `
      <h4>👥 Risorse Umane, Skills Matrix & Spese AI</h4>
      <p>La suite HR di Odoo 20 unisce anagrafica dipendenti, matrice delle competenze (<em>Skills</em>), presenze e <strong>Note Spese</strong> con lettura ottica AI delle ricevute per il rimborso automatico in busta paga.</p>
    `
  },
  {
    id: 10,
    app: "studio",
    tag: "MODULO 11 // STUDIO & AI",
    title: "Automazione No-Code con Odoo Studio",
    xp: 120,
    credits: 15000,
    desc: "Estendi Odoo 20 senza scrivere codice! Aggiungi il campo 'Rischio Meteoriti' con Studio e attiva l'Agente AI di Riordino Automatico.",
    hint: "Apri l'app 'Studio & AI', clicca '➕ Trascina Campo Personalizzato' e poi '🚀 Pubblica Automazione AI'.",
    theory: `
      <h4>✨ Odoo Studio & AI Agents 20</h4>
      <p>Con <strong>Odoo Studio</strong> puoi creare nuovi campi (<code>x_studio_...</code>), viste, report PDF e regole di automazione con semplice Drag & Drop, mantenendo la compatibilità con le versioni future!</p>
    `
  }
];

// ============================================================================
// GAME STATE
// ============================================================================
const defaultState = {
  xp: 0,
  credits: 12500,
  efficiency: 10,
  chaos: 90,
  activeMission: 0,
  completedMissions: [],
  currentApp: "home",
  soundEnabled: true,
  // Workflow flags
  crmScored: false,
  crmQuoted: false,
  salesUpsold: false,
  salesConfirmed: false,
  poSent: false,
  poReceived: false,
  mrpChecked: false,
  mrpDone: false,
  invScanned: false,
  invValidated: false,
  accPosted: false,
  accReconciled: false,
  einvValidated: false,
  einvSentSdi: false,
  webBuilt: false,
  webPublished: false,
  projTimesheet: false,
  projDone: false,
  hrSkillAdded: false,
  hrExpenseApproved: false,
  studioFieldAdded: false,
  studioAiDeployed: false,
  chatterMessages: [
    { author: "O.D.I.N. AI", time: "22:45", text: "Sistema Odoo 20 Enterprise inizializzato (11 Moduli Attivi). In attesa del primo flusso operativo.", type: "system-audit" },
    { author: "Capitano Vance (CEO)", time: "22:46", text: "@Consulente I clienti su Marte aspettano i Reattori e lo SDI attende le Fatture Elettroniche XML!", type: "user" }
  ]
};

let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem("odoo20_odyssey_state_v2");
    if (saved) return { ...defaultState, ...JSON.parse(saved) };
  } catch (e) {
    console.warn("Impossibile caricare salvataggio:", e);
  }
  return { ...defaultState };
}

function saveState() {
  try {
    localStorage.setItem("odoo20_odyssey_state_v2", JSON.stringify(state));
  } catch (e) {}
}

// ============================================================================
// WEB AUDIO SYNTHESIZER
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
  }, 4200);
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
  state.efficiency = Math.min(100, Math.round((state.completedMissions.length / MISSIONS.length) * 100));
  state.chaos = Math.max(0, 100 - state.efficiency);

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
  let currentRank = RANKS[0].title;
  for (const r of RANKS) {
    if (state.xp >= r.minXp) currentRank = r.title;
  }
  document.getElementById("player-title").textContent = currentRank;
  document.getElementById("xp-counter").textContent = `${state.xp} / 1150 XP`;
  const pct = Math.min(100, Math.round((state.xp / 1150) * 100));
  document.getElementById("xp-bar-fill").style.width = `${pct}%`;

  document.getElementById("hud-credits").textContent = `₡ ${state.credits.toLocaleString("it-IT")}`;
  document.getElementById("hud-efficiency").textContent = `${state.efficiency}%`;
  document.getElementById("hud-chaos").textContent = `${state.chaos}%`;
  document.getElementById("btn-sound").textContent = state.soundEnabled ? "🔊" : "🔇";

  const activeM = MISSIONS[state.activeMission];
  const mentorEl = document.getElementById("mentor-speech");
  if (state.completedMissions.length === MISSIONS.length) {
    mentorEl.innerHTML = `🎉 <strong>Incredibile lavoro, Master Consultant!</strong> Hai completato tutti gli 11 moduli inclusa la Fatturazione Elettronica SDI! Clicca su <strong>👾 Boss Audit</strong> in alto a destra per la certificazione finale!`;
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
// ODOO 20 VIEWPORT RENDERER (11 APPS & WORKFLOWS)
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
    crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Nebula Logistics OS (11 App Enterprise)</span>`;
    vp.innerHTML = `
      <div class="app-home-container">
        <div class="app-home-header">
          <h2>🪐 Benvenuto in Odoo 20 Enterprise</h2>
          <p>Seleziona uno degli 11 moduli o premi <kbd>Alt</kbd> + <kbd>K</kbd> per aprire la Command Palette globale</p>
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

  if (state.currentApp === "crm") renderCRM(vp, titleEl, crumbsEl);
  else if (state.currentApp === "sales") renderSales(vp, titleEl, crumbsEl);
  else if (state.currentApp === "purchase") renderPurchase(vp, titleEl, crumbsEl);
  else if (state.currentApp === "mrp") renderMRP(vp, titleEl, crumbsEl);
  else if (state.currentApp === "inventory") renderInventory(vp, titleEl, crumbsEl);
  else if (state.currentApp === "accounting") renderAccounting(vp, titleEl, crumbsEl);
  else if (state.currentApp === "einvoice") renderEInvoice(vp, titleEl, crumbsEl);
  else if (state.currentApp === "website") renderWebsite(vp, titleEl, crumbsEl);
  else if (state.currentApp === "project") renderProject(vp, titleEl, crumbsEl);
  else if (state.currentApp === "hr") renderHR(vp, titleEl, crumbsEl);
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
  logChatter("Odoo 20 AI Copilot", "Analisi storica completata su 'Colonia Marte Alpha': probabilità di chiusura 96.4%.", "system-audit");
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
        <button class="smart-button" onclick="navigateApp('purchase')">
          <span class="sb-icon">🛒</span>
          <div class="sb-info">
            <span class="sb-val">1 Acquisto (PO007)</span>
            <span class="sb-lbl">Fabbisogno Materie Prime →</span>
          </div>
        </button>
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
          <div class="field-value">🪐 Colonia Marte Alpha — P.IVA IT09988776655</div>
        </div>
        <div class="field-group">
          <span class="field-label">Listino & Termini Pagamento</span>
          <div class="field-value">Listino Interplanetario (₡) // Bonifico 30gg</div>
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
              <td><span style="color:var(--accent-green)">Preleva da Stock + Collaudo</span></td>
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
  logChatter("Motore Regole Logistiche", "SO042 Confermato! Generati in cascata: RfQ PO007, Produzione WH/MO/0019 e Consegna WH/OUT/0088.", "system-audit");
  completeMission(1);
};

// -------------------- 3. PURCHASE VIEW (NEW) --------------------
function renderPurchase(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Acquisti (Purchase)";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Richieste di Preventivo (RfQ)</span> <span class="crumb-sep">/</span> <span>PO007 (Saturn Mining Ltd)</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-primary" onclick="actionPoSend()">
          📧 ${state.poSent ? "RfQ Inviata al Fornitore" : "Invia RfQ via Email/Portale"}
        </button>
        <button class="btn-odoo-teal" onclick="actionPoReceive()">
          ✅ ${state.poReceived ? "Ordine PO007 Confermato & Merce in Stock" : "Conferma Ordine d'Acquisto & Ricevi Merce"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.poSent ? "current" : "done"}">RfQ (Richiesta Preventivo)</span>
        <span class="status-step ${state.poSent && !state.poReceived ? "current" : state.poReceived ? "done" : ""}">RfQ Inviata</span>
        <span class="status-step ${state.poReceived ? "current" : ""}">Purchase Order (Merce Ricevuta)</span>
      </div>
    </div>

    ${state.poReceived ? `
      <div class="smart-buttons-row">
        <button class="smart-button" onclick="navigateApp('mrp')">
          <span class="sb-icon">⚙️</span>
          <div class="sb-info">
            <span class="sb-val">Componenti Caricati (WH/IN/0041)</span>
            <span class="sb-lbl">Vai a Produzione MRP →</span>
          </div>
        </button>
      </div>
    ` : ""}

    <div class="odoo-sheet">
      <h3 style="margin-bottom:14px; font-family:var(--font-display)">ORDINE DI ACQUISTO #PO007 — Saturn Mining Ltd</h3>
      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Fornitore (Vendor)</span>
          <div class="field-value">🪐 Saturn Mining Ltd — Anello B di Saturno</div>
        </div>
        <div class="field-group">
          <span class="field-label">Origine Fabbisogno</span>
          <div class="field-value">Regola di Riordino Automatica (Min: 10 / Max: 50)</div>
        </div>
      </div>

      <table class="odoo-table">
        <thead>
          <tr>
            <th>Materia Prima</th>
            <th>Quantità Ordinata</th>
            <th>Ricevuto (WH/IN)</th>
            <th>Prezzo Unitario</th>
            <th>Subtotale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>🔩 Camere di Contenimento al Titanio</strong></td>
            <td>4 Unità</td>
            <td>${state.poReceived ? "4 Unità ✅" : "0 Unità"}</td>
            <td>₡ 600</td>
            <td>₡ 2.400</td>
          </tr>
          <tr>
            <td><strong>⚡ Nuclei Iniettori a Neutrini</strong></td>
            <td>8 Unità</td>
            <td>${state.poReceived ? "8 Unità ✅" : "0 Unità"}</td>
            <td>₡ 350</td>
            <td>₡ 2.800</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

window.actionPoSend = function() {
  AudioFX.play("click");
  state.poSent = true;
  showToast("📧 <strong>RfQ Inviata:</strong> Saturn Mining Ltd ha confermato prezzi e tempi di consegna nel Portale Fornitori!", "info");
  saveState();
  renderAll();
};

window.actionPoReceive = function() {
  if (!state.poSent) {
    showToast("⚠️ Prima invia la Richiesta di Preventivo cliccando <strong>📧 Invia RfQ via Email/Portale</strong>!", "info");
    return;
  }
  state.poReceived = true;
  logChatter("Acquisti (PO007)", "Confermato Purchase Order PO007 e validata ricezione merce WH/IN/0041 in magazzino.", "system-audit");
  completeMission(2);
};

// -------------------- 4. MRP (PRODUCTION) VIEW --------------------
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
  completeMission(3);
};

// -------------------- 5. INVENTORY VIEW --------------------
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
  completeMission(4);
};

// -------------------- 6. ACCOUNTING VIEW --------------------
function renderAccounting(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Contabilità";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Fatture Clienti</span> <span class="crumb-sep">/</span> <span>INV/2026/0091</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-primary" onclick="actionAccPost()">
          📨 ${state.accPosted ? "Fattura Registrata a Mastrino" : "Conferma & Registra Fattura"}
        </button>
        <button class="btn-odoo-ai" onclick="actionAccReconcile()">
          ⚡ ${state.accReconciled ? "Pagata & Riconciliata (AI)" : "Riconciliazione Bancaria AI"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.accPosted ? "current" : "done"}">Bozza</span>
        <span class="status-step ${state.accPosted && !state.accReconciled ? "current" : state.accReconciled ? "done" : ""}">Registrata (Posted)</span>
        <span class="status-step ${state.accReconciled ? "current" : ""}">Pagata (Paid)</span>
      </div>
    </div>

    ${state.accReconciled ? `
      <div class="smart-buttons-row">
        <button class="smart-button" onclick="navigateApp('einvoice')">
          <span class="sb-icon">🧾</span>
          <div class="sb-info">
            <span class="sb-val">FatturaPA XML / SDI</span>
            <span class="sb-lbl">Invia Fattura Elettronica Online →</span>
          </div>
        </button>
      </div>
    ` : ""}

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

      <h4 style="margin:12px 0 6px; font-size:12px; color:var(--text-muted)">SCRITTURE CONTABILI (PARTITA DOPPIA AUTOMATICA)</h4>
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
    showToast("⚠️ Prima registra la fattura cliccando <strong>📨 Conferma & Registra Fattura</strong>!", "info");
    return;
  }
  state.accReconciled = true;
  logChatter("AI Bank Reconciliation", "Abbinato movimento bancario #BNK-992 (+₡ 24.000) alla fattura INV/2026/0091. Residuo: ₡ 0.", "system-audit");
  completeMission(5);
};

// -------------------- 7. ELECTRONIC INVOICING ONLINE (FATTURAPA / SDI / PEPPOL) --------------------
function renderEInvoice(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Fatturazione Elettronica Online (FatturaPA & PEPPOL)";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Hub EDI</span> <span class="crumb-sep">/</span> <span>IT09988776655_00091.xml</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-ai" onclick="actionEinvValidate()">
          🤖 ${state.einvValidated ? "Controllo AI SDI/VIES Superato" : "Verifica AI Campi Fiscali (SDI/PEPPOL)"}
        </button>
        <button class="btn-odoo-teal" onclick="actionEinvSend()">
          📡 ${state.einvSentSdi ? "Ricevuta Consegna SDI (RC) Ottenuta" : "Genera XML & Invia Online allo SDI"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.einvValidated ? "current" : "done"}">Da Inviare (EDI)</span>
        <span class="status-step ${state.einvValidated && !state.einvSentSdi ? "current" : state.einvSentSdi ? "done" : ""}">XML Firmato & Validato</span>
        <span class="status-step ${state.einvSentSdi ? "current" : ""}">Accettata SDI / PEPPOL (RC)</span>
      </div>
    </div>

    <div class="odoo-sheet">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px">
        <h3 style="font-family:var(--font-display)">🧾 TRASMISSIONE TELEMATICA — INV/2026/0091</h3>
        <span style="font-family:var(--font-mono); font-size:11px; padding:4px 10px; border-radius:6px; background:rgba(0,240,255,0.12); color:var(--accent-cyan)">
          Formato: FPR12 (FatturaPA v1.2.2) + UBL PEPPOL 3.0
        </span>
      </div>

      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Codice Destinatario SDI / Indirizzo PEPPOL</span>
          <div class="field-value">📡 <strong>M5UXCR1</strong> (Canale Web-Service Odoo Proxy Attivo)</div>
        </div>
        <div class="field-group">
          <span class="field-label">Partita IVA / Controllo VIES & Bollo Virtuale</span>
          <div class="field-value">${state.einvValidated ? "✅ IT09988776655 (Valida) — Natura IVA: N3.2 / Bollo Assolto" : "⏳ In attesa di pre-validazione AI..."}</div>
        </div>
      </div>

      <h4 style="margin:12px 0 6px; font-size:12px; color:var(--text-muted)">ANTEPRIMA TRACCIATO XML GENERATO DA ODOO 20</h4>
      <pre style="background:#0b0d17; color:#38bdf8; padding:12px; border-radius:8px; font-family:var(--font-mono); font-size:11.5px; overflow-x:auto; border:1px solid var(--border-subtle)">
&lt;p:FatturaElettronica versione="FPR12"&gt;
  &lt;FatturaElettronicaHeader&gt;
    &lt;DatiTrasmissione&gt;
      &lt;IdTrasmittente&gt;&lt;IdPaese&gt;IT&lt;/IdPaese&gt;&lt;IdCodice&gt;01234567890&lt;/IdCodice&gt;&lt;/IdTrasmittente&gt;
      &lt;FormatoTrasmissione&gt;FPR12&lt;/FormatoTrasmissione&gt;
      &lt;CodiceDestinatario&gt;M5UXCR1&lt;/CodiceDestinatario&gt;
    &lt;/DatiTrasmissione&gt;
  &lt;/FatturaElettronicaHeader&gt;
  &lt;FatturaElettronicaBody&gt;
    &lt;DatiGeneraliDocumento&gt;
      &lt;TipoDocumento&gt;TD01&lt;/TipoDocumento&gt;
      &lt;Divisa&gt;EUR&lt;/Divisa&gt;
      &lt;Numero&gt;INV/2026/0091&lt;/Numero&gt;
      &lt;ImportoTotaleDocumento&gt;24000.00&lt;/ImportoTotaleDocumento&gt;
    &lt;/DatiGeneraliDocumento&gt;
  &lt;/FatturaElettronicaBody&gt;
&lt;/p:FatturaElettronica&gt;</pre>

      ${state.einvSentSdi ? `
        <div style="margin-top:12px; padding:10px 14px; background:rgba(16,185,129,0.15); border:1px solid var(--accent-green); border-radius:8px; font-size:12.5px">
          ✅ <strong>Notifica Sistema di Interscambio (SDI):</strong> Identificativo SDI <code>#984412093</code> — <em>RC: Ricevuta di Consegna</em> allegata automaticamente al Chatter!
        </div>
      ` : ""}
    </div>
  `;
}

window.actionEinvValidate = function() {
  AudioFX.play("ai");
  state.einvValidated = true;
  showToast("🤖 <strong>Pre-Check AI SDI:</strong> Codice Destinatario M5UXCR1, P.IVA, CAP e codici IVA verificati! Zero rischio di scarto SDI.", "info");
  logChatter("Odoo 20 EDI Validator", "Controllo formale FatturaPA FPR12 completato senza errori.", "system-audit");
  saveState();
  renderAll();
};

window.actionEinvSend = function() {
  if (!state.einvValidated) {
    showToast("⚠️ Esegui prima la <strong>🤖 Verifica AI Campi Fiscali</strong> per evitare uno scarto dallo SDI!", "info");
    return;
  }
  state.einvSentSdi = true;
  logChatter("Sistema di Interscambio (SDI)", "File IT09988776655_00091.xml firmato, trasmesso online e consegnato (Ricevuta RC #984412093).", "system-audit");
  completeMission(6);
};

// -------------------- 8. WEBSITE & ECOMMERCE VIEW (NEW) --------------------
function renderWebsite(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Sito Web & eCommerce";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Catalogo Online</span> <span class="crumb-sep">/</span> <span>/shop/reattore-quantico</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-ai" onclick="actionWebBuild()">
          🎨 ${state.webBuilt ? "Landing Page Generata (AI)" : "Genera Pagina con AI Builder"}
        </button>
        <button class="btn-odoo-teal" onclick="actionWebPublish()">
          🟢 ${state.webPublished ? "PUBBLICATO ONLINE (Live)" : "Pubblica Prodotto sull'eCommerce"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.webPublished ? "current" : "done"}">Non Pubblicato (Bozza)</span>
        <span class="status-step ${state.webPublished ? "current" : ""}">Online su Store B2B/B2C</span>
      </div>
    </div>

    <div class="odoo-sheet">
      <h3 style="margin-bottom:14px; font-family:var(--font-display)">🌐 VETRINA E-COMMERCE ODOO 20 — NEBULA STORE</h3>
      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Prodotto Sincronizzato</span>
          <div class="field-value">🚀 Reattore Quantico MK-IV — <strong>₡ 4.500</strong></div>
        </div>
        <div class="field-group">
          <span class="field-label">Sincronizzazione Magazzino & FatturaPA</span>
          <div class="field-value">Stock in tempo reale + Emissione automatica Fattura Elettronica al Checkout</div>
        </div>
      </div>

      <div style="padding:16px; border-radius:10px; background:linear-gradient(135deg, rgba(59,130,246,0.15), rgba(168,85,247,0.15)); border:1px solid var(--border-subtle)">
        <h4 style="margin-bottom:6px">${state.webBuilt ? "✨ Copywriting AI: 'Potenza Quantistica per la tua Flotta Interplanetaria'" : "Pagina Prodotto Vuota — Usa l'AI Website Builder"}</h4>
        <p style="font-size:12.5px; color:var(--text-muted)">
          ${state.webBuilt
            ? "Blocchi grafici SEO, scheda tecnica 3D, listino B2B riservato e calcolo spedizione orbitale configurati automaticamente!"
            : "Clicca su 'Genera Pagina con AI Builder' per creare istantaneamente layout, SEO e descrizioni tecniche."}
        </p>
      </div>
    </div>
  `;
}

window.actionWebBuild = function() {
  AudioFX.play("ai");
  state.webBuilt = true;
  showToast("🎨 <strong>Odoo 20 AI Website Builder:</strong> Layout responsive, testi SEO e immagini generati!", "info");
  saveState();
  renderAll();
};

window.actionWebPublish = function() {
  if (!state.webBuilt) {
    showToast("⚠️ Prima genera i contenuti della pagina con <strong>🎨 Genera Pagina con AI Builder</strong>!", "info");
    return;
  }
  state.webPublished = true;
  logChatter("Odoo 20 eCommerce", "Prodotto 'Reattore Quantico MK-IV' pubblicato online e sincronizzato con WH/Stock.", "system-audit");
  completeMission(7);
};

// -------------------- 9. PROJECT & TIMESHEETS VIEW (NEW) --------------------
function renderProject(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Progetti & Timesheet";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Installazioni Orbitali</span> <span class="crumb-sep">/</span> <span>Task #TSK-099 (Marte Alpha)</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-primary" onclick="actionProjLogTime()">
          ⏱️ ${state.projTimesheet ? "8h Registrate su Timesheet" : "Registra 8h su Timesheet"}
        </button>
        <button class="btn-odoo-teal" onclick="actionProjComplete()">
          ✅ ${state.projDone ? "Task Completato & Rendicontato" : "Completa Task & Sincronizza SAL"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.projTimesheet ? "current" : "done"}">In Lavorazione</span>
        <span class="status-step ${state.projTimesheet && !state.projDone ? "current" : state.projDone ? "done" : ""}">Ore Caricate</span>
        <span class="status-step ${state.projDone ? "current" : ""}">Fatto (Collaudato)</span>
      </div>
    </div>

    <div class="odoo-sheet">
      <h3 style="margin-bottom:14px; font-family:var(--font-display)">📋 TASK #TSK-099 — Taratura Magnetica su Marte</h3>
      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Riga Ordine Collegata</span>
          <div class="field-value">SO042 — Collaudo Kit Stabilizzatori</div>
        </div>
        <div class="field-group">
          <span class="field-label">Monte Ore Preventivato vs Effettivo</span>
          <div class="field-value">${state.projTimesheet ? "8:00h / 8:00h (100% Redditività)" : "0:00h / 8:00h"}</div>
        </div>
      </div>

      <table class="odoo-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Dipendente</th>
            <th>Descrizione Attività</th>
            <th>Ore Spese</th>
          </tr>
        </thead>
        <tbody>
          ${state.projTimesheet ? `
            <tr>
              <td>Oggi</td>
              <td>👩‍🚀 Ing. Elena Rostova</td>
              <td>Allineamento bobine quantistiche e test telemetria</td>
              <td><strong>8:00 h</strong></td>
            </tr>
          ` : `
            <tr>
              <td colspan="4" style="text-align:center; color:var(--text-muted)">Nessun foglio ore (Timesheet) ancora registrato.</td>
            </tr>
          `}
        </tbody>
      </table>
    </div>
  `;
}

window.actionProjLogTime = function() {
  AudioFX.play("click");
  state.projTimesheet = true;
  showToast("⏱️ <strong>Timesheet Aggiornato:</strong> 8 ore imputate alla contabilità analitica della commessa SO042!", "info");
  saveState();
  renderAll();
};

window.actionProjComplete = function() {
  if (!state.projTimesheet) {
    showToast("⚠️ Prima imputa le ore lavorate cliccando <strong>⏱️ Registra 8h su Timesheet</strong>!", "info");
    return;
  }
  state.projDone = true;
  logChatter("Progetti & Analitica", "Task #TSK-099 completato. Costi orari sincronizzati nel margine analitico dell'ordine SO042.", "system-audit");
  completeMission(8);
};

// -------------------- 10. HUMAN RESOURCES (HR) VIEW (NEW) --------------------
function renderHR(vp, titleEl, crumbsEl) {
  titleEl.textContent = "Risorse Umane (HR & Note Spese)";
  crumbsEl.innerHTML = `<span class="crumb-sep">/</span> <span>Dipendenti</span> <span class="crumb-sep">/</span> <span>Ing. Elena Rostova</span>`;

  vp.innerHTML = `
    <div class="odoo-control-panel">
      <div class="cp-actions">
        <button class="btn-odoo-primary" onclick="actionHrSkill()">
          🎓 ${state.hrSkillAdded ? "Certificazione Quantistica Registrata" : "Certifica Skill Dipendente"}
        </button>
        <button class="btn-odoo-ai" onclick="actionHrExpense()">
          🧾 ${state.hrExpenseApproved ? "Nota Spese Rimborsata (AI OCR)" : "Approva Nota Spese AI OCR"}
        </button>
      </div>
      <div class="statusbar-pills">
        <span class="status-step ${!state.hrSkillAdded ? "current" : "done"}">Profilo HR</span>
        <span class="status-step ${state.hrSkillAdded && !state.hrExpenseApproved ? "current" : state.hrExpenseApproved ? "done" : ""}">Skills Aggiornate</span>
        <span class="status-step ${state.hrExpenseApproved ? "current" : ""}">Spese Rimborsate</span>
      </div>
    </div>

    <div class="odoo-sheet">
      <h3 style="margin-bottom:14px; font-family:var(--font-display)">👩‍🚀 DIPENDENTE: Ing. Elena Rostova — Lead Propulsion Engineer</h3>
      <div class="sheet-grid-2">
        <div class="field-group">
          <span class="field-label">Matrice Competenze (HR Skills)</span>
          <div class="field-value">
            ${state.hrSkillAdded
              ? "✅ <strong>Fisica Quantistica Liv. Esperto (100%)</strong> + Propulsione Plasma"
              : "Propulsione Plasma (Liv. Intermedio) — Manca certificazione Quantistica"}
          </div>
        </div>
        <div class="field-group">
          <span class="field-label">Nota Spese Trasferta Marte (AI OCR)</span>
          <div class="field-value">
            ${state.hrExpenseApproved
              ? "✅ Navetta Space-Shuttle (₡ 450) — Contabilizzata e pronta al rimborso"
              : "📄 Scontrino Navetta letto da AI OCR: ₡ 450 (In attesa di approvazione Manager)"}
          </div>
        </div>
      </div>
    </div>
  `;
}

window.actionHrSkill = function() {
  AudioFX.play("click");
  state.hrSkillAdded = true;
  showToast("🎓 <strong>Odoo HR Skills:</strong> Aggiunta competenza 'Fisica Quantistica (Esperto)' al curriculum aziendale!", "info");
  saveState();
  renderAll();
};

window.actionHrExpense = function() {
  if (!state.hrSkillAdded) {
    showToast("⚠️ Prima aggiorna la matrice competenze con <strong>🎓 Certifica Skill Dipendente</strong>!", "info");
    return;
  }
  state.hrExpenseApproved = true;
  logChatter("HR & Note Spese", "Approvata nota spese #EXP-204 (₡ 450) tramite scansione AI OCR e registrata in contabilità.", "system-audit");
  completeMission(9);
};

// -------------------- 11. STUDIO & AI VIEW --------------------
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
  completeMission(10);
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
      <p>Questo manuale riassume i concetti chiave dei <strong>11 moduli di Odoo 20</strong> presenti nella simulazione:</p>
      ${MISSIONS.map(m => `
        <div style="background:rgba(255,255,255,0.04); padding:12px; border-radius:8px; border-left:3px solid var(--accent-cyan)">
          ${m.theory}
        </div>
      `).join("")}
    </div>
  `;
  openModal("📘 Codex Ufficiale Odoo 20 (11 Moduli)", html);
};

window.openBossAudit = function() {
  AudioFX.play("ai");
  const html = `
    <div>
      <p style="margin-bottom:14px"><strong>L'Ispettore Galattico ERP & Agenzia Entrate Spaziale</strong> vuole verificare la tua padronanza di <strong>Odoo 20</strong>. Rispondi alle 4 domande:</p>

      <div style="margin-bottom:14px">
        <p><strong>1. Cosa succede in Odoo 20 quando clicchi "Conferma" su un Preventivo (Quotation)?</strong></p>
        <select id="quiz-q1" style="width:100%; padding:8px; margin-top:6px; background:#0f111d; color:#fff; border:1px solid var(--border-subtle); border-radius:6px">
          <option value="0">Viene cancellato il cliente dal CRM</option>
          <option value="1">Diventa un Ordine di Vendita (Sales Order) e genera in automatico Consegna/Produzione/Task</option>
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

      <div style="margin-bottom:14px">
        <p><strong>3. Come gestisce Odoo 20 la Fatturazione Elettronica Online (FatturaPA / SDI & PEPPOL)?</strong></p>
        <select id="quiz-q3" style="width:100%; padding:8px; margin-top:6px; background:#0f111d; color:#fff; border:1px solid var(--border-subtle); border-radius:6px">
          <option value="0">Bisogna ricopiare le fatture a mano su un portale esterno</option>
          <option value="1">Valida i campi fiscali, genera il file XML FPR12/UBL e lo trasmette via Web-Service ricevendo le notifiche (RC/NS) nel Chatter</option>
        </select>
      </div>

      <div style="margin-bottom:18px">
        <p><strong>4. Qual è la scorciatoia globale per aprire la Command Palette in Odoo?</strong></p>
        <select id="quiz-q4" style="width:100%; padding:8px; margin-top:6px; background:#0f111d; color:#fff; border:1px solid var(--border-subtle); border-radius:6px">
          <option value="0">Ctrl + Alt + Canc</option>
          <option value="1">Alt + K (o Ctrl + K)</option>
        </select>
      </div>

      <button class="btn-odoo-teal" style="width:100%; padding:10px" onclick="submitBossQuiz()">🏆 Verifica Certificazione Odoo 20</button>
    </div>
  `;
  openModal("👾 BOSS FIGHT: Ispettore Certificazione Odoo 20 & SDI", html);
};

window.submitBossQuiz = function() {
  const q1 = document.getElementById("quiz-q1").value;
  const q2 = document.getElementById("quiz-q2").value;
  const q3 = document.getElementById("quiz-q3").value;
  const q4 = document.getElementById("quiz-q4").value;

  if (q1 === "1" && q2 === "1" && q3 === "1" && q4 === "1") {
    AudioFX.play("success");
    state.xp += 250;
    state.efficiency = 100;
    state.chaos = 0;
    saveState();
    renderAll();
    openModal("🏅 CERTIFICAZIONE ODOO 20 OTTENUTA!", `
      <div style="text-align:center; padding:16px">
        <div style="font-size:52px; margin-bottom:10px">🏆</div>
        <h2 style="font-family:var(--font-display); color:var(--accent-gold); margin-bottom:8px">ODOO 20 MASTER ARCHITECT CERTIFICATO</h2>
        <p style="margin-bottom:16px">Hai padroneggiato tutti gli 11 moduli aziendali, inclusa la Fatturazione Elettronica Online SDI/PEPPOL, azzerando il Caos Excel della Nebula Logistics Corp!</p>
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
    localStorage.removeItem("odoo20_odyssey_state_v2");
    state = { ...defaultState, completedMissions: [], chatterMessages: [...defaultState.chatterMessages] };
    showToast("↺ <strong>Partita resettata!</strong> Pronti per una nuova implementazione ERP.", "info");
    renderAll();
  });

  document.getElementById("btn-hint").addEventListener("click", () => {
    const m = MISSIONS[state.activeMission];
    if (m) showToast(`💡 <strong>Indizio O.D.I.N.:</strong> ${m.hint}`, "info");
  });

  document.getElementById("btn-explain").addEventListener("click", () => {
    const m = MISSIONS[state.activeMission];
    if (m) openModal(`🎓 Teoria — ${m.tag}`, m.theory);
  });

  document.getElementById("chatter-send-btn").addEventListener("click", () => {
    const inp = document.getElementById("chatter-input");
    const val = inp.value.trim();
    if (!val) return;
    logChatter("Tu (Consulente ERP)", val, "user");
    inp.value = "";
    if (val.toLowerCase().includes("ai") || val.includes("?")) {
      setTimeout(() => {
        logChatter("O.D.I.N. AI Copilot", "Ricevuto! Ricorda che ogni nota o ricevuta SDI nel Chatter resta allegata al documento per l'audit fiscale.", "system-audit");
      }, 500);
    }
  });

  document.getElementById("chatter-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("chatter-send-btn").click();
  });

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
