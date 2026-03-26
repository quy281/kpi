import PocketBase from 'pocketbase';

const pb = new PocketBase('https://db.mkg.vn');

export async function getConfig(key) {
  try {
    const result = await pb.collection('fadi_config').getList(1, 1, {
      filter: `key = "${key}"`,
    });
    return result.items[0] || null;
  } catch { return null; }
}

export async function setConfig(key, value) {
  const existing = await getConfig(key);
  if (existing) {
    return await pb.collection('fadi_config').update(existing.id, { value });
  } else {
    return await pb.collection('fadi_config').create({ key, value });
  }
}

export default pb;
