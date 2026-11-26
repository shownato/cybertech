# Missão Controlada · Anexo I

Crie três projetos no MakeCode. Na aba JavaScript, cole um arquivo por projeto e grave cada projeto em seu próprio micro:bit. Identifique as placas como Movimento, Giro e Respostas.

| Programa | Botões e comandos |
|---|---|
| [01 · Movimento](01-movimento.ts) | A envia frente lenta (F0), B envia frente rápida (F1). Com Roll abaixo de −35°, A envia ré lenta (R0) e B envia ré rápida (R1). A+B envia parada (P0). |
| [02 · Giro](02-giro.ts) | A envia esquerda (E0), B envia direita (D0) e A+B envia parada (P0). |
| [03 · Respostas](03-respostas.ts) | A muda a letra exibida. B envia a escolha (AA, BB, CC, DD ou EE). |

Use o grupo de rádio 1 para treino. Na prova, troque o número em `radio.setGroup(1)` nos três programas pelo grupo informado pela organização. O robô oficial recebe os comandos.

Os três programas passaram na compilação com MakeCode para micro:bit 9.1.2 e na conferência das mensagens com entradas simuladas. A recepção por rádio ainda precisa ser testada com o robô oficial.

[Guia dos dois desafios](../GUIA-DOS-DESAFIOS.md) · [Protótipo de treino](../carrinho-1-controle-dois-microbits/)
