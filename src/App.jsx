import React, { useState, useEffect } from 'react';

// ── PRODEJNY ──────────────────────────────────────────────────────────────────
const PRODEJNY = [
  "Praha 1 – Centrum","Praha 2 – Vinohrady","Praha 3 – Žižkov","Praha 4 – Nusle",
  "Praha 5 – Smíchov","Praha 6 – Dejvice","Praha 7 – Holešovice","Praha 8 – Karlín",
  "Praha 9 – Vysočany","Praha 10 – Vršovice","Praha 11 – Chodov","Praha 12 – Modřany",
  "Praha 13 – Stodůlky","Praha 14 – Černý Most","Praha 15 – Hostivař",
  "Brno – Centrum","Brno – Královo Pole","Brno – Židenice","Brno – Bohunice",
  "Brno – Líšeň","Brno – Bystrc","Brno – Řečkovice","Brno – Starý Lískovec",
  "Ostrava – Centrum","Ostrava – Poruba","Ostrava – Zábřeh","Ostrava – Vítkovice",
  "Ostrava – Hrabůvka","Ostrava – Mariánské Hory","Ostrava – Fifejdy",
  "Plzeň – Centrum","Plzeň – Lochotín","Plzeň – Doubravka","Plzeň – Bory",
  "Liberec – Centrum","Liberec – Rochlice","Liberec – Jeřáb",
  "Olomouc – Centrum","Olomouc – Nová Ulice","Olomouc – Hodolany",
  "České Budějovice – Centrum","České Budějovice – Suché Vrbné",
  "Hradec Králové – Centrum","Hradec Králové – Slezské Předměstí",
  "Pardubice – Centrum","Pardubice – Polabiny",
  "Ústí nad Labem – Centrum","Ústí nad Labem – Severní Terasa",
  "Havířov – Centrum","Havířov – Šumbark",
  "Zlín – Centrum","Zlín – Malenovice",
  "Kladno – Centrum","Kladno – Rozdělov",
  "Most – Centrum","Most – Sídliště",
  "Karviná – Centrum","Karviná – Ráj",
  "Opava – Centrum","Opava – Kateřinky",
  "Frýdek-Místek – Centrum","Frýdek-Místek – Místek",
  "Jihlava – Centrum","Jihlava – Horní Kosov",
  "Teplice – Centrum","Teplice – Trnovany",
  "Děčín – Centrum","Děčín – Podmokly",
  "Chomutov – Centrum","Chomutov – Jirkov",
  "Mladá Boleslav – Centrum","Mladá Boleslav – Severní Sídliště",
  "Prostějov – Centrum","Prostějov – Vrahovice",
  "Přerov – Centrum","Přerov – Předmostí",
  "Třinec – Centrum","Třinec – Lyžbice",
  "Příbram – Centrum","Příbram – Březové Hory",
  "Znojmo – Centrum","Znojmo – Přímětice",
  "Cheb – Centrum","Cheb – Skalka",
  "Sokolov – Centrum","Sokolov – Michal",
  "Kolin – Centrum","Kolin – Zálabí",
  "Trutnov – Centrum","Trutnov – Poříčí",
  "Kroměříž – Centrum","Kroměříž – Vážany",
  "Uherské Hradiště – Centrum","Uherské Hradiště – Mařatice",
  "Šumperk – Centrum","Šumperk – Temenice",
  "Nový Jičín – Centrum","Nový Jičín – Žilina",
  "Vsetín – Centrum","Vsetín – Rokytnice",
  "Blansko – Centrum","Blansko – Horní Lhota",
  "Hodonín – Centrum","Hodonín – Bažantnice",
];

// ── STYLY ─────────────────────────────────────────────────────────────────────
const S = {
  app: {
    minHeight: '100vh',
    background: '#0a0f0a',
    color: '#e8f5e9',
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontSize: 14,
  },
  header: {
    background: '#0d1a0d',
    borderBottom: '1px solid #1a3a1a',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    height: 56,
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontWeight: 700,
    fontSize: 16,
    color: '#4caf50',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  nav: {
    display: 'flex',
    gap: 4,
    marginLeft: 'auto',
    flexWrap: 'wrap',
  },
  navBtn: (active) => ({
    padding: '6px 14px',
    borderRadius: 4,
    border: 'none',
    cursor: 'pointer',
    fontSize: 13,
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: active ? 600 : 400,
    background: active ? '#1b5e20' : 'transparent',
    color: active ? '#a5d6a7' : '#66bb6a',
    transition: 'all 0.15s',
  }),
  main: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '32px 24px',
  },
  card: {
    background: '#0d1a0d',
    border: '1px solid #1a3a1a',
    borderRadius: 8,
    padding: 24,
    marginBottom: 20,
  },
  h2: {
    fontSize: 18,
    fontWeight: 600,
    color: '#81c784',
    marginBottom: 20,
    marginTop: 0,
  },
  h3: {
    fontSize: 14,
    fontWeight: 600,
    color: '#a5d6a7',
    marginBottom: 12,
    marginTop: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  label: {
    display: 'block',
    fontSize: 12,
    color: '#4caf50',
    marginBottom: 4,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  input: {
    width: '100%',
    background: '#0a150a',
    border: '1px solid #2e5c2e',
    borderRadius: 4,
    padding: '8px 12px',
    color: '#e8f5e9',
    fontSize: 14,
    fontFamily: "'IBM Plex Sans', sans-serif",
    boxSizing: 'border-box',
    outline: 'none',
  },
  select: {
    width: '100%',
    background: '#0a150a',
    border: '1px solid #2e5c2e',
    borderRadius: 4,
    padding: '8px 12px',
    color: '#e8f5e9',
    fontSize: 14,
    fontFamily: "'IBM Plex Sans', sans-serif",
    boxSizing: 'border-box',
    outline: 'none',
    cursor: 'pointer',
  },
  btn: {
    padding: '9px 20px',
    borderRadius: 4,
    border: 'none',
    cursor: 'pointer',
    fontSize: 13,
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: 600,
    background: '#2e7d32',
    color: '#e8f5e9',
    transition: 'background 0.15s',
  },
  btnSecondary: {
    padding: '9px 20px',
    borderRadius: 4,
    border: '1px solid #2e5c2e',
    cursor: 'pointer',
    fontSize: 13,
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: 500,
    background: 'transparent',
    color: '#81c784',
    transition: 'all 0.15s',
  },
  btnDanger: {
    padding: '6px 12px',
    borderRadius: 4,
    border: 'none',
    cursor: 'pointer',
    fontSize: 12,
    fontFamily: "'IBM Plex Sans', sans-serif",
    background: '#1a0a0a',
    color: '#ef9a9a',
    transition: 'background 0.15s',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 16,
  },
  formGroup: {
    marginBottom: 14,
  },
  tag: (color) => ({
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: 3,
    fontSize: 11,
    fontWeight: 600,
    background: color === 'green' ? '#1b5e20' : color === 'red' ? '#3e1a1a' : '#1a3a1a',
    color: color === 'green' ? '#a5d6a7' : color === 'red' ? '#ef9a9a' : '#66bb6a',
    fontFamily: "'IBM Plex Mono', monospace",
  }),
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 13,
  },
  th: {
    textAlign: 'left',
    padding: '8px 12px',
    borderBottom: '1px solid #1a3a1a',
    color: '#4caf50',
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
  },
  td: {
    padding: '10px 12px',
    borderBottom: '1px solid #111f11',
    color: '#c8e6c9',
    verticalAlign: 'middle',
  },
  mono: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13,
  },
  alert: (type) => ({
    padding: '10px 16px',
    borderRadius: 4,
    marginBottom: 16,
    fontSize: 13,
    background: type === 'success' ? '#0d2e0d' : type === 'error' ? '#2e0d0d' : '#0d1e2e',
    border: `1px solid ${type === 'success' ? '#2e5c2e' : type === 'error' ? '#5c2e2e' : '#1a3a5c'}`,
    color: type === 'success' ? '#a5d6a7' : type === 'error' ? '#ef9a9a' : '#90caf9',
  }),
};

// ── UTIL ──────────────────────────────────────────────────────────────────────
const dnes = () => new Date().toISOString().split('T')[0];
const fmt = (n) => n == null ? '–' : Number(n).toLocaleString('cs-CZ', { maximumFractionDigits: 2 });
const fmtKwh = (n) => n == null ? '–' : `${fmt(n)} kWh`;
const fmtM3 = (n) => n == null ? '–' : `${fmt(n)} m³`;
const fmtKc = (n) => n == null ? '–' : `${fmt(n)} Kč`;

// ── KOMPONENTY ────────────────────────────────────────────────────────────────
function FormGroup({ label, children }) {
  return (
    <div style={S.formGroup}>
      <label style={S.label}>{label}</label>
      {children}
    </div>
  );
}

// ── SCREEN: ODEČTY ────────────────────────────────────────────────────────────
function OdectyScreen({ odecty, setOdecty, konfigurace }) {
  const [prodejnaIdx, setProdejnaIdx] = useState(0);
  const [form, setForm] = useState({ datum: dnes(), t1: '', t2: '', plyn: '', poznamka: '' });
  const [msg, setMsg] = useState(null);

  const prodejna = PRODEJNY[prodejnaIdx];
  const kon = konfigurace[prodejna] || { maT2: false, maPlyn: false };
  const zaznamy = odecty.filter(o => o.prodejna === prodejna).sort((a, b) => b.datum.localeCompare(a.datum));
  const posledni = zaznamy[0];

  function vypoctiSpotreba(aktualni, predchozi) {
    if (!aktualni || !predchozi) return null;
    const a = parseFloat(aktualni);
    const p = parseFloat(predchozi);
    if (isNaN(a) || isNaN(p)) return null;
    return a - p;
  }

  function ulozit() {
    if (!form.t1) { setMsg({ type: 'error', text: 'Zadejte hodnotu T1.' }); return; }
    const zaznam = {
      id: Date.now(),
      prodejna,
      datum: form.datum,
      t1: parseFloat(form.t1),
      t2: kon.maT2 && form.t2 ? parseFloat(form.t2) : null,
      plyn: kon.maPlyn && form.plyn ? parseFloat(form.plyn) : null,
      poznamka: form.poznamka,
      spotrebaT1: vypoctiSpotreba(form.t1, posledni?.t1),
      spotrebaT2: kon.maT2 ? vypoctiSpotreba(form.t2, posledni?.t2) : null,
      spotrebaPlyn: kon.maPlyn ? vypoctiSpotreba(form.plyn, posledni?.plyn) : null,
    };
    setOdecty(prev => [...prev, zaznam]);
    setForm({ datum: dnes(), t1: '', t2: '', plyn: '', poznamka: '' });
    setMsg({ type: 'success', text: 'Odečet uložen.' });
    setTimeout(() => setMsg(null), 3000);
  }

  function smazat(id) {
    setOdecty(prev => prev.filter(o => o.id !== id));
  }

  return (
    <div>
      <div style={S.card}>
        <h2 style={S.h2}>Zadat odečet měřidel</h2>
        <FormGroup label="Prodejna">
          <select style={S.select} value={prodejnaIdx} onChange={e => setProdejnaIdx(Number(e.target.value))}>
            {PRODEJNY.map((p, i) => <option key={i} value={i}>{p}</option>)}
          </select>
        </FormGroup>
        {msg && <div style={S.alert(msg.type)}>{msg.text}</div>}
        <div style={S.grid3}>
          <FormGroup label="Datum">
            <input style={S.input} type="date" value={form.datum} onChange={e => setForm(f => ({ ...f, datum: e.target.value }))} />
          </FormGroup>
          <FormGroup label={`Elektřina T1 (kWh)${posledni ? ` — předchozí: ${fmt(posledni.t1)}` : ''}`}>
            <input style={S.input} type="number" placeholder="0" value={form.t1} onChange={e => setForm(f => ({ ...f, t1: e.target.value }))} />
          </FormGroup>
          {kon.maT2 && (
            <FormGroup label={`Elektřina T2 (kWh)${posledni ? ` — předchozí: ${fmt(posledni.t2)}` : ''}`}>
              <input style={S.input} type="number" placeholder="0" value={form.t2} onChange={e => setForm(f => ({ ...f, t2: e.target.value }))} />
            </FormGroup>
          )}
          {kon.maPlyn && (
            <FormGroup label={`Plyn (m³)${posledni ? ` — předchozí: ${fmt(posledni.plyn)}` : ''}`}>
              <input style={S.input} type="number" placeholder="0" value={form.plyn} onChange={e => setForm(f => ({ ...f, plyn: e.target.value }))} />
            </FormGroup>
          )}
        </div>
        <FormGroup label="Poznámka (volitelná)">
          <input style={S.input} type="text" placeholder="Např. odečet po výměně měřidla…" value={form.poznamka} onChange={e => setForm(f => ({ ...f, poznamka: e.target.value }))} />
        </FormGroup>
        {!kon.maT2 && !kon.maPlyn && (
          <p style={{ color: '#4caf50', fontSize: 12, marginBottom: 12 }}>
            ℹ Tato prodejna má pouze T1. Konfigurujte měřidla v záložce <strong>Konfigurace</strong>.
          </p>
        )}
        <button style={S.btn} onClick={ulozit}>Uložit odečet</button>
      </div>

      {zaznamy.length > 0 && (
        <div style={S.card}>
          <h3 style={S.h3}>Historie — {prodejna}</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={S.table}>
              <thead>
                <tr>
                  <th style={S.th}>Datum</th>
                  <th style={S.th}>T1</th>
                  <th style={S.th}>Spotřeba T1</th>
                  {kon.maT2 && <><th style={S.th}>T2</th><th style={S.th}>Spotřeba T2</th></>}
                  {kon.maPlyn && <><th style={S.th}>Plyn</th><th style={S.th}>Spotřeba</th></>}
                  <th style={S.th}>Poznámka</th>
                  <th style={S.th}></th>
                </tr>
              </thead>
              <tbody>
                {zaznamy.map(z => (
                  <tr key={z.id}>
                    <td style={{ ...S.td, ...S.mono }}>{z.datum}</td>
                    <td style={{ ...S.td, ...S.mono }}>{fmt(z.t1)}</td>
                    <td style={S.td}>
                      {z.spotrebaT1 != null
                        ? <span style={S.tag('green')}>{fmtKwh(z.spotrebaT1)}</span>
                        : <span style={{ color: '#3a5c3a' }}>–</span>}
                    </td>
                    {kon.maT2 && (
                      <>
                        <td style={{ ...S.td, ...S.mono }}>{fmt(z.t2)}</td>
                        <td style={S.td}>
                          {z.spotrebaT2 != null
                            ? <span style={S.tag('green')}>{fmtKwh(z.spotrebaT2)}</span>
                            : <span style={{ color: '#3a5c3a' }}>–</span>}
                        </td>
                      </>
                    )}
                    {kon.maPlyn && (
                      <>
                        <td style={{ ...S.td, ...S.mono }}>{fmt(z.plyn)}</td>
                        <td style={S.td}>
                          {z.spotrebaPlyn != null
                            ? <span style={S.tag('green')}>{fmtM3(z.spotrebaPlyn)}</span>
                            : <span style={{ color: '#3a5c3a' }}>–</span>}
                        </td>
                      </>
                    )}
                    <td style={{ ...S.td, color: '#66bb6a', fontSize: 12 }}>{z.poznamka || ''}</td>
                    <td style={S.td}>
                      <button style={S.btnDanger} onClick={() => smazat(z.id)}>✕</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ── SCREEN: VYÚČTOVÁNÍ ────────────────────────────────────────────────────────
function VyuctovaniScreen({ vyuctovani, setVyuctovani }) {
  const [prodejnaIdx, setProdejnaIdx] = useState(0);
  const [form, setForm] = useState({
    datum: dnes(), obdobiOd: '', obdobiDo: '',
    spotreba: '', cenaKwh: '', zalohy: '', typ: 'elektrina',
  });
  const [msg, setMsg] = useState(null);

  const prodejna = PRODEJNY[prodejnaIdx];
  const zaznamy = vyuctovani.filter(v => v.prodejna === prodejna).sort((a, b) => b.datum.localeCompare(a.datum));

  function ulozit() {
    if (!form.spotreba || !form.cenaKwh) { setMsg({ type: 'error', text: 'Vyplňte spotřebu a cenu.' }); return; }
    const spotreba = parseFloat(form.spotreba);
    const cena = parseFloat(form.cenaKwh);
    const zalohy = parseFloat(form.zalohy) || 0;
    const celkem = spotreba * cena;
    const rozdil = celkem - zalohy;
    const zaznam = {
      id: Date.now(), prodejna, datum: form.datum,
      obdobiOd: form.obdobiOd, obdobiDo: form.obdobiDo,
      typ: form.typ, spotreba, cenaKwh: cena, zalohy,
      celkem, rozdil,
    };
    setVyuctovani(prev => [...prev, zaznam]);
    setForm(f => ({ ...f, spotreba: '', cenaKwh: '', zalohy: '' }));
    setMsg({ type: 'success', text: 'Vyúčtování uloženo.' });
    setTimeout(() => setMsg(null), 3000);
  }

  function smazat(id) {
    setVyuctovani(prev => prev.filter(v => v.id !== id));
  }

  return (
    <div>
      <div style={S.card}>
        <h2 style={S.h2}>Zadat vyúčtování</h2>
        <FormGroup label="Prodejna">
          <select style={S.select} value={prodejnaIdx} onChange={e => setProdejnaIdx(Number(e.target.value))}>
            {PRODEJNY.map((p, i) => <option key={i} value={i}>{p}</option>)}
          </select>
        </FormGroup>
        {msg && <div style={S.alert(msg.type)}>{msg.text}</div>}
        <div style={S.grid3}>
          <FormGroup label="Typ">
            <select style={S.select} value={form.typ} onChange={e => setForm(f => ({ ...f, typ: e.target.value }))}>
              <option value="elektrina">Elektřina</option>
              <option value="plyn">Plyn</option>
            </select>
          </FormGroup>
          <FormGroup label="Datum vyúčtování">
            <input style={S.input} type="date" value={form.datum} onChange={e => setForm(f => ({ ...f, datum: e.target.value }))} />
          </FormGroup>
          <FormGroup label="Období od">
            <input style={S.input} type="date" value={form.obdobiOd} onChange={e => setForm(f => ({ ...f, obdobiOd: e.target.value }))} />
          </FormGroup>
          <FormGroup label="Období do">
            <input style={S.input} type="date" value={form.obdobiDo} onChange={e => setForm(f => ({ ...f, obdobiDo: e.target.value }))} />
          </FormGroup>
          <FormGroup label={form.typ === 'plyn' ? 'Spotřeba (m³)' : 'Spotřeba (kWh)'}>
            <input style={S.input} type="number" placeholder="0" value={form.spotreba} onChange={e => setForm(f => ({ ...f, spotreba: e.target.value }))} />
          </FormGroup>
          <FormGroup label={form.typ === 'plyn' ? 'Cena za m³ (Kč)' : 'Cena za kWh (Kč)'}>
            <input style={S.input} type="number" placeholder="0.00" step="0.01" value={form.cenaKwh} onChange={e => setForm(f => ({ ...f, cenaKwh: e.target.value }))} />
          </FormGroup>
          <FormGroup label="Zaplacené zálohy (Kč)">
            <input style={S.input} type="number" placeholder="0" value={form.zalohy} onChange={e => setForm(f => ({ ...f, zalohy: e.target.value }))} />
          </FormGroup>
        </div>
        {form.spotreba && form.cenaKwh && (
          <div style={{ ...S.alert('success'), marginBottom: 16 }}>
            Celková cena: <strong style={S.mono}>{fmtKc(parseFloat(form.spotreba) * parseFloat(form.cenaKwh))}</strong>
            {' · '}
            {parseFloat(form.spotreba) * parseFloat(form.cenaKwh) - (parseFloat(form.zalohy) || 0) > 0
              ? <span>Doplatek: <strong style={{ color: '#ef9a9a', ...S.mono }}>{fmtKc(parseFloat(form.spotreba) * parseFloat(form.cenaKwh) - (parseFloat(form.zalohy) || 0))}</strong></span>
              : <span>Přeplatek: <strong style={{ color: '#a5d6a7', ...S.mono }}>{fmtKc(Math.abs(parseFloat(form.spotreba) * parseFloat(form.cenaKwh) - (parseFloat(form.zalohy) || 0)))}</strong></span>
            }
          </div>
        )}
        <button style={S.btn} onClick={ulozit}>Uložit vyúčtování</button>
      </div>

      {zaznamy.length > 0 && (
        <div style={S.card}>
          <h3 style={S.h3}>Vyúčtování — {prodejna}</h3>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Datum</th>
                <th style={S.th}>Typ</th>
                <th style={S.th}>Období</th>
                <th style={S.th}>Spotřeba</th>
                <th style={S.th}>Celkem</th>
                <th style={S.th}>Zálohy</th>
                <th style={S.th}>Výsledek</th>
                <th style={S.th}></th>
              </tr>
            </thead>
            <tbody>
              {zaznamy.map(v => (
                <tr key={v.id}>
                  <td style={{ ...S.td, ...S.mono }}>{v.datum}</td>
                  <td style={S.td}><span style={S.tag(v.typ === 'elektrina' ? 'green' : 'neutral')}>{v.typ}</span></td>
                  <td style={{ ...S.td, fontSize: 12, color: '#66bb6a' }}>{v.obdobiOd && v.obdobiDo ? `${v.obdobiOd} → ${v.obdobiDo}` : '–'}</td>
                  <td style={{ ...S.td, ...S.mono }}>{v.typ === 'plyn' ? fmtM3(v.spotreba) : fmtKwh(v.spotreba)}</td>
                  <td style={{ ...S.td, ...S.mono }}>{fmtKc(v.celkem)}</td>
                  <td style={{ ...S.td, ...S.mono }}>{fmtKc(v.zalohy)}</td>
                  <td style={S.td}>
                    {v.rozdil > 0
                      ? <span style={S.tag('red')}>doplatek {fmtKc(v.rozdil)}</span>
                      : <span style={S.tag('green')}>přeplatek {fmtKc(Math.abs(v.rozdil))}</span>}
                  </td>
                  <td style={S.td}><button style={S.btnDanger} onClick={() => smazat(v.id)}>✕</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── SCREEN: AI ANALÝZA ────────────────────────────────────────────────────────
function AIScreen({ odecty, vyuctovani }) {
  const [prodejnaIdx, setProdejnaIdx] = useState(0);
  const [analyza, setAnalyza] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const prodejna = PRODEJNY[prodejnaIdx];

  async function spustit() {
    const moje = odecty.filter(o => o.prodejna === prodejna);
    const mojV = vyuctovani.filter(v => v.prodejna === prodejna);

    if (moje.length === 0 && mojV.length === 0) {
      setMsg({ type: 'error', text: 'Pro tuto prodejnu nejsou žádná data.' });
      return;
    }

    setLoading(true);
    setMsg(null);
    setAnalyza('');

    const prompt = `Jsi analytik energetické spotřeby pro retailovou síť JTX (106 prodejen v ČR).

Prodejna: ${prodejna}

Odečty měřidel (${moje.length} záznamů):
${moje.slice(-10).map(o => `  ${o.datum}: T1=${o.t1}${o.t2 != null ? `, T2=${o.t2}` : ''}${o.plyn != null ? `, plyn=${o.plyn}` : ''}${o.spotrebaT1 != null ? `, spotřeba T1=${o.spotrebaT1.toFixed(1)} kWh` : ''}`).join('\n')}

Vyúčtování (${mojV.length} záznamů):
${mojV.slice(-5).map(v => `  ${v.datum}: ${v.typ}, spotřeba=${v.spotreba}, celkem=${v.celkem.toFixed(0)} Kč, ${v.rozdil > 0 ? `doplatek ${v.rozdil.toFixed(0)} Kč` : `přeplatek ${Math.abs(v.rozdil).toFixed(0)} Kč`}`).join('\n')}

Proveď analýzu v češtině:
1. Trend spotřeby (roste/klesá/stabilní)
2. Anomálie nebo podezřelé výkyvy
3. Porovnání záloh vs skutečné náklady
4. Doporučení pro optimalizaci
5. Celkové hodnocení efektivity

Buď konkrétní, stručný a praktický.`;

    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: 'Jsi expert na energetický management v retailu. Odpovídáš vždy česky, stručně a konkrétně.',
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Chyba API');
      }

      const text = data.content?.find(c => c.type === 'text')?.text || '';
      setAnalyza(text);
    } catch (err) {
      setMsg({ type: 'error', text: `Chyba: ${err.message}` });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div style={S.card}>
        <h2 style={S.h2}>AI analýza spotřeby</h2>
        <p style={{ color: '#66bb6a', fontSize: 13, marginBottom: 20, marginTop: 0 }}>
          AI analyzuje historii odečtů a vyúčtování vybrané prodejny a navrhne optimalizace.
        </p>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <FormGroup label="Prodejna">
              <select style={S.select} value={prodejnaIdx} onChange={e => setProdejnaIdx(Number(e.target.value))}>
                {PRODEJNY.map((p, i) => <option key={i} value={i}>{p}</option>)}
              </select>
            </FormGroup>
          </div>
          <div style={{ marginBottom: 14 }}>
            <button style={{ ...S.btn, opacity: loading ? 0.6 : 1 }} onClick={spustit} disabled={loading}>
              {loading ? '⏳ Analyzuji…' : '🔍 Spustit analýzu'}
            </button>
          </div>
        </div>
        {msg && <div style={S.alert(msg.type)}>{msg.text}</div>}
      </div>

      {analyza && (
        <div style={S.card}>
          <h3 style={S.h3}>Výsledek analýzy — {prodejna}</h3>
          <div style={{
            background: '#060e06',
            border: '1px solid #1a3a1a',
            borderRadius: 4,
            padding: 20,
            fontSize: 13,
            lineHeight: 1.7,
            color: '#c8e6c9',
            whiteSpace: 'pre-wrap',
            fontFamily: "'IBM Plex Sans', sans-serif",
          }}>
            {analyza}
          </div>
        </div>
      )}
    </div>
  );
}

// ── SCREEN: PŘEHLED ───────────────────────────────────────────────────────────
function PrehledScreen({ odecty, vyuctovani }) {
  const prodejnySOdecty = [...new Set(odecty.map(o => o.prodejna))];
  const celkemOdectu = odecty.length;
  const celkemVyuctovani = vyuctovani.length;
  const celkemDoplatku = vyuctovani.filter(v => v.rozdil > 0).reduce((s, v) => s + v.rozdil, 0);
  const celkemPreplatku = vyuctovani.filter(v => v.rozdil < 0).reduce((s, v) => s + Math.abs(v.rozdil), 0);

  const posledniOdecty = [...odecty].sort((a, b) => b.datum.localeCompare(a.datum)).slice(0, 10);

  return (
    <div>
      <div style={{ ...S.grid3, marginBottom: 20 }}>
        {[
          { label: 'Celkem odečtů', value: celkemOdectu, unit: '' },
          { label: 'Aktivní prodejny', value: prodejnySOdecty.length, unit: `/ ${PRODEJNY.length}` },
          { label: 'Celkem vyúčtování', value: celkemVyuctovani, unit: '' },
        ].map((s, i) => (
          <div key={i} style={{ ...S.card, marginBottom: 0, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#4caf50', fontFamily: "'IBM Plex Mono', monospace" }}>
              {s.value}<span style={{ fontSize: 14, color: '#2e7d32' }}>{s.unit}</span>
            </div>
            <div style={{ fontSize: 12, color: '#4caf50', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={S.grid2}>
        <div style={{ ...S.card, marginBottom: 0 }}>
          <h3 style={S.h3}>Celkové doplatky</h3>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#ef9a9a', fontFamily: "'IBM Plex Mono', monospace" }}>{fmtKc(celkemDoplatku)}</div>
        </div>
        <div style={{ ...S.card, marginBottom: 0 }}>
          <h3 style={S.h3}>Celkové přeplatky</h3>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#a5d6a7', fontFamily: "'IBM Plex Mono', monospace" }}>{fmtKc(celkemPreplatku)}</div>
        </div>
      </div>

      {posledniOdecty.length > 0 && (
        <div style={{ ...S.card, marginTop: 20 }}>
          <h3 style={S.h3}>Posledních 10 odečtů</h3>
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Datum</th>
                <th style={S.th}>Prodejna</th>
                <th style={S.th}>T1</th>
                <th style={S.th}>Spotřeba T1</th>
              </tr>
            </thead>
            <tbody>
              {posledniOdecty.map(o => (
                <tr key={o.id}>
                  <td style={{ ...S.td, ...S.mono }}>{o.datum}</td>
                  <td style={{ ...S.td, fontSize: 13 }}>{o.prodejna}</td>
                  <td style={{ ...S.td, ...S.mono }}>{fmt(o.t1)}</td>
                  <td style={S.td}>
                    {o.spotrebaT1 != null
                      ? <span style={S.tag('green')}>{fmtKwh(o.spotrebaT1)}</span>
                      : <span style={{ color: '#3a5c3a' }}>–</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {odecty.length === 0 && (
        <div style={{ ...S.card, textAlign: 'center', color: '#2e7d32', padding: 48 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>📊</div>
          <div>Zatím žádná data. Začněte zadáváním odečtů.</div>
        </div>
      )}
    </div>
  );
}

// ── SCREEN: KONFIGURACE ───────────────────────────────────────────────────────
function KonfiguraceScreen({ konfigurace, setKonfigurace }) {
  const [prodejnaIdx, setProdejnaIdx] = useState(0);
  const [msg, setMsg] = useState(null);

  const prodejna = PRODEJNY[prodejnaIdx];
  const kon = konfigurace[prodejna] || { maT2: false, maPlyn: false };

  function ulozit(changes) {
    const nova = { ...kon, ...changes };
    setKonfigurace(prev => ({ ...prev, [prodejna]: nova }));
    setMsg({ type: 'success', text: 'Konfigurace uložena.' });
    setTimeout(() => setMsg(null), 2000);
  }

  const nakonfigurovano = Object.values(konfigurace).filter(k => k.maT2 || k.maPlyn).length;

  return (
    <div>
      <div style={S.card}>
        <h2 style={S.h2}>Konfigurace měřidel</h2>
        <p style={{ color: '#66bb6a', fontSize: 13, marginBottom: 20, marginTop: 0 }}>
          Nastavte, která měřidla má daná prodejna. Prodejny s pouze T1 není třeba konfigurovat.
          <br /><strong style={{ color: '#4caf50' }}>{nakonfigurovano}</strong> prodejen má nestandardní konfiguraci.
        </p>
        <FormGroup label="Prodejna">
          <select style={S.select} value={prodejnaIdx} onChange={e => setProdejnaIdx(Number(e.target.value))}>
            {PRODEJNY.map((p, i) => (
              <option key={i} value={i}>
                {p}{(konfigurace[p]?.maT2 || konfigurace[p]?.maPlyn) ? ' ✦' : ''}
              </option>
            ))}
          </select>
        </FormGroup>
        {msg && <div style={S.alert(msg.type)}>{msg.text}</div>}
        <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: '#c8e6c9', fontSize: 14 }}>
            <input
              type="checkbox"
              checked={kon.maT2}
              onChange={e => ulozit({ maT2: e.target.checked })}
              style={{ accentColor: '#4caf50', width: 16, height: 16 }}
            />
            Elektřina T2 (dvojtarif)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: '#c8e6c9', fontSize: 14 }}>
            <input
              type="checkbox"
              checked={kon.maPlyn}
              onChange={e => ulozit({ maPlyn: e.target.checked })}
              style={{ accentColor: '#4caf50', width: 16, height: 16 }}
            />
            Plyn
          </label>
        </div>
      </div>
    </div>
  );
}

// ── HLAVNÍ APP ────────────────────────────────────────────────────────────────
const SCREENS = ['Přehled', 'Odečty', 'Vyúčtování', 'AI analýza', 'Konfigurace'];

export default function App() {
  const [screen, setScreen] = useState('Přehled');
  const [odecty, setOdecty] = useState(() => {
    try { return JSON.parse(localStorage.getItem('jtx_odecty') || '[]'); } catch { return []; }
  });
  const [vyuctovani, setVyuctovani] = useState(() => {
    try { return JSON.parse(localStorage.getItem('jtx_vyuctovani') || '[]'); } catch { return []; }
  });
  const [konfigurace, setKonfigurace] = useState(() => {
    try { return JSON.parse(localStorage.getItem('jtx_konfigurace') || '{}'); } catch { return {}; }
  });

  useEffect(() => { localStorage.setItem('jtx_odecty', JSON.stringify(odecty)); }, [odecty]);
  useEffect(() => { localStorage.setItem('jtx_vyuctovani', JSON.stringify(vyuctovani)); }, [vyuctovani]);
  useEffect(() => { localStorage.setItem('jtx_konfigurace', JSON.stringify(konfigurace)); }, [konfigurace]);

  return (
    <div style={S.app}>
      <header style={S.header}>
        <div style={S.logo}>⚡ EnergieJTX</div>
        <nav style={S.nav}>
          {SCREENS.map(s => (
            <button key={s} style={S.navBtn(screen === s)} onClick={() => setScreen(s)}>{s}</button>
          ))}
        </nav>
      </header>
      <main style={S.main}>
        {screen === 'Přehled' && <PrehledScreen odecty={odecty} vyuctovani={vyuctovani} />}
        {screen === 'Odečty' && <OdectyScreen odecty={odecty} setOdecty={setOdecty} konfigurace={konfigurace} />}
        {screen === 'Vyúčtování' && <VyuctovaniScreen vyuctovani={vyuctovani} setVyuctovani={setVyuctovani} />}
        {screen === 'AI analýza' && <AIScreen odecty={odecty} vyuctovani={vyuctovani} />}
        {screen === 'Konfigurace' && <KonfiguraceScreen konfigurace={konfigurace} setKonfigurace={setKonfigurace} />}
      </main>
    </div>
  );
}
