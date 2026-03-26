import { useState } from 'react';
import PlanView from './components/PlanView';
import TaskTracker from './components/TaskTracker';
import FinanceView from './components/FinanceView';
import ReferenceView from './components/ReferenceView';
import './styles/index.css';

const TABS = [
  { id: 'plan', icon: '📋', label: 'Kế hoạch' },
  { id: 'tasks', icon: '✅', label: 'Tasks' },
  { id: 'finance', icon: '📊', label: 'Tài chính' },
  { id: 'reference', icon: '📌', label: 'Tham khảo' },
];

export default function App() {
  const [tab, setTab] = useState('tasks');

  const renderTab = () => {
    switch (tab) {
      case 'plan': return <PlanView />;
      case 'tasks': return <TaskTracker />;
      case 'finance': return <FinanceView />;
      case 'reference': return <ReferenceView />;
      default: return null;
    }
  };

  const currentTab = TABS.find(t => t.id === tab);

  return (
    <div className="app">
      <header className="app-header">
        <h1>FADI × ThoPho</h1>
        <div className="subtitle">Kế hoạch 4 tuần — 28/03 → 25/04/2026</div>
      </header>

      <main className="app-content">
        {renderTab()}
      </main>

      <nav className="bottom-nav">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`nav-item ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            <span className="nav-icon">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
