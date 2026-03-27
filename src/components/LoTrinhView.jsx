import { useState } from 'react';

/* ── §7: Lộ trình 6 tuần ── */
function Tuan1() {
  return (
    <div className="plan-content">
      <h4>🔴 TUẦN 1 (28/03 → 03/04): SETUP + FIX + CODE</h4>
      <table className="data-table">
        <thead><tr><th>Ngày</th><th>CEO</th><th>Trợ lý</th></tr></thead>
        <tbody>
          <tr><td><strong>T6 28/03</strong></td><td>Fix mkg.vn: GA4, Zalo OA, SĐT, FB Pixel</td><td>Sắp xếp portfolio ảnh B/A</td></tr>
          <tr><td><strong>T7 29/03</strong></td><td>Test + polish Lead CRM mobile</td><td>Học dùng CRM: nhập lead, reply</td></tr>
          <tr><td><strong>CN 30/03</strong></td><td>Test Quotation PDF + Chatbot</td><td>Soạn bảng giá gói sơn print</td></tr>
          <tr><td><strong>T2 31/03</strong></td><td>Setup FB Ads: 2-3 ad sets</td><td>Liên hệ 2 thầu phụ sơn</td></tr>
          <tr><td><strong>T3 01/04</strong></td><td>Quay 3 video B/A cho ads</td><td>Đăng 3 bài FB (CEO duyệt)</td></tr>
          <tr><td><strong>T4 02/04</strong></td><td>Monitor ads, A/B test</td><td>Reply leads, CRM update</td></tr>
          <tr><td><strong>T5 03/04</strong></td><td>Optimize ads, scale winners</td><td>Follow-up, hẹn lịch KS</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function Tuan2() {
  return (
    <div className="plan-content">
      <h4>🔴 TUẦN 2 (04/04 → 10/04): ĐƠN ĐẦU TIÊN</h4>
      <table className="data-table">
        <thead><tr><th>Ngày</th><th>CEO</th><th>Trợ lý</th></tr></thead>
        <tbody>
          <tr><td><strong>T6</strong></td><td>Khảo sát KH 1-2</td><td>Chuẩn bị hồ sơ KS, in báo giá</td></tr>
          <tr><td><strong>T7</strong></td><td>Code: Landing sơn optimize</td><td>Content: 5 bài FB + 2 TikTok</td></tr>
          <tr><td><strong>CN</strong></td><td>Ký HĐ đơn 1 nếu có</td><td>Scan HĐ, CRM, follow leads</td></tr>
          <tr><td><strong>T2</strong></td><td>Giao việc thầu phụ đơn 1</td><td>Hẹn lịch KS tiếp</td></tr>
          <tr><td><strong>T3</strong></td><td>Quay video thi công đơn 1</td><td>Đăng 5 bài, edit video</td></tr>
          <tr><td><strong>T4</strong></td><td>Monitor ads + optimize</td><td>Báo cáo tuần 2</td></tr>
          <tr><td><strong>T5</strong></td><td>QC đơn 1, thu tiền, review</td><td>Học: Meta Blueprint 1-2</td></tr>
        </tbody>
      </table>
      <div className="rule-card" style={{ marginTop: 12 }}>
        <span className="rule-icon">🎯</span>
        <span className="rule-text">Target T2</span>
        <span className="rule-value">3-5 leads, 1-2 đơn, DT 10-20M</span>
      </div>
    </div>
  );
}

function Tuan34() {
  return (
    <div className="plan-content">
      <h4>🟡 TUẦN 3 (11/04 → 17/04): SCALE ADS</h4>
      <table className="data-table">
        <thead><tr><th>CEO</th><th>Trợ lý</th></tr></thead>
        <tbody>
          <tr><td>Tăng budget FB Ads (5-8M)</td><td>Reply lead &lt;15p, theo CRM</td></tr>
          <tr><td>Setup Google Ads campaign</td><td>Học Google Ads cơ bản</td></tr>
          <tr><td>Ads combo phòng ngủ</td><td>Chụp ảnh combo portfolio</td></tr>
          <tr><td>Code: Project Tracker v1</td><td>Test tracker, nhập data</td></tr>
          <tr><td>Khảo sát + ký 3-5 đơn sơn</td><td>Hẹn lịch, chuẩn bị hồ sơ</td></tr>
        </tbody>
      </table>

      <h4 style={{ marginTop: 16 }}>🟡 TUẦN 4 (18/04 → 24/04): COMBO + OPTIMIZE</h4>
      <table className="data-table">
        <thead><tr><th>CEO</th><th>Trợ lý</th></tr></thead>
        <tbody>
          <tr><td>Optimize CPL (target &lt;100K)</td><td>Content 15+ bài/tuần</td></tr>
          <tr><td>Ký 2-3 đơn combo phòng ngủ</td><td>Connect xưởng CNC lấy đồ</td></tr>
          <tr><td>Code: Content Calendar</td><td>Theo lịch đăng bài</td></tr>
          <tr><td>Optimize Google Ads</td><td>Báo cáo tuần: leads, DT</td></tr>
          <tr><td>Review thầu phụ quality</td><td>Chụp B/A đơn hoàn thành</td></tr>
        </tbody>
      </table>
      <div className="rule-card" style={{ marginTop: 12 }}>
        <span className="rule-icon">🎯</span>
        <span className="rule-text">Target T4</span>
        <span className="rule-value">8-10 đơn sơn, 2 combo, ~80-120M</span>
      </div>
    </div>
  );
}

function Tuan56() {
  return (
    <div className="plan-content">
      <h4>🟢 TUẦN 5 (25/04 → 01/05): MODI LAUNCH</h4>
      <table className="data-table">
        <thead><tr><th>CEO</th><th>Trợ lý</th></tr></thead>
        <tbody>
          <tr><td>MODI Express: setup listing</td><td>Chụp ảnh gỗ thừa, connect xưởng</td></tr>
          <tr><td>Code: MODI listing tool (AI gen)</td><td>Upload 10-20 listing</td></tr>
          <tr><td>Scale ads sơn 10-15M</td><td>Tự viết caption (CEO duyệt 70%)</td></tr>
          <tr><td>Đánh giá thuê KS giám sát</td><td>Cold contact B2B</td></tr>
        </tbody>
      </table>

      <h4 style={{ marginTop: 16 }}>🟢 TUẦN 6 (02/05 → 08/05): OPTIMIZE + STABILIZE</h4>
      <table className="data-table">
        <thead><tr><th>CEO</th><th>Trợ lý</th></tr></thead>
        <tbody>
          <tr><td>Optimize budget FB vs Google</td><td>Tự manage content pipeline</td></tr>
          <tr><td>MODI Commercial: catalogue</td><td>MODI orders: nhận đơn, giao</td></tr>
          <tr><td>Code: Invoice + analytics</td><td>Xuất hóa đơn, track công nợ</td></tr>
          <tr><td>Review: KPI, P&L, next plan</td><td>Báo cáo tháng đầu tiên</td></tr>
          <tr><td>Đào tạo trợ lý nâng cao</td><td>Tự suggest creative ads</td></tr>
        </tbody>
      </table>
      <div className="rule-card" style={{ marginTop: 12 }}>
        <span className="rule-icon">🎯</span>
        <span className="rule-text">Target T6</span>
        <span className="rule-value">12-15 đơn sơn, 3-5 combo, ~150-200M</span>
      </div>
    </div>
  );
}

/* ── §10: Đào tạo trợ lý ── */
function DaoTao() {
  return (
    <div className="plan-content">
      <h4>Tuần 1-2: FOLLOW — Làm theo chỉ đạo</h4>
      <table className="data-table">
        <thead><tr><th>Kỹ năng</th><th>Cách học</th><th>KPI</th></tr></thead>
        <tbody>
          <tr><td>Reply lead (script)</td><td>CEO cho template, trợ lý copy</td><td>100% reply &lt;30p</td></tr>
          <tr><td>Đăng bài FB</td><td>CEO cho hình + caption</td><td>10 bài/tuần</td></tr>
          <tr><td>CRM update</td><td>CEO demo 30p</td><td>Updated daily</td></tr>
          <tr><td>Hẹn lịch</td><td>CEO cho list KH</td><td>3 lịch/tuần</td></tr>
        </tbody>
      </table>

      <h4>Tuần 3-4: COPY — Tự làm theo mẫu</h4>
      <table className="data-table">
        <thead><tr><th>Kỹ năng</th><th>Level up</th><th>KPI</th></tr></thead>
        <tbody>
          <tr><td>Tự viết caption</td><td>CEO duyệt 70% → pass</td><td>15 bài/tuần</td></tr>
          <tr><td>Follow-up sequence</td><td>CEO cho flow, tự thực hiện</td><td>Reply &lt;15p</td></tr>
          <tr><td>Edit video (CapCut)</td><td>CEO cho template, tự edit</td><td>3 video/tuần</td></tr>
          <tr><td>Báo cáo tuần</td><td>Template Excel, tự điền</td><td>T6 nộp</td></tr>
        </tbody>
      </table>

      <h4>Tuần 5-6: ADAPT — Bắt đầu tự nghĩ</h4>
      <table className="data-table">
        <thead><tr><th>Kỹ năng</th><th>Level up</th><th>KPI</th></tr></thead>
        <tbody>
          <tr><td>Tự viết caption</td><td>CEO chỉ duyệt</td><td>20 bài/tuần</td></tr>
          <tr><td>Suggest creative ads</td><td>CEO chọn hoặc sửa</td><td>2-3 ideas/tuần</td></tr>
          <tr><td>MODI vận hành</td><td>Tự nhận đơn, connect, giao</td><td>10 đơn/tuần</td></tr>
          <tr><td>Cold contact B2B</td><td>CEO cho script, tự call</td><td>5 calls/tuần</td></tr>
        </tbody>
      </table>

      <h4>Học 30p/ngày</h4>
      <table className="data-table">
        <thead><tr><th>Tuần</th><th>Chủ đề</th><th>Nguồn</th><th>Bài tập</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Caption FB bán hàng</td><td>YouTube VN</td><td>Viết 5 caption</td></tr>
          <tr><td>2</td><td>Facebook Ads cơ bản</td><td>Meta Blueprint</td><td>Hiểu CPM, CPL, CTR</td></tr>
          <tr><td>3</td><td>TikTok content</td><td>TikTok Academy</td><td>Quay 2 video</td></tr>
          <tr><td>4</td><td>Canva design</td><td>Canva tutorials</td><td>3 banner</td></tr>
          <tr><td>5</td><td>AI tools (ChatGPT)</td><td>CEO demo</td><td>Gen 10 content</td></tr>
          <tr><td>6</td><td>Data analysis</td><td>CEO coaching</td><td>Report tuần</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── §11: Rủi ro ── */
function RuiRo() {
  return (
    <div className="plan-content">
      <h4>Rủi ro & Contingency</h4>
      <table className="data-table">
        <thead><tr><th>Rủi ro</th><th>XS</th><th>Phòng ngừa</th><th>Plan B</th></tr></thead>
        <tbody>
          <tr><td>CEO burnout</td><td>Cao</td><td>AI tools, max 14h/ngày</td><td>Thuê part-time</td></tr>
          <tr><td>Thầu phụ kém</td><td>TB</td><td>Test 1 job, 2-3 backup</td><td>Blacklist + thay</td></tr>
          <tr><td>CPL &gt;200K</td><td>TB</td><td>A/B test, kill nhanh</td><td>Pivot audience</td></tr>
          <tr><td>Trợ lý chậm</td><td>Thấp</td><td>Template hóa, AI assist</td><td>Coaching 30p/ngày</td></tr>
          <tr><td>Xưởng CNC trễ</td><td>TB</td><td>Có 2 xưởng backup</td><td>CEO push trực tiếp</td></tr>
          <tr><td>Google Ads fail</td><td>TB</td><td>Budget nhỏ test</td><td>Focus 100% FB</td></tr>
        </tbody>
      </table>
    </div>
  );
}

const SECTIONS = [
  { id: 'w1', icon: '🔴', title: 'Tuần 1 — Setup + Fix + Code', badge: '28/03-03/04', content: Tuan1 },
  { id: 'w2', icon: '🔴', title: 'Tuần 2 — Đơn đầu tiên', badge: '04/04-10/04', content: Tuan2 },
  { id: 'w34', icon: '🟡', title: 'Tuần 3-4 — Scale + Combo', badge: '11/04-24/04', content: Tuan34 },
  { id: 'w56', icon: '🟢', title: 'Tuần 5-6 — MODI + Stabilize', badge: '25/04-08/05', content: Tuan56 },
  { id: 'training', icon: '📖', title: 'Đào tạo trợ lý (6 tuần)', badge: 'Follow→Copy→Adapt', content: DaoTao },
  { id: 'risk', icon: '⚠️', title: 'Rủi ro & Contingency', badge: '6 items', content: RuiRo },
];

export default function LoTrinhView() {
  const [open, setOpen] = useState({ w1: true });
  const [search, setSearch] = useState('');
  const toggle = (id) => setOpen(p => ({ ...p, [id]: !p[id] }));

  const filtered = SECTIONS.filter(s =>
    !search || s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fade-in">
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-number">6</div>
          <div className="stat-label">Tuần thực chiến</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">150M+</div>
          <div className="stat-label">DT mục tiêu T6</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3</div>
          <div className="stat-label">Phase đào tạo</div>
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
