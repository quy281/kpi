import { useState } from 'react';

/* ── §1 Tổng Quan ── */
function BoiCanh() {
  return (
    <div className="plan-content">
      <h4>Chuyển đổi mô hình</h4>
      <ul>
        <li><strong>Từ:</strong> Mô hình 7 người, chi cố định <span className="highlight">166.4M/tháng</span>, break-even 415M</li>
        <li><strong>Sang:</strong> CEO + 1 trợ lý + AI Agent, chi cố định <span className="highlight">~28M</span>, break-even <span className="highlight">~102M</span></li>
        <li><strong>Timeline:</strong> 12 tuần → nén <span className="highlight">6 tuần</span> (50%)</li>
        <li><strong>Trợ lý:</strong> KHÔNG vận hành CNC — chỉ connect xưởng lấy đồ</li>
      </ul>
    </div>
  );
}

function MucTieu() {
  return (
    <div className="plan-content">
      <table className="data-table">
        <thead>
          <tr><th>Chỉ số</th><th>Target</th></tr>
        </thead>
        <tbody>
          <tr><td>Đơn sơn nước</td><td><span className="highlight">8-12 đơn/tháng</span></td></tr>
          <tr><td>Combo phòng ngủ</td><td><span className="highlight">2-3 đơn/tháng</span></td></tr>
          <tr><td>MODI listing</td><td><span className="highlight">10-20 sản phẩm</span></td></tr>
          <tr><td>DT tổng</td><td><span className="highlight">100-180M/tháng</span></td></tr>
          <tr><td>CPL Facebook</td><td><span className="highlight">&lt;100K</span> (lý tưởng 30-40K)</td></tr>
          <tr><td>Break-even</td><td><span style={{ color: 'var(--green)' }}>✅ Vượt 102M</span></td></tr>
        </tbody>
      </table>
      <h4>Dữ liệu đầu vào</h4>
      <ul>
        <li>FB Ads kinh nghiệm: CPL lý tưởng 30-40K, thực tế &lt;150K, 500đ/đơn ký</li>
        <li>Gỗ thừa: full 20M/tháng, lean (trợ lý connect) ~10M/tháng</li>
        <li>Google Ads: CEO chưa có kinh nghiệm → cần hướng dẫn step-by-step</li>
      </ul>
    </div>
  );
}

/* ── §2 Phân nhóm công việc ── */
function CEORole() {
  return (
    <div className="plan-content">
      <table className="data-table">
        <thead><tr><th>Nhóm</th><th>Việc cụ thể</th><th>%</th><th>KPI</th></tr></thead>
        <tbody>
          <tr><td>🎯 Ads & Marketing</td><td>Setup/optimize FB Ads, creative, Google Ads</td><td>35%</td><td>CPL &lt;100K</td></tr>
          <tr><td>🤝 Sales & Close</td><td>Khảo sát KH, ký HĐ, báo giá tại chỗ</td><td>25%</td><td>3-5 đơn/tuần</td></tr>
          <tr><td>💻 Code Tools</td><td>Build marketing tools, CRM, automation</td><td>25%</td><td>2-3 tool/sprint</td></tr>
          <tr><td>📊 Strategy</td><td>Review data, điều chỉnh ads, phân tích KPI</td><td>10%</td><td>Weekly review</td></tr>
          <tr><td>✅ QC & Coach</td><td>Review thầu phụ, coaching trợ lý 15p/ngày</td><td>5%</td><td>Trợ lý level up</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function TroLyRole() {
  return (
    <div className="plan-content">
      <table className="data-table">
        <thead><tr><th>Nhóm</th><th>Việc cụ thể</th><th>%</th><th>KPI</th></tr></thead>
        <tbody>
          <tr><td>📱 Lead Follow-up</td><td>Reply Zalo/Messenger &lt;15p, CRM update</td><td>30%</td><td>100% reply &lt;15p</td></tr>
          <tr><td>📝 Content</td><td>Đăng bài FB/TikTok, edit video template</td><td>25%</td><td>15-20 bài/tuần</td></tr>
          <tr><td>🚚 Logistics</td><td>Connect xưởng CNC, giao hàng MODI</td><td>20%</td><td>Giao đúng hẹn 100%</td></tr>
          <tr><td>📂 Admin</td><td>Scan HĐ, lưu file, báo cáo tuần</td><td>15%</td><td>Báo cáo đúng T6</td></tr>
          <tr><td>📖 Học</td><td>Marketing cơ bản, tools, ads (30p/ngày)</td><td>10%</td><td>Quiz pass 70%+</td></tr>
        </tbody>
      </table>
      <div className="rule-card" style={{ marginTop: 12 }}>
        <span className="rule-icon">⛔</span>
        <span className="rule-text">Trợ lý KHÔNG LÀM: Vận hành CNC, setup ads, code, QC thi công, quyết định giá</span>
      </div>
    </div>
  );
}

const SECTIONS = [
  { id: 'boicanh', icon: '🆕', title: 'Bối cảnh & Chuyển đổi', badge: 'Overview', content: BoiCanh },
  { id: 'muctieu', icon: '🎯', title: 'Mục tiêu 6 tuần', badge: '6 KPIs', content: MucTieu },
  { id: 'ceo', icon: '👔', title: 'CEO — Việc TẠO GIÁ TRỊ', badge: '5 nhóm', content: CEORole },
  { id: 'troly', icon: '👩‍💼', title: 'Trợ lý — Connect + Follow up', badge: '5 nhóm', content: TroLyRole },
];

export default function TongQuanView() {
  const [open, setOpen] = useState({ boicanh: true });
  const [search, setSearch] = useState('');
  const toggle = (id) => setOpen(p => ({ ...p, [id]: !p[id] }));

  const filtered = SECTIONS.filter(s =>
    !search || s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fade-in">
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-number">~28M</div>
          <div className="stat-label">Chi cố định/tháng</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">102M</div>
          <div className="stat-label">Break-even</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">6</div>
          <div className="stat-label">Tuần thực chiến</div>
        </div>
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tìm kiếm..." />
      </div>

      {filtered.map(s => (
        <div key={s.id} className="plan-section">
          <div className="plan-section-header" onClick={() => toggle(s.id)}>
            <div className="plan-section-title">
              <span>{s.icon}</span><span>{s.title}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="plan-section-badge">{s.badge}</span>
              <span className={`group-chevron ${open[s.id] ? 'open' : ''}`}>▼</span>
            </div>
          </div>
          {open[s.id] && <s.content />}
        </div>
      ))}
    </div>
  );
}
