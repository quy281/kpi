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

/* ── §5: Website Fix mkg.vn ── */
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

      <h4 style={{ marginTop: 16 }}>🟡 modi.vn — 4 vấn đề</h4>
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

/* ── Master Plan: Chiến lược tổng quan ── */
function ChienLuocTQ() {
  return (
    <div className="plan-content">
      <h4>Tầm nhìn 6 tuần</h4>
      <table className="data-table">
        <thead><tr><th>Giai đoạn</th><th>Tuần</th><th>Focus</th><th>Budget %</th></tr></thead>
        <tbody>
          <tr><td><strong>Foundation</strong></td><td>1-2</td><td>Setup hệ thống, tạo assets, test</td><td>20%</td></tr>
          <tr><td><strong>Growth</strong></td><td>3-4</td><td>Scale ads, content machine, optimize CPL</td><td>40%</td></tr>
          <tr><td><strong>Harvest</strong></td><td>5-6</td><td>Retarget, tối ưu ROAS, review</td><td>40%</td></tr>
        </tbody>
      </table>

      <h4>Đội ngũ 4 Agent AI</h4>
      <table className="data-table">
        <thead><tr><th>Vai trò</th><th>Agent</th><th>Nhiệm vụ</th></tr></thead>
        <tbody>
          <tr><td>👔 PM (Chủ)</td><td><span className="highlight">Planner_PM</span></td><td>Chiến lược, KPI, approve, tài chính</td></tr>
          <tr><td>📝 Content</td><td><span className="highlight">Content_Creator</span></td><td>Blog SEO, ad copy, kịch bản video</td></tr>
          <tr><td>📱 Social/Ads</td><td><span className="highlight">Social_Marketer</span></td><td>Post, chạy ads FB/TikTok, engage</td></tr>
          <tr><td>🤝 Sales</td><td><span className="highlight">Sales_Closer</span></td><td>CRM, chốt đơn, Zalo CSKH</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── Cross-channel Matrix ── */
function CrossChannel() {
  return (
    <div className="plan-content">
      <h4>Kênh × Mục tiêu × Budget</h4>
      <table className="data-table">
        <thead><tr><th>Kênh</th><th>Awareness</th><th>Lead</th><th>Close</th><th>Budget/th</th><th>CPL</th></tr></thead>
        <tbody>
          <tr><td><strong>FB Ads</strong></td><td>⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐</td><td><span className="highlight">9tr</span></td><td>≤ 35k</td></tr>
          <tr><td><strong>Google Ads</strong></td><td>⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td><td><span className="highlight">5tr</span></td><td>≤ 50k</td></tr>
          <tr><td><strong>TikTok</strong></td><td>⭐⭐⭐</td><td>⭐⭐</td><td>⭐</td><td><span className="highlight">3tr</span></td><td>≤ 30k</td></tr>
          <tr><td><strong>SEO/Blog</strong></td><td>⭐⭐⭐</td><td>⭐⭐</td><td>⭐</td><td>2tr</td><td>Free</td></tr>
          <tr><td><strong>Zalo OA</strong></td><td>⭐</td><td>⭐⭐</td><td>⭐⭐⭐</td><td>1tr</td><td>—</td></tr>
        </tbody>
      </table>
      <div className="rule-card" style={{ marginTop: 12 }}>
        <span className="rule-icon">💰</span>
        <span className="rule-text">Tổng budget</span>
        <span className="rule-value">20tr/tháng · CPL avg ≤ 40k</span>
      </div>

      <h4>Content × Kênh phân phối</h4>
      <table className="data-table">
        <thead><tr><th>Content</th><th>FB</th><th>Google</th><th>TikTok</th><th>Zalo</th><th>Blog</th></tr></thead>
        <tbody>
          <tr><td>Video tour combo</td><td>Ads</td><td>YouTube</td><td>✅</td><td>—</td><td>Embed</td></tr>
          <tr><td>Ảnh before/after</td><td>Carousel</td><td>—</td><td>Slide</td><td>✅</td><td>Featured</td></tr>
          <tr><td>Blog SEO</td><td>Share</td><td>SEO</td><td>Teaser</td><td>—</td><td>✅</td></tr>
          <tr><td>Testimonial</td><td>Proof Ad</td><td>—</td><td>Story</td><td>✅</td><td>Case</td></tr>
          <tr><td>Tips trang trí</td><td>Value</td><td>—</td><td>How-to</td><td>Tips</td><td>Pillar</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── Content Pillars ── */
function ContentPillars() {
  return (
    <div className="plan-content">
      <table className="data-table">
        <thead><tr><th>Pillar</th><th>%</th><th>Ví dụ</th><th>Kênh chính</th></tr></thead>
        <tbody>
          <tr><td><strong>Giải pháp combo</strong></td><td><span className="highlight">35%</span></td><td>Tour phòng ngủ, so sánh giá</td><td>FB Ads, TikTok</td></tr>
          <tr><td><strong>Tips hướng dẫn</strong></td><td>25%</td><td>Chọn nội thất, sơn nhà</td><td>Blog, TikTok</td></tr>
          <tr><td><strong>Before/After</strong></td><td>20%</td><td>Dự án thực, testimonial</td><td>FB, Zalo</td></tr>
          <tr><td><strong>Behind-scenes</strong></td><td>10%</td><td>Quy trình SX, team</td><td>TikTok, FB</td></tr>
          <tr><td><strong>Khuyến mãi</strong></td><td>10%</td><td>Deal, flash sale</td><td>FB Ads, Zalo</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── Dự báo tài chính marketing ── */
function DuBaoTC() {
  return (
    <div className="plan-content">
      <h4>Ngân sách 6 tuần (30tr)</h4>
      <div className="finance-card">
        <div className="pl-row"><span className="label">FB Ads</span><span className="value red">-13,500,000₫</span></div>
        <div className="pl-row"><span className="label">Google Ads</span><span className="value red">-7,500,000₫</span></div>
        <div className="pl-row"><span className="label">TikTok Ads</span><span className="value red">-4,500,000₫</span></div>
        <div className="pl-row"><span className="label">SEO tools + content</span><span className="value red">-3,000,000₫</span></div>
        <div className="pl-row"><span className="label">Zalo OA + misc</span><span className="value red">-1,500,000₫</span></div>
        <div className="pl-row total"><span className="label">TỔNG CHI MARKETING</span><span className="value">30,000,000₫</span></div>
      </div>

      <h4>3 kịch bản doanh thu</h4>
      <div className="price-cards">
        <div className="price-card gold">
          <div className="price-card-title">🟢 Lạc quan</div>
          <div className="price-card-area">250 leads · 30% chốt · 75 đơn</div>
          <div className="price-card-price">900,000,000₫</div>
          <div className="price-card-profit">ROI: 30x</div>
        </div>
        <div className="price-card silver">
          <div className="price-card-title">🟡 Trung bình</div>
          <div className="price-card-area">180 leads · 25% chốt · 45 đơn</div>
          <div className="price-card-price">540,000,000₫</div>
          <div className="price-card-profit">ROI: 18x</div>
        </div>
        <div className="price-card bronze">
          <div className="price-card-title">🔴 Thận trọng</div>
          <div className="price-card-area">120 leads · 20% chốt · 24 đơn</div>
          <div className="price-card-price">288,000,000₫</div>
          <div className="price-card-profit">ROI: 9.6x</div>
        </div>
      </div>

      <h4>Unit Economics</h4>
      <div className="finance-card">
        <div className="pl-row"><span className="label">CPL (Chi phí/lead)</span><span className="value">≤ 40k VND</span></div>
        <div className="pl-row"><span className="label">CPA (Chi phí/đơn)</span><span className="value">≤ 160k VND</span></div>
        <div className="pl-row"><span className="label">AOV (Giá trị đơn TB)</span><span className="value">12tr VND</span></div>
        <div className="pl-row"><span className="label">Gross Margin</span><span className="value green">25-30%</span></div>
        <div className="pl-row total"><span className="label">LTV/CAC ratio</span><span className="value">≥ 20x</span></div>
      </div>

      <h4>Breakeven theo sản phẩm</h4>
      <table className="data-table">
        <thead><tr><th></th><th>Combo phòng ngủ</th><th>Sơn nhà</th></tr></thead>
        <tbody>
          <tr><td>AOV</td><td>15tr</td><td>8tr</td></tr>
          <tr><td>Margin</td><td><span className="highlight">25% = 3.75tr</span></td><td><span className="highlight">30% = 2.4tr</span></td></tr>
          <tr><td>CPA target</td><td>160k</td><td>160k</td></tr>
          <tr><td>Breakeven sau</td><td><span style={{ color: 'var(--green)' }}>1 đơn</span></td><td><span style={{ color: 'var(--green)' }}>1 đơn</span></td></tr>
          <tr><td><strong>Profit/đơn</strong></td><td><strong>3.59tr</strong></td><td><strong>2.24tr</strong></td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── FB Ads Funnel ── */
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
        <thead><tr><th>Giai đoạn</th><th>Budget/th</th><th>CPL</th><th>Leads</th><th>Đơn ký</th></tr></thead>
        <tbody>
          <tr><td>Test (T1-2)</td><td>3-5M</td><td>&lt;150K</td><td>20-100</td><td>2-5</td></tr>
          <tr><td>Scale (T3-4)</td><td>8-15M</td><td>&lt;100K</td><td>80-150</td><td>5-10</td></tr>
          <tr><td>Optimize (T5-6)</td><td>10-20M</td><td>&lt;80K</td><td>125-250</td><td>8-15</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── Google Ads ── */
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
      <h4>Step-by-step cho người mới</h4>
      <ol>
        <li><strong>Bước 1:</strong> Tạo tài khoản ads.google.com → Expert Mode (30p)</li>
        <li><strong>Bước 2:</strong> Link GA4 → Admin → Google Ads Linking (15p)</li>
        <li><strong>Bước 3:</strong> Setup conversion tag form_submit (30p)</li>
        <li><strong>Bước 4:</strong> Tạo Search Campaign (1h)</li>
        <li><strong>Bước 5:</strong> Location TP.HCM, Budget 50-100K/ngày, CPC 3-5K (15p)</li>
        <li><strong>Bước 6:</strong> Monitor 15p/ngày, pause CPC &gt;10K không convert</li>
      </ol>
      <h4>Campaign Structure</h4>
      <div className="script-block">
        {CAMPAIGN}
        <CopyButton text={CAMPAIGN} />
      </div>
    </div>
  );
}

/* ── Milestones 6 tuần ── */
function Milestones() {
  const weeks = [
    { title: 'Tuần 1 — FOUNDATION', items: [
      'Landing pages live (Combo + Sơn nhà) — mobile-ready, load < 3s',
      'Zalo OA setup + auto replies',
      'Ad accounts ready (FB + Google + TikTok) — Pixel/tag installed',
      '2 bài blog SEO published (1500+ từ)',
      '10 ad copies viết xong (5 combo + 5 sơn)',
      '3 video TikTok quay (tour + before/after + tips)',
    ]},
    { title: 'Tuần 2 — LAUNCH', items: [
      'FB Ads campaign live (2 campaigns) — 300k/ngày',
      'TikTok Ads test cam — 100k/ngày',
      'Google Ads search live — 10 keywords, 200k/ngày',
      'First 20+ leads vào CRM',
      '2 bài blog thêm (Total: 4)',
      'Content process ổn định — 1 post/ngày FB + 2-3 TikTok/tuần',
    ]},
    { title: 'Tuần 3 — OPTIMIZE', items: [
      'A/B test results → kill losers — CPL giảm ≥ 20%',
      '50+ leads tổng cộng (CRM verified)',
      'First 5+ đơn chốt',
      'Retarget audience built (website visitors + engaged FB)',
      'Lead magnet launched — Free tư vấn/báo giá funnel',
    ]},
    { title: 'Tuần 4 — SCALE', items: [
      'Scale winning ads 2x budget — ROAS ≥ 3x',
      '100+ leads (CRM)',
      '8+ bài blog total → SEO traffic visible',
      'TikTok organic: ≥1 video > 10k views',
      'Zalo nurture pipeline: response < 1h, 50+ contacts',
    ]},
    { title: 'Tuần 5 — HARVEST', items: [
      '130+ leads — on track cho 150/tháng',
      'ROAS ≥ 3x on FB (Ads Manager verified)',
      'CPL ≤ 40k trung bình all channels',
      'Retarget campaign chạy — warm audience converting',
      'Content machine 100% tự vận hành',
    ]},
    { title: 'Tuần 6 — REVIEW & PLAN', items: [
      '150+ leads total — target achieved',
      'Full performance report by channel, content type',
      'Financial reconciliation — Actual vs forecast',
      'Plan tháng tiếp theo (based on data)',
      'Knowledge base updated — learnings documented',
    ]},
  ];
  return (
    <div className="plan-content">
      {weeks.map((w, i) => (
        <div key={i}>
          <h4>{w.title}</h4>
          <ul>
            {w.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ── AI Workflows ── */
function AIWorkflows() {
  return (
    <div className="plan-content">
      <table className="data-table">
        <thead><tr><th>Workflow</th><th>Tần suất</th><th>Agent chain</th></tr></thead>
        <tbody>
          <tr><td><span className="highlight">general_content_workflow</span></td><td>2x/tuần</td><td>Content → Review → Publish</td></tr>
          <tr><td><span className="highlight">social_media_workflow</span></td><td>Mỗi ngày</td><td>Social → Audit → Post</td></tr>
          <tr><td><span className="highlight">seo_content_workflow</span></td><td>2x/tuần</td><td>Planner → Content → Distribute</td></tr>
          <tr><td><span className="highlight">lead_magnet_funnel</span></td><td>Tuần 3</td><td>Planner → Content → Social</td></tr>
          <tr><td><span className="highlight">launch_campaign_workflow</span></td><td>Khi ra SP</td><td>Full 14-ngày pipeline</td></tr>
          <tr><td><span className="highlight">high_ticket_sales</span></td><td>Hot lead</td><td>Sales script + objection handling</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── SEO Content ── */
function SEOContent() {
  return (
    <div className="plan-content">
      <h4>Keywords ưu tiên</h4>
      <table className="data-table">
        <thead><tr><th>Keyword</th><th>Vol/th</th><th>Diff</th><th>Bài viết</th></tr></thead>
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
  { id: 'strategy', icon: '🎯', title: 'Chiến lược tổng quan', badge: '3 phase', content: ChienLuocTQ },
  { id: 'channel', icon: '📡', title: 'Cross-channel Matrix', badge: '5 kênh · 20tr/th', content: CrossChannel },
  { id: 'pillars', icon: '📦', title: 'Content Pillars', badge: '5 pillars', content: ContentPillars },
  { id: 'forecast', icon: '📊', title: 'Dự báo tài chính Marketing', badge: '3 kịch bản', content: DuBaoTC },
  { id: 'webfix', icon: '🌐', title: 'Website Fix (mkg.vn + modi.vn)', badge: '11 issues', content: WebsiteMKG },
  { id: 'fbads', icon: '📘', title: 'Facebook Ads — Phễu & Budget', badge: 'CEO exp', content: FBAds },
  { id: 'gads', icon: '🔍', title: 'Google Ads — Step-by-step', badge: 'Người mới', content: GoogleAds },
  { id: 'seo', icon: '📈', title: 'SEO — Content miễn phí', badge: 'Long-term', content: SEOContent },
  { id: 'milestones', icon: '🏁', title: 'Milestones 6 tuần', badge: '6 weeks', content: Milestones },
  { id: 'aiflow', icon: '🤖', title: 'AI Workflows tự động', badge: '6 flows', content: AIWorkflows },
];

export default function MarketingView() {
  const [open, setOpen] = useState({ strategy: true });
  const [search, setSearch] = useState('');
  const toggle = (id) => setOpen(p => ({ ...p, [id]: !p[id] }));

  const filtered = SECTIONS.filter(s =>
    !search || s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fade-in">
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-number">20tr</div>
          <div className="stat-label">Budget/tháng</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">≤40K</div>
          <div className="stat-label">CPL Target</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">150+</div>
          <div className="stat-label">Leads/tháng</div>
        </div>
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tìm kiếm marketing..." />
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
