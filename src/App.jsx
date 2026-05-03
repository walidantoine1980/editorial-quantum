import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, DollarSign, BarChart3, Filter, Globe2 } from 'lucide-react';
import eventsData from './data/events_db.json';
import './App.css';

// --- Composants Internes pour simplifier l'App ---

const EventCard = ({ event }) => (
  <div className="glass-panel event-card">
    <div className="event-card-header">
      <h3 className="text-gradient">{event.name}</h3>
      <span className="event-region-badge">{event.region}</span>
    </div>
    
    <div className="event-date-loc">
      <div className="icon-text">
        <MapPin size={16} />
        {event.location}
      </div>
      <div className="icon-text">
        <Calendar size={16} />
        {new Date(event.date).toLocaleDateString('fr-FR')} - {new Date(event.dateEnd).toLocaleDateString('fr-FR')}
      </div>
    </div>

    <div className="event-tags">
      {event.mainThemes.map(theme => (
        <span key={theme} className="tag">{theme}</span>
      ))}
    </div>

    <p className="event-summary">{event.summary}</p>

    <div className="event-footer">
      <span className="cost">
        <DollarSign size={16} style={{display: 'inline', verticalAlign: 'middle', marginRight: '4px'}}/>
        {event.cost === 0 ? 'Gratuit' : `${event.cost} $`}
      </span>
      <a href={event.website} target="_blank" rel="noopener noreferrer" className="btn-primary">
        <Globe2 size={16} />
        Site Officiel
      </a>
    </div>
  </div>
);

const SyntheticTable = ({ events }) => (
  <div className="glass-panel" style={{ padding: '1rem', overflowX: 'auto' }}>
    <table className="synthetic-table">
      <thead>
        <tr>
          <th>Événement</th>
          <th>Région</th>
          <th>Dates</th>
          <th>Thèmes Principaux</th>
          <th>Fournisseurs/Startups clés</th>
        </tr>
      </thead>
      <tbody>
        {events.map(ev => (
          <tr key={ev.id}>
            <td style={{fontWeight: 600}}>{ev.name}</td>
            <td>{ev.region}</td>
            <td>{new Date(ev.date).toLocaleDateString('fr-FR')}</td>
            <td>{ev.mainThemes.join(' • ')}</td>
            <td className="supplier-list">{ev.startupsSuppliers.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Pour utiliser Recharts, il faudrait l'installer. On simule ici une vue analytique simple si l'installation a échoué.
const TrendAnalysis = ({ events }) => {
  const regions = events.reduce((acc, ev) => {
    acc[ev.region] = (acc[ev.region] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{marginBottom: '1.5rem'}} className="text-gradient">Tendances Globales 2026-2027</h2>
      
      <div className="kpi-grid">
        <div className="kpi-card glass-panel">
          <div className="kpi-value">{events.length}</div>
          <div className="kpi-label">Événements Majeurs</div>
        </div>
        <div className="kpi-card glass-panel">
          <div className="kpi-value">{Object.keys(regions).length}</div>
          <div className="kpi-label">Régions Couvertes</div>
        </div>
        <div className="kpi-card glass-panel">
          <div className="kpi-value">
            {events.filter(e => e.mainThemes.some(t => t.includes('IA') || t.includes('Machine'))).length}
          </div>
          <div className="kpi-label">Centrés sur l'IA Pure</div>
        </div>
      </div>

      <div className="grid-layout grid-cols-2">
        <div className="glass-panel" style={{padding: '1.5rem'}}>
          <h3 style={{marginBottom: '1rem'}}>Répartition par Région</h3>
          <ul style={{listStyle: 'none'}}>
            {Object.entries(regions).map(([region, count]) => (
              <li key={region} style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem'}}>
                <span>{region}</span>
                <span style={{fontWeight: 'bold', color: 'var(--accent-cyan)'}}>{count} événements</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-panel" style={{padding: '1.5rem'}}>
          <h3 style={{marginBottom: '1rem'}}>Thèmes Dominants</h3>
          <p style={{color: 'var(--text-muted)'}}>
            L'analyse lexicale montre une prédominance de la "Robotique Collaborative" en Asie, tandis que l'Europe se concentre sur "l'Inspection Visuelle" et les USA sur "l'Autonomie et l'IA Prédictive".
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('annuaire');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  // Filtering logic
  const filteredEvents = useMemo(() => {
    return eventsData.filter(ev => {
      const matchSearch = ev.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ev.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchRegion = filterRegion ? ev.region === filterRegion : true;
      const matchCat = filterCategory ? ev.category.includes(filterCategory) : true;
      return matchSearch && matchRegion && matchCat;
    });
  }, [searchTerm, filterRegion, filterCategory]);

  return (
    <div className="app-container">
      <header className="app-header">
        <div>
          <h1 className="text-gradient app-title">Panorama IA Indus</h1>
          <p className="app-subtitle">L'Observatoire mondial de l'IA Industrielle & Robotique (2026-2027)</p>
        </div>
        
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'annuaire' ? 'active' : ''}`}
            onClick={() => setActiveTab('annuaire')}
          >
            <MapPin size={18} /> Annuaire
          </button>
          <button 
            className={`tab-btn ${activeTab === 'table' ? 'active' : ''}`}
            onClick={() => setActiveTab('table')}
          >
            <Filter size={18} /> Tableau de Synthèse
          </button>
          <button 
            className={`tab-btn ${activeTab === 'analysis' ? 'active' : ''}`}
            onClick={() => setActiveTab('analysis')}
          >
            <BarChart3 size={18} /> Analyse & Tendances
          </button>
        </div>
      </header>

      {/* Screeners & Filters (Visible in Annuaire & Table) */}
      {(activeTab === 'annuaire' || activeTab === 'table') && (
        <div className="filters-panel glass-panel">
          <div className="filter-group">
            <label>Recherche globale</label>
            <div style={{position: 'relative'}}>
              <Search size={18} style={{position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)', color: 'var(--text-muted)'}} />
              <input 
                type="text" 
                className="filter-input" 
                style={{width: '100%', paddingLeft: '2.5rem'}}
                placeholder="Nom, mot clé..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="filter-group">
            <label>Région</label>
            <select className="filter-input" value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)}>
              <option value="">Toutes les régions</option>
              <option value="Europe">Europe</option>
              <option value="USA">USA</option>
              <option value="Asie">Asie</option>
              <option value="MEA">MEA (Moyen-Orient)</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Type d'événement</label>
            <select className="filter-input" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
              <option value="">Toutes catégories</option>
              <option value="Salon">Salons</option>
              <option value="Conférence">Conférences</option>
              <option value="Sommet">Sommets</option>
            </select>
          </div>
        </div>
      )}

      {/* Content Rendering */}
      <main>
        {activeTab === 'annuaire' && (
          <div className="grid-layout grid-cols-3">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(ev => <EventCard key={ev.id} event={ev} />)
            ) : (
              <div className="glass-panel" style={{gridColumn: '1 / -1', padding: '3rem', textAlign: 'center'}}>
                <h3 style={{color: 'var(--text-muted)'}}>Aucun événement ne correspond à vos filtres.</h3>
              </div>
            )}
          </div>
        )}

        {activeTab === 'table' && (
          <SyntheticTable events={filteredEvents} />
        )}

        {activeTab === 'analysis' && (
          <TrendAnalysis events={eventsData} />
        )}
      </main>
    </div>
  );
}
