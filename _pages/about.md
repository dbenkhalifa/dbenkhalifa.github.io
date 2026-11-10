---
title: ""
layout: archive
permalink: /
author_profile: true
show_sidebar: true
---

<style>
  .ab {
    --ab-accent:#2563eb;
    --ab-accent-soft:rgba(37,99,235,.08);
    --ab-border:rgba(127,127,127,.22);
    --ab-muted:#6b7280;
    --ab-radius:14px;
    font-size:.95rem;
    line-height:1.6;
  }
  .ab h2 {
    font-size:1.35rem;
    margin:2.6rem 0 1rem;
    padding-bottom:.4rem;
    border-bottom:2px solid var(--ab-border);
    display:flex;
    align-items:center;
    gap:.5rem;
  }
  .ab h2::before {
    content:"";
    width:6px;
    height:1.1em;
    border-radius:3px;
    background:var(--ab-accent);
  }
  .ab a {
    text-decoration:none;
  }
  .ab a:hover {
    text-decoration:underline;
  }
  /* Hero */
  .ab-hero {
    padding:1.6rem 1.8rem;
    border-radius:var(--ab-radius);
    background:linear-gradient(135deg,var(--ab-accent-soft),rgba(124,58,237,.08));
    border:1px solid var(--ab-border);
  }
  .ab-hero .ab-role {
    font-size:.8rem;
    font-weight:700;
    letter-spacing:.08em;
    text-transform:uppercase;
    color:var(--ab-accent);
    margin:0 0 .6rem;
  }
  .ab-hero p {
    margin:0 0 .9rem;
  }
  .ab-tags {
    display:flex;
    flex-wrap:wrap;
    gap:.45rem;
    margin:1rem 0 1.2rem;
    padding:0;
    list-style:none;
  }
  .ab-tags li {
    font-size:.78rem;
    padding:.25rem .7rem;
    border-radius:999px;
    background:var(--ab-accent-soft);
    color:var(--ab-accent);
    font-weight:600;
    border:1px solid rgba(37,99,235,.18);
    margin:0;
  }
  .ab-btn {
    display:inline-block;
    padding:.55rem 1.1rem;
    border-radius:999px;
    background:var(--ab-accent);
    color:#fff !important;
    font-weight:600;
    font-size:.88rem;
  }
  .ab-btn:hover {
    text-decoration:none !important;
    filter:brightness(1.1);
  }
  .ab-btn.ghost {
    background:transparent;
    color:var(--ab-accent) !important;
    border:1px solid var(--ab-accent);
    margin-left:.4rem;
  }
  /* Grids & cards */
  .ab-grid {
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
    gap:.9rem;
  }
  .ab-card {
    border:1px solid var(--ab-border);
    border-radius:var(--ab-radius);
    padding:1rem 1.1rem;
    transition:transform .15s ease, box-shadow .15s ease;
  }
  .ab-card:hover {
    transform:translateY(-2px);
    box-shadow:0 6px 18px rgba(0,0,0,.08);
  }
  .ab-card .ab-ico {
    font-size:1.4rem;
  }
  .ab-card strong {
    display:block;
    margin:.3rem 0 .15rem;
  }
  .ab-card small {
    color:var(--ab-muted);
  }
  /* Timeline */
  .ab-timeline {
    list-style:none;
    margin:0;
    padding:0 0 0 1.2rem;
    border-left:2px solid var(--ab-border);
  }
  .ab-timeline li {
    position:relative;
    margin:0 0 1.1rem;
    padding-left:.6rem;
  }
  .ab-timeline li::before {
    content:"";
    position:absolute;
    left:-1.62rem;
    top:.4rem;
    width:12px;
    height:12px;
    border-radius:50%;
    background:var(--ab-accent);
    box-shadow:0 0 0 4px var(--ab-accent-soft);
  }
  .ab-year {
    font-size:.78rem;
    font-weight:700;
    color:var(--ab-accent);
  }
  .ab-timeline small {
    display:block;
    color:var(--ab-muted);
  }
  /* News */
  .ab-news {
    border-left:4px solid var(--ab-accent);
    background:var(--ab-accent-soft);
    border-radius:0 var(--ab-radius) var(--ab-radius) 0;
    padding:1rem 1.2rem;
  }
  .ab-badge {
    display:inline-block;
    font-size:.7rem;
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:.06em;
    padding:.15rem .55rem;
    border-radius:6px;
    background:var(--ab-accent);
    color:#fff;
    margin-right:.5rem;
  }
  /* Service */
  .ab-service {
    display:grid;
    grid-template-columns:minmax(150px,200px) 1fr;
    gap:.7rem 1.2rem;
    align-items:start;
  }
  .ab-service .ab-label {
    font-weight:700;
    font-size:.85rem;
    padding-top:.2rem;
  }
  .ab-chips {
    display:flex;
    flex-wrap:wrap;
    gap:.4rem;
  }
  .ab-chips a {
    font-size:.8rem;
    padding:.2rem .65rem;
    border-radius:8px;
    border:1px solid var(--ab-border);
    color:inherit;
  }
  .ab-chips a:hover {
    border-color:var(--ab-accent);
    color:var(--ab-accent);
    text-decoration:none;
  }
  @media (max-width:600px) {
    .ab-service {
      grid-template-columns:1fr;
    }
    .ab-btn.ghost {
      margin:.5rem 0 0;
    }
  }
  /* People */
  .ab h3 {
    font-size:1rem;
    margin:1.4rem 0 .7rem;
    color:var(--ab-muted);
    text-transform:uppercase;
    letter-spacing:.06em;
  }
  .ab-person {
    display:flex;
    gap:.8rem;
    align-items:center;
  }
  .ab-avatar {
    flex:0 0 44px;
    height:44px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:700;
    font-size:.85rem;
    color:#fff;
    background:linear-gradient(135deg,#2563eb,#7c3aed);
  }
  .ab-avatar.alt {
    background:linear-gradient(135deg,#0891b2,#10b981);
  }
  .ab-avatar.past {
    background:linear-gradient(135deg,#9ca3af,#6b7280);
  }
  .ab-person strong {
    margin:0;
  }
  /* Contact */
  .ab-map {
    width:100%;
    height:300px;
    border:0;
    border-radius:var(--ab-radius);
    margin-top:1rem;
  }

</style>

<div class="ab">

<div class="ab-hero">
  <p class="ab-role">Associate Professor · ENAC Research Lab</p>
  <p>I am an Associate Professor at <strong>ENAC</strong>, the French National School of Civil Aviation, and a member of the Interactive Informatics Team at the ENAC Research Lab. Before joining ENAC, I completed a postdoctoral fellowship at the University of Perpignan working with <a href="https://perso.univ-perp.fr/matthieu.martel/index.html">Matthieu Martel</a>, where I focused on fixed-point code synthesis for neural networks. I defended my PhD thesis, <a href="https://theses.hal.science/tel-03509266"><em>Fast and Efficient Bit-level Precision Tuning</em></a>, at the University of Perpignan in 2021.</p>
  <p>My research lies at the intersection of <strong>formal methods</strong> and <strong>embedded systems</strong>: FPGA code synthesis, efficient floating-point and fixed-point arithmetic on hardware, and embedded AI through precision tuning, quantization, pruning and compression.</p>
  <ul class="ab-tags">
    <li>Formal Methods</li>
    <li>Embedded AI</li>
    <li>Quantization</li>
    <li>Fixed-Point Arithmetic</li>
    <li>FPGA</li>
    <li>Precision Tuning</li>
  </ul>
  <a class="ab-btn" href="mailto:dorra.ben-khalifa@enac.fr">✉️ Join my team — interns, PhDs, postdocs</a>
  <a class="ab-btn ghost" href="#news">See open positions →</a>
</div>

<h2 id="interests">Research Interests</h2>
<div class="ab-grid">
  <div class="ab-card">
    <span class="ab-ico">🔍</span>
    <strong>Static Program Analysis</strong>
    <small>Abstract interpretation, soundness guarantees</small>
  </div>
  <div class="ab-card">
    <span class="ab-ico">🧩</span>
    <strong>Programming Languages</strong>
    <small>Semantics, type systems, tooling</small>
  </div>
  <div class="ab-card">
    <span class="ab-ico">🔢</span>
    <strong>Computer Arithmetic</strong>
    <small>Floating-point &amp; fixed-point precision</small>
  </div>
  <div class="ab-card">
    <span class="ab-ico">🧠</span>
    <strong>Embedded AI</strong>
    <small>Neural networks on constrained hardware</small>
  </div>
  <div class="ab-card">
    <span class="ab-ico">⚡</span>
    <strong>Code Optimization</strong>
    <small>Quantization, pruning, compression</small>
  </div>
  <div class="ab-card">
    <span class="ab-ico">🛠️</span>
    <strong>Code Synthesis</strong>
    <small>Fixed-point &amp; FPGA code generation</small>
  </div>
</div>

<h2 id="education">Education</h2>
<ul class="ab-timeline">
  <li>
    <span class="ab-year">2021</span><br>
    <strong>PhD in Computer Science</strong>
    <small>University of Perpignan, France</small>
  </li>
  <li>
    <span class="ab-year">2018</span><br>
    <strong>MSc in Computer Science</strong>
    <small>University of Perpignan (France) &amp; University of Sousse (Tunisia)</small>
  </li>
  <li>
    <span class="ab-year">2016</span><br>
    <strong>BSc in Computer Science</strong>
    <small>University of Sousse, Tunisia</small>
  </li>
</ul>

<h2 id="news">News</h2>
<div class="ab-news">
  <span class="ab-badge">Open</span><strong>M2 internship:</strong> Extending Constraint-Based Neural Network Quantization for FPGA Deployment — <a href="/files/DNN_quantization_M2_internship.pdf">description (PDF)</a>
</div>

<h2 id="service">Academic Service</h2>
<div class="ab-service">
  <div class="ab-label"> Co-chair</div>
  <div class="ab-chips">
    <a href="https://gdr-scilog.cnrs.fr/">GT TONES · GDR SciLog</a>
    <a href="https://embeddedaitoulouse.github.io/">Toulouse Embedded AI Challenge @ ANITI</a>
  </div>
  <div class="ab-label"> Program Committee</div>
  <div class="ab-chips">
    <a href="https://www.fdl-conference.com/index.html">FDL 2026</a>
    <a href="https://gdr-scilog.cnrs.fr/action/prix-de-these-gpl/">Prix de Thèse GDR SciLog 2026</a>
    <a href="https://conferences.i-cav.org/2025/">CAV 2025</a>
    <a href="https://2025.splashcon.org/track/OOPSLA">OOPSLA 2025 (R1 &amp; R2)</a>
    <a href="https://vsl.cis.udel.edu/vss2025/">VSS 2025</a>
    <a href="https://codit2025.org/">CoDIT 2025</a>
    <a href="https://codit2024.com/index.php">CoDIT 2024</a>
    <a href="https://codit2023.com/">CoDIT 2023</a>
  </div>
  <div class="ab-label">Artifact Evaluation</div>
  <div class="ab-chips">
    <a href="https://pldi24.sigplan.org/track/pldi-2024-pldi-research-artifacts">PLDI 2024</a>
    <a href="https://conf.researchr.org/home/sas-2023">SAS 2023</a>
    <a href="https://2023.ecoop.org/">ECOOP 2023</a>
    <a href="https://2022.splashcon.org/home/sas-2022#Home">SAS 2022</a>
    <a href="https://conferences.ncl.ac.uk/formats2022/">FORMATS 2022</a>
  </div>
  <div class="ab-label"> External Review</div>
  <div class="ab-chips">
    <a href="https://2023.ecoop.org/">ECOOP 2023</a>
    <a href="https://conferences.ncl.ac.uk/formats2022/">FORMATS 2022</a>
  </div>
  <div class="ab-label"> Reviewer</div>
  <div class="ab-chips">
    <a href="https://dl.acm.org/journal/tosem">TOSEM 2025</a>
    <a href="https://pldi23.sigplan.org/track/pldi-2023-src">PLDI 2023 SRC</a>
    <a href="https://www.springer.com/journal/11227">The Journal of Supercomputing 2022</a>
  </div>
</div>

<h2 id="people">People</h2>

<h3>PhD Students</h3>
<div class="ab-grid">
  <div class="ab-card ab-person">
    <div class="ab-avatar">EC</div>
    <div>
      <strong>Evan Chinnaya</strong>
      <small>ENAC &amp; ONERA, with <a href="https://www.onera.fr/fr/staff/julien-brunel">Julien Brunel</a><br>Nov 2026 – Nov 2029</small>
    </div>
  </div>
  <div class="ab-card ab-person">
    <div class="ab-avatar">FE</div>
    <div>
      <strong>Faysal Elouchdi</strong>
      <small>ENAC, Univ. Perpignan &amp; Univ. Tlemcen (Algeria)<br>Mar 2025 – present</small>
    </div>
  </div>
  <div class="ab-card ab-person">
    <div class="ab-avatar">JB</div>
    <div>
      <strong>Julien Bortolussi</strong>
      <small>ENAC, with <a href="https://garoche.net/">Pierre-Loïc Garoche</a><br>Oct 2024 – present</small>
    </div>
  </div>
</div>

<h3>Apprentices</h3>
<div class="ab-grid">
  <div class="ab-card ab-person">
    <div class="ab-avatar alt">HS</div>
    <div>
      <strong>Hugo Sutra</strong>
      <small>ENAC apprentice · Collins Aerospace, Toulouse<br>2024 – 2027</small>
    </div>
  </div>
  <div class="ab-card ab-person">
    <div class="ab-avatar alt">KM</div>
    <div>
      <strong>Killian Mallegol</strong>
      <small>ENAC apprentice · Thales AVS, Toulouse<br>2024 – 2026</small>
    </div>
  </div>
</div>

<h3>Alumni</h3>
<div class="ab-grid">
  <div class="ab-card ab-person">
    <div class="ab-avatar past">LR</div>
    <div>
      <strong>Léonard Rivals</strong>
      <small>M2 Research Intern · Univ. Montpellier<br>Mar 2026 – Aug 2026</small>
    </div>
  </div>
  <div class="ab-card ab-person">
    <div class="ab-avatar past">PK</div>
    <div>
      <strong>Pradeep Krishnamurthy-Vijayalakhmi</strong>
      <small>M1 · ISAE-SUPAERO<br>Jun 2025 – Sep 2025</small>
    </div>
  </div>
  <div class="ab-card ab-person">
    <div class="ab-avatar past">MV</div>
    <div>
      <strong>Meet Vachhani</strong>
      <small>M1 · ISAE-SUPAERO<br>Jun 2024 – Aug 2024</small>
    </div>
  </div>
  <div class="ab-card ab-person">
    <div class="ab-avatar past">MJ</div>
    <div>
      <strong>Mohsin Jaleel</strong>
      <small>M2 IATSED (Airbus)<br>Feb 2024 – Apr 2024</small>
    </div>
  </div>
  <div class="ab-card ab-person">
    <div class="ab-avatar past">SB</div>
    <div>
      <strong>Sofiane Bessai</strong>
      <small>M2 HPC &amp; Simulation<br>Feb 2022 – Jun 2022</small>
    </div>
  </div>
  <div class="ab-card ab-person">
    <div class="ab-avatar past">KF</div>
    <div>
      <strong>Kahina Fellah</strong>
      <small>M1 HPC &amp; Simulation<br>Apr 2022 – Jun 2022</small>
    </div>
  </div>
</div>

<h2 id="contact">Contact</h2>
<div class="ab-grid">
  <div class="ab-card">
    <span class="ab-ico">✉️</span>
    <strong>Email</strong>
    <small><a href="mailto:dorra.ben-khalifa@enac.fr">dorra.ben-khalifa@enac.fr</a></small>
  </div>
  <div class="ab-card">
    <span class="ab-ico">📍</span>
    <strong>Office</strong>
    <small>C103, Building Caudron, 2nd floor<br>ENAC, Toulouse</small>
  </div>
</div>
<iframe class="ab-map" src="https://www.google.com/maps?q=ENAC+Toulouse&amp;output=embed" loading="lazy" title="ENAC Toulouse map"></iframe>

</div>
