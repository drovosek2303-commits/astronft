import { useMemo, useState } from 'react';
import SpaceScene from './components/SpaceScene';
import { initialMeteorites } from './data';

const defaultForm = {
  name: '',
  description: '',
  composition: '',
  size: '',
  speed: '',
  area: '',
  price: '',
  rarity: 'Rare',
  region: '',
  color: '#7dd3fc'
};

function App() {
  const [meteorites, setMeteorites] = useState(() => {
    const saved = localStorage.getItem('astronft-meteorites');
    return saved ? JSON.parse(saved) : initialMeteorites;
  });
  const [selectedId, setSelectedId] = useState(1);
  const [form, setForm] = useState(defaultForm);

  const selected = meteorites.find((meteorite) => meteorite.id === selectedId) ?? meteorites[0];

  const stats = useMemo(() => {
    const totalValue = meteorites.reduce((sum, item) => sum + item.valueScore, 0);
    const avgPrice = meteorites.length ? (totalValue / meteorites.length).toFixed(0) : 0;
    return {
      total: meteorites.length,
      avgValue: avgPrice,
      featured: meteorites.filter((item) => item.status === 'Featured').length
    };
  }, [meteorites]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.description || !form.composition) {
      return;
    }

    const newMeteorite = {
      id: Date.now(),
      name: form.name,
      description: form.description,
      composition: form.composition,
      size: form.size || 'Unknown',
      speed: form.speed || 'Unknown',
      area: form.area || 'Unknown',
      price: form.price || '0.8 ETH',
      rarity: form.rarity,
      valueScore: Math.min(99, Math.max(60, Math.round((Math.random() * 30) + 65))),
      region: form.region || 'Unmapped sector',
      color: form.color || '#7dd3fc',
      status: 'New'
    };

    const next = [newMeteorite, ...meteorites];
    setMeteorites(next);
    localStorage.setItem('astronft-meteorites', JSON.stringify(next));
    setSelectedId(newMeteorite.id);
    setForm(defaultForm);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">A</div>
          <div>
            <div className="brand-name">Astronft</div>
            <div className="brand-tag">Meteorite Nation</div>
          </div>
        </div>
        <nav className="nav">
          <a href="#market">Market</a>
          <a href="#collections">Collections</a>
          <a href="#admin">Admin</a>
        </nav>
        <button className="cta-button">Connect wallet</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="mini-label">Curated cosmic assets</span>
            <h1>Own rare meteorites from deep space.</h1>
            <p>
              Discover authenticated fragments from alien worlds. Each lot is valued by its mineral
              composition, size, velocity, surface area, and rare orbital history.
            </p>
            <div className="hero-actions">
              <a href="#market" className="primary-action">Explore lots</a>
              <a href="#admin" className="secondary-action">Open admin</a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>{stats.total}</strong>
                <span>Live lots</span>
              </div>
              <div>
                <strong>{stats.avgValue}</strong>
                <span>Avg. score</span>
              </div>
              <div>
                <strong>{stats.featured}</strong>
                <span>Featured</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="display-frame">
              <SpaceScene color={selected?.color || '#7dd3fc'} />
            </div>
          </div>
        </section>

        <section className="info-grid">
          <article className="info-card">
            <span className="card-kicker">Composition</span>
            <h3>Material value</h3>
            <p>Rare metals, crystal lattices, and volatile minerals elevate every meteorite lot.</p>
          </article>
          <article className="info-card">
            <span className="card-kicker">Flight data</span>
            <h3>Velocity & size</h3>
            <p>We rank each object by measurable speed, mass footprint, and impact surface.</p>
          </article>
          <article className="info-card">
            <span className="card-kicker">Collectors</span>
            <h3>Space-grade rarity</h3>
            <p>Each meteorite is catalogued with provenance, value score, and orbital context.</p>
          </article>
        </section>

        <section id="market" className="catalog-section">
          <div className="section-heading">
            <div>
              <span className="mini-label">Marketplace</span>
              <h2>Featured meteorite lots</h2>
            </div>
            <button className="ghost-button">View collection</button>
          </div>

          <div className="catalog-grid">
            {meteorites.map((meteorite) => (
              <button
                key={meteorite.id}
                className={`market-card ${selectedId === meteorite.id ? 'selected' : ''}`}
                onClick={() => setSelectedId(meteorite.id)}
              >
                <div className="card-orbit" style={{ background: meteorite.color }} />
                <div className="card-topline">
                  <span className="badge">{meteorite.rarity}</span>
                  <span className="status">{meteorite.status}</span>
                </div>
                <h3>{meteorite.name}</h3>
                <p>{meteorite.description}</p>
                <div className="meta-row">
                  <span>{meteorite.size}</span>
                  <span>{meteorite.speed}</span>
                </div>
                <div className="price-row">
                  <strong>{meteorite.price}</strong>
                  <span>Value {meteorite.valueScore}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="collections" className="detail-section">
          {selected && (
            <>
              <div className="detail-copy">
                <span className="mini-label">Lot profile</span>
                <h2>{selected.name}</h2>
                <p>{selected.description}</p>

                <div className="metrics">
                  <div>
                    <label>Composition</label>
                    <strong>{selected.composition}</strong>
                  </div>
                  <div>
                    <label>Speed</label>
                    <strong>{selected.speed}</strong>
                  </div>
                  <div>
                    <label>Surface area</label>
                    <strong>{selected.area}</strong>
                  </div>
                  <div>
                    <label>Size</label>
                    <strong>{selected.size}</strong>
                  </div>
                </div>

                <div className="benefits">
                  <h3>Advantages</h3>
                  <ul>
                    <li>High material density and low extraction risk</li>
                    <li>Rare composition makes it ideal for premium resales</li>
                    <li>Distinct orbital provenance and collector appeal</li>
                    <li>Fast identification through trace element value</li>
                  </ul>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-visual" style={{ borderColor: selected.color }}>
                  <div className="detail-orbit" style={{ background: `radial-gradient(circle, ${selected.color}, transparent 70%)` }} />
                  <div className="detail-core" style={{ background: selected.color }} />
                </div>

                <div className="detail-summary">
                  <div>
                    <span>Region</span>
                    <strong>{selected.region}</strong>
                  </div>
                  <div>
                    <span>Price</span>
                    <strong>{selected.price}</strong>
                  </div>
                  <div>
                    <span>Value</span>
                    <strong>{selected.valueScore}/100</strong>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>

        <section id="admin" className="admin-section">
          <div className="section-heading compact-heading">
            <div>
              <span className="mini-label">Admin panel</span>
              <h2>Add new meteorite lots</h2>
            </div>
          </div>

          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="field-grid">
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} placeholder="Meteorite name" />
              </label>
              <label>
                Rarity
                <select name="rarity" value={form.rarity} onChange={handleChange}>
                  <option>Rare</option>
                  <option>Epic</option>
                  <option>Legendary</option>
                  <option>Mythic</option>
                </select>
              </label>
              <label>
                Size
                <input name="size" value={form.size} onChange={handleChange} placeholder="18.3 cm" />
              </label>
              <label>
                Speed
                <input name="speed" value={form.speed} onChange={handleChange} placeholder="12.7 km/s" />
              </label>
              <label>
                Surface area
                <input name="area" value={form.area} onChange={handleChange} placeholder="3.1 km²" />
              </label>
              <label>
                Price
                <input name="price" value={form.price} onChange={handleChange} placeholder="2.6 ETH" />
              </label>
              <label>
                Region
                <input name="region" value={form.region} onChange={handleChange} placeholder="Unknown sector" />
              </label>
              <label>
                Accent color
                <input type="color" name="color" value={form.color} onChange={handleChange} />
              </label>
            </div>

            <label>
              Composition
              <input name="composition" value={form.composition} onChange={handleChange} placeholder="Iron, nickel, quartz" />
            </label>

            <label>
              Description
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe the meteorite, its value, and why collectors should buy it."
              />
            </label>

            <button type="submit" className="primary-action wide-button">Add meteorite lot</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Astronft</span>
        <span>Curated cosmic NFT marketplace</span>
      </footer>
    </div>
  );
}

export default App;
