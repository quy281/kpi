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

/* ── §3: Dòng 1 — Gói sơn nước ── */
function SonNuoc() {
  const FLOW = `CEO chạy ads (FB/Google) → Lead vào CRM
→ AI chatbot auto-reply (gửi bảng giá, hỏi diện tích, hẹn KS)
→ Trợ lý xác nhận + hẹn lịch CEO đi KS
→ CEO khảo sát + báo giá tại chỗ (dùng app PDF)
→ Ký HĐ → Giao thầu phụ
→ CEO QC cuối → Thu tiền`;
  const PNL = `DT:              13,000,000 (9M gói + 4M upsell)
- Thầu phụ:      -9,100,000 (70%)
= LN gộp:        3,900,000 (30%)
- Ads CPL:        -100,000 (1 lead)
- Di chuyển:      -100,000
= LN ròng/đơn:   ~3,700,000`;
  return (
    <div className="plan-content">
      <div className="script-block">
        {FLOW}
        <CopyButton text={FLOW} />
      </div>

      <h4>Bảng giá gói cố định</h4>
      <div className="price-cards">
        <div className="price-card bronze">
          <div className="price-card-title">Gói 1PN (Studio)</div>
          <div className="price-card-area">~35m² · Thầu phụ 70%</div>
          <div className="price-card-price">6,500,000₫</div>
          <div className="price-card-profit">LN gộp: 1,950,000₫ (30%)</div>
        </div>
        <div className="price-card silver">
          <div className="price-card-title">Gói 2PN</div>
          <div className="price-card-area">~65m² · Thầu phụ 70%</div>
          <div className="price-card-price">9,000,000₫</div>
          <div className="price-card-profit">LN gộp: 2,700,000₫ (30%)</div>
        </div>
        <div className="price-card gold">
          <div className="price-card-title">Gói 3PN</div>
          <div className="price-card-area">~85m² · Thầu phụ 70%</div>
          <div className="price-card-price">10,500,000₫</div>
          <div className="price-card-profit">LN gộp: 3,150,000₫ (30%)</div>
        </div>
      </div>

      <h4>Upsell (margin 30%)</h4>
      <ul>
        <li>Chống thấm: <span className="highlight">+2-4M</span></li>
        <li>Sơn cửa gỗ: <span className="highlight">+1.5-3M</span></li>
        <li>Trám tường: <span className="highlight">+0.5-1M</span></li>
        <li>Sơn trần: <span className="highlight">+1-2M</span></li>
        <li>Tổng upsell TB: <span className="highlight">+4M/đơn</span> → LN thêm ~1.2M</li>
      </ul>

      <h4>P&L mỗi đơn TB (2PN + upsell)</h4>
      <div className="script-block">
        {PNL}
        <CopyButton text={PNL} />
      </div>
    </div>
  );
}

/* ── §3: Dòng 2 — Combo phòng ngủ ── */
function ComboPN() {
  const FLOW = `CEO ads (3D renders + video) → Lead vào
→ CEO/trợ lý tư vấn gói combo
→ CEO thiết kế/chọn mẫu → Gửi file CNC cho xưởng
→ Trợ lý connect xưởng lấy đồ về
→ Giao khoán thợ lắp đặt
→ CEO QC + bàn giao`;
  return (
    <div className="plan-content">
      <div className="script-block">
        {FLOW}
        <CopyButton text={FLOW} />
      </div>

      <h4>P&L mỗi combo (30M)</h4>
      <div className="finance-card">
        <div className="pl-row"><span className="label">Giá bán</span><span className="value">30,000,000₫</span></div>
        <div className="pl-row"><span className="label">NVL (gỗ + phụ kiện) 40%</span><span className="value red">-12,000,000₫</span></div>
        <div className="pl-row"><span className="label">Thợ khoán lắp đặt 17%</span><span className="value red">-5,000,000₫</span></div>
        <div className="pl-row"><span className="label">CNC xưởng gia công 10%</span><span className="value red">-3,000,000₫</span></div>
        <div className="pl-row"><span className="label">Vận chuyển 8%</span><span className="value red">-2,500,000₫</span></div>
        <div className="pl-row total"><span className="label">LN gộp (25%)</span><span className="value">7,500,000₫</span></div>
      </div>
    </div>
  );
}

/* ── §3: Dòng 3+4 — MODI ── */
function MODI() {
  return (
    <div className="plan-content">
      <h4>3 sub-categories trên modi.vn</h4>
      <table className="data-table">
        <thead><tr><th>Category</th><th>Sản phẩm</th><th>Margin</th><th>Phase</th></tr></thead>
        <tbody>
          <tr><td><strong>MODI Express</strong></td><td>Gỗ thừa CNC, thanh lý</td><td><span className="highlight">40-60%</span></td><td>Now</td></tr>
          <tr><td><strong>MODI Combo</strong></td><td>Combo phòng ngủ, phòng khách</td><td><span className="highlight">25%</span></td><td>Tuần 3+</td></tr>
          <tr><td><strong>MODI Commercial</strong></td><td>Bàn ghế VP, sofa (dropship)</td><td><span className="highlight">15-25%</span></td><td>Tuần 5+</td></tr>
        </tbody>
      </table>

      <h4>MODI Express — Gỗ thừa CNC</h4>
      <ul>
        <li>CEO gửi file CNC → xưởng cắt combo → gỗ thừa cắt quy cách</li>
        <li>Trợ lý connect xưởng lấy về → chụp ảnh → AI gen listing</li>
        <li>Bán: modi.vn, Shopee, Zalo groups thợ mộc</li>
        <li>Target: <span className="highlight">10M/tháng</span> (trợ lý chạy, CEO không tốn thời gian)</li>
      </ul>
    </div>
  );
}

/* ── §4: MODI Commercial — Gộp hay tách? ── */
function MODICommercial() {
  return (
    <div className="plan-content">
      <div className="rule-card" style={{ marginBottom: 12, borderColor: 'var(--green)' }}>
        <span className="rule-icon">✅</span>
        <span className="rule-text">Boardroom Analysis 5 chiều → Score 8.5/10 → <strong>PROCEED: Gộp vào MODI</strong></span>
      </div>
      <table className="data-table">
        <thead><tr><th>Chiều</th><th>Kết luận</th></tr></thead>
        <tbody>
          <tr><td>👔 CEO</td><td>MODI = umbrella brand, gộp tiết kiệm bandwidth</td></tr>
          <tr><td>💰 CFO</td><td>Tiết kiệm 5-8M/tháng (không cần domain/brand mới)</td></tr>
          <tr><td>📊 CMO</td><td>1 fanpage, 1 website, 1 ads account = đơn giản</td></tr>
          <tr><td>🔧 CTO</td><td>modi.vn thêm section, không cần build site mới</td></tr>
          <tr><td>⚖️ Judge</td><td>Chỉ tách khi DT MODI &gt; 200M/tháng</td></tr>
        </tbody>
      </table>

      <h4>Đồ thương mại — Chiến lược passive</h4>
      <ul>
        <li>Dropship/đặt hàng từ NCC khi có đơn → không tồn kho</li>
        <li>Cross-sell cho KH sơn/combo → &quot;Anh/chị cần bàn ghế không?&quot;</li>
        <li>Trưng bày trên modi.vn/commercial → KH hỏi thì bán</li>
        <li>AI chatbot auto tư vấn từ catalogue NCC</li>
      </ul>
    </div>
  );
}

const SECTIONS = [
  { id: 'son', icon: '🔴', title: 'Gói Sơn Nước Giá Rẻ', badge: 'Ưu tiên #1', content: SonNuoc },
  { id: 'combo', icon: '🔴', title: 'Combo Phòng Ngủ 25-35TR', badge: 'Ưu tiên #1', content: ComboPN },
  { id: 'modi', icon: '🟡', title: 'MODI (Gỗ thừa + Đồ rời)', badge: '3 categories', content: MODI },
  { id: 'commercial', icon: '🟢', title: 'MODI Commercial — Gộp ✅', badge: 'Score 8.5', content: MODICommercial },
];

export default function KinhDoanhView() {
  const [open, setOpen] = useState({ son: true });
  const [search, setSearch] = useState('');
  const toggle = (id) => setOpen(p => ({ ...p, [id]: !p[id] }));

  const filtered = SECTIONS.filter(s =>
    !search || s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fade-in">
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-number">5</div>
          <div className="stat-label">Dòng kinh doanh</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">30%</div>
          <div className="stat-label">Margin sơn</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">25%</div>
          <div className="stat-label">Margin combo</div>
        </div>
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tìm kiếm dòng kinh doanh..." />
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
