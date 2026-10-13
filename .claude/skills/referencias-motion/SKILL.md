---
name: referencias-motion
description: "Banco de referências com 811 vídeos e animações feitos por IA escrevendo código (Opus, Codex, Three.js, Remotion, p5.js...), tirado do awesome-ai-motion. Usar quando o Rai pedir ideias, referências, inspiração ou exemplos de motion, animação, vídeo explicativo, promo de produto, lyric video, 3D interativo, pixel art ou estilo visual antes de criar um vídeo; ou quando perguntar 'o que já fizeram com IA nesse estilo'."
---

# Referências de motion feito com IA

Índice de 811 obras catalogadas pelo projeto
[awesome-ai-motion](https://github.com/guanmo-ai/awesome-ai-motion) (MIT).
Cada obra tem título, categoria, resumo, autor, modelo usado, duração,
quantos salvamentos teve, link da galeria, post original e, quando existe,
o link do código ou do prompt do autor.

## Como buscar

```bash
node scripts/buscar.mjs --categorias                     # categorias e quantidade
node scripts/buscar.mjs kinetic typography               # todos os termos, em inglês
node scripts/buscar.mjs --categoria="Product promo" --limite=10
node scripts/buscar.mjs three.js --com-codigo            # só obras com código público
node scripts/buscar.mjs --com-prompt                     # só obras com prompt original publicado
```

Caminhos relativos à pasta desta skill. Os resultados saem ordenados por
salvamentos. Os resumos estão em inglês: busque com termos em inglês
(`logo`, `chart`, `isometric`, `particles`, `lyric`, `map`, `glitch`, `3d`).

Categorias: Short motion, Product promo, Explainer, 3D & interactive,
Narrative short, Music & lyrics, Pixel & characters.

## Como usar nas respostas

1. Busque com 2 ou 3 combinações de termos e escolha de 3 a 6 obras que
   realmente batem com o pedido.
2. Para cada uma, diga em uma linha o que dá para aproveitar (ritmo,
   transição, paleta, técnica) e passe o link da **galeria** para o Rai
   assistir.
3. Se ele quiser reproduzir uma técnica, mostre o link de código ou prompt
   quando existir. `prompt: original` = prompt do autor publicado;
   `brief` = só uma descrição; `unknown` = não publicado.

## Direitos

Os vídeos, prompts e códigos são dos autores, não deste índice. Use como
referência e inspiração; não copie peças nem reutilize mídia de terceiros em
trabalho de cliente sem autorização. Antes de reaproveitar código, confira a
licença indicada em `Recurso (...)`; sem licença não significa liberado.

## Atualizar o índice

O índice é uma foto de 13/10/2026. Para atualizar, gere de novo
`data/cases.jsonl` a partir de `data/cases.json` do repositório original.
