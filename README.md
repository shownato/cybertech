# Seguidor de linha — SC Cria+

Projeto de montagem e teste de um carrinho seguidor de linha com micro:bit.

## Abrir o projeto

Abra `guia-montagem-carrinho-3d.html` no Chrome ou Edge. O guia inclui o modelo 3D de montagem e a pista 3D de teste. Para visualizar arquivos separadamente, use `pista-maker-2026-3d.html` e `chassi-modificado-rodas-80mm-3d.html`.

## Arquivos

- `guia-montagem-carrinho-3d.html`: guia visual de montagem com a pista integrada.
- `pista-maker-2026-3d.html`: simulador 3D da pista.
- `chassi-modificado-rodas-80mm.svg`: desenho vetorial do chassi, em milímetros.
- `chassi-modificado-rodas-80mm-3d.html`: visualização 3D do chassi.
- `seguidor-4-sensores-makecode.ts`: código MakeCode de referência para quatro sensores.
- `pista-referencia.png`: imagem de referência do traçado.

## Atenção antes de fabricar

Confira as dimensões dos motores, rodas, sensores, espaçadores e furos nas peças reais. Faça primeiro um teste de encaixe em retalho de MDF e confirme a altura dos sensores sobre a pista. O SVG representa o desenho; a largura do corte a laser e a espessura real do MDF podem alterar o encaixe.

O programa é uma referência para adaptar no MakeCode às conexões e à lógica de controle montadas no carrinho. Teste as saídas dos sensores e dos motores com as rodas suspensas antes de colocar o robô na pista.
