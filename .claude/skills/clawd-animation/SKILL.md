---
name: clawd-animation
description: "Kit para criar animações pintadas à mão do Clawd (o personagem laranja da Claude) em p5.js e p5.brush e renderizar em MP4: personagem com vistas, emoções, bocas, chapéus, danças e câmera, mais um renderizador com contact sheets para revisar. Usar quando o Rai pedir um vídeo ou animação com o Clawd, uma animação de personagem com cara de pintura/aquarela feita em código, ou citar o ClaudeAnimationBase."
---

# Animação do Clawd (ClaudeAnimationBase)

Baseado no [ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase)
de John Heibel (MIT, ver `LICENSE`). O kit completo está em `kit/`.

## Começar um vídeo

1. Copie `kit/` para uma pasta nova de projeto (nunca edite a cópia dentro da
   skill) e rode `npm ci` lá dentro.
2. **Leia `ANIMATION_GUIDE.md` inteiro antes de qualquer código.** Ele traz
   as regras (pintado à mão, vivo, uma peça só, sem texto, sempre com
   transição, algo acontece em cada cena), o fluxo de trabalho e a API do
   Clawd. Siga o guia; ele manda neste projeto.
3. Faça o storyboard e mostre ao Rai antes de construir.
4. Construa cena por cena em `src/scenes/` e revise com contact sheets,
   strips e crops (comandos no guia) antes do render final.
5. Render final: `node render.mjs --clip --out=out/video.mp4`.

O demo pronto está em `src/scenes/demo.js` (11 s). Abra `studio.html` no
Chrome para ver a timeline; `?loop=emotions` e `?loop=views` mostram o
model sheet do personagem.

## Neste ambiente (Claude Code na nuvem)

- Node.js, Chromium e ffmpeg já vêm instalados.
- Aponte o Chromium: `export CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
  (se a versão mudar, procure em `/opt/pw-browsers/chromium-*/chrome-linux/chrome`).
- Não há GPU: use sempre `--soft-gl`.
- **É lento sem GPU**: cerca de 35 a 40 segundos por quadro com as
  aquarelas do p5.brush. Um vídeo de 10 s a 30 fps leva horas. Por isso:
  - Revise só com contact sheets e quadros soltos, nunca com o vídeo inteiro.
  - Avise o Rai do tempo antes do render final.
  - Se ele aceitar, troque os preenchimentos de aquarela por algo mais leve,
    como o próprio README recomenda para máquina sem placa de vídeo.
- Rode renders longos em segundo plano.

## Marca

O Clawd é personagem da Anthropic. Use em peças pessoais e de estudo; para
peça de cliente ou uso comercial, confirme com o Rai antes.
