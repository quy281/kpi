import { useState, useCallback } from 'react';

const MESSENGER_SCRIPT = `Cảm ơn bạn đã nhắn! Cho em hỏi căn hộ bạn mấy phòng ngủ?
Gói 1PN: 6.5tr | 2PN: 9tr | 3PN: 10.5tr — đã bao full thợ
Hoặc nhắn địa chỉ để em tư vấn chính xác nhé 🙏`;

const REPLY_SCRIPT = `Bạn ở quận nào? Căn mấy PN? Em báo giá ngay`;

const CLOSING_SCRIPT = `Gói 2PN nhà anh 9 triệu đúng rồi. Nếu anh ok em bắt đầu được thứ Ba/thứ Tư tuần tới. Cọc 30% = 2.7tr là em đặt thợ ngay.`;

const ZALO_TEMPLATE = `[Tên], đây là báo giá chi tiết theo khảo sát hôm nay:
• Gói [X]PN: [giá]
• Phát sinh (nếu có): [chi tiết]
• Tổng: [số tiền]
• Bắt đầu: [ngày]
Cọc 30% = [số tiền] qua chuyển khoản. Em xác nhận là đặt thợ ngay ạ.`;

const SEO_KEYWORDS = [
  'sơn nhà trọn gói TP.HCM',
  'sơn căn hộ chung cư giá rẻ',
  'sơn nhà bao nhiêu tiền 2026',
  'thợ sơn nước quận [X]',
  'dịch vụ sơn nhà uy tín',
  'gói sơn căn hộ trọn gói',
  'thợ điện nước quận [X] TP.HCM',
  'sửa nhà gấp hôm nay',
  'giá thợ sơn nước 2026',
  'gọi thợ sửa chữa nhanh',
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
      {copied ? '✓ Đã copy' : '📋 Copy'}
    </button>
  );
}

export default function ReferenceView() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (id) => setOpenSection(openSection === id ? null : id);

  return (
    <div className="fade-in">
      {/* Personas */}
      <div className="plan-section">
        <div className="plan-section-header" onClick={() => toggle('persona')}>
          <div className="plan-section-title">
            <span>👤</span>
            <span>Personas</span>
          </div>
          <span className={`group-chevron ${openSection === 'persona' ? 'open' : ''}`}>▼</span>
        </div>
        {openSection === 'persona' && (
          <div style={{ padding: '0 16px 16px' }}>
            <div className="persona-card">
              <div className="persona-name">Anh Minh — 32 tuổi</div>
              <div className="persona-detail">Thu nhập: 20-40M/tháng (dân văn phòng, IT)</div>
              <div className="persona-detail">Căn hộ: 2PN tại Bình Thạnh/Q7/Q2/Thủ Đức</div>
              <div className="persona-detail">Trigger: Vừa nhận bàn giao → cần sơn trước khi dọn vào</div>
              <div className="persona-detail">Pain point: KHÔNG biết mình cần gì, sợ bị chặt chém</div>
              <div className="persona-detail">Decision: "Gói cố định" → tin tưởng → book ngay</div>
              <div className="persona-detail">Budget: 10-20M (nếu biết ngay giá)</div>
              <div className="persona-detail">Upsell: Giấy dán tường, rèm, đèn LED</div>
            </div>
            <div className="persona-card">
              <div className="persona-name">Chị Hoa — 40 tuổi</div>
              <div className="persona-detail">Chung cư đã ở 4-6 năm</div>
              <div className="persona-detail">Nhu cầu: Sơn lại (bong tróc, phai màu)</div>
              <div className="persona-detail">Trigger: Bảng giá rõ ràng + gói trọn = yên tâm</div>
              <div className="persona-detail">Upsell: Toilet thấm, cánh cửa xỉn, khe tường nứt</div>
            </div>
          </div>
        )}
      </div>

      {/* Scripts bán hàng */}
      <div className="plan-section">
        <div className="plan-section-header" onClick={() => toggle('scripts')}>
          <div className="plan-section-title">
            <span>💬</span>
            <span>Scripts Bán Hàng</span>
          </div>
          <span className={`group-chevron ${openSection === 'scripts' ? 'open' : ''}`}>▼</span>
        </div>
        {openSection === 'scripts' && (
          <div style={{ padding: '0 16px 16px' }}>
            <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>
              Messenger Auto-reply
            </h4>
            <div className="script-block">
              {MESSENGER_SCRIPT}
              <CopyButton text={MESSENGER_SCRIPT} />
            </div>

            <h4 style={{ fontSize: 13, fontWeight: 700, margin: '14px 0 8px', color: 'var(--text-primary)' }}>
              Reply nhanh
            </h4>
            <div className="script-block">
              {REPLY_SCRIPT}
              <CopyButton text={REPLY_SCRIPT} />
            </div>

            <h4 style={{ fontSize: 13, fontWeight: 700, margin: '14px 0 8px', color: 'var(--text-primary)' }}>
              Script chốt tại chỗ
            </h4>
            <div className="script-block">
              {CLOSING_SCRIPT}
              <CopyButton text={CLOSING_SCRIPT} />
            </div>

            <h4 style={{ fontSize: 13, fontWeight: 700, margin: '14px 0 8px', color: 'var(--text-primary)' }}>
              Template Zalo sau khảo sát
            </h4>
            <div className="script-block">
              {ZALO_TEMPLATE}
              <CopyButton text={ZALO_TEMPLATE} />
            </div>
          </div>
        )}
      </div>

      {/* Creative Ads */}
      <div className="plan-section">
        <div className="plan-section-header" onClick={() => toggle('creatives')}>
          <div className="plan-section-title">
            <span>🎨</span>
            <span>Creative Ads Specs</span>
          </div>
          <span className={`group-chevron ${openSection === 'creatives' ? 'open' : ''}`}>▼</span>
        </div>
        {openSection === 'creatives' && (
          <div className="plan-content">
            <h4>Creative #1 — Video 15-20s (Hook mạnh)</h4>
            <ul>
              <li><strong>[0-3s] HOOK:</strong> Camera zoom tường bong tróc — "Sơn lại căn hộ bao nhiêu tiền?"</li>
              <li><strong>[3-8s] REVEAL:</strong> Bảng giá 3 gói animation</li>
              <li><strong>[8-15s] PROOF:</strong> Lướt 3 ảnh before/after + CEO áo FADI</li>
              <li><strong>[15-20s] CTA:</strong> "Nhắn DIỆN TÍCH để nhận báo giá ngay" → Messenger</li>
            </ul>

            <h4>Creative #2 — Image Carousel</h4>
            <ul>
              <li><strong>Card 1:</strong> Logo FADI + "Sơn căn hộ trọn gói — Giá niêm yết"</li>
              <li><strong>Card 2:</strong> Bảng 3 gói giá (infographic)</li>
              <li><strong>Card 3:</strong> Before/After 1PN</li>
              <li><strong>Card 4:</strong> Before/After 2PN</li>
              <li><strong>Card 5:</strong> "Miễn phí khảo sát + báo giá trong ngày" + CTA</li>
            </ul>

            <h4>Targeting</h4>
            <p>25-45 tuổi, TP.HCM, quan tâm bất động sản/nội thất</p>
          </div>
        )}
      </div>

      {/* SEO Keywords */}
      <div className="plan-section">
        <div className="plan-section-header" onClick={() => toggle('seo')}>
          <div className="plan-section-title">
            <span>🔍</span>
            <span>SEO Keywords Target</span>
          </div>
          <span className={`group-chevron ${openSection === 'seo' ? 'open' : ''}`}>▼</span>
        </div>
        {openSection === 'seo' && (
          <div style={{ padding: '0 16px 16px' }}>
            {SEO_KEYWORDS.map((kw, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 12px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: 6,
                fontSize: 12.5,
                color: 'var(--text-secondary)',
              }}>
                <span>{kw}</span>
                <CopyButton text={kw} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cross-sell */}
      <div className="plan-section">
        <div className="plan-section-header" onClick={() => toggle('cross')}>
          <div className="plan-section-title">
            <span>🔗</span>
            <span>Cross-sell FADI ↔ ThoPho</span>
          </div>
          <span className={`group-chevron ${openSection === 'cross' ? 'open' : ''}`}>▼</span>
        </div>
        {openSection === 'cross' && (
          <div className="plan-content">
            <h4>FADI → ThoPho (Downgrade ticket nhỏ)</h4>
            <p>"Việc nhỏ này anh/chị vào thopho.com book ngay, có thợ trong 2h, giá cố định không cần khảo sát"</p>

            <h4>ThoPho → FADI (Upsell HĐ lớn)</h4>
            <p>Thợ hoàn thành job nhỏ → thấy nhà cần sơn → báo CEO → gọi khách tư vấn gói FADI</p>

            <h4>Routing nhanh</h4>
            <table className="data-table">
              <thead><tr><th>Việc</th><th>→</th></tr></thead>
              <tbody>
                <tr><td>Sơn ≥30m²</td><td style={{ color: 'var(--accent)' }}>FADI</td></tr>
                <tr><td>Điện, nước nhỏ</td><td style={{ color: 'var(--cyan)' }}>ThoPho</td></tr>
                <tr><td>Chống thấm đơn lẻ</td><td style={{ color: 'var(--cyan)' }}>ThoPho</td></tr>
                <tr><td>Gói tổng hợp</td><td style={{ color: 'var(--accent)' }}>FADI</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Quyết định Boardroom */}
      <div className="plan-section">
        <div className="plan-section-header" onClick={() => toggle('decision')}>
          <div className="plan-section-title">
            <span>🏆</span>
            <span>Quyết Định & Ưu Tiên</span>
          </div>
          <span className={`group-chevron ${openSection === 'decision' ? 'open' : ''}`}>▼</span>
        </div>
        {openSection === 'decision' && (
          <div className="plan-content">
            <h4>✅ TRIỂN KHAI V2 NGAY 28/03/2026</h4>
            <ol>
              <li><strong>Chuẩn bị assets</strong> (ngày 0): Bảng giá, brochure, creative</li>
              <li><strong>Chạy ads test 2-3 ngày</strong>: Gói căn hộ + sơn nhà phố</li>
              <li><strong>Scale winner</strong>: Ngay khi có data CPL đủ (ngày 3-5)</li>
              <li><strong>Làm lại thopho.com</strong>: Tuần 1 (CEO code 3 ngày)</li>
              <li><strong>Refactor mkg.vn</strong>: Tuần 2-3 (fix UX + SEO)</li>
              <li><strong>Social proof</strong>: Từng đơn → cải thiện CPL → scale</li>
            </ol>

            <h4>Agent Votes</h4>
            <table className="data-table">
              <thead><tr><th>Agent</th><th>Vote</th></tr></thead>
              <tbody>
                <tr><td>@Planner_PM</td><td style={{ color: 'var(--green)' }}>✅ GO</td></tr>
                <tr><td>@Sales_Closer</td><td style={{ color: 'var(--green)' }}>✅ GO</td></tr>
                <tr><td>@Content_Creator</td><td style={{ color: 'var(--green)' }}>✅ GO</td></tr>
                <tr><td>@Social_Marketer</td><td style={{ color: 'var(--green)' }}>✅ GO</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
