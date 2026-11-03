import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const app = express();
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIR = path.join(__dirname, 'data');

fs.mkdirSync(DIR, { recursive: true });

app.use(cors(), express.json({ limit: '100kb' }));

const KINDS = ['orders', 'appointments', 'contact', 'newsletter'];

app.post('/api/:kind', (q, r) => {
  const { kind } = q.params;
  if (!KINDS.includes(kind)) return r.sendStatus(404);

  const f = path.join(DIR, `${kind}.json`);
  const l = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : [];
  l.push(q.body);
  fs.writeFileSync(f, JSON.stringify(l, null, 2));
  r.json({ ok: true });
});

app.get('/api/health', (q, r) => r.json({ ok: true }));
app.listen(4000, () => console.log('API on http://localhost:4000'));
