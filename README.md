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
- `controle-dois-microbits-controle.ts`: código do micro:bit de mão para controlar o carrinho por rádio.
- `controle-dois-microbits-carrinho.ts`: código do micro:bit instalado no carrinho, conectado à L298N.
- `pista-referencia.png`: imagem de referência do traçado.
- `microbit-montado-na-expansao.jpeg`: foto da montagem real do micro:bit na placa de expansão.
- `mapa-ligacoes.svg`: esquema colorido dos sensores, micro:bit, L298N, motores e alimentação.

## Atenção antes de fabricar

Confira as dimensões dos motores, rodas, sensores, espaçadores e furos nas peças reais. Faça primeiro um teste de encaixe em retalho de MDF e confirme a altura dos sensores sobre a pista. O SVG representa o desenho; a largura do corte a laser e a espessura real do MDF podem alterar o encaixe.

O programa é uma referência para adaptar no MakeCode às conexões e à lógica de controle montadas no carrinho. Teste as saídas dos sensores e dos motores com as rodas suspensas antes de colocar o robô na pista.

## Carrinho controlado por dois micro:bits

Os dois arquivos `controle-dois-microbits-*.ts` formam outro modo de uso, separado do seguidor autônomo por sensores. Grave o arquivo `controle` no micro:bit de mão e `carrinho` no micro:bit ligado à L298N. Ambos usam rádio grupo 1. Toque A para comandar o motor esquerdo e B para o direito; incline o controle para trás (Roll abaixo de -35°) ao tocar para selecionar ré. Cada motor mantém o último comando recebido. Para avançar com os dois, toque A e depois B; para parar ambos, aperte A+B juntos. Faça o primeiro teste com as rodas suspensas.

Na L298N, retire os jumpers ENA e ENB; ligue P13/P14/P15 em ENA/IN1/IN2 e P16/P19/P20 em ENB/IN3/IN4. Se um motor andar ao contrário, troque os dois fios dele em OUT1/OUT2 ou OUT3/OUT4, ou altere a opção `INVERTER_*` no código.
