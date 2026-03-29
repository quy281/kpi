import PocketBase from 'pocketbase';
import fs from 'fs';
const pb = new PocketBase('https://db.mkg.vn');

async function run() {
  try {
    const result = await pb.collection('mkg_pivot_config').getList(1, 1, {
      filter: `key = "tasks"`,
    });
    fs.writeFileSync('pb-out6.txt', "SUCCESS\n" + JSON.stringify(result, null, 2));
  } catch (err) {
    const out = `ERROR TYPE: ${err.name}\nDATA: ${JSON.stringify(err.response, null, 2)}\nMSG: ${err.message}`;
    fs.writeFileSync('pb-out6.txt', out);
  }
}
run();
