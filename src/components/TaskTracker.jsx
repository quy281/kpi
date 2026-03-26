import { useState } from 'react';
import { useTaskStore, GROUPS } from '../hooks/useTaskStore';

export default function TaskTracker() {
  const { tasks, loading, filter, setFilter, toggleTask, addComment, deleteComment, stats, groupStats } = useTaskStore();
  const [openGroups, setOpenGroups] = useState({ ngay0: true, sprint: true });
  const [commentOpen, setCommentOpen] = useState(null);
  const [commentText, setCommentText] = useState('');

  if (loading) return <div style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>Đang tải...</div>;

  const toggleGroup = (g) => setOpenGroups(p => ({ ...p, [g]: !p[g] }));

  const handleAddComment = (taskId) => {
    if (!commentText.trim()) return;
    addComment(taskId, commentText.trim());
    setCommentText('');
  };

  const formatTime = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' }) + ' ' +
           d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fade-in">
      {/* Overall Progress */}
      <div style={{ marginBottom: 20 }}>
        <div className="progress-header">
          <span className="progress-label">Tiến độ tổng</span>
          <span className="progress-value">{stats.done}/{stats.total} ({stats.percent}%)</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${stats.percent}%` }} />
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">Tổng tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.done}</div>
          <div className="stat-label">Hoàn thành</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.total - stats.done}</div>
          <div className="stat-label">Còn lại</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-bar">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
          Tất cả ({stats.total})
        </button>
        <button className={`filter-btn ${filter === 'todo' ? 'active' : ''}`} onClick={() => setFilter('todo')}>
          Chưa làm ({stats.total - stats.done})
        </button>
        <button className={`filter-btn ${filter === 'done' ? 'active' : ''}`} onClick={() => setFilter('done')}>
          Đã xong ({stats.done})
        </button>
      </div>

      {/* Groups */}
      {Object.entries(GROUPS).map(([groupId, groupInfo]) => {
        const groupTasks = tasks.filter(t => t.group === groupId);
        if (groupTasks.length === 0) return null;
        const gs = groupStats[groupId] || { total: 0, done: 0, percent: 0 };

        return (
          <div key={groupId} className="group-card">
            <div className="group-header" onClick={() => toggleGroup(groupId)}>
              <div className="group-title" style={{ color: groupInfo.color }}>
                <span>{groupInfo.icon}</span>
                <span>{groupInfo.label}</span>
              </div>
              <div className="group-right">
                <span className="group-count">{gs.done}/{gs.total}</span>
                <span className={`group-chevron ${openGroups[groupId] ? 'open' : ''}`}>▼</span>
              </div>
            </div>

            <div className="group-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${gs.percent}%` }} />
              </div>
            </div>

            {openGroups[groupId] && (
              <div className="group-items">
                {groupTasks.map(task => (
                  <div key={task.id}>
                    <div className="task-item">
                      <div
                        className={`task-checkbox ${task.checked ? 'checked' : ''}`}
                        onClick={() => toggleTask(task.id)}
                      />
                      <span
                        className={`task-text ${task.checked ? 'done' : ''}`}
                        onClick={() => toggleTask(task.id)}
                      >
                        {task.text}
                      </span>
                      <button
                        className="task-comment-btn"
                        onClick={() => setCommentOpen(commentOpen === task.id ? null : task.id)}
                      >
                        💬
                        {task.comments && task.comments.length > 0 && (
                          <span className="task-comment-count">{task.comments.length}</span>
                        )}
                      </button>
                    </div>

                    {commentOpen === task.id && (
                      <div className="comment-panel">
                        {(task.comments || []).map(c => (
                          <div key={c.id} className="comment-item">
                            <span className="comment-text">{c.text}</span>
                            <span className="comment-time">{formatTime(c.created)}</span>
                            <button className="comment-delete" onClick={() => deleteComment(task.id, c.id)}>✕</button>
                          </div>
                        ))}

                        <div className="comment-input-row">
                          <input
                            className="comment-input"
                            value={commentText}
                            onChange={e => setCommentText(e.target.value)}
                            placeholder="Thêm ghi chú..."
                            onKeyDown={e => e.key === 'Enter' && handleAddComment(task.id)}
                          />
                          <button className="comment-send" onClick={() => handleAddComment(task.id)}>Gửi</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
