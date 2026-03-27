---
name: MD-to-Webapp Builder
description: >
  Quy tắc chuyển đổi file Markdown dự án thành webapp Vite + React hoàn chỉnh.
  Trigger: Khi user cung cấp file .md mô tả dự án/kế hoạch/chiến lược và yêu cầu tạo webapp.
  Output: Webapp mobile-first với bottom-nav, dark theme Navy+Gold, PocketBase sync, collapsible sections, task tracker.
skills:
  - project-architect
  - quytrinh-design-system
---

# MD-to-Webapp Builder — Agent Skill

> Skill này hướng dẫn agent cách đọc file Markdown dự án → tự động scaffold + build webapp Vite + React hoàn chỉnh, theo chuẩn MKG (fadi-tracker pattern).

---

## 1. MD Parsing Rules — Cách đọc file MD đầu vào

### 1.1. Heading → Cấu trúc app

| MD Element | → App Element | Ví dụ |
|---|---|---|
| `# H1` | Tên project → header app (`<h1>`) + subtitle | `# FADI × ThoPho` |
| `## H2` | **Tabs chính** — mỗi H2 = 1 tab trong bottom-nav | `## Kế hoạch`, `## Tasks` |
| `### H3` | **Sections** — collapsible sections trong tab | `### Phễu Gói Căn Hộ` |
| `#### H4` | Sub-heading trong section content | `#### Ví dụ P&L` |

**Quy tắc gán icon cho tabs:**
```javascript
// Agent tự chọn emoji phù hợp dựa trên tên tab
const ICON_MAP = {
  'kế hoạch': '📋', 'plan': '📋',
  'task': '✅', 'công việc': '✅', 'checklist': '✅',
  'tài chính': '📊', 'finance': '📊', 'p&l': '📊',
  'tham khảo': '📌', 'reference': '📌', 'ghi chú': '📌',
  'marketing': '📣', 'chiến lược': '⚡', 'đội ngũ': '👥',
  'sản phẩm': '🛍️', 'website': '🌐', 'kỹ thuật': '⚙️',
};
// Nếu không match → dùng emoji đầu tiên trong H2 text, hoặc '📄'
```

### 1.2. Content Elements → Components

| MD Element | → React Component | CSS Class |
|---|---|---|
| Markdown table | `<table className="data-table">` | `.data-table` |
| `- [ ]` checklist | TaskTracker (toggle, progress, comments) | `.task-item`, `.task-checkbox` |
| `- item` bullet list | `<ul>` trong `.plan-content` | `.plan-content ul` |
| `1. item` ordered list | `<ol>` trong `.plan-content` | `.plan-content ol` |
| `> blockquote` | Highlight card | `.finance-card` hoặc `.persona-card` |
| `` `code` `` inline | `<span className="highlight">` | `.highlight` |
| ` ```code block``` ` | Script block + CopyButton | `.script-block` + `.copy-btn` |
| `**bold text**` | `<strong>` | — |
| `~~strikethrough~~` | `<span className="task-text done">` | `.task-text.done` |
| `---` horizontal rule | Section separator | — |

### 1.3. Nhận diện loại tab tự động

Agent phân loại mỗi H2 tab dựa trên nội dung bên trong:

| Nếu H2 chứa... | → Loại tab | → Component pattern |
|---|---|---|
| Chủ yếu `- [ ]` checklists | **TaskTracker** | Groups, progress bars, toggle, comments |
| Chủ yếu bảng số/tiền | **FinanceView** | Price cards, P&L rows, rule cards |
| Chủ yếu H3 sections text | **PlanView** | Collapsible accordion sections |
| Chủ yếu scripts/quotes/data | **ReferenceView** | Copy buttons, persona cards, keyword lists |
| Mix nhiều loại | **PlanView** (default) | Collapsible sections, render content bên trong |

---

## 2. Component Templates

### 2.1. App.jsx — Shell + Bottom Nav

```jsx
import { useState } from 'react';
// Import các tab components...
import './styles/index.css';

const TABS = [
  // Auto-generated từ H2 headings
  { id: 'tab1', icon: '📋', label: 'Tab 1 Name' },
  { id: 'tab2', icon: '✅', label: 'Tab 2 Name' },
  // ...max 5 tabs
];

export default function App() {
  const [tab, setTab] = useState(TABS[0].id);

  const renderTab = () => {
    switch (tab) {
      case 'tab1': return <Tab1View />;
      case 'tab2': return <Tab2View />;
      default: return null;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>{/* Từ H1 */}</h1>
        <div className="subtitle">{/* Subtitle hoặc date range */}</div>
      </header>
      <main className="app-content">{renderTab()}</main>
      <nav className="bottom-nav">
        {TABS.map(t => (
          <button key={t.id} className={`nav-item ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}>
            <span className="nav-icon">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
```

### 2.2. PlanView Pattern — Collapsible Sections

Dùng khi tab chứa nhiều H3 sections với text content:

```jsx
const SECTIONS = [
  // Auto-generated từ H3 headings
  { id: 'A', icon: '🆕', title: 'Section Title', badge: 'Label', content: SectionA },
];

export default function PlanView() {
  const [open, setOpen] = useState({});
  const [search, setSearch] = useState('');
  const toggle = (id) => setOpen(p => ({ ...p, [id]: !p[id] }));

  return (
    <div className="fade-in">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Tìm kiếm..." />
      </div>
      {SECTIONS.map(s => (
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
          {open[s.id] && <div className="plan-content"><s.content /></div>}
        </div>
      ))}
    </div>
  );
}
```

### 2.3. TaskTracker Pattern — Checklist Groups

Dùng khi tab chứa `- [ ]` checklists:

```javascript
// hooks/useTaskStore.js
const DEFAULT_TASKS = [
  // Từ MD: mỗi "- [ ] text" → 1 task object
  { id: 'T_01', group: 'group1', text: 'Task text from MD', checked: false, comments: [] },
];

export const GROUPS = {
  // Từ MD: H3 heading trước nhóm checklist → group
  group1: { label: '📋 Group Name', icon: '📋', color: '#f59e0b' },
};
```

### 2.4. FinanceView Pattern — P&L + Tables

Dùng khi tab chứa bảng số/tiền:

```jsx
// Price cards cho bảng giá
<div className="price-cards">
  <div className="price-card bronze">
    <div className="price-card-title">Tên gói</div>
    <div className="price-card-area">Mô tả</div>
    <div className="price-card-price">Giá₫</div>
  </div>
</div>

// P&L rows cho dòng thu chi
<div className="pl-row">
  <span className="label">Hạng mục</span>
  <span className="value green">Số tiền</span>
</div>

// Rule cards cho KPIs / triggers
<div className="rule-card">
  <span className="rule-icon">🚀</span>
  <span className="rule-text">Điều kiện</span>
  <span className="rule-value" style={{ color: 'var(--green)' }}>Hành động</span>
</div>
```

### 2.5. ReferenceView Pattern — Scripts + Copy

Dùng khi tab chứa scripts, personas, keyword lists:

```jsx
// CopyButton component — BẮT BUỘC có trong mọi project
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

// Script block
<div className="script-block">
  {SCRIPT_TEXT}
  <CopyButton text={SCRIPT_TEXT} />
</div>

// Persona card
<div className="persona-card">
  <div className="persona-name">Tên — Tuổi</div>
  <div className="persona-detail">Chi tiết dòng 1</div>
  <div className="persona-detail">Chi tiết dòng 2</div>
</div>
```

---

## 3. CSS Theme — Copy nguyên bộ

**BẮT BUỘC**: Copy toàn bộ file `index.css` từ fadi-tracker (800 lines) làm base.

Nếu project cần brand khác → chỉ thay đổi CSS variables trong `:root`:

```css
:root {
  /* Thay đổi những dòng này cho brand mới */
  --accent: #f59e0b;        /* Màu chủ đạo */
  --accent-light: #fbbf24;  /* Màu chủ đạo sáng */
  --bg: #0f172a;             /* Nền tổng */
  --bg-card: #1e293b;        /* Nền card */
  /* Giữ nguyên tất cả phần còn lại */
}
```

**Brand presets có sẵn:**

| Brand | --accent | --bg | Mood |
|---|---|---|---|
| Navy+Gold (default) | `#f59e0b` | `#0f172a` | Chuyên gia, sang trọng |
| Gold Oak (MKG-ERP) | `#c8956c` | `#110f0b` | Ấm áp, gỗ |
| Emerald | `#10b981` | `#0f1a15` | Tươi mới, eco |
| Rose Pink | `#ec4899` | `#1a0f14` | Lãng mạn |
| Electric Blue | `#3b82f6` | `#0f1729` | Tech, modern |

---

## 4. PocketBase Integration

### 4.1. Service file — `src/services/pb.js`

```javascript
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://db.mkg.vn');

export async function getConfig(key) {
  try {
    const result = await pb.collection('<project>_config').getList(1, 1, {
      filter: `key = "${key}"`,
    });
    return result.items[0] || null;
  } catch { return null; }
}

export async function setConfig(key, value) {
  const existing = await getConfig(key);
  if (existing) {
    return await pb.collection('<project>_config').update(existing.id, { value });
  } else {
    return await pb.collection('<project>_config').create({ key, value });
  }
}

export default pb;
```

> **`<project>`** = tên ngắn project viết thường (VD: `fadi`, `thopho`, `mkg`)

### 4.2. Setup script — `scripts/setup-pb.js`

```javascript
const PB_URL = 'https://db.mkg.vn';

async function api(path, method, body, token) {
  const h = { 'Content-Type': 'application/json' };
  if (token) h.Authorization = 'Bearer ' + token;
  const r = await fetch(PB_URL + path, {
    method: method || 'GET', headers: h,
    body: body ? JSON.stringify(body) : null,
  });
  const t = await r.text();
  let d; try { d = JSON.parse(t); } catch (_) { d = { raw: t }; }
  return { ok: r.ok, status: r.status, data: d };
}

async function main() {
  const a = await api('/api/collections/_superusers/auth-with-password', 'POST', {
    identity: 'quy28181818@gmail.com', password: '@Mkg201444',
  });
  const tk = a.data.token;

  // Create config collection
  const col = await api('/api/collections', 'POST', {
    name: '<project>_config',
    type: 'base',
    fields: [
      { name: 'key', type: 'text', required: true },
      { name: 'value', type: 'json' },
    ],
    listRule: '', viewRule: '', createRule: '', updateRule: '', deleteRule: '',
  }, tk);

  console.log('✅ Collection created:', col.ok ? 'success' : col.data);
}

main().catch(console.error);
```

---

## 5. Project Scaffold

### 5.1. package.json template

```json
{
  "name": "<project-name>",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "pocketbase": "^0.26.8",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "vite-plugin-pwa": "^1.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^6.0.1",
    "vite": "^8.0.1"
  }
}
```

### 5.2. vite.config.js template

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { host: true },
});
```

### 5.3. index.html template

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
    <meta name="theme-color" content="#0f172a" />
    <title>Project Name</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 6. Quy tắc chất lượng

1. **KHÔNG dùng placeholder images** — generate hoặc dùng emoji
2. **Vietnamese UI** — mọi label, button, message bằng tiếng Việt
3. **Mobile-first** — max-width 480px, touch-friendly, safe-area
4. **Mỗi tab ≤ 1 component file** — đơn giản, dễ đọc
5. **Mọi checklist phải có progress bar** — overall + per group
6. **Mọi code/script block phải có CopyButton**
7. **Collapsible sections mặc định đóng** — trừ section đầu tiên
8. **Dark theme bắt buộc** — không có light mode
9. **Inter font** — Google Fonts, hỗ trợ Vietnamese
10. **Animations nhẹ** — fadeIn 0.3s, slideDown 0.2s, checkPop 0.3s

---

## 7. Xử lý edge cases

| Tình huống | Cách xử lý |
|---|---|
| MD có > 5 H2 sections | Gộp sections liên quan, tối đa 5 tabs |
| MD không có checklist | Bỏ TaskTracker, dùng PlanView cho tất cả |
| MD không có bảng số | Bỏ FinanceView, dùng PlanView |
| MD chỉ có 1 H2 | Không dùng bottom-nav, render trực tiếp |
| MD có hình ảnh `![](url)` | Dùng `<img>` với lazy loading |
| MD chứa links `[text](url)` | Dùng `<a target="_blank" rel="noopener">` |
| Không có PocketBase access | Dùng localStorage only, bỏ PB sync |

---

## 8. Anti-patterns — TRÁNH

- ❌ **KHÔNG tạo quá nhiều component nhỏ** — mỗi tab = 1 file, inline sub-components
- ❌ **KHÔNG dùng React Router** — dùng state tabs (đơn giản hơn)
- ❌ **KHÔNG dùng Tailwind** — dùng Vanilla CSS
- ❌ **KHÔNG dùng `getFullList()`** — dùng `getList(1, 500)`
- ❌ **KHÔNG dùng sidebar** — dùng bottom-nav (mobile-first)
- ❌ **KHÔNG hardcode PocketBase URL** — dùng constant reusable
- ❌ **KHÔNG bỏ search bar** — mọi PlanView phải có search
