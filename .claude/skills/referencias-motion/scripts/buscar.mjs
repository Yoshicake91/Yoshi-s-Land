#!/usr/bin/env node
// Busca no índice de referências de motion.
// Uso: node buscar.mjs [termos...] [--categoria=X] [--com-codigo] [--com-prompt] [--limite=N]
// Termos são procurados (todos) em título, resumo, autor e modelo, sem diferenciar maiúsculas.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const cases = readFileSync(join(here, '../data/cases.jsonl'), 'utf8').trim().split('\n').map(l => JSON.parse(l));

const flags = {}, terms = [];
for (const a of process.argv.slice(2)) {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  if (m) flags[m[1]] = m[2] ?? true; else terms.push(a.toLowerCase());
}
if (flags.categorias) {
  const count = {};
  for (const c of cases) count[c.category] = (count[c.category] || 0) + 1;
  for (const [k, v] of Object.entries(count).sort((a, b) => b[1] - a[1])) console.log(`${v}\t${k}`);
  process.exit(0);
}
const limit = Number(flags.limite || 15);
const hits = cases.filter(c => {
  if (flags.categoria && c.category.toLowerCase() !== String(flags.categoria).toLowerCase()) return false;
  if (flags['com-codigo'] && !c.resources.some(r => r.kind === 'code')) return false;
  if (flags['com-prompt'] && c.prompt !== 'original') return false;
  const hay = [c.title, c.summary, c.author, c.model].join(' ').toLowerCase();
  return terms.every(t => hay.includes(t));
}).sort((a, b) => (b.bookmarks || 0) - (a.bookmarks || 0));

console.log(`${hits.length} resultado(s)${hits.length > limit ? `, mostrando ${limit}` : ''}\n`);
for (const c of hits.slice(0, limit)) {
  console.log(`## ${c.title}  [${c.category}]`);
  console.log(`@${c.author} · ${c.model || 'modelo não informado'} · ${c.seconds ? Math.round(c.seconds) + 's' : '?'} · ${c.bookmarks ?? '?'} salvos · ${c.published}`);
  console.log(c.summary);
  console.log(`Galeria: ${c.gallery}`);
  console.log(`Post original: ${c.source}`);
  console.log(`Prompt: ${c.prompt}${c.prompt !== 'unknown' ? ` (${c.prompt_source})` : ''}`);
  for (const r of c.resources) console.log(`Recurso (${r.kind}${r.license ? ', ' + r.license : ''}): ${r.url}`);
  console.log();
}
