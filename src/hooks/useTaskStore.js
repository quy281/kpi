import { useState, useEffect, useCallback } from 'react';

/* ── Task Groups ── */
export const GROUPS = {
  sprint0: { label: '✅ Đã có (test + fix)', icon: '✅', color: '#10b981' },
  sprint1: { label: '🔴 Sprint 1 — Tuần 1', icon: '🔴', color: '#ef4444' },
  sprint2: { label: '🟡 Sprint 2 — Tuần 3-4', icon: '🟡', color: '#f59e0b' },
  sprint3: { label: '🟢 Sprint 3 — Tuần 5-6', icon: '🟢', color: '#10b981' },
  creative: { label: '🎨 Creative cần chuẩn bị', icon: '🎨', color: '#a855f7' },
  action: { label: '⚡ Hành động ngay 28/03', icon: '⚡', color: '#ec4899' },
};

const DEFAULT_TASKS = [
  // ── Sprint 0: Đã có ──
  { id: 'S0_01', group: 'sprint0', text: 'Lead CRM — Test PB, fix mobile UX', checked: false, comments: [] },
  { id: 'S0_02', group: 'sprint0', text: 'Quotation PDF — Thêm logo, test print mobile', checked: false, comments: [] },
  { id: 'S0_03', group: 'sprint0', text: 'AI Chatbot — API key thật, test FADI prompt', checked: false, comments: [] },
  { id: 'S0_04', group: 'sprint0', text: 'Kho Prompt — Image upload OK', checked: true, comments: [] },
  { id: 'S0_05', group: 'sprint0', text: 'Settings Multi-key — Auto-save OK', checked: true, comments: [] },
  { id: 'S0_06', group: 'sprint0', text: 'Mobile Bottom Nav — OK', checked: true, comments: [] },

  // ── Sprint 1: Tuần 1 ──
  { id: 'S1_01', group: 'sprint1', text: 'Fix mkg.vn: Tạo GA4 property → copy G-xxx (30p)', checked: false, comments: [] },
  { id: 'S1_02', group: 'sprint1', text: 'Fix mkg.vn: Tạo/mở Zalo OA → copy OA ID (15p)', checked: false, comments: [] },
  { id: 'S1_03', group: 'sprint1', text: 'Fix mkg.vn: Tạo FB Pixel → copy Pixel ID (15p)', checked: false, comments: [] },
  { id: 'S1_04', group: 'sprint1', text: 'Fix mkg.vn: Paste 3 ID + SĐT thật vào code (30p)', checked: false, comments: [] },
  { id: 'S1_05', group: 'sprint1', text: 'Fix mkg.vn: Deploy lên Cloudflare (10p)', checked: false, comments: [] },
  { id: 'S1_06', group: 'sprint1', text: 'Landing sơn: Simplify form SĐT + Quận + Loại nhà (1h)', checked: false, comments: [] },
  { id: 'S1_07', group: 'sprint1', text: 'Landing sơn: Thêm before/after gallery social proof (1h)', checked: false, comments: [] },
  { id: 'S1_08', group: 'sprint1', text: 'Landing sơn: CTA button sticky bottom mobile (30p)', checked: false, comments: [] },
  { id: 'S1_09', group: 'sprint1', text: 'Landing sơn: Connect form → n8n webhook → Telegram (30p)', checked: false, comments: [] },
  { id: 'S1_10', group: 'sprint1', text: 'Landing sơn: Test submit → verify Telegram nhận (15p)', checked: false, comments: [] },
  { id: 'S1_11', group: 'sprint1', text: 'FB Pixel: Mở Events Manager → paste base code (10p)', checked: false, comments: [] },
  { id: 'S1_12', group: 'sprint1', text: 'FB Pixel: Setup event Lead khi form submit (20p)', checked: false, comments: [] },
  { id: 'S1_13', group: 'sprint1', text: 'FB Pixel: Verify bằng Pixel Helper extension (10p)', checked: false, comments: [] },

  // ── Sprint 2: Tuần 3-4 ──
  { id: 'S2_01', group: 'sprint2', text: 'Google Ads: Tạo account → Expert Mode (30p)', checked: false, comments: [] },
  { id: 'S2_02', group: 'sprint2', text: 'Google Ads: Link GA4 (15p)', checked: false, comments: [] },
  { id: 'S2_03', group: 'sprint2', text: 'Google Ads: Setup conversion tag (30p)', checked: false, comments: [] },
  { id: 'S2_04', group: 'sprint2', text: 'Google Ads: Tạo 3 Search ad groups (1h)', checked: false, comments: [] },
  { id: 'S2_05', group: 'sprint2', text: 'Google Ads: Set budget 50-100K/ngày, CPC 3-5K (15p)', checked: false, comments: [] },
  { id: 'S2_06', group: 'sprint2', text: 'Project Tracker: Kanban Lead→KS→HĐ→TC→QC→Done (4h)', checked: false, comments: [] },
  { id: 'S2_07', group: 'sprint2', text: 'Project Tracker: Assign thầu phụ per project (2h)', checked: false, comments: [] },
  { id: 'S2_08', group: 'sprint2', text: 'Project Tracker: Payment tracking cọc → đợt 2 → quyết toán (2h)', checked: false, comments: [] },
  { id: 'S2_09', group: 'sprint2', text: 'Project Tracker: Before/after photo gallery per project (2h)', checked: false, comments: [] },
  { id: 'S2_10', group: 'sprint2', text: 'Project Tracker: Mobile PWA cho CEO check tại công trình (2h)', checked: false, comments: [] },
  { id: 'S2_11', group: 'sprint2', text: 'Content Calendar: Grid view ngày × platform (2h)', checked: false, comments: [] },
  { id: 'S2_12', group: 'sprint2', text: 'Content Calendar: Status draft → CEO duyệt → đã đăng (1h)', checked: false, comments: [] },
  { id: 'S2_13', group: 'sprint2', text: 'Content Calendar: Trợ lý xem follow lịch (1h)', checked: false, comments: [] },

  // ── Sprint 3: Tuần 5-6 ──
  { id: 'S3_01', group: 'sprint3', text: 'MODI Listing: Upload ảnh → AI gen tên + mô tả (3h)', checked: false, comments: [] },
  { id: 'S3_02', group: 'sprint3', text: 'MODI Listing: Set giá → publish lên modi.vn (2h)', checked: false, comments: [] },
  { id: 'S3_03', group: 'sprint3', text: 'MODI Listing: Multi-channel Shopee, Zalo link (2h)', checked: false, comments: [] },
  { id: 'S3_04', group: 'sprint3', text: 'Invoice Generator: Auto gen hóa đơn từ HĐ data (2h)', checked: false, comments: [] },
  { id: 'S3_05', group: 'sprint3', text: 'Invoice Generator: Track chưa thu → đã thu (1h)', checked: false, comments: [] },
  { id: 'S3_06', group: 'sprint3', text: 'Invoice Generator: Export Excel (1h)', checked: false, comments: [] },
  { id: 'S3_07', group: 'sprint3', text: 'Ads Dashboard: Tổng hợp spend FB + Google (3h)', checked: false, comments: [] },
  { id: 'S3_08', group: 'sprint3', text: 'Ads Dashboard: CPL, ROAS, conversion chart (3h)', checked: false, comments: [] },
  { id: 'S3_09', group: 'sprint3', text: 'Ads Dashboard: Weekly auto-report (2h)', checked: false, comments: [] },

  // ── Creative cần chuẩn bị ──
  { id: 'CR_01', group: 'creative', text: '10 ảnh before/after (từ portfolio FADI cũ)', checked: false, comments: [] },
  { id: 'CR_02', group: 'creative', text: '3 video timelapse thi công', checked: false, comments: [] },
  { id: 'CR_03', group: 'creative', text: '5 ảnh bảng giá gói sơn', checked: false, comments: [] },
  { id: 'CR_04', group: 'creative', text: '2 video CEO giới thiệu dịch vụ', checked: false, comments: [] },

  // ── Hành động ngay 28/03 ──
  { id: 'AC_01', group: 'action', text: 'CEO: Tạo GA4 property cho mkg.vn', checked: false, comments: [] },
  { id: 'AC_02', group: 'action', text: 'CEO: Tạo/mở Zalo OA → lấy OA ID', checked: false, comments: [] },
  { id: 'AC_03', group: 'action', text: 'CEO: Tạo Facebook Pixel', checked: false, comments: [] },
  { id: 'AC_04', group: 'action', text: 'CEO: Fix mkg.vn (paste 3 ID + SĐT thật)', checked: false, comments: [] },
  { id: 'AC_05', group: 'action', text: 'CEO: Deploy mkg.vn bản mới', checked: false, comments: [] },
  { id: 'AC_06', group: 'action', text: 'CEO: Test Lead CRM + Quotation + Chatbot trên mobile', checked: false, comments: [] },
  { id: 'AC_07', group: 'action', text: 'CEO: Setup FB Ads campaign gói sơn (2-3 ad sets)', checked: false, comments: [] },
  { id: 'AC_08', group: 'action', text: 'Trợ lý: Phân loại 10 ảnh before/after từ portfolio FADI cũ', checked: false, comments: [] },
  { id: 'AC_09', group: 'action', text: 'Trợ lý: Soạn bảng giá gói sơn (print + digital)', checked: false, comments: [] },
  { id: 'AC_10', group: 'action', text: 'Trợ lý: Liên hệ 2 thầu phụ sơn CEO giới thiệu', checked: false, comments: [] },
  { id: 'AC_11', group: 'action', text: 'Trợ lý: Đăng 3 bài FB đầu tiên (CEO duyệt)', checked: false, comments: [] },
];

const STORAGE_KEY = 'mkg_pivot_tasks';

export function useTaskStore() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_TASKS;
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, checked: !t.checked } : t));
  }, []);

  const addComment = useCallback((id, text) => {
    if (!text.trim()) return;
    setTasks(prev => prev.map(t => t.id === id ? {
      ...t,
      comments: [...t.comments, { text: text.trim(), time: new Date().toLocaleString('vi-VN') }]
    } : t));
  }, []);

  const deleteComment = useCallback((taskId, commentIdx) => {
    setTasks(prev => prev.map(t => t.id === taskId ? {
      ...t,
      comments: t.comments.filter((_, i) => i !== commentIdx)
    } : t));
  }, []);

  const stats = {
    total: tasks.length,
    done: tasks.filter(t => t.checked).length,
    get percent() { return this.total ? Math.round(this.done / this.total * 100) : 0; },
  };

  const groupStats = (groupId) => {
    const g = tasks.filter(t => t.group === groupId);
    const done = g.filter(t => t.checked).length;
    return { total: g.length, done, percent: g.length ? Math.round(done / g.length * 100) : 0 };
  };

  const filteredTasks = filter === 'all' ? tasks :
    filter === 'done' ? tasks.filter(t => t.checked) :
    filter === 'pending' ? tasks.filter(t => !t.checked) :
    tasks.filter(t => t.group === filter);

  const resetTasks = useCallback(() => {
    setTasks(DEFAULT_TASKS);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { tasks: filteredTasks, allTasks: tasks, toggleTask, addComment, deleteComment, stats, groupStats, filter, setFilter, resetTasks };
}
