# Carrinho 1 — controle remoto

Este é o protótipo de treino. A prova oficial usa três transmissores e o robô fornecido pela organização. Veja a [tabela de comandos do Anexo I](../../GUIA-DOS-DESAFIOS.md).

- `01-microbit-controle.ts`: grave no micro:bit de mão.
- `02-microbit-receptor-no-carrinho.ts`: grave no micro:bit que fica no carrinho, conectado à L298N.

Ambos usam rádio grupo 1. O controle manda `F0`/`R0` pelo botão A, `F1`/`R1` pelo botão B (a inclinação Roll abaixo de −35° escolhe ré) e `P0` ao apertar A+B. No receptor, F0/R0 comandam o motor esquerdo, F1/R1 o direito e P0 para os dois.

Faça o primeiro teste com as rodas suspensas. Para testar um sentido, use A ou B; para parar os motores, aperte A+B.
