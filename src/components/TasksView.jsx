import { useState } from 'react';
import { useTaskStore, GROUPS } from '../hooks/useTaskStore.js';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
      {copied ? '✓ Đã copy' : '📋 Copy'}
    </button>
  );
}

/* ── Task Item ── */
function TaskItem({ task, onToggle, onComment, onDeleteComment }) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleSubmit = () => {
    if (!commentText.trim()) return;
    onComment(task.id, commentText);
    setCommentText('');
  };

  return (
    <>
      <div className="task-item">
        <div className={`task-checkbox ${task.checked ? 'checked' : ''}`}
          onClick={() => onToggle(task.id)} />
        <span className={`task-text ${task.checked ? 'done' : ''}`}
          onClick={() => onToggle(task.id)}>{task.text}</span>
        <button className="task-comment-btn" onClick={() => setShowComments(!showComments)}>
          💬
          {task.comments.length > 0 && (
            <span className="task-comment-count">{task.comments.length}</span>
          )}
        </button>
      </div>
      {showComments && (
        <div className="comment-panel">
          {task.comments.map((c, i) => (
            <div key={i} className="comment-item">
              <span className="comment-text">{c.text}</span>
              <span className="comment-time">{c.time}</span>
              <button className="comment-delete" onClick={() => onDeleteComment(task.id, i)}>✕</button>
            </div>
          ))}
          <div className="comment-input-row">
            <input className="comment-input" value={commentText}
              onChange={e => setCommentText(e.target.value)}
              placeholder="Thêm ghi chú..."
              onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
            <button className="comment-send" onClick={handleSubmit}>Gửi</button>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Finance Section — §9 ── */
function FinanceSection() {
  const PNL = `DOANH THU:
  Sơn nước: 8 đơn × 13M (gồm upsell)  = 104,000,000
  Combo PN: 2 đơn × 30M                 =  60,000,000
  MODI Express (gỗ thừa)                =  10,000,000
  ─────────────────────────────────────
  TỔNG DT:                               174,000,000

CHI PHÍ BIẾN ĐỔI:
  Thầu phụ sơn (70%):                   - 72,800,000
  NVL + thợ combo (75%):                - 45,000,000
  ─────────────────────────────────────
  TỔNG BIẾN ĐỔI:                        -117,800,000

LỢI NHUẬN GỘP:                           56,200,000 (32%)

CHI PHÍ CỐ ĐỊNH:
  VP/xưởng:                              -  8,000,000
  Trợ lý:                               -  8,000,000
  Nợ + gia đình:                         - 10,000,000
  Tools/hosting:                         -  2,000,000
  Ads (FB + Google):                     - 12,000,000
  ─────────────────────────────────────
  TỔNG CỐ ĐỊNH:                         - 40,000,000

= LỢI NHUẬN RÒNG:                        16,200,000/tháng ✅`;

  const BEP = `Chi cố định: 28M (không ads) + 12M (ads) = 40M
Margin gộp TB: 32%
Break-even = 40M ÷ 32% = 125M DT/tháng

→ 7 đơn sơn + 2 combo = ~130M → ĐÃ VƯỢT BREAK-EVEN ✅`;

  return (
    <div className="plan-section" style={{ marginTop: 20 }}>
      <div className="plan-section-header">
        <div className="plan-section-title"><span>📊</span><span>Tài chính & Break-even</span></div>
        <span className="plan-section-badge">P&L</span>
      </div>
      <div className="plan-content">
        <h4>P&L Monthly (Target tháng 2)</h4>
        <div className="finance-card">
          <div className="finance-title">📊 Doanh thu</div>
          <div className="pl-row"><span className="label">Sơn nước (8 đơn × 13M)</span><span className="value green">104,000,000₫</span></div>
          <div className="pl-row"><span className="label">Combo PN (2 đơn × 30M)</span><span className="value green">60,000,000₫</span></div>
          <div className="pl-row"><span className="label">MODI Express</span><span className="value green">10,000,000₫</span></div>
          <div className="pl-row total"><span className="label">TỔNG DT</span><span className="value">174,000,000₫</span></div>
        </div>

        <div className="finance-card">
          <div className="finance-title">💸 Chi phí biến đổi</div>
          <div className="pl-row"><span className="label">Thầu phụ sơn (70%)</span><span className="value red">-72,800,000₫</span></div>
          <div className="pl-row"><span className="label">NVL + thợ combo (75%)</span><span className="value red">-45,000,000₫</span></div>
          <div className="pl-row total"><span className="label">LN GỘP (32%)</span><span className="value">56,200,000₫</span></div>
        </div>

        <div className="finance-card">
          <div className="finance-title">🏢 Chi phí cố định</div>
          <div className="pl-row"><span className="label">VP/xưởng</span><span className="value red">-8,000,000₫</span></div>
          <div className="pl-row"><span className="label">Trợ lý</span><span className="value red">-8,000,000₫</span></div>
          <div className="pl-row"><span className="label">Nợ + gia đình</span><span className="value red">-10,000,000₫</span></div>
          <div className="pl-row"><span className="label">Tools/hosting</span><span className="value red">-2,000,000₫</span></div>
          <div className="pl-row"><span className="label">Ads (FB + Google)</span><span className="value red">-12,000,000₫</span></div>
          <div className="pl-row total"><span className="label">LỢI NHUẬN RÒNG</span><span className="value">16,200,000₫/tháng ✅</span></div>
        </div>

        <h4>Break-even</h4>
        <div className="script-block">
          {BEP}
          <CopyButton text={BEP} />
        </div>
      </div>
    </div>
  );
}

/* ── Main TasksView ── */
export default function TasksView() {
  const { tasks, allTasks, toggleTask, addComment, deleteComment, stats, groupStats, filter, setFilter } = useTaskStore();
  const [openGroups, setOpenGroups] = useState({ action: true });
  const [showFinance, setShowFinance] = useState(false);
  const toggleGroup = (id) => setOpenGroups(p => ({ ...p, [id]: !p[id] }));

  const groupOrder = ['action', 'sprint1', 'sprint2', 'sprint3', 'sprint0', 'creative'];

  return (
    <div className="fade-in">
      {/* Overall progress */}
      <div className="progress-header">
        <span className="progress-label">Tiến độ tổng</span>
        <span className="progress-value">{stats.done}/{stats.total} ({stats.percent}%)</span>
      </div>
      <div className="progress-bar"><div className="progress-fill" style={{ width: `${stats.percent}%` }} /></div>

      {/* Stats */}
      <div className="stats-row" style={{ marginTop: 16 }}>
        <div className="stat-card">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">Tổng tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ WebkitTextFillColor: 'var(--green)' }}>{stats.done}</div>
          <div className="stat-label">Hoàn thành</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ WebkitTextFillColor: 'var(--red)' }}>{stats.total - stats.done}</div>
          <div className="stat-label">Còn lại</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-bar">
        {[
          { id: 'all', label: 'Tất cả' },
          { id: 'pending', label: 'Chưa xong' },
          { id: 'done', label: 'Đã xong' },
        ].map(f => (
          <button key={f.id} className={`filter-btn ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}>{f.label}</button>
        ))}
      </div>

      {/* Task Groups */}
      {groupOrder.map(gid => {
        const group = GROUPS[gid];
        const gs = groupStats(gid);
        const groupTasks = tasks.filter(t => t.group === gid);
        if (groupTasks.length === 0) return null;

        return (
          <div key={gid} className="group-card">
            <div className="group-header" onClick={() => toggleGroup(gid)}>
              <div className="group-title">
                <span>{group.icon}</span><span>{group.label}</span>
              </div>
              <div className="group-right">
                <span className="group-count">{gs.done}/{gs.total}</span>
                <span className={`group-chevron ${openGroups[gid] ? 'open' : ''}`}>▼</span>
              </div>
            </div>
            <div className="group-progress">
              <div className="progress-bar"><div className="progress-fill" style={{ width: `${gs.percent}%` }} /></div>
            </div>
            {openGroups[gid] && (
              <div className="group-items">
                {groupTasks.map(t => (
                  <TaskItem key={t.id} task={t} onToggle={toggleTask}
                    onComment={addComment} onDeleteComment={deleteComment} />
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* Finance toggle */}
      <div className="plan-section" style={{ marginTop: 16 }}>
        <div className="plan-section-header" onClick={() => setShowFinance(!showFinance)}>
          <div className="plan-section-title"><span>📊</span><span>Tài chính & Break-even</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="plan-section-badge">P&L</span>
            <span className={`group-chevron ${showFinance ? 'open' : ''}`}>▼</span>
          </div>
        </div>
        {showFinance && <FinanceSectionContent />}
      </div>
    </div>
  );
}

/* inline finance content to avoid double section wrapper */
function FinanceSectionContent() {
  const BEP = `Chi cố định: 28M (không ads) + 12M (ads) = 40M
Margin gộp TB: 32%
Break-even = 40M ÷ 32% = 125M DT/tháng

→ 7 đơn sơn + 2 combo = ~130M → ĐÃ VƯỢT BREAK-EVEN ✅`;
  return (
    <div className="plan-content">
      <div className="finance-card">
        <div className="finance-title">📊 Doanh thu Target</div>
        <div className="pl-row"><span className="label">Sơn nước (8 đơn × 13M)</span><span className="value green">104,000,000₫</span></div>
        <div className="pl-row"><span className="label">Combo PN (2 đơn × 30M)</span><span className="value green">60,000,000₫</span></div>
        <div className="pl-row"><span className="label">MODI Express</span><span className="value green">10,000,000₫</span></div>
        <div className="pl-row total"><span className="label">TỔNG DT</span><span className="value">174,000,000₫</span></div>
      </div>

      <div className="finance-card">
        <div className="finance-title">💸 Chi phí biến đổi</div>
        <div className="pl-row"><span className="label">Thầu phụ sơn (70%)</span><span className="value red">-72,800,000₫</span></div>
        <div className="pl-row"><span className="label">NVL + thợ combo (75%)</span><span className="value red">-45,000,000₫</span></div>
        <div className="pl-row total"><span className="label">LN GỘP (32%)</span><span className="value">56,200,000₫</span></div>
      </div>

      <div className="finance-card">
        <div className="finance-title">🏢 Chi phí cố định</div>
        <div className="pl-row"><span className="label">VP/xưởng</span><span className="value red">-8,000,000₫</span></div>
        <div className="pl-row"><span className="label">Trợ lý</span><span className="value red">-8,000,000₫</span></div>
        <div className="pl-row"><span className="label">Nợ + gia đình</span><span className="value red">-10,000,000₫</span></div>
        <div className="pl-row"><span className="label">Tools/hosting</span><span className="value red">-2,000,000₫</span></div>
        <div className="pl-row"><span className="label">Ads (FB + Google)</span><span className="value red">-12,000,000₫</span></div>
        <div className="pl-row total"><span className="label">LỢI NHUẬN RÒNG</span><span className="value">16,200,000₫/tháng ✅</span></div>
      </div>

      <h4>Break-even Analysis</h4>
      <div className="script-block">
        {BEP}
        <CopyButton text={BEP} />
      </div>
    </div>
  );
}
