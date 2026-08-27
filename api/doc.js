// Gemte tekstrettelser til /margeritten.
// Bruger Vercel Blob hvis BLOB_READ_WRITE_TOKEN er sat paa projektet.
// Uden den svarer den {configured:false}, og siden gemmer lokalt i browseren i stedet.

const KEY = 'margeritten/edits.json';

async function blob() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;
  try {
    return await import('@vercel/blob');
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const b = await blob();

  if (!b) {
    if (req.method === 'GET') return res.status(200).json({ configured: false, edits: {} });
    return res.status(200).json({ ok: false, configured: false });
  }

  try {
    if (req.method === 'GET') {
      const { blobs } = await b.list({ prefix: KEY, limit: 1 });
      if (!blobs.length) return res.status(200).json({ configured: true, edits: {} });
      const r = await fetch(blobs[0].url, { cache: 'no-store' });
      const edits = r.ok ? await r.json() : {};
      return res.status(200).json({ configured: true, edits });
    }

    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') body = JSON.parse(body);
      const edits = (body && body.edits) || {};
      // simpel oprydning: ingen scripts eller event-handlere i gemt tekst
      const clean = {};
      for (const [k, v] of Object.entries(edits)) {
        if (typeof v !== 'string' || v.length > 20000) continue;
        clean[k] = v.replace(/<\s*script[\s\S]*?<\s*\/\s*script\s*>/gi, '').replace(/\son\w+\s*=/gi, ' data-x=');
      }
      await b.put(KEY, JSON.stringify(clean), {
        access: 'public',
        contentType: 'application/json',
        addRandomSuffix: false,
        allowOverwrite: true,
      });
      return res.status(200).json({ ok: true, configured: true, count: Object.keys(clean).length });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ ok: false });
  } catch (e) {
    return res.status(200).json({ ok: false, configured: false, error: String(e && e.message || e) });
  }
}
