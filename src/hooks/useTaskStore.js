import { useState, useEffect, useCallback } from 'react';
import pb, { getConfig, setConfig } from '../services/pb';

const TASKS_KEY = 'fadi_tasks';

/* Default tasks extracted from the plan */
const DEFAULT_TASKS = [
  // NGÀY 0 — Chuẩn bị
  { id: 'D0_01', group: 'ngay0', text: 'Chụp ảnh bảng giá 3 gói (in đẹp hoặc Canva)', checked: false, comments: [] },
  { id: 'D0_02', group: 'ngay0', text: 'Chuẩn bị 2 creative: 1 video quay sẵn + 1 ảnh bảng giá', checked: false, comments: [] },
  { id: 'D0_03', group: 'ngay0', text: 'Set up Messenger auto-reply script', checked: false, comments: [] },
  { id: 'D0_04', group: 'ngay0', text: 'Chuẩn bị Google Sheet CRM', checked: false, comments: [] },
  { id: 'D0_05', group: 'ngay0', text: 'Thống nhất với đội thợ: sẵn sàng nhận job', checked: false, comments: [] },

  // NGÀY 1-3 — Sprint
  { id: 'D1_01', group: 'sprint', text: 'Launch Ad Set "Căn Hộ" (budget 300k/ngày)', checked: false, comments: [] },
  { id: 'D1_02', group: 'sprint', text: 'Launch Ad Set "Sơn Nhà Phố" song song (200k/ngày)', checked: false, comments: [] },
  { id: 'D1_03', group: 'sprint', text: 'Reply mọi tin nhắn trong ≤15 phút', checked: false, comments: [] },
  { id: 'D1_04', group: 'sprint', text: 'Book khảo sát cho sáng hôm sau', checked: false, comments: [] },
  { id: 'D2_01', group: 'sprint', text: 'CEO đi khảo sát 1-2 nhà có hẹn', checked: false, comments: [] },
  { id: 'D2_02', group: 'sprint', text: 'Chụp 5-10 ảnh hiện trạng khảo sát', checked: false, comments: [] },
  { id: 'D2_03', group: 'sprint', text: 'Báo giá ngay tại chỗ hoặc qua Zalo sau 30 phút', checked: false, comments: [] },
  { id: 'D2_04', group: 'sprint', text: 'Chốt ≥1 cọc trong ngày 2', checked: false, comments: [] },
  { id: 'D3_01', group: 'sprint', text: 'Check CPL thực sau 48h', checked: false, comments: [] },
  { id: 'D3_02', group: 'sprint', text: 'Kill creative thua, scale creative thắng', checked: false, comments: [] },

  // CHECKLIST TÀI LIỆU (E1)
  { id: 'E1_01', group: 'tailieu', text: 'Template báo giá PDF/Word chuẩn có logo FADI', checked: false, comments: [] },
  { id: 'E1_02', group: 'tailieu', text: '3 gói căn hộ: 6.5tr / 9tr / 10.5tr (thiết kế đẹp)', checked: false, comments: [] },
  { id: 'E1_03', group: 'tailieu', text: 'Phụ lục upsell: bảng giá dịch vụ phát sinh', checked: false, comments: [] },
  { id: 'E1_04', group: 'tailieu', text: 'Điều khoản: Giá cố định, không phát sinh, bảo hành 1 năm', checked: false, comments: [] },
  { id: 'E1_05', group: 'tailieu', text: 'QR code Zalo CEO', checked: false, comments: [] },
  { id: 'E1_06', group: 'tailieu', text: 'Brochure A4/A5 thiết kế Canva', checked: false, comments: [] },
  { id: 'E1_07', group: 'tailieu', text: 'In 100 tờ brochure (~300k)', checked: false, comments: [] },
  { id: 'E1_08', group: 'tailieu', text: 'Infographic bảng giá 3 gói căn hộ', checked: false, comments: [] },
  { id: 'E1_09', group: 'tailieu', text: 'Bảng giá dịch vụ ThoPho (10-15 dịch vụ)', checked: false, comments: [] },

  // HÌNH ẢNH & VIDEO (E2)
  { id: 'E2_01', group: 'content', text: '5-10 ảnh before/after công trình cũ FADI', checked: false, comments: [] },
  { id: 'E2_02', group: 'content', text: '3-5 ảnh thợ đang làm việc (có đồng phục)', checked: false, comments: [] },
  { id: 'E2_03', group: 'content', text: '1 ảnh CEO tại công trình (áo polo FADI)', checked: false, comments: [] },
  { id: 'E2_04', group: 'content', text: 'Video hook 15-20s: bảng giá 3 gói căn hộ', checked: false, comments: [] },
  { id: 'E2_05', group: 'content', text: 'Video CEO giới thiệu 30s', checked: false, comments: [] },
  { id: 'E2_06', group: 'content', text: 'Video before/after 1 công trình thực', checked: false, comments: [] },
  { id: 'E2_07', group: 'content', text: 'Cover Facebook FADI cập nhật', checked: false, comments: [] },
  { id: 'E2_08', group: 'content', text: 'Story template sơn căn hộ', checked: false, comments: [] },
  { id: 'E2_09', group: 'content', text: 'Template báo giá PDF Canva', checked: false, comments: [] },

  // SETUP KỸ THUẬT (E3)
  { id: 'E3_01', group: 'kythuat', text: 'Tạo/verify Facebook Ad Account', checked: false, comments: [] },
  { id: 'E3_02', group: 'kythuat', text: 'Cài Facebook Pixel lên thopho.com', checked: false, comments: [] },
  { id: 'E3_03', group: 'kythuat', text: 'Set up Messenger Auto-reply', checked: false, comments: [] },
  { id: 'E3_04', group: 'kythuat', text: 'Kết nối Zalo OA vào Messenger', checked: false, comments: [] },
  { id: 'E3_05', group: 'kythuat', text: 'Custom audience: upload SĐT khách cũ FADI', checked: false, comments: [] },
  { id: 'E3_06', group: 'kythuat', text: 'Google Sheet CRM setup đầy đủ cột', checked: false, comments: [] },
  { id: 'E3_07', group: 'kythuat', text: 'Zalo Group nội bộ CEO + Thợ', checked: false, comments: [] },
  { id: 'E3_08', group: 'kythuat', text: 'Template Zalo gửi khách sau khảo sát', checked: false, comments: [] },
  { id: 'E3_09', group: 'kythuat', text: 'Block lịch CEO: khảo sát 9-11h và 14-17h', checked: false, comments: [] },

  // ĐỘI THỢ (E4)
  { id: 'E4_01', group: 'doitho', text: 'Xác nhận 1-2 đội thợ sơn sẵn sàng nhận job', checked: false, comments: [] },
  { id: 'E4_02', group: 'doitho', text: 'Đồng phục/áo đội: 2-3 áo polo in "FADI"', checked: false, comments: [] },
  { id: 'E4_03', group: 'doitho', text: 'Test: book 1 job nhỏ thực tế', checked: false, comments: [] },
  { id: 'E4_04', group: 'doitho', text: 'Thoả thuận thanh toán 70/30', checked: false, comments: [] },
  { id: 'E4_05', group: 'doitho', text: 'Danh sách thợ backup (ít nhất 1 đội dự phòng)', checked: false, comments: [] },

  // WEBSITE (D5)
  { id: 'W_01', group: 'website', text: 'CEO code landing page thopho.com (3 ngày)', checked: false, comments: [] },
  { id: 'W_02', group: 'website', text: 'Bảng giá 10-15 dịch vụ + giá cố định', checked: false, comments: [] },
  { id: 'W_03', group: 'website', text: 'Section "Gói Căn Hộ" với bảng giá FADI', checked: false, comments: [] },
  { id: 'W_04', group: 'website', text: 'Form đặt lịch (Google Forms/Zalo)', checked: false, comments: [] },
  { id: 'W_05', group: 'website', text: 'Zalo Chat Widget', checked: false, comments: [] },
  { id: 'W_06', group: 'website', text: 'Link cross đến mkg.vn', checked: false, comments: [] },
  { id: 'W_07', group: 'website', text: 'Mobile score ≥ 85', checked: false, comments: [] },
  { id: 'W_08', group: 'website', text: 'Audit Lighthouse mkg.vn hiện tại', checked: false, comments: [] },
  { id: 'W_09', group: 'website', text: 'Fix mobile responsiveness mkg.vn', checked: false, comments: [] },
  { id: 'W_10', group: 'website', text: 'Tối ưu ảnh mkg.vn: WebP + lazy load', checked: false, comments: [] },
  { id: 'W_11', group: 'website', text: 'Thêm meta description chuẩn mkg.vn', checked: false, comments: [] },
  { id: 'W_12', group: 'website', text: 'Thêm Schema Markup LocalBusiness mkg.vn', checked: false, comments: [] },
  { id: 'W_13', group: 'website', text: 'Tạo trang /son-nha riêng (1000+ words)', checked: false, comments: [] },
  { id: 'W_14', group: 'website', text: '3-5 bài blog SEO targeting keywords sơn nước', checked: false, comments: [] },
  { id: 'W_15', group: 'website', text: 'Submit Sitemap lên Google Search Console', checked: false, comments: [] },
  { id: 'W_16', group: 'website', text: 'Cài GA4 + Tag Manager mkg.vn', checked: false, comments: [] },
];

export const GROUPS = {
  ngay0: { label: '📋 Ngày 0 — Chuẩn Bị', icon: '📋', color: '#f59e0b' },
  sprint: { label: '⚡ Ngày 1-3 — Sprint 72h', icon: '⚡', color: '#ef4444' },
  tailieu: { label: '📄 Tài Liệu Bán Hàng', icon: '📄', color: '#3b82f6' },
  content: { label: '📸 Hình Ảnh & Video', icon: '📸', color: '#a855f7' },
  kythuat: { label: '⚙️ Setup Kỹ Thuật', icon: '⚙️', color: '#06b6d4' },
  doitho: { label: '👷 Đội Thợ', icon: '👷', color: '#10b981' },
  website: { label: '🌐 Website', icon: '🌐', color: '#ec4899' },
};

export function useTaskStore() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all | todo | done

  // Load from PocketBase on mount
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    setLoading(true);
    try {
      const cfg = await getConfig(TASKS_KEY);
      if (cfg && cfg.value) {
        setTasks(cfg.value);
      } else {
        // First time → seed defaults
        setTasks(DEFAULT_TASKS);
        await setConfig(TASKS_KEY, DEFAULT_TASKS);
      }
    } catch {
      // Fallback to localStorage
      const local = localStorage.getItem(TASKS_KEY);
      if (local) {
        setTasks(JSON.parse(local));
      } else {
        setTasks(DEFAULT_TASKS);
      }
    }
    setLoading(false);
  }

  const saveTasks = useCallback(async (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(TASKS_KEY, JSON.stringify(newTasks));
    try { await setConfig(TASKS_KEY, newTasks); } catch {}
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks(prev => {
      const updated = prev.map(t => t.id === id ? { ...t, checked: !t.checked } : t);
      localStorage.setItem(TASKS_KEY, JSON.stringify(updated));
      setConfig(TASKS_KEY, updated).catch(() => {});
      return updated;
    });
  }, []);

  const addComment = useCallback((taskId, text) => {
    setTasks(prev => {
      const updated = prev.map(t => {
        if (t.id !== taskId) return t;
        return {
          ...t,
          comments: [...(t.comments || []), {
            id: Date.now().toString(),
            text,
            created: new Date().toISOString(),
          }],
        };
      });
      localStorage.setItem(TASKS_KEY, JSON.stringify(updated));
      setConfig(TASKS_KEY, updated).catch(() => {});
      return updated;
    });
  }, []);

  const deleteComment = useCallback((taskId, commentId) => {
    setTasks(prev => {
      const updated = prev.map(t => {
        if (t.id !== taskId) return t;
        return { ...t, comments: (t.comments || []).filter(c => c.id !== commentId) };
      });
      localStorage.setItem(TASKS_KEY, JSON.stringify(updated));
      setConfig(TASKS_KEY, updated).catch(() => {});
      return updated;
    });
  }, []);

  const filteredTasks = filter === 'all' ? tasks
    : filter === 'done' ? tasks.filter(t => t.checked)
    : tasks.filter(t => !t.checked);

  const stats = {
    total: tasks.length,
    done: tasks.filter(t => t.checked).length,
    percent: tasks.length ? Math.round(tasks.filter(t => t.checked).length / tasks.length * 100) : 0,
  };

  const groupStats = Object.keys(GROUPS).reduce((acc, g) => {
    const groupTasks = tasks.filter(t => t.group === g);
    acc[g] = {
      total: groupTasks.length,
      done: groupTasks.filter(t => t.checked).length,
      percent: groupTasks.length ? Math.round(groupTasks.filter(t => t.checked).length / groupTasks.length * 100) : 0,
    };
    return acc;
  }, {});

  return { tasks: filteredTasks, allTasks: tasks, loading, filter, setFilter, toggleTask, addComment, deleteComment, stats, groupStats, saveTasks };
}
