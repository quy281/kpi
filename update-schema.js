import fs from 'fs';

const PB_URL = 'https://db.mkg.vn';

async function api(path, method, body, token) {
    const h = { 'Content-Type': 'application/json' };
    if (token) h.Authorization = 'Bearer ' + token;
    const r = await fetch(PB_URL + path, {
        method: method || 'GET', headers: h,
        body: body ? JSON.stringify(body) : null,
    });
    const data = await r.json().catch(() => null);
    return { ok: r.ok, status: r.status, data };
}

async function run() {
  try {
    // Login as superuser
    console.log("Logging in...");
    const authRes = await api('/api/collections/_superusers/auth-with-password', 'POST', {
        identity: 'quy28181818@gmail.com', password: '@Mkg201444',
    });
    if (!authRes.ok) {
        console.error("Auth failed:", authRes.data);
        return;
    }
    const tk = authRes.data.token;
    console.log("Logged in. Getting collection...");

    // Get the collection to find its ID
    const cRes = await api('/api/collections/mkg_pivot_config', 'GET', null, tk);
    if (!cRes.ok) {
        console.error("Failed to get collection:", cRes.data);
        return;
    }
    const collection = cRes.data;
    
    // Check fields
    console.log("Existing fields:", collection.schema || collection.fields); // older vs newer PB versions

    // Update collection
    const id = collection.id;
    // For PB >= 0.20, it uses fields array. For older, it uses schema
    const isV0_20 = !!collection.fields;
    
    const updateBody = {
      listRule: "",
      viewRule: "",
      createRule: "",
      updateRule: "",
      deleteRule: ""
    };

    if (isV0_20) {
      // It's PB v0.20+
      const fields = collection.fields || [];
      if (!fields.some(f => f.name === 'key')) fields.push({ name: 'key', type: 'text' });
      if (!fields.some(f => f.name === 'value')) fields.push({ name: 'value', type: 'json' });
      updateBody.fields = fields;
    } else {
      // It's PB < 0.20
      const schema = collection.schema || [];
      if (!schema.some(f => f.name === 'key')) schema.push({ name: 'key', type: 'text' });
      if (!schema.some(f => f.name === 'value')) schema.push({ name: 'value', type: 'json' });
      updateBody.schema = schema;
    }

    console.log("Updating collection...");
    const updateRes = await api('/api/collections/' + id, 'PATCH', updateBody, tk);
    if (updateRes.ok) {
        console.log("Collection updated successfully!");
    } else {
        console.error("Failed to update collection:", JSON.stringify(updateRes.data, null, 2));
    }
  } catch (e) {
    console.error(e);
  }
}

run();
