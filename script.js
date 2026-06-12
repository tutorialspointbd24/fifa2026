/* ============================================================
   FIFA WORLD CUP 2026 — Match Schedule data + interactions
   TutorialsPointBD
   ============================================================ */

/* ---- Flag codes (flagcdn.com ISO codes) ---- */
const FLAG = {
  "Algeria":"dz","Argentina":"ar","Australia":"au","Austria":"at","Belgium":"be",
  "Bosnia and Herzegovina":"ba","Brazil":"br","Canada":"ca","Cape Verde":"cv",
  "Colombia":"co","Congo DR":"cd","Croatia":"hr","Curacao":"cw","Czechia":"cz",
  "Ecuador":"ec","Egypt":"eg","England":"gb-eng","France":"fr","Germany":"de",
  "Ghana":"gh","Haiti":"ht","Iran":"ir","Iraq":"iq","Ivory Coast":"ci","Japan":"jp",
  "Jordan":"jo","Mexico":"mx","Morocco":"ma","Netherlands":"nl","New Zealand":"nz",
  "Norway":"no","Panama":"pa","Paraguay":"py","Portugal":"pt","Qatar":"qa",
  "Saudi Arabia":"sa","Scotland":"gb-sct","Senegal":"sn","South Africa":"za",
  "South Korea":"kr","Spain":"es","Sweden":"se","Switzerland":"ch","Tunisia":"tn",
  "Türkiye":"tr","United States":"us","Uruguay":"uy","Uzbekistan":"uz"
};

/* ---- Venue -> { city, host } ---- */
const VENUES = {
  "Estadio Azteca":            { city: "Mexico City, MEX",      host: "MEX" },
  "Estadio Akron":             { city: "Guadalajara, MEX",      host: "MEX" },
  "Estadio BBVA Bancomer":     { city: "Monterrey, MEX",        host: "MEX" },
  "BMO Field":                 { city: "Toronto, CAN",          host: "CAN" },
  "BC Place":                  { city: "Vancouver, CAN",        host: "CAN" },
  "SoFi Stadium":              { city: "Inglewood, CA",         host: "USA" },
  "Levi's Stadium":            { city: "Santa Clara, CA",       host: "USA" },
  "MetLife Stadium":           { city: "East Rutherford, NJ",   host: "USA" },
  "Gillette Stadium":          { city: "Foxborough, MA",        host: "USA" },
  "NRG Stadium":                { city: "Houston, TX",          host: "USA" },
  "AT&T Stadium":              { city: "Arlington, TX",         host: "USA" },
  "Lincoln Financial Field":   { city: "Philadelphia, PA",      host: "USA" },
  "Mercedes-Benz Stadium":     { city: "Atlanta, GA",           host: "USA" },
  "Lumen Field":               { city: "Seattle, WA",           host: "USA" },
  "Hard Rock Stadium":         { city: "Miami, FL",             host: "USA" },
  "Arrowhead Stadium":         { city: "Kansas City, MO",       host: "USA" },
};

const STAGE_LABEL = {
  group: "Group Stage",
  r32:   "Round of 32",
  r16:   "Round of 16",
  qf:    "Quarter-Finals",
  sf:    "Semi-Finals",
  third: "Third Place",
  final: "Final"
};

/* shorthand: m(stage,date,time,net,home,away,venue) */
const FOX_TEL = ["fox","tel"];
const FS1_TEL = ["fs1","tel"];
const FS1_UNI = ["fs1","uni"];

function m(stage,date,time,net,home,away,venue){
  return { stage, date, time, net, home, away, venue };
}

/* ============================================================
   MATCH DATA (104 matches)
   ============================================================ */
const MATCHES = [
  // ---------------- GROUP STAGE ----------------
  m("group","Jun 11","12:00PM / 3:00PM",FOX_TEL,"Mexico","South Africa","Estadio Azteca"),
  m("group","Jun 11","7:00PM / 10:00PM",FS1_TEL,"South Korea","Czechia","Estadio Akron"),
  m("group","Jun 12","12:00PM / 3:00PM",FOX_TEL,"Canada","Bosnia and Herzegovina","BMO Field"),
  m("group","Jun 12","6:00PM / 9:00PM",FOX_TEL,"United States","Paraguay","SoFi Stadium"),
  m("group","Jun 13","12:00PM / 3:00PM",FOX_TEL,"Qatar","Switzerland","Levi's Stadium"),
  m("group","Jun 13","3:00PM / 6:00PM",FS1_TEL,"Brazil","Morocco","MetLife Stadium"),
  m("group","Jun 13","6:00PM / 9:00PM",FS1_TEL,"Haiti","Scotland","Gillette Stadium"),
  m("group","Jun 13/14","9:00PM / 12:00AM",FS1_TEL,"Australia","Türkiye","BC Place"),
  m("group","Jun 14","10:00AM / 1:00PM",FOX_TEL,"Germany","Curacao","NRG Stadium"),
  m("group","Jun 14","1:00PM / 4:00PM",FOX_TEL,"Netherlands","Japan","AT&T Stadium"),
  m("group","Jun 14","4:00PM / 7:00PM",FS1_TEL,"Ivory Coast","Ecuador","Lincoln Financial Field"),
  m("group","Jun 14","7:00PM / 10:00PM",FS1_TEL,"Sweden","Tunisia","Estadio BBVA Bancomer"),
  m("group","Jun 15","9:00AM / 12:00PM",FOX_TEL,"Spain","Cape Verde","Mercedes-Benz Stadium"),
  m("group","Jun 15","12:00PM / 3:00PM",FOX_TEL,"Belgium","Egypt","Lumen Field"),
  m("group","Jun 15","3:00PM / 6:00PM",FS1_TEL,"Saudi Arabia","Uruguay","Hard Rock Stadium"),
  m("group","Jun 15","6:00PM / 9:00PM",FS1_TEL,"Iran","New Zealand","SoFi Stadium"),
  m("group","Jun 16","12:00PM / 3:00PM",FOX_TEL,"France","Senegal","MetLife Stadium"),
  m("group","Jun 16","3:00PM / 6:00PM",FOX_TEL,"Iraq","Norway","Gillette Stadium"),
  m("group","Jun 16","6:00PM / 9:00PM",FOX_TEL,"Argentina","Algeria","Arrowhead Stadium"),
  m("group","Jun 16/17","9:00PM / 12:00AM",FS1_TEL,"Austria","Jordan","Levi's Stadium"),
  m("group","Jun 17","10:00AM / 1:00PM",FOX_TEL,"Portugal","Congo DR","NRG Stadium"),
  m("group","Jun 17","1:00PM / 4:00PM",FOX_TEL,"England","Croatia","AT&T Stadium"),
  m("group","Jun 17","4:00PM / 7:00PM",FS1_TEL,"Ghana","Panama","BMO Field"),
  m("group","Jun 17","7:00PM / 10:00PM",FS1_TEL,"Uzbekistan","Colombia","Estadio Azteca"),
  m("group","Jun 18","9:00AM / 12:00PM",FOX_TEL,"Czechia","South Africa","Mercedes-Benz Stadium"),
  m("group","Jun 18","12:00PM / 3:00PM",FOX_TEL,"Switzerland","Bosnia and Herzegovina","SoFi Stadium"),
  m("group","Jun 18","3:00PM / 6:00PM",FS1_TEL,"Canada","Qatar","BC Place"),
  m("group","Jun 18","6:00PM / 9:00PM",FOX_TEL,"Mexico","South Korea","Estadio Akron"),
  m("group","Jun 19","12:00PM / 3:00PM",FOX_TEL,"United States","Australia","Lumen Field"),
  m("group","Jun 19","3:00PM / 6:00PM",FOX_TEL,"Scotland","Morocco","Gillette Stadium"),
  m("group","Jun 19","6:30PM / 8:30PM",FOX_TEL,"Brazil","Haiti","Lincoln Financial Field"),
  m("group","Jun 19","8:00PM / 11:00PM",FS1_TEL,"Türkiye","Paraguay","Levi's Stadium"),
  m("group","Jun 20","10:00AM / 1:00PM",FOX_TEL,"Netherlands","Sweden","NRG Stadium"),
  m("group","Jun 20","1:00PM / 4:00PM",FOX_TEL,"Germany","Ivory Coast","BMO Field"),
  m("group","Jun 20","5:00PM / 8:00PM",FS1_TEL,"Ecuador","Curacao","Arrowhead Stadium"),
  m("group","Jun 20/21","9:00PM / 12:00AM",FS1_TEL,"Tunisia","Japan","Estadio BBVA Bancomer"),
  m("group","Jun 21","9:00AM / 12:00PM",FOX_TEL,"Spain","Saudi Arabia","Mercedes-Benz Stadium"),
  m("group","Jun 21","12:00PM / 3:00PM",FS1_TEL,"Belgium","Iran","SoFi Stadium"),
  m("group","Jun 21","3:00PM / 6:00PM",FS1_TEL,"Uruguay","Cape Verde","Hard Rock Stadium"),
  m("group","Jun 21","6:00PM / 9:00PM",FS1_TEL,"New Zealand","Egypt","BC Place"),
  m("group","Jun 22","10:00AM / 1:00PM",FOX_TEL,"Argentina","Austria","AT&T Stadium"),
  m("group","Jun 22","2:00PM / 5:00PM",FOX_TEL,"France","Iraq","Lincoln Financial Field"),
  m("group","Jun 22","5:00PM / 8:00PM",FOX_TEL,"Norway","Senegal","MetLife Stadium"),
  m("group","Jun 22","8:00PM / 11:00PM",FS1_TEL,"Jordan","Algeria","Levi's Stadium"),
  m("group","Jun 23","10:00AM / 1:00PM",FOX_TEL,"Portugal","Uzbekistan","NRG Stadium"),
  m("group","Jun 23","1:00PM / 4:00PM",FOX_TEL,"England","Ghana","Gillette Stadium"),
  m("group","Jun 23","4:00PM / 7:00PM",FOX_TEL,"Panama","Croatia","BMO Field"),
  m("group","Jun 23","7:00PM / 10:00PM",FS1_TEL,"Colombia","Congo DR","Estadio Akron"),
  m("group","Jun 24","12:00PM / 3:00PM",FOX_TEL,"Switzerland","Canada","BC Place"),
  m("group","Jun 24","12:00PM / 3:00PM",FS1_UNI,"Bosnia and Herzegovina","Qatar","Lumen Field"),
  m("group","Jun 24","3:00PM / 6:00PM",FOX_TEL,"Scotland","Brazil","Hard Rock Stadium"),
  m("group","Jun 24","3:00PM / 6:00PM",FS1_UNI,"Morocco","Haiti","Mercedes-Benz Stadium"),
  m("group","Jun 24","6:00PM / 9:00PM",FOX_TEL,"Czechia","Mexico","Estadio Azteca"),
  m("group","Jun 24","6:00PM / 9:00PM",FS1_UNI,"South Africa","South Korea","Estadio BBVA Bancomer"),
  m("group","Jun 25","1:00PM / 4:00PM",FOX_TEL,"Ecuador","Germany","MetLife Stadium"),
  m("group","Jun 25","1:00PM / 4:00PM",FS1_UNI,"Curacao","Ivory Coast","Lincoln Financial Field"),
  m("group","Jun 25","4:00PM / 7:00PM",FOX_TEL,"Tunisia","Netherlands","Arrowhead Stadium"),
  m("group","Jun 25","4:00PM / 7:00PM",FS1_UNI,"Japan","Sweden","AT&T Stadium"),
  m("group","Jun 25","7:00PM / 10:00PM",FOX_TEL,"Türkiye","United States","SoFi Stadium"),
  m("group","Jun 25","7:00PM / 10:00PM",FS1_UNI,"Paraguay","Australia","Levi's Stadium"),
  m("group","Jun 26","12:00PM / 3:00PM",FOX_TEL,"Norway","France","Gillette Stadium"),
  m("group","Jun 26","12:00PM / 3:00PM",FS1_UNI,"Senegal","Iraq","BMO Field"),
  m("group","Jun 26","5:00PM / 8:00PM",FOX_TEL,"Uruguay","Spain","Estadio Akron"),
  m("group","Jun 26","5:00PM / 8:00PM",FS1_UNI,"Cape Verde","Saudi Arabia","NRG Stadium"),
  m("group","Jun 26","8:00PM / 11:00PM",FOX_TEL,"New Zealand","Belgium","BC Place"),
  m("group","Jun 26","8:00PM / 11:00PM",FS1_UNI,"Egypt","Iran","Lumen Field"),
  m("group","Jun 27","2:00PM / 5:00PM",FOX_TEL,"Panama","England","MetLife Stadium"),
  m("group","Jun 27","2:00PM / 5:00PM",FS1_UNI,"Croatia","Ghana","Lincoln Financial Field"),
  m("group","Jun 27","4:30PM / 7:30PM",FOX_TEL,"Colombia","Portugal","Hard Rock Stadium"),
  m("group","Jun 27","4:30PM / 7:30PM",FS1_UNI,"Congo DR","Uzbekistan","Mercedes-Benz Stadium"),
  m("group","Jun 27","8:00PM / 11:00PM",FOX_TEL,"Jordan","Argentina","AT&T Stadium"),
  m("group","Jun 27","8:00PM / 11:00PM",FS1_UNI,"Algeria","Austria","Arrowhead Stadium"),

  // ---------------- ROUND OF 32 ----------------
  m("r32","Jun 28","12:00PM / 3:00PM",FOX_TEL,"2A","2B","SoFi Stadium"),
  m("r32","Jun 29","10:00AM / 1:00PM",FOX_TEL,"1C","2F","NRG Stadium"),
  m("r32","Jun 29","1:30PM / 4:30PM",FOX_TEL,"1E","3ABCDF","Gillette Stadium"),
  m("r32","Jun 29","6:00PM / 9:00PM",FOX_TEL,"1F","2C","Estadio BBVA Bancomer"),
  m("r32","Jun 30","10:00AM / 1:00PM",FOX_TEL,"2E","2I","AT&T Stadium"),
  m("r32","Jun 30","2:00PM / 5:00PM",FOX_TEL,"1I","3CDFGH","MetLife Stadium"),
  m("r32","Jun 30","6:00PM / 9:00PM",FOX_TEL,"1A","3CEFHI","Estadio Azteca"),
  m("r32","Jul 1","9:00AM / 12:00PM",FOX_TEL,"1L","3EHIJK","Mercedes-Benz Stadium"),
  m("r32","Jul 1","1:00PM / 4:00PM",FS1_TEL,"1G","3AEHIJ","Lumen Field"),
  m("r32","Jul 1","5:00PM / 8:00PM",FOX_TEL,"1D","3BEFIJ","Levi's Stadium"),
  m("r32","Jul 2","12:00PM / 3:00PM",FOX_TEL,"1H","2J","SoFi Stadium"),
  m("r32","Jul 2","4:00PM / 7:00PM",FOX_TEL,"2K","2L","BMO Field"),
  m("r32","Jul 2","8:00PM / 11:00PM",FS1_TEL,"1B","3EFGIJ","BC Place"),
  m("r32","Jul 3","11:00AM / 2:00PM",FOX_TEL,"2D","2G","AT&T Stadium"),
  m("r32","Jul 3","3:00PM / 6:00PM",FOX_TEL,"1J","2H","Hard Rock Stadium"),
  m("r32","Jul 3","6:30PM / 9:30PM",FOX_TEL,"1K","3DEIJL","Arrowhead Stadium"),

  // ---------------- ROUND OF 16 ----------------
  m("r16","Jul 4","10:00AM / 1:00PM",FOX_TEL,null,null,"NRG Stadium"),
  m("r16","Jul 4","2:00PM / 5:00PM",FOX_TEL,null,null,"Lincoln Financial Field"),
  m("r16","Jul 5","1:00PM / 4:00PM",FOX_TEL,null,null,"MetLife Stadium"),
  m("r16","Jul 5","5:00PM / 8:00PM",FOX_TEL,null,null,"Estadio Azteca"),
  m("r16","Jul 6","12:00PM / 3:00PM",FOX_TEL,null,null,"AT&T Stadium"),
  m("r16","Jul 6","5:00PM / 8:00PM",FOX_TEL,null,null,"Lumen Field"),
  m("r16","Jul 7","9:00AM / 12:00PM",FOX_TEL,null,null,"Mercedes-Benz Stadium"),
  m("r16","Jul 7","1:00PM / 4:00PM",FOX_TEL,null,null,"BC Place"),

  // ---------------- QUARTER-FINALS ----------------
  m("qf","Jul 9","1:00PM / 4:00PM",FOX_TEL,null,null,"Gillette Stadium"),
  m("qf","Jul 10","12:00PM / 3:00PM",FOX_TEL,null,null,"SoFi Stadium"),
  m("qf","Jul 11","2:00PM / 5:00PM",FOX_TEL,null,null,"Hard Rock Stadium"),
  m("qf","Jul 11","6:00PM / 9:00PM",FOX_TEL,null,null,"Arrowhead Stadium"),

  // ---------------- SEMI-FINALS ----------------
  m("sf","Jul 14","12:00PM / 3:00PM",FOX_TEL,null,null,"AT&T Stadium"),
  m("sf","Jul 15","12:00PM / 3:00PM",FOX_TEL,null,null,"Mercedes-Benz Stadium"),

  // ---------------- THIRD PLACE ----------------
  m("third","Jul 18","2:00PM / 5:00PM",FOX_TEL,null,null,"Hard Rock Stadium"),

  // ---------------- FINAL ----------------
  m("final","Jul 19","12:00PM / 3:00PM",FOX_TEL,null,null,"MetLife Stadium"),
];

/* ============================================================
   RENDERING
   ============================================================ */
const FLAG_BASE = "https://flagcdn.com/h60";

function flagImg(country){
  const code = FLAG[country];
  if(!code) return null;
  return `${FLAG_BASE}/${code}.png`;
}

function teamCell(name, side){
  if(!name){
    return `
      <div class="team ${side}">
        <div class="flag placeholder">TBD</div>
        <div class="team-name is-tbd">To Be Decided</div>
      </div>`;
  }
  const url = flagImg(name);
  if(url){
    return `
      <div class="team ${side}">
        <img class="flag" src="${url}" alt="${name} flag" loading="lazy" width="56" height="40">
        <div class="team-name">${name}</div>
      </div>`;
  }
  // placeholder slot code (e.g. "2A", "3CDFGH") — round of 32 brackets
  return `
    <div class="team ${side}">
      <div class="flag placeholder">${name}</div>
      <div class="team-name is-tbd">Group/Path ${name}</div>
    </div>`;
}

const NET_LABEL = { fox:"FOX", fs1:"FS1", tel:"Telemundo", uni:"Universo" };

function netBadges(net){
  return net.map(n => `<span class="net ${n}">${NET_LABEL[n]}</span>`).join("");
}

function stageBadgeClass(stage){
  if(stage === "group") return "is-group";
  if(stage === "final") return "is-final";
  return "is-knockout";
}

const venueIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke-linejoin="round"/><circle cx="12" cy="11" r="2.5"/></svg>`;
const clockIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function matchCard(match){
  const venue = VENUES[match.venue] || { city:"", host:"" };
  return `
    <article class="match-card"
      data-stage="${match.stage}"
      data-venue="${match.venue}"
      data-home="${match.home || ''}"
      data-away="${match.away || ''}"
      data-search="${[match.home, match.away, match.venue, venue.city, STAGE_LABEL[match.stage]].filter(Boolean).join(' ').toLowerCase()}">
      <div class="card-top">
        <span class="stage-badge ${stageBadgeClass(match.stage)}">${STAGE_LABEL[match.stage]}</span>
        <div class="net-badges">${netBadges(match.net)}</div>
      </div>
      <div class="ticket-cut"></div>
      <div class="card-teams">
        ${teamCell(match.home, "home")}
        <div class="vs">
          <span class="vs-mark">VS</span>
          <span class="vs-dash"></span>
        </div>
        ${teamCell(match.away, "away")}
      </div>
      <div class="card-bottom">
        <div class="cb-row">
          ${clockIcon}
          <span class="cb-strong">${match.date}</span>
          <span>&middot; ${match.time}</span>
        </div>
        <div class="cb-row">
          ${venueIcon}
          <span class="cb-venue">${match.venue}</span>
          <span>&middot; ${venue.city}</span>
          <span class="cb-host">${venue.host}</span>
        </div>
      </div>
    </article>`;
}

/* ---- Build flag ticker ---- */
function buildTicker(){
  const track = document.getElementById("tickerTrack");
  const names = Object.keys(FLAG);
  const items = names.map(name => `
    <span class="ticker-item">
      <img src="${FLAG_BASE}/${FLAG[name]}.png" alt="" loading="lazy" width="26" height="18">
      ${name}
    </span>`).join("");
  // duplicate for seamless infinite scroll
  track.innerHTML = items + items;
}

/* ---- Build filter option lists ---- */
function buildFilterOptions(){
  const teamSelect = document.getElementById("teamFilter");
  Object.keys(FLAG).sort().forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    teamSelect.appendChild(opt);
  });

  const venueSelect = document.getElementById("venueFilter");
  Object.keys(VENUES).sort().forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = `${name} — ${VENUES[name].city}`;
    venueSelect.appendChild(opt);
  });
}

/* ---- Render grid with date dividers ---- */
function renderGrid(filtered){
  const grid = document.getElementById("scheduleGrid");
  const noResults = document.getElementById("noResults");

  if(filtered.length === 0){
    grid.innerHTML = "";
    noResults.hidden = false;
    return;
  }
  noResults.hidden = true;

  let html = "";
  let lastDate = null;
  filtered.forEach(match => {
    if(match.date !== lastDate){
      html += `
        <div class="date-divider">
          <span class="dd-label">${match.date}</span>
          <span class="dd-line"></span>
          <span class="dd-stage">${STAGE_LABEL[match.stage]}</span>
        </div>`;
      lastDate = match.date;
    }
    html += matchCard(match);
  });
  grid.innerHTML = html;
}

/* ---- Apply filters ---- */
function applyFilters(){
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const team  = document.getElementById("teamFilter").value;
  const stage = document.getElementById("stageFilter").value;
  const venue = document.getElementById("venueFilter").value;

  const filtered = MATCHES.filter(match => {
    if(stage && match.stage !== stage) return false;
    if(venue && match.venue !== venue) return false;
    if(team && match.home !== team && match.away !== team) return false;
    if(query){
      const venueInfo = VENUES[match.venue] || { city:"" };
      const haystack = [match.home, match.away, match.venue, venueInfo.city, STAGE_LABEL[match.stage]]
        .filter(Boolean).join(" ").toLowerCase();
      if(!haystack.includes(query)) return false;
    }
    return true;
  });

  renderGrid(filtered);
  document.getElementById("resultCount").textContent = `${filtered.length} of ${MATCHES.length} matches`;
}

/* ---- Init ---- */
function init(){
  buildTicker();
  buildFilterOptions();
  renderGrid(MATCHES);

  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("teamFilter").addEventListener("change", applyFilters);
  document.getElementById("stageFilter").addEventListener("change", applyFilters);
  document.getElementById("venueFilter").addEventListener("change", applyFilters);
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    document.getElementById("teamFilter").value = "";
    document.getElementById("stageFilter").value = "";
    document.getElementById("venueFilter").value = "";
    applyFilters();
  });
}

document.addEventListener("DOMContentLoaded", init);
