/* ==========================================================================
   Apex Consulting Projects — site script
   Edit the SITE block below to update contact details on every page at once.
   ========================================================================== */

const SITE = {
  name: "Apex Consulting Projects (Pty) Ltd",
  slogan: "Infinite Possibilities",
  phone: "072 486 1845",
  phoneIntl: "+27724861845",
  whatsapp: "27724861845",
  salesEmail: "sales@apexcpsa.com",
  techEmail: "oda@apexcpsa.com",
  hoursWeek: "08:00 – 16:00",
  hoursSat: "08:00 – 13:00",
  // Add links here when ready, e.g. linkedin: "https://www.linkedin.com/company/..."
  social: {}
};

document.documentElement.classList.add("js");

/* ---------- Icon sprite (Lucide-style, 24px stroke icons) ---------- */
const ICONS = {
  bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  hardhat: '<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 6 6v3"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><rect x="2" y="15" width="20" height="4" rx="1"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  arrowUR: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  arrowR: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevR: '<path d="m9 18 6-6-6-6"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  infinity: '<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/>',
  clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h4"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  pickaxe: '<path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"/><path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"/><path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"/><path d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"/>',
  factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  flask: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
  food: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  paper: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8M16 17H8M10 9H8"/>',
  fuel: '<path d="M3 22h12M4 9h10"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>',
  building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
  sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  landmark: '<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z"/>',
  fan: '<path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  plug: '<path d="M12 22v-5M9 8V2M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65M22 12.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
  cable: '<path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/><path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"/><path d="M21 21v-2h-4"/><path d="M3 5h4V3"/><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M2 14h4M10 8h4M18 16h4"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  wifi: '<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0"/>',
  power: '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>',
  ruler: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  spark: '<path d="M9.94 14.06 2 22M14 2l-1.5 4.5L8 8l4.5 1.5L14 14l1.5-4.5L20 8l-4.5-1.5z"/>',
  thermo: '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>',
  box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  radio: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.1 19.1 19"/><circle cx="12" cy="12" r="2"/>',
  wind: '<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>'
};

function injectSprite() {
  const symbols = Object.entries(ICONS)
    .map(([id, body]) => `<symbol id="i-${id}" viewBox="0 0 24 24">${body}</symbol>`)
    .join("");
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">${symbols}</svg>`
  );
}

const icon = (id, cls = "") => `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;

/* ---------- Shared header & footer ---------- */
const NAV = [
  ["index.html", "Home", "home"],
  ["about.html", "Who We Are", "about"],
  ["services.html", "Products & Services", "services"],
  ["industries.html", "Industries", "industries"],
  ["projects.html", "Projects", "projects"],
  ["contact.html", "Contact", "contact"]
];

function renderHeader(page) {
  const links = NAV.map(([href, label, key]) =>
    `<a href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  const mobileLinks = NAV.map(([href, label, key]) =>
    `<a class="mobile-nav__link" href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}${icon("chevR")}</a>`).join("");

  const el = document.getElementById("site-header");
  if (!el) return;
  el.outerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" id="top">
    <div class="container nav">
      <a class="brand" href="index.html" aria-label="Apex Consulting Projects — home">
        <img class="brand__mark" src="assets/img/logo-mark.png" alt="" width="63" height="40">
        <span class="brand__text"><span class="brand__name">APEX</span><span class="brand__sub">CONSULTING PROJECTS</span></span>
      </a>
      <nav class="nav__links" aria-label="Main">${links}</nav>
      <div class="nav__actions">
        <a class="nav__phone" href="tel:${SITE.phoneIntl}">${icon("phone")}${SITE.phone}</a>
        <a class="btn btn--light nav__cta" href="contact.html">Request a quote<span class="btn__arrow">${icon("arrowUR")}</span></a>
        <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
          ${icon("menu", "icon-open")}${icon("close", "icon-close")}
        </button>
      </div>
    </div>
  </header>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">
    ${mobileLinks}
    <div class="mobile-nav__foot">
      <a class="btn btn--light" href="contact.html">Request a quote<span class="btn__arrow">${icon("arrowUR")}</span></a>
      <a class="btn btn--ghost btn--plain" href="tel:${SITE.phoneIntl}">${icon("phone")} Call ${SITE.phone}</a>
    </div>
  </nav>`;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const year = new Date().getFullYear();
  el.outerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__about">
          <img class="footer__logo" src="assets/img/logo-full.png" alt="Apex Consulting Projects" width="180" height="167" loading="lazy">
          <p>Electrical, automation &amp; instrumentation, water treatment and engineering project solutions for South African industry.</p>
          <span class="footer__slogan">${icon("infinity")} ${SITE.slogan}</span>
        </div>
        <div>
          <h3>Company</h3>
          <ul class="footer__links">
            ${NAV.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <h3>Our divisions</h3>
          <ul class="footer__links">
            <li><a href="services.html#electrical">Electrical</a></li>
            <li><a href="services.html#automation">Automation, Process Control &amp; Instrumentation</a></li>
            <li><a href="services.html#water">Water &amp; Wastewater Treatment</a></li>
            <li><a href="services.html#projects">Engineering &amp; Projects</a></li>
          </ul>
        </div>
        <div>
          <h3>Get in touch</h3>
          <ul class="footer__links footer__contact">
            <li>${icon("phone")}<a href="tel:${SITE.phoneIntl}">${SITE.phone}<br><small>Sales &amp; technical</small></a></li>
            <li>${icon("mail")}<a href="mailto:${SITE.salesEmail}">${SITE.salesEmail}</a></li>
            <li>${icon("clock")}<span>Mon–Fri ${SITE.hoursWeek}<br>Sat ${SITE.hoursSat}<br><strong style="color:var(--gold-bright)">Emergency call-outs available</strong></span></li>
          </ul>
          <div class="footer__badges"><span>B-BBEE Level 1</span><span>CIDB Grade 1</span></div>
        </div>
      </div>
      <div class="footer__bottom">
        <span>&copy; ${year} ${SITE.name}. All rights reserved.</span>
        <span>Proudly South African</span>
      </div>
    </div>
  </footer>
  <a class="fab" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.96-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.38 9.38 0 0 1 2.77 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.6 23.6l6-1.57a11.33 11.33 0 0 0 5.44 1.39h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.03-1.18-5.89-3.33-8.04"/></svg>
  </a>`;
}

/* ---------- Behaviour ---------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav__toggle");
  if (!header) return;

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  };
  toggle?.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  document.querySelectorAll(".mobile-nav a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  window.matchMedia("(min-width: 1080px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  items.forEach((el) => io.observe(el));
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((root) => {
    const tabs = [...root.querySelectorAll('[role="tab"]')];
    const select = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab));
      tab.addEventListener("keydown", (e) => {
        const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (dir) { e.preventDefault(); select(tabs[(i + dir + tabs.length) % tabs.length], true); }
      });
    });
  });
}

function initSubnav() {
  const links = [...document.querySelectorAll(".subnav a")];
  if (!links.length) return;
  const sections = links.map((a) => document.querySelector(a.getAttribute("href")));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => s && io.observe(s));
}

/* Quote form: sends via FormSubmit (https://formsubmit.co) to sales or technical inbox. */
function initForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;
  const status = document.getElementById("form-status");
  const btn = form.querySelector('button[type="submit"]');

  // Pre-select division from ?division= in the URL (links from service pages)
  const params = new URLSearchParams(location.search);
  const div = params.get("division");
  if (div && form.division) form.division.value = div;
  if (params.get("type") === "technical") form.querySelector('input[value="technical"]').checked = true;

  const validate = (field) => {
    const wrap = field.closest(".field");
    if (!wrap) return true;
    const ok = field.checkValidity();
    wrap.classList.toggle("has-error", !ok);
    field.setAttribute("aria-invalid", String(!ok));
    return ok;
  };
  form.querySelectorAll("input, select, textarea").forEach((f) => f.addEventListener("blur", () => validate(f)));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fields = [...form.querySelectorAll("[required]")];
    const invalid = fields.filter((f) => !validate(f));
    if (invalid.length) {
      status.textContent = "Please complete the highlighted fields.";
      status.style.color = "#b42318";
      invalid[0].focus();
      return;
    }

    const type = form.querySelector('input[name="enquiry_type"]:checked').value;
    const to = type === "technical" ? SITE.techEmail : SITE.salesEmail;
    const data = Object.fromEntries(new FormData(form));
    data._subject = `New ${type === "technical" ? "technical enquiry" : "quote request"} — ${data.division || "General"} — ${data.name}`;
    data._template = "table";
    data._captcha = "false";

    btn.disabled = true;
    const label = btn.querySelector(".btn__label");
    label.textContent = "Sending…";
    status.textContent = "";

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${to}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      status.style.color = "#127a3a";
      status.textContent = `Thank you — your request has been sent to ${to}. We'll get back to you within one business day.`;
    } catch (err) {
      status.style.color = "#b42318";
      status.innerHTML = `Sorry, the message could not be sent. Please email <a href="mailto:${to}" style="text-decoration:underline">${to}</a> or call ${SITE.phone}.`;
    } finally {
      btn.disabled = false;
      label.textContent = "Send request";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectSprite();
  renderHeader(document.body.dataset.page);
  renderFooter();
  initHeader();
  initReveal();
  initTabs();
  initSubnav();
  initForm();
});
