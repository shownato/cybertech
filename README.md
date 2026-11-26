# Projeto dos carrinhos — SC Cria+

Há **dois carrinhos e dois programas diferentes**. Abra a pasta do carrinho que vai usar antes de copiar o código para o MakeCode.

## Carrinho 1 — controle remoto com dois micro:bits

Este é o primeiro carrinho, comandado por rádio. Ele usa dois micro:bits:

1. Grave [`01-microbit-controle.ts`](carrinho-1-controle-dois-microbits/01-microbit-controle.ts) no micro:bit que fica na mão.
2. Grave [`02-microbit-receptor-no-carrinho.ts`](carrinho-1-controle-dois-microbits/02-microbit-receptor-no-carrinho.ts) no micro:bit instalado no carrinho e ligado à L298N.

Os dois códigos usam rádio grupo 1. O controle envia `F0`, `R0`, `F1`, `R1` ou `P0`; o receptor executa esses comandos nos motores.

## Carrinho 2 — seguidor de linha autônomo

Este carrinho usa quatro sensores e segue a linha sem controle remoto. O código está em [`microbit-seguidor-4-sensores.ts`](carrinho-2-seguidor-autonomo/microbit-seguidor-4-sensores.ts). **Não grave esse programa no Carrinho 1.**

## Desenho, montagem e pista

Abra `guia-montagem-carrinho-3d.html` no Chrome ou Edge. O guia mostra a montagem e inclui a pista 3D. O mapa de ligações e os arquivos do chassi também ficam nesta pasta.

- `mapa-ligacoes.svg`: sensores, micro:bit, L298N, motores e alimentação do carrinho autônomo.
- `pista-maker-2026-3d.html`: simulador 3D da pista.
- `chassi-modificado-rodas-80mm.svg`: desenho vetorial do chassi em milímetros.
- `chassi-modificado-rodas-80mm-3d.html`: vista 3D do chassi.
- `microbit-montado-na-expansao.jpeg`: foto da placa montada.
- `pista-referencia.png`: imagem do traçado.

Antes de testar os motores, levante as rodas do chão. Confira as tensões e as ligações da L298N; não conecte a bateria diretamente ao micro:bit.
