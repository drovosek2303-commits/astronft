:root {
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #e2e8f0;
  background:
    radial-gradient(circle at top, rgba(56, 189, 248, 0.14), transparent 35%),
    linear-gradient(180deg, #020817 0%, #0f172a 100%);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at 20% 20%, rgba(125, 211, 252, 0.12), transparent 18%),
    radial-gradient(circle at 80% 0%, rgba(168, 85, 247, 0.12), transparent 20%),
    #020817;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.8), transparent),
    radial-gradient(1.5px 1.5px at 65% 40%, rgba(255, 255, 255, 0.7), transparent),
    radial-gradient(2px 2px at 80% 70%, rgba(255, 255, 255, 0.8), transparent),
    radial-gradient(2px 2px at 30% 80%, rgba(255, 255, 255, 0.7), transparent),
    radial-gradient(1.5px 1.5px at 50% 60%, rgba(255, 255, 255, 0.8), transparent);
  background-size: 420px 420px;
  opacity: 0.6;
  pointer-events: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.page-shell {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
  padding-bottom: 40px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 0 18px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  border-radius: 14px;
  font-weight: 800;
  color: #020617;
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.38);
}

.brand-name {
  font-size: 1.1rem;
  font-weight: 800;
}

.brand-tag {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;
}

.nav a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
}

.cta-button,
.primary-action,
.secondary-action,
.ghost-button {
  border: none;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button,
.primary-action {
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  color: #020617;
  font-weight: 700;
  padding: 0.9rem 1.3rem;
  box-shadow: 0 16px 32px rgba(56, 189, 248, 0.25);
}

.secondary-action,
.ghost-button {
  background: rgba(15, 23, 42, 0.8);
  color: #e2e8f0;
  border: 1px solid rgba(148, 163, 184, 0.25);
  padding: 0.8rem 1.3rem;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
  padding: 46px 0 20px;
}

.hero-copy,
.info-card,
.market-card,
.detail-card,
.admin-form,
.detail-copy {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(14px);
}

.hero-copy {
  border-radius: 28px;
  padding: 36px 28px;
}

.mini-label {
  display: inline-flex;
  margin-bottom: 18px;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.1);
  color: #7dd3fc;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 4vw, 5rem);
  line-height: 0.92;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin-top: 18px;
  max-width: 620px;
  color: #cbd5e1;
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 26px;
}

.primary-action,
.secondary-action,
.ghost-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 24px;
}

.hero-stats div {
  min-width: 120px;
}

.hero-stats strong {
  display: block;
  font-size: 1.8rem;
  line-height: 1;
}

.hero-stats span {
  display: block;
  margin-top: 6px;
  color: #94a3b8;
}

.hero-visual {
  position: relative;
  min-height: 520px;
  display: grid;
  place-items: center;
}

.visual-glow {
  position: absolute;
  inset: 12% 15%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.35), transparent 55%);
  filter: blur(50px);
}

.display-frame {
  position: relative;
  width: min(100%, 560px);
  height: 500px;
  border-radius: 32px;
  overflow: hidden;
  backdrop-filter: blur(18px);
  border: 1px solid rgba(148, 163, 184, 0.16);
  background: rgba(15, 23, 42, 0.5);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.info-card {
  border-radius: 22px;
  padding: 26px 22px;
}

.card-kicker {
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7dd3fc;
  margin-bottom: 12px;
}

.info-card h3 {
  margin: 0 0 10px;
  font-size: 1.4rem;
}

.info-card p {
  margin: 0;
  color: #cbd5e1;
}

.catalog-section,
.admin-section {
  margin-top: 56px;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.6rem);
  letter-spacing: -0.05em;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.market-card {
  width: 100%;
  text-align: left;
  color: inherit;
  border-radius: 22px;
  padding: 18px 18px 16px;
  border: 1px solid rgba(148, 163, 184, 0.17);
  background: rgba(15, 23, 42, 0.6);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.market-card.selected {
  border-color: rgba(125, 211, 252, 0.8);
  transform: translateY(-3px);
}

.card-orbit {
  width: 100%;
  height: 148px;
  border-radius: 18px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
  box-shadow: inset 0 0 50px rgba(255,255,255,0.08);
}

.card-topline,
.meta-row,
.price-row,
.detail-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.badge,
.status {
  display: inline-flex;
  padding: 0.36rem 0.55rem;
  border-radius: 999px;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.badge {
  background: rgba(168, 85, 247, 0.14);
  color: #d8b4fe;
}

.status {
  background: rgba(34, 197, 94, 0.12);
  color: #86efac;
}

.market-card h3 {
  margin: 16px 0 8px;
  font-size: 1.35rem;
}

.market-card p {
  margin: 0;
  min-height: 90px;
  color: #cbd5e1;
}

.meta-row {
  margin-top: 16px;
  font-size: 0.8rem;
  color: #94a3b8;
}

.price-row {
  margin-top: 16px;
  padding-top: 10px;
  border-top: 1px solid rgba(148, 163, 184, 0.18);
}

.price-row strong {
  font-size: 1.1rem;
}

.detail-section {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 22px;
  margin-top: 56px;
}

.detail-copy,
.detail-card {
  border-radius: 28px;
  padding: 26px;
}

.detail-copy h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.detail-copy p {
  margin-top: 16px;
  color: #cbd5e1;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 24px;
}

.metrics div {
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.metrics label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #94a3b8;
}

.metrics strong {
  font-size: 1.05rem;
}

.benefits {
  margin-top: 28px;
}

.benefits h3 {
  margin: 0 0 14px;
}

.benefits ul {
  margin: 0;
  padding-left: 18px;
  color: #cbd5e1;
}

.benefits li + li {
  margin-top: 10px;
}

.detail-visual {
  position: relative;
  width: 100%;
  height: 300px;
  border: 2px solid rgba(255, 255, 255, 0.14);
  border-radius: 26px;
  background: radial-gradient(circle at center, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 1));
  overflow: hidden;
}

.detail-orbit {
  position: absolute;
  inset: 12% 14%;
  border-radius: 50%;
}

.detail-core {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 70px rgba(255,255,255,0.16);
}

.detail-summary {
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid rgba(148, 163, 184, 0.18);
}

.detail-summary div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.detail-summary span {
  color: #94a3b8;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.admin-form {
  border-radius: 28px;
  padding: 24px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.admin-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  color: #e2e8f0;
}

.admin-form input,
.admin-form textarea,
.admin-form select {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.9);
  color: #f8fafc;
  padding: 0.9rem 1rem;
}

.admin-form textarea {
  min-height: 140px;
  resize: vertical;
}

.wide-button {
  width: 100%;
  margin-top: 20px;
  border: none;
  border-radius: 14px;
  padding: 1rem 1.2rem;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 30px 0 18px;
  color: #94a3b8;
}

@media (max-width: 980px) {
  .hero,
  .detail-section,
  .info-grid,
  .catalog-grid {
    grid-template-columns: 1fr;
  }

  .catalog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .field-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .nav {
    display: none;
  }

  .topbar {
    padding-top: 18px;
  }

  .hero-copy {
    padding: 22px 18px;
  }

  .catalog-grid {
    grid-template-columns: 1fr;
  }

  .display-frame {
    height: 400px;
  }

  .hero {
    padding-top: 20px;
  }

  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
