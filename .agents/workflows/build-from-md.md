---
description: Quy trinh tu dong chuyen file Markdown du an thanh webapp Vite + React hoan chinh (bottom-nav, dark theme, PocketBase sync).
---

# Workflow: /build-from-md

> **Trigger:** User cung cấp file `.md` mô tả dự án và yêu cầu tạo webapp.
> **Output:** Webapp chạy được tại `http://localhost:5173`

// turbo-all

---

## Step 1: Đọc & Phân tích MD

1. Đọc file MD mà user cung cấp
2. Đọc skill `md-to-webapp` → `d:\fadi-tracker\.agents\skills\md-to-webapp\SKILL.md`
3. Phân tích cấu trúc:
   - `# H1` → Tên project + header
   - `## H2` → Danh sách tabs (tối đa 5)
   - `### H3` → Sections trong mỗi tab
   - Nhận diện loại tab: TaskTracker / PlanView / FinanceView / ReferenceView
4. Trình bày kết quả phân tích cho user xác nhận:
   - Tên app, subtitle
   - Danh sách tabs + icon + loại component
   - Có checklist không → cần TaskTracker?
   - Có bảng tài chính không → cần FinanceView?

## Step 2: User Confirm cấu trúc

- Chờ user OK hoặc điều chỉnh tabs/features
- Nếu user muốn thay đổi → quay lại step 1

## Step 3: Xác định thư mục project

- Hỏi user thư mục lưu project (mặc định: `D:\<project-name>`)
- Nếu thư mục đã tồn tại → hỏi overwrite hay folder mới

## Step 4: Scaffold project

```bash
# Tạo project Vite + React
npx -y create-vite@latest ./ --template react
npm install pocketbase vite-plugin-pwa
```

- Xóa các file mặc định không cần: `App.css`, `assets/`, `index.css` gốc

## Step 5: Tạo CSS theme

- Copy toàn bộ nội dung CSS từ fadi-tracker pattern (trong SKILL.md section 3)
- Lưu vào `src/styles/index.css`
- Nếu user chỉ định brand khác → thay CSS variables trong `:root`

## Step 6: Tạo services

- Tạo `src/services/pb.js` — PocketBase singleton + getConfig/setConfig
- Collection name = `<project>_config`

## Step 7: Tạo components

Theo thứ tự:
1. `src/main.jsx` — entry point
2. `src/App.jsx` — shell + bottom-nav + tabs
3. Mỗi H2 tab → 1 file component:
   - TaskTracker tabs → `src/components/TaskTracker.jsx` + `src/hooks/useTaskStore.js`
   - PlanView tabs → `src/components/<TabName>View.jsx`
   - FinanceView tabs → `src/components/FinanceView.jsx`
   - ReferenceView tabs → `src/components/ReferenceView.jsx`

**Quy tắc chuyển MD content → JSX:**
- Bullet list `- item` → `<ul><li>item</li></ul>`
- Checklist `- [ ] text` → `DEFAULT_TASKS[]` array trong useTaskStore
- Table → `<table className="data-table">`
- Code block → `const SCRIPT = '...'` + `<div className="script-block">`
- H3 → collapsible section header
- Bold → `<strong>`
- `highlighted text` → `<span className="highlight">`
- Giá tiền → `<span className="highlight">` hoặc `price-card-price`

## Step 8: Setup PocketBase

```bash
node scripts/setup-pb.js
```

- Tạo collection `<project>_config`
- Seed data mặc định (checklist tasks nếu có)

## Step 9: Test local

```bash
npm run dev
```

- Mở browser → verify tất cả tabs render đúng
- Verify collapsible sections hoạt động
- Verify checklist toggle + progress bar
- Verify CopyButton hoạt động
- Verify bottom-nav switching
- Verify mobile responsive (width ≤ 480px)

## Step 10: Deploy (nếu user yêu cầu)

```bash
npx vite build
git init && git add -A && git commit -m "feat: init from MD"
# Push to GitHub → Cloudflare Pages auto-deploy
```
