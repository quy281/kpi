import { useState, useEffect, useCallback, useRef } from 'react';
import { getConfig, setConfig } from '../services/pb.js';

/* ── Task Groups ── */
export const GROUPS = {
  sprint0: { label: '✅ Đã có (test + fix)', icon: '✅', color: '#10b981' },
  sprint1: { label: '🔴 Sprint 1 — Tuần 1', icon: '🔴', color: '#ef4444' },
  sprint2: { label: '🟡 Sprint 2 — Tuần 3-4', icon: '🟡', color: '#f59e0b' },
  sprint3: { label: '🟢 Sprint 3 — Tuần 5-6', icon: '🟢', color: '#10b981' },
  creative: { label: '🎨 Creative cần chuẩn bị', icon: '🎨', color: '#a855f7' },
  action: { label: '⚡ Hành động ngay 28/03', icon: '⚡', color: '#ec4899' },
  profile_ceo: { label: '👤 Profile — CEO chuẩn bị', icon: '👤', color: '#f59e0b' },
  profile_tl: { label: '🧑‍💼 Profile — Trợ Lý setup', icon: '🧑‍💼', color: '#06b6d4' },
  profile_maintain: { label: '🔄 Profile — Maintain tuần', icon: '🔄', color: '#8b5cf6' },
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

  // ── Profile — CEO chuẩn bị ──
  { id: 'PR_CEO_01', group: 'profile_ceo', text: 'Gửi 3-5 link profile/fanpage tham khảo', checked: false, comments: [] },
  { id: 'PR_CEO_02', group: 'profile_ceo', text: 'Chỉ rõ style muốn lấy', checked: false, comments: [] },
  { id: 'PR_CEO_03', group: 'profile_ceo', text: 'Gửi 5-10 ảnh thật (chân dung, công trình, team)', checked: false, comments: [] },
  { id: 'PR_CEO_04', group: 'profile_ceo', text: 'Gửi logo + màu brand', checked: false, comments: [] },
  { id: 'PR_CEO_05', group: 'profile_ceo', text: 'Duyệt bảng giá', checked: false, comments: [] },

  // ── Profile — Trợ Lý setup (1-2 ngày) ──
  { id: 'PR_TL_01', group: 'profile_tl', text: 'Tải 30-40 ảnh reference từ các profile CEO gửi', checked: false, comments: [] },
  { id: 'PR_TL_02', group: 'profile_tl', text: 'Phân loại ảnh A(Portfolio) B(BTS) C(Feedback) D(Lifestyle) E(Infographic)', checked: false, comments: [] },
  { id: 'PR_TL_03', group: 'profile_tl', text: 'AI edit 15-20 ảnh (đổi áo, logo, xóa watermark)', checked: false, comments: [] },
  { id: 'PR_TL_04', group: 'profile_tl', text: 'Trộn ảnh AI với ảnh thật CEO (tỷ lệ 40/30/20/10)', checked: false, comments: [] },
  { id: 'PR_TL_05', group: 'profile_tl', text: 'Viết 20 caption (AI hỗ trợ) → gửi CEO duyệt', checked: false, comments: [] },
  { id: 'PR_TL_06', group: 'profile_tl', text: 'Setup profile FB: avatar + cover + bio + 7-10 bài', checked: false, comments: [] },
  { id: 'PR_TL_07', group: 'profile_tl', text: 'Setup fanpage: avatar + cover + about + albums + 10 bài', checked: false, comments: [] },
  { id: 'PR_TL_08', group: 'profile_tl', text: 'Setup Zalo: avatar + cover + 5-8 nhật ký', checked: false, comments: [] },
  { id: 'PR_TL_09', group: 'profile_tl', text: 'CEO review tổng → chỉnh nếu cần', checked: false, comments: [] },

  // ── Profile — Maintain tuần ──
  { id: 'PR_MT_01', group: 'profile_maintain', text: '3-5 bài mới/tuần (xen kẽ A-B-C-D-E)', checked: false, comments: [] },
  { id: 'PR_MT_02', group: 'profile_maintain', text: 'Đơn thật → chụp ảnh thật → thay dần ảnh AI', checked: false, comments: [] },
  { id: 'PR_MT_03', group: 'profile_maintain', text: 'Scan đối thủ 1 lần/tuần → ý tưởng mới', checked: false, comments: [] },
];

const STORAGE_KEY = 'mkg_pivot_tasks';
const PB_CONFIG_KEY = 'tasks';
const SYNC_DEBOUNCE_MS = 1000;

/**
 * Merge logic: keep user progress (checked, comments) from saved data,
 * add any new tasks from DEFAULT_TASKS that don't exist yet.
 */
function mergeTasks(saved, defaults) {
  const savedMap = new Map(saved.map(t => [t.id, t]));
  const merged = [];
  const seenIds = new Set();

  // Keep order from defaults, but preserve saved state
  for (const def of defaults) {
    const existing = savedMap.get(def.id);
    merged.push(existing || def);
    seenIds.add(def.id);
  }

  // Keep any extra tasks from saved that are not in defaults (user-created, etc.)
  for (const s of saved) {
    if (!seenIds.has(s.id)) {
      merged.push(s);
    }
  }

  return merged;
}

export function useTaskStore() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return mergeTasks(JSON.parse(saved), DEFAULT_TASKS);
    } catch {}
    return DEFAULT_TASKS;
  });

  const [filter, setFilter] = useState('all');
  const [syncStatus, setSyncStatus] = useState('idle'); // idle | syncing | synced | error
  const debounceRef = useRef(null);
  const initialLoadDone = useRef(false);

  // ── Load from PocketBase on mount ──
  useEffect(() => {
    (async () => {
      try {
        setSyncStatus('syncing');
        const pbData = await getConfig(PB_CONFIG_KEY);
        if (pbData && pbData.value) {
          const pbTasks = typeof pbData.value === 'string' ? JSON.parse(pbData.value) : pbData.value;
          if (Array.isArray(pbTasks) && pbTasks.length > 0) {
            const merged = mergeTasks(pbTasks, DEFAULT_TASKS);
            setTasks(merged);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          }
        }
        setSyncStatus('synced');
      } catch {
        setSyncStatus('error');
        // Fallback: use localStorage data (already loaded in useState init)
      }
      initialLoadDone.current = true;
    })();
  }, []);

  // ── Save to localStorage + debounced PocketBase sync ──
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

    // Don't sync to PB during initial load
    if (!initialLoadDone.current) return;

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        setSyncStatus('syncing');
        await setConfig(PB_CONFIG_KEY, JSON.stringify(tasks));
        setSyncStatus('synced');
      } catch {
        setSyncStatus('error');
      }
    }, SYNC_DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
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

  return { tasks: filteredTasks, allTasks: tasks, toggleTask, addComment, deleteComment, stats, groupStats, filter, setFilter, resetTasks, syncStatus };
}
