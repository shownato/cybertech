# Projeto dos dois carrinhos — SC Cria+

Para a prova do Anexo I, abra os [três programas da Missão Controlada](missao-controlada-anexo-i/).

O [guia dos dois desafios](GUIA-DOS-DESAFIOS.md) relaciona cada anexo aos materiais da equipe. O Carrinho 1 é um protótipo de treino da Missão Controlada. A organização fornece o robô oficial.

Os arquivos estão separados por veículo. **Confira o número do carrinho antes de abrir ou gravar qualquer código.**

## Carrinho 1 — controle remoto (dois micro:bits)

Pasta [`carrinho-1-controle-dois-microbits`](carrinho-1-controle-dois-microbits/):

- `01-microbit-controle.ts`: micro:bit que fica na mão.
- `02-microbit-receptor-no-carrinho.ts`: micro:bit instalado no carrinho e ligado à L298N.
- `LEIA-ME.md`: sequência de gravação, comandos e teste.

Este carrinho é dirigido por rádio. **Não grave nele o programa dos sensores do Carrinho 2.**

## Carrinho 2 — seguidor de linha autônomo

Pasta [`carrinho-2-seguidor-autonomo`](carrinho-2-seguidor-autonomo/):

- `microbit-seguidor-4-sensores.ts`: programa autônomo dos quatro sensores.
- `guia-montagem-carrinho-3d.html`: guia de montagem e ligações; abra no Chrome ou Edge.
- `mapa-ligacoes.svg`: pinagem dos sensores, L298N, motores e alimentação.
- `chassi-modificado-rodas-80mm.svg` e `chassi-modificado-rodas-80mm-3d.html`: desenho e vista 3D do chassi.
- `microbit-montado-na-expansao.jpeg`: foto da montagem da placa.
- `LEIA-ME.md`: descrição deste veículo.
- `TUTORIAL-MONTAGEM-E-TESTE.md`: tutorial completo, com requisitos do edital, montagem, ligações, programação, calibração e checklist.
- `regulamento-oficial-seguidor-de-linha-2026.pdf`: Anexo II usado para conferir as regras.

## Recursos compartilhados

A pasta [`recursos-compartilhados`](recursos-compartilhados/) contém a pista 3D, a imagem e o PDF do desenho do traçado. O PDF do desenho não substitui o regulamento.

Antes de testar os motores, suspenda as rodas e confira as ligações e tensões. Nunca ligue a bateria diretamente ao micro:bit.
