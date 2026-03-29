import fs from 'fs';

async function run() {
  try {
    const res = await fetch("https://db.mkg.vn/api/collections/mkg_pivot_config/records?filter=(key='tasks')");
    const text = await res.text();
    fs.writeFileSync('pb-out.json', text);
    console.log("Written to pb-out.json");
  } catch (err) {
    console.error(err);
  }
}
run();
