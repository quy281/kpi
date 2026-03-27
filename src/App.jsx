import { useState } from 'react';
import TongQuanView from './components/TongQuanView.jsx';
import KinhDoanhView from './components/KinhDoanhView.jsx';
import MarketingView from './components/MarketingView.jsx';
import LoTrinhView from './components/LoTrinhView.jsx';
import TasksView from './components/TasksView.jsx';
import './styles/index.css';

const TABS = [
  { id: 'tongquan', icon: '📋', label: 'Tổng Quan' },
  { id: 'kinhdoanh', icon: '💰', label: 'Kinh Doanh' },
  { id: 'marketing', icon: '📣', label: 'Marketing' },
  { id: 'lotrinh', icon: '📅', label: 'Lộ Trình' },
  { id: 'tasks', icon: '✅', label: 'Tasks' },
];

export default function App() {
  const [tab, setTab] = useState(TABS[0].id);

  const renderTab = () => {
    switch (tab) {
      case 'tongquan': return <TongQuanView />;
      case 'kinhdoanh': return <KinhDoanhView />;
      case 'marketing': return <MarketingView />;
      case 'lotrinh': return <LoTrinhView />;
      case 'tasks': return <TasksView />;
      default: return null;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎯 MKG LEAN PIVOT v2.0</h1>
        <div className="subtitle">CEO + Trợ Lý + AI · Bắt đầu 28/03/2026 · 6 Tuần</div>
      </header>
      <main className="app-content">{renderTab()}</main>
      <nav className="bottom-nav">
        {TABS.map(t => (
          <button key={t.id} className={`nav-item ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}>
            <span className="nav-icon">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
