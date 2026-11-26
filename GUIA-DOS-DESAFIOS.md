# Dois desafios SC Cria+ 2026

## Anexo I — Missão Controlada

A organização fornece o robô. A equipe leva **três micro:bits transmissores** e um notebook para configurar nos três o mesmo grupo de rádio atribuído no dia.

| Controle | Comandos oficiais | Programa conferido |
|---|---|---|
| 1 · Movimento retilíneo | F0 e F1 para frente lenta e rápida, R0 e R1 para ré lenta e rápida, P0 para parar | [Movimento](missao-controlada-anexo-i/01-movimento.ts) |
| 2 · Giro | D0 direita, E0 esquerda, P0 parada | [Giro](missao-controlada-anexo-i/02-giro.ts) |
| 3 · Respostas | AA, BB, CC, DD, EE para A até E | [Respostas](missao-controlada-anexo-i/03-respostas.ts) |

O [protótipo de dois micro:bits](carrinho-1-controle-dois-microbits/) serve para treino. Seu receptor interpreta F0/F1 como comandos de motores diferentes. Na prova, esses comandos indicam velocidades do robô da organização. O receptor USB também serve para treino. Se houver somente três placas disponíveis, dedique as três aos transmissores para a prova.

Treinem percorrer pelo menos três estações diferentes e retornar pelo portal. São duas tentativas oficiais e vale o menor tempo final. A figura da arena no Anexo I é um exemplo.

## Anexo II — Missão Autônoma

A equipe leva o próprio seguidor de linha, com **um micro:bit**, expansão, ponte H, dois motores TT amarelos 48:1 e até seis sensores ópticos permitidos. A navegação reage aos sensores em tempo real, com rádio inativo e sem percurso memorizado.

Já temos o projeto em MDF, dois motores TT com rodas do kit, roda boba, micro:bit V2 com expansão, quatro sensores, L298N, LM2596 HW-411, bateria de 9 V e um programa de referência. O desenho da pista branca sobre fundo preto e seu simulador pertencem ao treino deste desafio.

Falta confirmar os modelos dos sensores e a redução dos motores, calibrar as leituras, testar a alimentação sob carga, pesar e medir o conjunto com bateria (**até 1 kg e 250 × 250 × 200 mm**) e conferir a rotina de busca com a organização antes da inspeção. A capa e o Art. 23 indicam datas diferentes. Confirmem a data com a organização.

A prova tem três tomadas de tempo. A equipe pode seguir o [tutorial de montagem e teste](carrinho-2-seguidor-autonomo/TUTORIAL-MONTAGEM-E-TESTE.md).

**Placas:** para deixar os dois desafios montados ao mesmo tempo, são três micro:bits para os controles e um para o seguidor. Com três placas no total, planejem o remanejamento conforme os horários das provas.
