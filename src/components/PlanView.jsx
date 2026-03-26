import { useState } from 'react';

const SECTIONS = [
  {
    id: 'A',
    icon: '🆕',
    title: 'Phễu Gói Căn Hộ',
    badge: 'Deal Mồi',
    content: PlanA,
  },
  {
    id: 'B',
    icon: '⚡',
    title: 'Chiến Lược 72h Ra Đơn',
    badge: 'Sprint',
    content: PlanB,
  },
  {
    id: 'C',
    icon: '🔗',
    title: 'Kiến Trúc 2 Brand',
    badge: 'Strategy',
    content: PlanC,
  },
  {
    id: 'D',
    icon: '🌐',
    title: 'Website mkg.vn & thopho.com',
    badge: 'Tech',
    content: PlanD,
  },
  {
    id: 'E',
    icon: '📋',
    title: 'Checklist Trước Launch',
    badge: 'Action',
    content: PlanE,
  },
  {
    id: 'F',
    icon: '📊',
    title: 'Mô Hình Tài Chính',
    badge: 'Finance',
    content: PlanF,
  },
];

export default function PlanView() {
  const [open, setOpen] = useState({});
  const [search, setSearch] = useState('');

  const toggle = (id) => setOpen(p => ({ ...p, [id]: !p[id] }));

  const filtered = search
    ? SECTIONS.filter(s =>
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.badge.toLowerCase().includes(search.toLowerCase())
      )
    : SECTIONS;

  return (
    <div className="fade-in">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Tìm kiếm trong kế hoạch..."
        />
      </div>

      {filtered.map(s => (
        <div key={s.id} className="plan-section">
          <div className="plan-section-header" onClick={() => toggle(s.id)}>
            <div className="plan-section-title">
              <span>{s.icon}</span>
              <span>Module {s.id} — {s.title}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="plan-section-badge">{s.badge}</span>
              <span className={`group-chevron ${open[s.id] ? 'open' : ''}`}>▼</span>
            </div>
          </div>
          {open[s.id] && (
            <div className="plan-content">
              <s.content />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PlanA() {
  return (
    <>
      <h4>Bảng giá gói căn hộ — Deal mồi</h4>
      <p>Chung cư TP.HCM là thị trường cực lớn. Giá gói trọn cố định = loại bỏ nỗi sợ "bị chặt chém" → tỷ lệ chuyển đổi cao.</p>
      <p><strong>Lợi nhuận deal với đội thợ: <span className="highlight">15%/gói</span></strong></p>
      <p><strong>Upsell thực tế: <span className="highlight">Doanh thu upsell × 3</span> so với deal mồi</strong></p>

      <div className="price-cards">
        <div className="price-card bronze">
          <div className="price-card-title">1 Phòng Ngủ</div>
          <div className="price-card-area">&lt; 50m²</div>
          <div className="price-card-price">6,500,000₫</div>
          <div className="price-card-profit">LN mồi: 975k → kỳ vọng ~2.9M sau upsell</div>
        </div>
        <div className="price-card silver">
          <div className="price-card-title">2 Phòng Ngủ</div>
          <div className="price-card-area">&lt; 70m²</div>
          <div className="price-card-price">9,000,000₫</div>
          <div className="price-card-profit">LN mồi: 1.35M → kỳ vọng ~4M sau upsell</div>
        </div>
        <div className="price-card gold">
          <div className="price-card-title">3 Phòng Ngủ</div>
          <div className="price-card-area">&lt; 110m²</div>
          <div className="price-card-price">10,500,000₫</div>
          <div className="price-card-profit">LN mồi: 1.575M → kỳ vọng ~4.7M sau upsell</div>
        </div>
      </div>

      <h4>Gói mồi bao gồm</h4>
      <ul>
        <li>Sơn tường cơ bản + sơn trần</li>
      </ul>

      <h4>Upsell tự nhiên</h4>
      <ul>
        <li>Sơn tường chất lượng cao (Dulux/Nippon)</li>
        <li>Chống thấm toilet</li>
        <li>Sửa điện nước đi kèm</li>
        <li>Sơn lại đồ gỗ (tủ, cửa)</li>
        <li>Thay gạch bể nứt</li>
      </ul>

      <h4>Ví dụ P&L thực tế</h4>
      <p>Khách: Chị Lan, căn hộ 2PN 65m² — Tân Bình</p>
      <ul>
        <li>Deal mồi: <span className="highlight">9,000,000₫</span> → LN 1,350,000₫ (15%)</li>
        <li>Upsell: Chống thấm 3M + sơn cửa 2.5M + ổ điện 500k = <span className="highlight">6,000,000₫</span></li>
        <li>LN upsell (25%): 1,500,000₫</li>
        <li><strong>Tổng đơn: 15M → Tổng LN: <span className="highlight">2,850,000₫</span> (19%)</strong></li>
      </ul>
    </>
  );
}

function PlanB() {
  return (
    <>
      <h4>Mục tiêu: Có đơn đầu trong 2-3 ngày</h4>

      <h4>📅 Ngày 0 — Chuẩn bị (4 giờ)</h4>
      <ul>
        <li>Chụp ảnh bảng giá 3 gói (in đẹp hoặc Canva)</li>
        <li>Chuẩn bị 2 creative: 1 video + 1 ảnh bảng giá</li>
        <li>Set up Messenger auto-reply</li>
        <li>Chuẩn bị Google Sheet CRM</li>
        <li>Thống nhất với đội thợ: sẵn sàng nhận job ngay</li>
      </ul>

      <h4>📅 Ngày 1 — Launch Ads</h4>
      <ul>
        <li>8:00 — Launch Ad Set "Căn Hộ" (budget <span className="highlight">300k/ngày</span>)</li>
        <li>8:00 — Launch Ad Set "Sơn Nhà Phố" (budget <span className="highlight">200k/ngày</span>)</li>
        <li>Check sau 4h: Impressions, CTR, tin nhắn</li>
        <li>Reply mọi tin nhắn trong ≤15 phút</li>
        <li>Target: ≥3 tin nhắn thực chất</li>
      </ul>

      <h4>📅 Ngày 2 — Khảo sát + Chốt</h4>
      <ul>
        <li>CEO đi khảo sát 1-2 nhà (30 phút/nhà)</li>
        <li>Checklist: Đo tường + trần, check nứt/thấm, chụp ảnh</li>
        <li>Báo giá ngay tại chỗ</li>
        <li>Script chốt: "Gói 2PN nhà anh 9 triệu... cọc 30% = 2.7tr"</li>
        <li>Target: <span className="highlight">≥1 cọc trong ngày 2</span></li>
      </ul>

      <h4>📅 Ngày 3 — Optimize</h4>
      <ul>
        <li>Check CPL sau 48h: ≤150k → tăng budget</li>
        <li>Kill creative thua, scale creative thắng</li>
        <li>Đi thêm khảo sát nếu có</li>
      </ul>

      <h4>Kill Rules & Scale Triggers</h4>
      <table className="data-table">
        <thead>
          <tr>
            <th>Chỉ số</th>
            <th>Sau 24h</th>
            <th>Sau 48h</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>CPL</td><td>N/A</td><td>≤ 100k</td><td>🚀 Tăng ×2</td></tr>
          <tr><td>CPL</td><td>&gt;300k</td><td>&gt;200k</td><td>❌ Tắt, đổi creative</td></tr>
          <tr><td>CTR</td><td>&lt;1%</td><td>&lt;0.8%</td><td>🔄 Thay creative</td></tr>
          <tr><td>Tin nhắn</td><td>≥3</td><td>≥8</td><td>✅ Giữ nguyên</td></tr>
        </tbody>
      </table>
    </>
  );
}

function PlanC() {
  return (
    <>
      <h4>FADI — "Father Do It" — Brand Chuyên Gia</h4>
      <ul>
        <li>🎯 Target: Chủ nhà, chủ căn hộ muốn sơn/sửa</li>
        <li>💰 Deal: Gói căn hộ 6.5-10.5tr + HĐ lớn 50M+</li>
        <li>📣 Kênh: FB Ads, FADI Fanpage, Zalo OA</li>
        <li>🏷️ Tone: Chuyên gia, uy tín, CEO tự tư vấn</li>
        <li>📍 USP: "CEO đứng sau mỗi công trình"</li>
      </ul>

      <h4>ThoPho.com — "Thợ Phổ Biến — Gọi Là Có"</h4>
      <ul>
        <li>🎯 Target: Cần thợ nhanh, việc nhỏ</li>
        <li>💰 Deal: Ticket 200k-3tr (điện, nước, mộc...)</li>
        <li>📣 Kênh: SEO, Zalo, cross-sell từ FADI</li>
        <li>🏷️ Tone: Nhanh chóng, minh bạch, tin cậy</li>
        <li>📍 USP: Giá niêm yết, không mặc cả</li>
      </ul>

      <h4>Cross-sell Strategy</h4>
      <p><strong>FADI → ThoPho:</strong> Khách FADI cần việc nhỏ → book thopho.com, giá cố định.</p>
      <p><strong>ThoPho → FADI:</strong> Thợ thấy nhà cần sơn → báo CEO → convert lead FADI.</p>
      <p><strong>Website CTA:</strong> ThoPho header link FADI, FADI pinned post link ThoPho.</p>

      <h4>Routing Rules</h4>
      <table className="data-table">
        <thead>
          <tr><th>Kịch bản</th><th>Route</th></tr>
        </thead>
        <tbody>
          <tr><td>Sơn cả nhà (≥30m²)</td><td>→ FADI</td></tr>
          <tr><td>Thay bóng đèn, sửa ổ điện</td><td>→ ThoPho</td></tr>
          <tr><td>Chống thấm toilet đơn lẻ</td><td>→ ThoPho</td></tr>
          <tr><td>Sơn + chống thấm + sửa điện</td><td>→ FADI</td></tr>
          <tr><td>Khách ThoPho hỏi gói lớn</td><td>→ Chuyển FADI</td></tr>
        </tbody>
      </table>
    </>
  );
}

function PlanD() {
  return (
    <>
      <h4>Đánh giá hiện trạng mkg.vn</h4>
      <table className="data-table">
        <thead>
          <tr><th>Chỉ số</th><th>Hiện tại</th><th>Mục tiêu</th></tr>
        </thead>
        <tbody>
          <tr><td>Mobile Score</td><td style={{color: 'var(--red)'}}>67/100</td><td style={{color: 'var(--green)'}}>≥ 90</td></tr>
          <tr><td>Avg Position</td><td style={{color: 'var(--red)'}}>18.9</td><td style={{color: 'var(--green)'}}>≤ 5</td></tr>
          <tr><td>Impressions/7d</td><td style={{color: 'var(--red)'}}>28</td><td style={{color: 'var(--green)'}}>≥ 500</td></tr>
          <tr><td>Clicks/7d</td><td style={{color: 'var(--red)'}}>1</td><td style={{color: 'var(--green)'}}>≥ 20</td></tr>
        </tbody>
      </table>

      <h4>Cấu trúc mkg.vn mới</h4>
      <ul>
        <li><strong>/</strong> — Homepage + Schema LocalBusiness</li>
        <li><strong>/son-nha</strong> — Landing FADI + bảng giá + B/A Gallery</li>
        <li><strong>/sua-chua-nha</strong> — Landing ThoPho cross-link</li>
        <li><strong>/thiet-ke-noi-that</strong> — MKG core</li>
        <li><strong>/du-an</strong> — Portfolio SEO</li>
        <li><strong>/blog</strong> — SEO content (quan trọng nhất)</li>
      </ul>

      <h4>Cấu trúc thopho.com mới</h4>
      <ul>
        <li><strong>/</strong> — Hero + bảng dịch vụ + gói FADI highlight</li>
        <li><strong>/gia-ca</strong> — Bảng giá đầy đủ SEO</li>
        <li><strong>/dat-lich</strong> — Form + Zalo OA</li>
        <li><strong>/doi-tho</strong> — Trust factor</li>
      </ul>

      <h4>UX Fixes ưu tiên mkg.vn</h4>
      <ol>
        <li>Mobile First — redesign responsive (67→90+)</li>
        <li>Sticky CTA "Gọi ngay / Nhắn Zalo"</li>
        <li>Lazy load ảnh, compress, WebP</li>
        <li>Core Web Vitals: LCP &lt;2.5s, CLS &lt;0.1</li>
        <li>Schema Markup đầy đủ</li>
      </ol>

      <h4>Cross-Link Strategy</h4>
      <p><strong>mkg.vn → thopho.com:</strong> Footer, /sua-chua-nha embed, blog internal links</p>
      <p><strong>thopho.com → mkg.vn:</strong> Header banner gói căn hộ, footer, mỗi trang dịch vụ</p>
      <p><strong>Branding:</strong> Navy + Gold, logo FADI trên cả 2, cùng hotline</p>
    </>
  );
}

function PlanE() {
  return (
    <>
      <h4>📄 Tài liệu bán hàng</h4>
      <ul>
        <li>Template báo giá PDF/Word có logo FADI</li>
        <li>3 gói căn hộ thiết kế đẹp</li>
        <li>Phụ lục upsell + điều khoản bảo hành 1 năm</li>
        <li>QR code Zalo CEO</li>
        <li>Brochure A4/A5 Canva (in 100 tờ ~300k)</li>
        <li>Infographic bảng giá + bảng giá ThoPho</li>
      </ul>

      <h4>📸 Hình ảnh & Video cần có</h4>
      <ul>
        <li>5-10 ảnh before/after công trình</li>
        <li>3-5 ảnh thợ đang làm (đồng phục)</li>
        <li>1 ảnh CEO tại công trình</li>
        <li>Video hook 15-20s bảng giá</li>
        <li>Video CEO giới thiệu 30s</li>
        <li>Cover Facebook + Story template</li>
      </ul>

      <h4>📱 Setup Facebook/Meta</h4>
      <ul>
        <li>Tạo/verify Ad Account</li>
        <li>Cài Facebook Pixel lên thopho.com</li>
        <li>Messenger Auto-reply</li>
        <li>Kết nối Zalo OA</li>
        <li>Custom audience (SĐT khách cũ)</li>
      </ul>

      <h4>📋 CRM & Vận hành</h4>
      <ul>
        <li>Google Sheet CRM đầy đủ cột</li>
        <li>Zalo Group nội bộ CEO + Thợ</li>
        <li>Template Zalo gửi khách sau khảo sát</li>
        <li>Block lịch CEO khảo sát</li>
      </ul>

      <h4>👷 Setup đội thợ</h4>
      <ul>
        <li>Confirm 1-2 đội thợ sẵn sàng</li>
        <li>2-3 áo polo in "FADI"</li>
        <li>Test job nhỏ thực tế</li>
        <li>Thoả thuận thanh toán 70/30</li>
        <li>Danh sách thợ backup</li>
      </ul>
    </>
  );
}

function PlanF() {
  return (
    <>
      <h4>P&L Tháng 1 — Kịch bản Base (45%)</h4>
      <ul>
        <li>Budget ads: <span className="highlight">2,000,000₫</span></li>
        <li>CPL trung bình: 100k → 20 leads</li>
        <li>8 leads gói căn hộ → 5 khảo sát → 2 đơn</li>
        <li>12 leads sơn nhà phố</li>
      </ul>

      <p><strong>Gói căn hộ:</strong></p>
      <ul>
        <li>LN mồi (15%): 2,925,000₫</li>
        <li>Upsell ×3: doanh thu 8.7M → LN (25%): 2,194,000₫</li>
        <li><strong>Tổng LN gói căn hộ: <span className="highlight">~5,119,000₫</span></strong></li>
      </ul>

      <h4>Kịch bản kết quả</h4>
      <ul>
        <li>Best case (có HĐ lớn): <span className="highlight">40-45M</span></li>
        <li>Moderate: <span className="highlight">8-12M</span></li>
        <li>→ Hòa vốn ads (2M) ngay cả moderate ✅</li>
      </ul>

      <h4>Scale Model</h4>
      <table className="data-table">
        <thead>
          <tr><th>Tháng</th><th>Ads</th><th>Căn hộ</th><th>Nhà phố</th><th>LN</th></tr>
        </thead>
        <tbody>
          <tr><td>T1 Test</td><td>2M</td><td>2-4 đơn</td><td>0-1 HĐ</td><td>5-40M</td></tr>
          <tr><td>T2 ×3</td><td>6M</td><td>8-12 đơn</td><td>1-2 HĐ</td><td>25-80M</td></tr>
          <tr><td>T3 ×5</td><td>10M</td><td>15-20 đơn</td><td>2-3 HĐ</td><td>50-120M</td></tr>
          <tr><td>T4-T6</td><td>20M</td><td>40+ đơn</td><td>5-6 HĐ</td><td>150-200M</td></tr>
        </tbody>
      </table>

      <p><strong>Scale trigger:</strong> CPL ≤ 120k VÀ conversion ≥ 30% → nhân budget ×3</p>
    </>
  );
}
