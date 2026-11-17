---
layout: archive
title: ""
permalink: /software/
author_profile: true
---

<style>
.sw-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 22px;
  margin-top: 10px;
}
.sw-card {
  display: flex;
  flex-direction: column;
  padding: 20px 22px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 14px;
  background: transparent;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.sw-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: var(--global-link-color, #52adc8);
}
.sw-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 8px;
}
.sw-head h3 {
  margin: 0;
  font-size: 1.1rem;
}
.sw-year {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  white-space: nowrap;
}
.sw-desc {
  font-size: 0.88rem;
  line-height: 1.5;
  margin: 0 0 14px 0;
  opacity: 0.85;
}
.sw-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}
.sw-tag {
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--global-link-color, #52adc8) 12%, transparent);
  color: var(--global-link-color, #52adc8);
}
.sw-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}
.sw-links a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  color: inherit;
  text-decoration: none !important;
  transition: background .2s ease, color .2s ease, border-color .2s ease;
}
.sw-links a:hover {
  background: var(--global-link-color, #52adc8);
  border-color: var(--global-link-color, #52adc8);
  color: #fff;
}
.sw-private {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  opacity: 0.7;
  font-style: italic;
}
</style>

## Software Projects

<div class="sw-grid">
<!-- FPScan -->
<div class="sw-card">
  <div class="sw-head"><h3>FPScan</h3><span class="sw-year">2026</span></div>
  <p class="sw-desc">Detection tool for floating-point anomalies such as cancellation and absorption.</p>
  <div class="sw-tags"><span class="sw-tag">Floating-Point</span><span class="sw-tag">Cancellation</span><span class="sw-tag">Absorption</span></div>
  <div class="sw-links"><a href="https://github.com/JBortolussi/FPScan"><i class="fab fa-github"></i> GitHub</a></div>
</div>
<!-- POPinns -->
<div class="sw-card">
  <div class="sw-head"><h3>POPinns</h3><span class="sw-year">2024</span></div>
  <p class="sw-desc">Fixed-point program synthesis tool for neural networks.</p>
  <div class="sw-tags"><span class="sw-tag">Fixed-Point</span><span class="sw-tag">Neural Networks</span></div>
  <div class="sw-links"><span class="sw-private"><i class="fas fa-lock"></i> Private code</span><a href="mailto:dorra.ben-khalifa@enac.fr?subject=POPinns%20access%20request"><i class="fas fa-envelope"></i> Available upon request</a></div>
</div>
<!-- POPiX -->
<div class="sw-card">
  <div class="sw-head"><h3>POPiX</h3><span class="sw-year">2023</span></div>
  <p class="sw-desc">Fixed-point program synthesis tool based on static analysis.</p>
  <div class="sw-tags"><span class="sw-tag">Fixed-Point</span><span class="sw-tag">Static Analysis</span></div>
  <div class="sw-links"><a href="https://github.com/sofiane-bessai/POPIX"><i class="fab fa-github"></i> GitHub 1</a><a href="https://github.com/dbenkhal/POPiX"><i class="fab fa-github"></i> GitHub 2</a></div>
</div>
<!-- Candy -->
<div class="sw-card">
  <div class="sw-head"><h3>Candy</h3><span class="sw-year">2022</span></div>
  <p class="sw-desc">C++ library for floating-point cancellation detection.</p>
  <div class="sw-tags"><span class="sw-tag">C++</span><span class="sw-tag">Floating-Point</span><span class="sw-tag">Numerical Pitfalls</span></div>
  <div class="sw-links"><span class="sw-private"><i class="fas fa-lock"></i> Private code</span></div>
</div>
<!-- POP -->
<div class="sw-card">
  <div class="sw-head"><h3>POP</h3><span class="sw-year">2019–2021</span></div>
  <p class="sw-desc">Static analysis tool for floating-point precision tuning.</p>
  <div class="sw-tags"><span class="sw-tag">Floating-Point</span><span class="sw-tag">Precision Tuning</span></div>
  <div class="sw-links"><a href="https://github.com/dbenkhal/POPiX"><i class="fab fa-github"></i> GitHub</a></div>
</div>
</div>
