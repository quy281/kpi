import { useState } from 'react';

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

/* ── §5: Website Fix ── */
function WebsiteMKG() {
  return (
    <div className="plan-content">
      <h4>🔴 mkg.vn — 7 vấn đề</h4>
      <table className="data-table">
        <thead><tr><th>#</th><th>Vấn đề</th><th>Mức</th><th>Cách fix</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>GA4 ID = placeholder</td><td>🔴</td><td>Tạo GA4 property → paste ID thật</td></tr>
          <tr><td>2</td><td>Zalo OA ID = placeholder</td><td>🔴</td><td>Paste Zalo OA ID thật</td></tr>
          <tr><td>3</td><td>Hotline giả</td><td>🔴</td><td>Đổi SĐT thật</td></tr>
          <tr><td>4</td><td>Chưa có Facebook Pixel</td><td>🔴</td><td>Tạo Pixel → paste vào head</td></tr>
          <tr><td>5</td><td>SPA render → crawl kém</td><td>🟡</td><td>Pre-render/SSR cho SEO</td></tr>
          <tr><td>6</td><td>Landing sơn cần optimize</td><td>🟡</td><td>Form 3 fields, CTA sticky</td></tr>
          <tr><td>7</td><td>Chưa có Google Ads tag</td><td>🟡</td><td>Setup khi chạy Google Ads</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function WebsiteMODI() {
  return (
    <div className="plan-content">
      <h4>🟡 modi.vn — 4 vấn đề</h4>
      <table className="data-table">
        <thead><tr><th>#</th><th>Vấn đề</th><th>Mức</th><th>Cách fix</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>SPA empty shell → crawl trống</td><td>🔴</td><td>Pre-render hoặc SSR</td></tr>
          <tr><td>2</td><td>Chưa có section đồ thương mại</td><td>🟡</td><td>Thêm MODI Commercial</td></tr>
          <tr><td>3</td><td>Chưa có form/chat widget</td><td>🟡</td><td>Thêm Zalo widget + lead form</td></tr>
          <tr><td>4</td><td>Chưa có blog/SEO content</td><td>🟡</td><td>Viết bài organic traffic</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── §6: Chiến lược quảng cáo ── */
function FBAds() {
  const FUNNEL = `[AD] Hình before/after + "Sơn nhà trọn gói từ 6.5 triệu"
  ↓
[CLICK] Landing: mkg.vn/son-nha
  ↓
[FORM] 3 fields: SĐT, Quận/Huyện, Loại nhà (1PN/2PN/3PN)
  ↓
[AUTO] n8n webhook → Telegram notify CEO + CRM
  ↓
[FOLLOW] Trợ lý gọi xác nhận <2h
  ↓
[CLOSE] CEO khảo sát + ký HĐ tại chỗ`;
  return (
    <div className="plan-content">
      <h4>Phễu chính — Sơn nước</h4>
      <div className="script-block">
        {FUNNEL}
        <CopyButton text={FUNNEL} />
      </div>

      <h4>Budget plan</h4>
      <table className="data-table">
        <thead><tr><th>Giai đoạn</th><th>Budget/tháng</th><th>CPL target</th><th>Leads</th><th>Đơn ký</th></tr></thead>
        <tbody>
          <tr><td>Test (T1-2)</td><td>3-5M</td><td>&lt;150K</td><td>20-100</td><td>2-5</td></tr>
          <tr><td>Scale (T3-4)</td><td>8-15M</td><td>&lt;100K</td><td>80-150</td><td>5-10</td></tr>
          <tr><td>Optimize (T5-6)</td><td>10-20M</td><td>&lt;80K</td><td>125-250</td><td>8-15</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function GoogleAds() {
  const CAMPAIGN = `Campaign: "Sơn nhà TP.HCM"
├── Ad Group 1: "Sơn nhà giá rẻ"
│   ├── Keywords: "sơn nhà giá rẻ", "giá sơn nhà 2024", "sơn nhà trọn gói"
│   └── Ad text: "Sơn Nhà Trọn Gói Từ 6.5 Triệu | Bảo Hành 1 Năm"
├── Ad Group 2: "Thợ sơn nhà"
│   ├── Keywords: "thợ sơn nhà", "tìm thợ sơn nhà", "dịch vụ sơn nhà"
│   └── Ad text: "Đội Ngũ Thợ Sơn Chuyên Nghiệp | Thi Công Nhanh 1-2 Ngày"
└── Ad Group 3: "Sơn chung cư"
    ├── Keywords: "sơn chung cư", "sơn lại căn hộ", "sơn nhà quận 7"
    └── Ad text: "Sơn Lại Căn Hộ Chung Cư | Sạch Sẽ, Cam Kết Không Bẩn Đồ"`;
  return (
    <div className="plan-content">
      <h4>Hướng dẫn step-by-step</h4>
      <ol>
        <li><strong>Bước 1:</strong> Tạo tài khoản ads.google.com → Expert Mode (30p)</li>
        <li><strong>Bước 2:</strong> Link GA4 → Admin → Google Ads Linking (15p)</li>
        <li><strong>Bước 3:</strong> Setup conversion tag form_submit (30p)</li>
        <li><strong>Bước 4:</strong> Tạo Search Campaign (1h)</li>
        <li><strong>Bước 5:</strong> Location TP.HCM, Budget 50-100K/ngày, Manual CPC 3-5K (15p)</li>
        <li><strong>Bước 6:</strong> Monitor 15p/ngày, pause CPC &gt;10K không convert</li>
      </ol>

      <h4>Campaign Structure</h4>
      <div className="script-block">
        {CAMPAIGN}
        <CopyButton text={CAMPAIGN} />
      </div>

      <h4>Negative Keywords</h4>
      <div className="rule-card"><span className="rule-icon">🚫</span><span className="rule-text">"tuyển dụng", "học", "miễn phí"</span></div>
    </div>
  );
}

function SEOContent() {
  return (
    <div className="plan-content">
      <h4>Keywords ưu tiên</h4>
      <table className="data-table">
        <thead><tr><th>Keyword</th><th>Vol/tháng</th><th>Diff</th><th>Bài viết</th></tr></thead>
        <tbody>
          <tr><td>giá sơn nhà</td><td>5,400</td><td>Thấp</td><td>Bảng giá sơn nhà 2026 từ A-Z</td></tr>
          <tr><td>sơn nhà trọn gói</td><td>3,200</td><td>TB</td><td>Sơn nhà trọn gói giá bao nhiêu?</td></tr>
          <tr><td>combo phòng ngủ</td><td>1,800</td><td>Thấp</td><td>Top 10 mẫu combo phòng ngủ đẹp</td></tr>
          <tr><td>thợ sơn nhà</td><td>2,400</td><td>Thấp</td><td>Tìm thợ sơn nhà uy tín TP.HCM</td></tr>
          <tr><td>nội thất module</td><td>1,200</td><td>Thấp</td><td>Nội thất module là gì?</td></tr>
        </tbody>
      </table>
      <h4>Quy trình viết SEO</h4>
      <ul>
        <li>CEO + AI gen outline → CEO review 5p → AI viết draft → trợ lý đăng</li>
        <li><span className="highlight">3-5 bài/tuần</span> → mkg.vn/blog</li>
        <li>Dùng <span className="highlight">D:\seo</span> (SEO Hub) để viết bài</li>
      </ul>
    </div>
  );
}

const SECTIONS = [
  { id: 'mgkvn', icon: '🌐', title: 'mkg.vn — Fix Issues', badge: '7 issues', content: WebsiteMKG },
  { id: 'modivn', icon: '🛍️', title: 'modi.vn — Fix Issues', badge: '4 issues', content: WebsiteMODI },
  { id: 'fbads', icon: '📘', title: 'Facebook Ads — Phễu & Budget', badge: 'CEO exp', content: FBAds },
  { id: 'gads', icon: '🔍', title: 'Google Ads — Step-by-step', badge: 'Người mới', content: GoogleAds },
  { id: 'seo', icon: '📈', title: 'SEO — Content miễn phí', badge: 'Long-term', content: SEOContent },
];

export default function MarketingView() {
  const [open, setOpen] = useState({ mgkvn: true });
  const [search, setSearch] = useState('');
  const toggle = (id) => setOpen(p => ({ ...p, [id]: !p[id] }));

  const filtered = SECTIONS.filter(s =>
    !search || s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fade-in">
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-number">11</div>
          <div className="stat-label">Issues cần fix</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">&lt;100K</div>
          <div className="stat-label">CPL Target</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5</div>
          <div className="stat-label">SEO Keywords</div>
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
