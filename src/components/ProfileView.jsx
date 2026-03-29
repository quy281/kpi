import { useState } from 'react';

/* ── Bước 1: Thu thập hình ảnh ── */
function Buoc1() {
  return (
    <div className="plan-content">
      <h4>CEO cung cấp:</h4>
      <ul>
        <li>3-5 link profile/fanpage đối thủ hoặc KOL trong ngành</li>
        <li>Chỉ rõ: "Lấy style này", "Ảnh dạng này đẹp"</li>
      </ul>

      <h4>🧑‍💼 Trợ Lý làm:</h4>
      <table className="data-table">
        <thead><tr><th>#</th><th>Hành động</th><th>Chi tiết</th><th>⏱</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Mở từng profile/fanpage</td><td>Scroll toàn bộ timeline/album</td><td>5p/page</td></tr>
          <tr><td>2</td><td>Screenshot/Save ảnh đẹp</td><td>Ưu tiên: rõ nét, bố cục tốt, nhiều like</td><td>10p/page</td></tr>
          <tr><td>3</td><td>Tải xuống folder riêng</td><td>Đặt tên: <code>01_reference_[tên page]</code></td><td>5p</td></tr>
          <tr><td>4</td><td>Ghi chú</td><td>Ảnh nào lấy từ đâu, style gì</td><td>5p</td></tr>
        </tbody>
      </table>

      <h4>Tiêu chí chọn ảnh:</h4>
      <div style={{ display: 'grid', gap: 4, fontSize: 12.5 }}>
        <span>✅ Ảnh công trình nội thất/sơn đẹp, sáng</span>
        <span>✅ Ảnh before/after rõ ràng</span>
        <span>✅ Ảnh lifestyle (đi công trình, đo đạc, meeting KH)</span>
        <span>✅ Ảnh feedback/chat screenshot</span>
        <span>❌ Ảnh mờ, ảnh có watermark quá to</span>
        <span>❌ Ảnh có mặt người quá rõ (khó sửa)</span>
      </div>

      <div className="rule-card" style={{ marginTop: 12 }}>
        <span className="rule-icon">📸</span>
        <span className="rule-text">Số lượng cần</span>
        <span className="rule-value">Profile: 30-40 | Fanpage: 40-50</span>
      </div>
    </div>
  );
}

/* ── Bước 2: Phân loại hình ── */
function Buoc2() {
  return (
    <div className="plan-content">
      <h4>🧑‍💼 Trợ Lý: Tạo folder + phân loại</h4>
      <div className="script-block">
{`📁 Profile_Trust/
├── 📁 01_reference/      ← Hình gốc tải về
├── 📁 02_ai_edited/      ← Hình đã sửa bằng AI
├── 📁 03_anh_that/       ← Ảnh thật CEO/công trình MKG
├── 📁 04_ready_to_post/  ← Bộ hình final + caption
└── 📄 content_plan.xlsx  ← Lịch đăng bài`}
      </div>

      <h4>🧑‍💼 Trợ Lý: Phân loại ảnh reference</h4>
      <table className="data-table">
        <thead><tr><th>Nhóm</th><th>Tỷ lệ</th><th>Ví dụ</th><th>Mục đích</th></tr></thead>
        <tbody>
          <tr><td><strong>A. Portfolio</strong></td><td>40%</td><td>Phòng đã sơn, nội thất, B/A</td><td>Chứng minh năng lực</td></tr>
          <tr><td><strong>B. Behind-the-scenes</strong></td><td>20%</td><td>Đi công trình, đo đạc, team</td><td>"Tôi làm thật"</td></tr>
          <tr><td><strong>C. Feedback</strong></td><td>20%</td><td>Chat KH khen, review, bàn giao</td><td>Social proof</td></tr>
          <tr><td><strong>D. Lifestyle</strong></td><td>15%</td><td>CEO meeting, coffee</td><td>Con người đằng sau brand</td></tr>
          <tr><td><strong>E. Infographic</strong></td><td>5%</td><td>Bảng giá, tips, so sánh</td><td>Giá trị miễn phí</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── Bước 3: AI sửa hình ── */
function Buoc3() {
  return (
    <div className="plan-content">
      <h4>🧑‍💼 Trợ Lý: AI edit hình (~3-5p/ảnh)</h4>
      <table className="data-table">
        <thead><tr><th>Thao tác</th><th>AI tool</th></tr></thead>
        <tbody>
          <tr><td>Đổi màu áo thợ → polo MKG</td><td>Photoshop / Canva</td></tr>
          <tr><td>Thêm logo MKG lên áo</td><td>Canva overlay</td></tr>
          <tr><td>Xóa text/watermark cũ</td><td>Canva Magic Eraser</td></tr>
          <tr><td>Đổi màu tường</td><td>Photoshop Gen Fill</td></tr>
          <tr><td>Thêm watermark MKG</td><td>Canva (10% opacity)</td></tr>
          <tr><td>Tạo B/A từ 1 ảnh</td><td>ChatGPT DALL-E</td></tr>
        </tbody>
      </table>

      <h4>🧑‍💼 Trợ Lý: QC trước khi dùng</h4>
      <div style={{ display: 'grid', gap: 4, fontSize: 12.5 }}>
        <span>☐ Trông tự nhiên, không bị "AI look" rõ</span>
        <span>☐ Logo/branding MKG đúng vị trí</span>
        <span>☐ Không còn dấu vết ảnh gốc</span>
        <span>☐ Resolution ≥ 1080 × 1080</span>
        <span>☐ Màu nhất quán (FADI xanh navy, MKG gold)</span>
      </div>

      <div className="rule-card" style={{ marginTop: 12 }}>
        <span className="rule-icon">🛠️</span>
        <span className="rule-text">Tools cần</span>
        <span className="rule-value">Canva (free) + ChatGPT</span>
      </div>
    </div>
  );
}

/* ── Bước 4: Trộn ảnh thật ── */
function Buoc4() {
  return (
    <div className="plan-content">
      <h4>🧑‍💼 Trợ Lý: Tỷ lệ trộn ảnh</h4>
      <div className="script-block">
{`📊 PROFILE MIX:
├── 40% Ảnh thật (CEO, công trình MKG, KH thật)
├── 30% Ảnh reference đã AI sửa
├── 20% Ảnh AI gen mới (portfolio, infographic)
└── 10% Ảnh đời thường CEO (tự chụp)`}
      </div>

      <h4>CEO chuẩn bị ảnh thật:</h4>
      <table className="data-table">
        <thead><tr><th>Loại ảnh</th><th>SL</th><th>Ghi chú</th></tr></thead>
        <tbody>
          <tr><td>Chân dung chuyên nghiệp</td><td>2-3</td><td>Polo/sơ mi + nền sạch</td></tr>
          <tr><td>Đi công trình</td><td>3-5</td><td>Mũ bảo hộ + đo đạc</td></tr>
          <tr><td>Meeting KH</td><td>2-3</td><td>Café + laptop + tư vấn</td></tr>
          <tr><td>Team thi công</td><td>2-3</td><td>Thợ đang sơn/lắp ráp</td></tr>
          <tr><td>Bàn giao + KH vui</td><td>3-5</td><td>KH cười + công trình xong</td></tr>
        </tbody>
      </table>

      <div className="rule-card" style={{ marginTop: 12 }}>
        <span className="rule-icon">⚠️</span>
        <span className="rule-text">Càng nhiều ảnh thật càng tốt. Có đơn thật → chụp thật → thay dần</span>
      </div>
    </div>
  );
}

/* ── Bước 5: Viết caption ── */
function Buoc5() {
  return (
    <div className="plan-content">
      <h4>🧑‍💼 Trợ Lý: Viết caption (AI hỗ trợ)</h4>
      <div className="script-block">
{`Prompt gửi ChatGPT:
"Viết caption FB cho bài đăng về [nội dung].
- Tone: chuyên nghiệp nhưng gần gũi
- Brand: FADI Interior / MKG Group
- Emoji vừa phải, CTA nhẹ cuối bài
- 5 hashtag, dài 4-6 dòng"`}
      </div>

      <h4>🧑‍💼 Template theo loại:</h4>
      <table className="data-table">
        <thead><tr><th>Loại</th><th>Mở đầu</th><th>Kết</th></tr></thead>
        <tbody>
          <tr><td><strong>A. Portfolio</strong></td><td>📐 [Tên dự án] — [đặc điểm]</td><td>📞 Inbox tư vấn miễn phí!</td></tr>
          <tr><td><strong>B. BTS</strong></td><td>🔨 Hậu trường tại [khu vực]</td><td>💪 Nguyên tắc FADI</td></tr>
          <tr><td><strong>C. Feedback</strong></td><td>💬 Cảm ơn anh/chị [tên]!</td><td>📞 Inbox nhận tư vấn</td></tr>
          <tr><td><strong>D. Infographic</strong></td><td>📊 Bảng giá sơn trọn gói!</td><td>👉 Comment "GIÁ"</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── Bước 6: Đăng bài theo lịch ── */
function Buoc6() {
  return (
    <div className="plan-content">
      <h4>🧑‍💼 Trợ Lý: Ngày 1 — Profile cá nhân FB</h4>
      <table className="data-table">
        <thead><tr><th>Giờ</th><th>Bài</th><th>Loại</th></tr></thead>
        <tbody>
          <tr><td>8h</td><td>Đổi avatar + cover + bio</td><td>Setup</td></tr>
          <tr><td>9h</td><td>Portfolio công trình 1 (đẹp nhất)</td><td>A</td></tr>
          <tr><td>10h</td><td>Behind-the-scenes</td><td>B</td></tr>
          <tr><td>11h</td><td>Feedback KH</td><td>C</td></tr>
          <tr><td>14h</td><td>Portfolio before/after</td><td>A</td></tr>
          <tr><td>15h</td><td>Bảng giá</td><td>E</td></tr>
          <tr><td>16h</td><td>Lifestyle CEO</td><td>D</td></tr>
          <tr><td>17h</td><td>Portfolio 3</td><td>A</td></tr>
        </tbody>
      </table>

      <div className="rule-card" style={{ marginTop: 8 }}>
        <span className="rule-icon">💡</span>
        <span className="rule-text">Backdate bài viết (cách nhau 2-3 ngày) → profile trông "hoạt động lâu rồi"</span>
      </div>

      <h4>🧑‍💼 Trợ Lý: Ngày 2 — Fanpage + Zalo</h4>
      <table className="data-table">
        <thead><tr><th>Việc</th><th>Chi tiết</th></tr></thead>
        <tbody>
          <tr><td>Avatar + Cover fanpage</td><td>Logo + ảnh portfolio + SĐT</td></tr>
          <tr><td>About fanpage</td><td>SĐT, địa chỉ, giờ, website</td></tr>
          <tr><td>Album "Công trình"</td><td>10-15 ảnh</td></tr>
          <tr><td>Album "Feedback"</td><td>5-10 ảnh</td></tr>
          <tr><td>10 bài đăng (backdate)</td><td>Xen kẽ A-B-C-D-E</td></tr>
          <tr><td>Pinned post</td><td>Giới thiệu dịch vụ + bảng giá</td></tr>
          <tr><td>CTA button</td><td>"Gửi tin nhắn"</td></tr>
          <tr><td>Zalo</td><td>Avatar + cover + 5-8 nhật ký</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── Bước 7: Maintain hàng tuần ── */
function Buoc7() {
  return (
    <div className="plan-content">
      <h4>🧑‍💼 Trợ Lý: Maintain mỗi tuần</h4>
      <table className="data-table">
        <thead><tr><th>Ngày</th><th>Việc</th><th>AI hỗ trợ</th></tr></thead>
        <tbody>
          <tr><td><strong>T2</strong></td><td>1 bài portfolio</td><td>AI viết caption</td></tr>
          <tr><td><strong>T3</strong></td><td>1 bài BTS</td><td>—</td></tr>
          <tr><td><strong>T4</strong></td><td>Scan đối thủ → ý tưởng mới</td><td>AI gợi ý</td></tr>
          <tr><td><strong>T5</strong></td><td>1 bài feedback</td><td>AI format</td></tr>
          <tr><td><strong>T6</strong></td><td>1 bài tips + chuẩn bị tuần sau</td><td>AI gen infographic</td></tr>
        </tbody>
      </table>

      <div className="rule-card" style={{ marginTop: 8 }}>
        <span className="rule-icon">🎯</span>
        <span className="rule-text">Rule: Đơn thật → ảnh thật → thay dần</span>
        <span className="rule-value">Target: 70%+ ảnh thật sau 1 tháng</span>
      </div>

      <h4>Công cụ AI</h4>
      <table className="data-table">
        <thead><tr><th>Tool</th><th>Dùng cho</th><th>Priority</th></tr></thead>
        <tbody>
          <tr><td><strong>Canva</strong></td><td>Sửa ảnh, xóa watermark, logo</td><td>🔴 Bắt buộc</td></tr>
          <tr><td><strong>ChatGPT</strong></td><td>Viết caption, gen ảnh</td><td>🔴 Bắt buộc</td></tr>
          <tr><td><strong>Remini</strong></td><td>Enhance ảnh mờ</td><td>🟡 Nên có</td></tr>
          <tr><td><strong>Photoshop AI</strong></td><td>Sửa chi tiết cao</td><td>🟢 Nếu cần</td></tr>
          <tr><td><strong>CapCut</strong></td><td>Edit video ngắn</td><td>🟢 Phase 2</td></tr>
        </tbody>
      </table>
    </div>
  );
}

/* ── Section data ── */
const SECTIONS = [
  { id: 'b1', icon: '📥', title: 'Bước 1 — Thu thập hình ảnh', badge: '~30p', who: 'tl', content: Buoc1 },
  { id: 'b2', icon: '📂', title: 'Bước 2 — Phân loại hình', badge: '~20p', who: 'tl', content: Buoc2 },
  { id: 'b3', icon: '🎨', title: 'Bước 3 — AI sửa hình ảnh', badge: '3-5p/ảnh', who: 'tl', content: Buoc3 },
  { id: 'b4', icon: '🔀', title: 'Bước 4 — Trộn với hình thật', badge: 'Mix 40/30/20/10', who: 'both', content: Buoc4 },
  { id: 'b5', icon: '✍️', title: 'Bước 5 — Viết caption', badge: 'AI hỗ trợ', who: 'tl', content: Buoc5 },
  { id: 'b6', icon: '📅', title: 'Bước 6 — Đăng bài theo lịch', badge: '2 ngày', who: 'tl', content: Buoc6 },
  { id: 'b7', icon: '🔄', title: 'Bước 7 — Maintain hàng tuần', badge: '30p/ngày', who: 'tl', content: Buoc7 },
];

/* ── Main View ── */
export default function ProfileView() {
  const [open, setOpen] = useState({ b1: true });
  const toggle = (id) => setOpen(p => ({ ...p, [id]: !p[id] }));

  return (
    <div className="fade-in">
      {/* KPI header */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-number">20+</div>
          <div className="stat-label">Bài Profile FB</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">15-20</div>
          <div className="stat-label">Bài Fanpage</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">1-2</div>
          <div className="stat-label">Ngày setup</div>
        </div>
      </div>

      {/* Mục tiêu */}
      <div className="rule-card" style={{ marginBottom: 16 }}>
        <span className="rule-icon">🎯</span>
        <span className="rule-text">KH click → vào profile → thấy chuyên nghiệp → tin tưởng inbox</span>
        <span className="rule-value">+20-30% inbox</span>
      </div>

      {/* Quy trình overview */}
      <div className="plan-section" style={{ marginBottom: 16 }}>
        <div className="plan-section-header" onClick={() => toggle('overview')}>
          <div className="plan-section-title"><span>📋</span><span>Tổng quan quy trình</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="plan-section-badge">7 bước</span>
            <span className={`group-chevron ${open.overview ? 'open' : ''}`}>▼</span>
          </div>
        </div>
        {open.overview && (
          <div className="plan-content">
            <div className="script-block">
{`CEO đưa 3-5 link profile tham khảo
         ↓
[B1] Trợ lý duyệt & tải hình đẹp
         ↓
[B2] Phân loại: portfolio, lifestyle, team, feedback
         ↓
[B3] AI sửa hình: đổi áo/logo, đổi màu, branding
         ↓
[B4] Trộn với hình thật CEO/công trình
         ↓
[B5] Viết caption (AI hỗ trợ)
         ↓
[B6] Đăng lên Profile + Fanpage theo lịch
         ↓
[B7] Maintain 3-5 bài mới/tuần`}
            </div>
          </div>
        )}
      </div>

      {/* 7 bước chi tiết */}
      {SECTIONS.map(s => (
        <div key={s.id} className="plan-section">
          <div className="plan-section-header" onClick={() => toggle(s.id)}>
            <div className="plan-section-title">
              <span>{s.icon}</span><span>{s.title}</span>
              {s.who === 'tl' && <span style={{ fontSize: 10, background: 'rgba(6,182,212,0.15)', color: '#06b6d4', padding: '1px 6px', borderRadius: 6, fontWeight: 600 }}>Trợ Lý</span>}
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
