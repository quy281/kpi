export default function FinanceView() {
  return (
    <div className="fade-in">
      {/* Bảng giá gói */}
      <div className="finance-card">
        <div className="finance-title">💰 Bảng Giá Gói Căn Hộ</div>
        <div className="price-cards">
          <div className="price-card bronze">
            <div className="price-card-title">1 Phòng Ngủ</div>
            <div className="price-card-area">&lt; 50m²</div>
            <div className="price-card-price">6,500,000₫</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11 }}>
              <span style={{ color: 'var(--text-muted)' }}>Thợ: 5,525,000</span>
              <span style={{ color: 'var(--green)' }}>LN: 975,000 (15%)</span>
            </div>
          </div>
          <div className="price-card silver">
            <div className="price-card-title">2 Phòng Ngủ</div>
            <div className="price-card-area">&lt; 70m²</div>
            <div className="price-card-price">9,000,000₫</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11 }}>
              <span style={{ color: 'var(--text-muted)' }}>Thợ: 7,650,000</span>
              <span style={{ color: 'var(--green)' }}>LN: 1,350,000 (15%)</span>
            </div>
          </div>
          <div className="price-card gold">
            <div className="price-card-title">3 Phòng Ngủ</div>
            <div className="price-card-area">&lt; 110m²</div>
            <div className="price-card-price">10,500,000₫</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11 }}>
              <span style={{ color: 'var(--text-muted)' }}>Thợ: 8,925,000</span>
              <span style={{ color: 'var(--green)' }}>LN: 1,575,000 (15%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* P&L Ví dụ */}
      <div className="finance-card">
        <div className="finance-title">📊 P&L Ví Dụ — 2PN 65m²</div>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>Chị Lan, Tân Bình</p>

        <div className="pl-row">
          <span className="label">Giá quote</span>
          <span className="value">9,000,000₫</span>
        </div>
        <div className="pl-row">
          <span className="label">Trả thợ (85%)</span>
          <span className="value red">-7,650,000₫</span>
        </div>
        <div className="pl-row">
          <span className="label">LN mồi (15%)</span>
          <span className="value green">1,350,000₫</span>
        </div>

        <h4 style={{ fontSize: 13, margin: '16px 0 8px', color: 'var(--accent)' }}>Upsell phát sinh</h4>
        <div className="pl-row">
          <span className="label">Chống thấm toilet</span>
          <span className="value">3,000,000₫</span>
        </div>
        <div className="pl-row">
          <span className="label">Sơn 3 cánh cửa</span>
          <span className="value">2,500,000₫</span>
        </div>
        <div className="pl-row">
          <span className="label">Thay 2 ổ điện</span>
          <span className="value">500,000₫</span>
        </div>
        <div className="pl-row">
          <span className="label">LN upsell (25%)</span>
          <span className="value green">1,500,000₫</span>
        </div>

        <div className="pl-row total">
          <span className="label">TỔNG ĐƠN</span>
          <span className="value">15,000,000₫</span>
        </div>
        <div className="pl-row">
          <span className="label" style={{ fontWeight: 700 }}>TỔNG LN THỰC TẾ</span>
          <span className="value green" style={{ fontSize: 16, fontWeight: 800 }}>2,850,000₫ (19%)</span>
        </div>
      </div>

      {/* Budget & P&L Tháng 1 */}
      <div className="finance-card">
        <div className="finance-title">📈 P&L Dự Kiến Tháng 1</div>

        <div className="pl-row">
          <span className="label">Budget ads</span>
          <span className="value red">-2,000,000₫</span>
        </div>
        <div className="pl-row">
          <span className="label">CPL trung bình</span>
          <span className="value">100,000₫</span>
        </div>
        <div className="pl-row">
          <span className="label">Leads dự kiến</span>
          <span className="value">20 leads</span>
        </div>
        <div className="pl-row">
          <span className="label">→ 8 leads căn hộ</span>
          <span className="value">→ 2 đơn</span>
        </div>
        <div className="pl-row">
          <span className="label">LN gói căn hộ</span>
          <span className="value green">~5,119,000₫</span>
        </div>

        <div className="pl-row total">
          <span className="label">Moderate</span>
          <span className="value green">8-12M</span>
        </div>
        <div className="pl-row">
          <span className="label" style={{ fontWeight: 700 }}>Best case</span>
          <span className="value" style={{ color: 'var(--accent)', fontWeight: 800, fontSize: 16 }}>40-45M</span>
        </div>
      </div>

      {/* Kill Rules */}
      <div className="finance-card">
        <div className="finance-title">🎯 Kill Rules & Scale Triggers</div>

        <div className="rule-card">
          <span className="rule-icon">🚀</span>
          <span className="rule-text">CPL ≤ 100k sau 48h</span>
          <span className="rule-value" style={{ color: 'var(--green)' }}>Tăng ×2</span>
        </div>
        <div className="rule-card">
          <span className="rule-icon">❌</span>
          <span className="rule-text">CPL &gt; 200k sau 48h</span>
          <span className="rule-value" style={{ color: 'var(--red)' }}>Tắt, đổi creative</span>
        </div>
        <div className="rule-card">
          <span className="rule-icon">🔄</span>
          <span className="rule-text">CTR &lt; 0.8% sau 48h</span>
          <span className="rule-value" style={{ color: 'var(--accent)' }}>Thay creative</span>
        </div>
        <div className="rule-card">
          <span className="rule-icon">✅</span>
          <span className="rule-text">≥ 8 tin nhắn sau 48h</span>
          <span className="rule-value" style={{ color: 'var(--green)' }}>Giữ nguyên</span>
        </div>
      </div>

      {/* Scale Model */}
      <div className="finance-card">
        <div className="finance-title">📊 Scale Model</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Tháng</th>
              <th>Ads</th>
              <th>Căn hộ</th>
              <th>LN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>T1 Test</td>
              <td>2M</td>
              <td>2-4 đơn</td>
              <td style={{ color: 'var(--green)', fontWeight: 600 }}>5-40M</td>
            </tr>
            <tr>
              <td>T2 ×3</td>
              <td>6M</td>
              <td>8-12</td>
              <td style={{ color: 'var(--green)', fontWeight: 600 }}>25-80M</td>
            </tr>
            <tr>
              <td>T3 ×5</td>
              <td>10M</td>
              <td>15-20</td>
              <td style={{ color: 'var(--green)', fontWeight: 600 }}>50-120M</td>
            </tr>
            <tr>
              <td>T4-T6</td>
              <td>20M</td>
              <td>40+</td>
              <td style={{ color: 'var(--accent)', fontWeight: 800 }}>150-200M</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 8 }}>
          Scale trigger: CPL ≤ 120k VÀ conversion ≥ 30%
        </p>
      </div>
    </div>
  );
}
