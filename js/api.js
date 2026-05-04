// ============================================
// GLAZORA – API Client (Frontend ↔ Backend)
// ============================================
const API_BASE = window.GLAZORA_API || 'https://glazoradashboard.onrender.com/api';
// 'https://glazoradashboard.onrender.com/api';
//  'http://localhost:5000/api' ||

// Token helpers
const Auth = {
  getToken: ()     => localStorage.getItem('glazora_token'),
  setToken: (t)    => localStorage.setItem('glazora_token', t),
  removeToken: ()  => localStorage.removeItem('glazora_token'),
  getAdminToken: ()   => localStorage.getItem('glazora_admin_token'),
  setAdminToken: (t)  => localStorage.setItem('glazora_admin_token', t),
  removeAdminToken: () => localStorage.removeItem('glazora_admin_token'),
  getClient: ()    => JSON.parse(localStorage.getItem('glazora_client') || 'null'),
  setClient: (c)   => localStorage.setItem('glazora_client', JSON.stringify(c)),
  removeClient: () => localStorage.removeItem('glazora_client'),
  isLoggedIn: ()   => !!localStorage.getItem('glazora_token'),
  isAdminLoggedIn: () => !!localStorage.getItem('glazora_admin_token'),
};

// Generic fetch wrapper
async function apiFetch(path, options = {}) {
  const token = options.adminAuth ? Auth.getAdminToken() : Auth.getToken();
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Language': currentLang || 'ar',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  let res;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers,
      body: options.body ? (typeof options.body === 'string' ? options.body : JSON.stringify(options.body)) : undefined,
    });
  } catch (err) {
    console.error('Network error:', path, err.message);
    return {
      ok: false,
      status: 0,
      data: { success: false, message: 'Cannot reach server. Make sure the backend is running on port 5000.' }
    };
  }

  const data = await res.json().catch(() => ({ success: false, message: 'Server error' }));

  if (res.status === 401) {
    if (options.adminAuth) {
      // Admin token expired/invalid — clear it and reload to show admin login screen
      Auth.removeAdminToken();
      window.location.reload();
    } else {
      Auth.removeToken();
      Auth.removeClient();
      if (!window.location.pathname.includes('signin')) {
        window.location.href = 'signin.html';
      }
    }
  }
  return { ok: res.ok, status: res.status, data };
}

// ── Auth API ──────────────────────────────────
const AuthAPI = {
  sendOTP: (contact, contactType = 'email', lang = 'ar') =>
    apiFetch('/auth/send-otp', {
      method: 'POST',
      body: { contact, contactType, lang }
    }),

  verifyOTP: (contact, otp, lang = 'ar') =>
    apiFetch('/auth/verify-otp', {
      method: 'POST',
      body: { contact, otp, lang }
    }),

  adminLogin: (email, password) =>
    apiFetch('/auth/admin/login', {
      method: 'POST',
      body: { email, password }
    }),

  adminMe: () => apiFetch('/auth/admin/me', { adminAuth: true }),
};

// ── Client API ────────────────────────────────
const ClientAPI = {
  getProfile: () => apiFetch('/client/profile'),
  updateProfile: (data) => apiFetch('/client/profile', { method: 'PATCH', body: data }),
  getProjects: () => apiFetch('/client/projects'),
  getDashboard: (projectId) => apiFetch(`/client/projects/${projectId}/dashboard`),
  approveQuotation: (projectId) =>
    apiFetch(`/client/projects/${projectId}/quotation/approve`, { method: 'POST' }),
};

// ── Admin API ─────────────────────────────────
const AdminAPI = {
  getDashboard: () => apiFetch('/admin/dashboard', { adminAuth: true }),

  // Clients
  getClients: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return apiFetch(`/admin/clients${qs ? '?' + qs : ''}`, { adminAuth: true });
  },
  updateClient: (id, data) => apiFetch(`/admin/clients/${id}`, { method: 'PATCH', body: data, adminAuth: true }),

  // Projects
  getProjects: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return apiFetch(`/admin/projects${qs ? '?' + qs : ''}`, { adminAuth: true });
  },
  createProject: (data) => apiFetch('/admin/projects', { method: 'POST', body: data, adminAuth: true }),
  getProject: (id) => apiFetch(`/admin/projects/${id}`, { adminAuth: true }),
  updateProject: (id, data) => apiFetch(`/admin/projects/${id}`, { method: 'PATCH', body: data, adminAuth: true }),
  updatePhase: (projectId, phaseId, data) =>
    apiFetch(`/admin/projects/${projectId}/phases/${phaseId}`, { method: 'PATCH', body: data, adminAuth: true }),

  // Connect
  connectClient: (clientId, projectId) =>
    apiFetch('/admin/connect-client', { method: 'POST', body: { clientId, projectId }, adminAuth: true }),

  // Contacts
  getContacts: () => apiFetch('/admin/contacts', { adminAuth: true }),
  updateContact: (id, data) => apiFetch(`/admin/contacts/${id}`, { method: 'PATCH', body: data, adminAuth: true }),
};

// ── Payments API ──────────────────────────────
const PaymentsAPI = {
  getAll: (projectId) => apiFetch(`/payments?project_id=${projectId}`, { adminAuth: true }),
  create: (data) => apiFetch('/payments', { method: 'POST', body: data, adminAuth: true }),
  update: (id, data) => apiFetch(`/payments/${id}`, { method: 'PATCH', body: data, adminAuth: true }),
  delete: (id) => apiFetch(`/payments/${id}`, { method: 'DELETE', adminAuth: true }),
};

// ── Quotations API ────────────────────────────
const QuotationsAPI = {
  getAll: (projectId) => apiFetch(`/quotations?project_id=${projectId}`, { adminAuth: true }),
  create: (data) => apiFetch('/quotations', { method: 'POST', body: data, adminAuth: true }),
  get: (id) => apiFetch(`/quotations/${id}`, { adminAuth: true }),
  updateStatus: (id, status) => apiFetch(`/quotations/${id}/status`, { method: 'PATCH', body: { status }, adminAuth: true }),
};

// ── Photos API ────────────────────────────────
const PhotosAPI = {
  upload: (formData) => {
    return fetch(`${API_BASE}/photos/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${Auth.getAdminToken()}` },
      body: formData, // FormData — no Content-Type header needed
    }).then(r => r.json());
  },
  delete: (id) => apiFetch(`/photos/${id}`, { method: 'DELETE', adminAuth: true }),
  updateCaption: (id, data) => apiFetch(`/photos/${id}`, { method: 'PATCH', body: data, adminAuth: true }),
};

// ── Contact form ──────────────────────────────
const ContactAPI = {
  submit: (data) => apiFetch('/projects/contact', { method: 'POST', body: data }),
};

// ── UI Helpers ────────────────────────────────
function showToast(msg, type = 'success') {
  const existing = document.getElementById('glazora-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'glazora-toast';
  toast.style.cssText = `
    position:fixed;bottom:24px;${currentLang==='ar'?'right':'left'}:24px;
    background:${type === 'success' ? '#1a3d20' : '#c0392b'};
    color:#fff;padding:14px 20px;border-radius:12px;
    font-size:14px;z-index:99999;
    box-shadow:0 8px 24px rgba(0,0,0,0.2);
    max-width:340px;line-height:1.5;
    animation:slideInToast 0.3s ease;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function setLoading(btn, loading) {
  if (!btn) return;
  btn.disabled = loading;
  if (loading) {
    btn._originalText = btn.textContent;
    btn.textContent = currentLang === 'ar' ? 'جاري التحميل...' : 'Loading...';
  } else {
    btn.textContent = btn._originalText || btn.textContent;
  }
}

// Add toast animation
const styleEl = document.createElement('style');
styleEl.textContent = `@keyframes slideInToast { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }`;
document.head.appendChild(styleEl);
