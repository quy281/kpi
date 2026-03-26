const PB_URL = 'https://db.mkg.vn';

async function api(path, method, body, token) {
  const h = { 'Content-Type': 'application/json' };
  if (token) h.Authorization = 'Bearer ' + token;
  const r = await fetch(PB_URL + path, {
    method: method || 'GET',
    headers: h,
    body: body ? JSON.stringify(body) : null,
  });
  const t = await r.text();
  let d;
  try { d = JSON.parse(t); } catch (_) { d = { raw: t }; }
  return { ok: r.ok, status: r.status, data: d };
}

async function main() {
  console.log('🔑 Logging in as superuser...');
  const a = await api('/api/collections/_superusers/auth-with-password', 'POST', {
    identity: 'quy28181818@gmail.com',
    password: '@Mkg201444',
  });

  if (!a.ok) {
    console.error('❌ Login failed:', a.data);
    return;
  }
  const tk = a.data.token;
  console.log('✅ Logged in');

  // Create fadi_config collection
  console.log('📦 Creating fadi_config collection...');
  const col = await api('/api/collections', 'POST', {
    name: 'fadi_config',
    type: 'base',
    fields: [
      { name: 'key', type: 'text', required: true },
      { name: 'value', type: 'json' },
    ],
    listRule: '',
    viewRule: '',
    createRule: '',
    updateRule: '',
    deleteRule: '',
  }, tk);

  if (col.ok) {
    console.log('✅ Collection fadi_config created');
  } else if (col.status === 400 && JSON.stringify(col.data).includes('already exists')) {
    console.log('ℹ️ Collection fadi_config already exists');

    // Update rules to be open
    const list = await api('/api/collections', 'GET', null, tk);
    const existing = list.data?.items?.find(c => c.name === 'fadi_config') ||
                     (Array.isArray(list.data) ? list.data.find(c => c.name === 'fadi_config') : null);
    if (existing) {
      await api('/api/collections/' + existing.id, 'PATCH', {
        listRule: '',
        viewRule: '',
        createRule: '',
        updateRule: '',
        deleteRule: '',
      }, tk);
      console.log('✅ Rules updated to open');
    }
  } else {
    console.error('❌ Failed:', col.data);
  }

  console.log('🎉 Done! FADI Tracker is ready to use.');
}

main();
