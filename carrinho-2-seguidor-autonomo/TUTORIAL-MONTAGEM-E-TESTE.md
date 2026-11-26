# Tutorial de montagem e teste — Carrinho 2

## Seguidor de linha autônomo para a Missão SC Cria+ 2026

Este tutorial é do **Carrinho 2**, o seguidor de linha autônomo. O Carrinho 1, controlado por rádio com dois micro:bits, é outro projeto e não deve receber este programa. A competição permite apenas um robô por equipe e proíbe rádio durante a prova.

## 1. O que o edital exige

Use o [regulamento oficial (Anexo II)](regulamento-oficial-seguidor-de-linha-2026.pdf) como referência principal. Os requisitos técnicos descritos nele são:

- 1 placa BBC micro:bit (V1 ou V2) e uma placa de expansão;
- programa no ambiente oficial microbit.org, em Blocos, JavaScript ou Python;
- 1 ponte H L298N ou equivalente;
- exatamente 2 motores TT amarelos 48:1 conforme especificação do edital;
- até 6 sensores ópticos reflexivos dos tipos permitidos;
- navegação autônoma em tempo real, reagindo aos sensores; sem rádio e sem percurso memorizado;
- envelope máximo de 250 × 250 × 200 mm e peso máximo de 1.000 g, já com bateria;
- largada pelo botão do micro:bit ou por temporizador, sem empurrar.

O edital proíbe sensores extras, como ultrassom, câmera, sensor de cor I2C e IMU externa. A pista tem linha branca de 19 ± 1 mm, curva com raio mínimo de 150 mm e trechos paralelos separados por pelo menos 200 mm. O regulamento diz que o traçado exato será divulgado no evento; portanto, trate o desenho da pista fornecido como referência visual, não como garantia do percurso oficial. Veja os arquivos em [`../recursos-compartilhados/`](../recursos-compartilhados/).

**Atenção a uma divergência no PDF:** a capa menciona 02/12/2026, enquanto o Art. 23 informa 03/12/2026. Confirme a data com a organização.

## 2. Peças e conferências antes de montar

| Peça | Situação da equipe | Conferir |
|---|---|---|
| Chassi MDF | Desenho SVG e modelo 3D disponíveis nesta pasta | Medidas externas com rodas, largura de corte e espessura do MDF |
| 2 motores TT e rodas do kit | Informados pela equipe | Confirmar que os motores são o modelo 48:1 exigido |
| 1 micro:bit V2 e placa de expansão | Montagem fotografada nesta pasta | Contar apenas uma placa no robô da competição |
| L298N | Informada pela equipe | Conferir rótulos, jumpers ENA/ENB e borne de alimentação |
| 4 sensores ópticos | Quantidade dentro do limite | Confirmar modelo aceito, rótulos VCC/GND/DO e nível lógico de DO |
| LM2596 HW-411 | Informado pela equipe | Ajustar com multímetro antes de conectar ao circuito |
| Bateria 9 V | Escolha atual | Verificar se mantém tensão sob a corrente dos motores e fica presa com segurança |
| Roda boba e espaçadores | Usados no conjunto | Conferir folga, altura e estabilidade com o peso instalado |

O modelo exato dos sensores e a relação dos motores ainda precisam de confirmação física. Não trate o desenho como confirmação dessas especificações.

## 3. Monte a parte mecânica

1. Abra [o SVG do chassi](chassi-modificado-rodas-80mm.svg) em escala 1:1 e imprima em tamanho real para conferir as peças antes do corte definitivo.
2. Confira um motor em um retalho do mesmo MDF. O corte a laser, a espessura e a variação entre motores mudam o encaixe.
3. Prenda os dois motores nos rasgos e entalhes do chassi, instale as rodas e gire-as à mão. Elas não devem tocar o MDF nem os fios.
4. Instale a roda boba, os sensores e seus espaçadores. Os quatro sensores devem ficar paralelos e na mesma altura.
5. Com o carrinho no chão e com bateria/componentes instalados, ajuste a distância entre a face óptica e a pista. O guia 3D mostra cerca de 2,5 mm como ponto inicial para TCRT5000; como o modelo real ainda não foi confirmado, ajuste conforme o comportamento medido dos módulos.
6. Deixe USB, botões A/B, bornes da L298N, ajuste do LM2596 e bateria acessíveis. Prenda os cabos longe das rodas.
7. Meça largura, comprimento e altura no ponto mais externo e pese o carrinho completo com bateria. Ele precisa caber no gabarito de 250 × 250 × 200 mm e pesar no máximo 1 kg.

> [Abrir o guia visual 3D de montagem e a pista integrada](guia-montagem-carrinho-3d.html) · [Abrir o modelo 3D do chassi](chassi-modificado-rodas-80mm-3d.html)

## 4. Ligue os sensores e a ponte H

Consulte o [mapa visual de ligações](mapa-ligacoes.svg). Na expansão, conecte o fio de sinal aos furos com o número impresso; não conte posições a partir da borda.

| Sensor, da esquerda para a direita no sentido de marcha | Cor do fio de sinal | Pino micro:bit |
|---|---|---|
| S1, extremo esquerdo | Amarelo | P0 |
| S2, centro esquerdo | Azul | P1 |
| S3, centro direito | Laranja | P2 |
| S4, extremo direito | Branco | P8 |

Para cada sensor, ligue `DO` ao pino indicado, `VCC` à alimentação apropriada do módulo e `GND` ao GND da expansão. Antes de conectar, confirme que o sensor funciona nessa tensão e que `DO` não ultrapassa 3,3 V, limite dos pinos do micro:bit. Faça a conferência com multímetro ou teste simples no MakeCode.

Ligações de comando da L298N:

| Expansão | L298N |
|---|---|
| P13 | ENA (PWM do motor esquerdo) |
| P14 | IN1 |
| P15 | IN2 |
| P16 | ENB (PWM do motor direito) |
| P19 | IN3 |
| P20 | IN4 |
| GND | GND comum |
| Motor esquerdo | OUT1 e OUT2 |
| Motor direito | OUT3 e OUT4 |

Com tudo desligado, retire os jumpers ENA e ENB para controlar velocidade pelo programa. Se uma roda girar no sentido errado, desligue e inverta os dois fios daquele motor no respectivo par de saídas.

### Alimentação: faça com atenção

- Bateria `+` e `−` entram em `IN+` e `IN−` do LM2596.
- Ajuste o regulador com multímetro, sem a L298N conectada, para a tensão nominal dos motores indicada no próprio kit. Os motores amarelos costumam ser de baixa tensão; não aplique 9 V diretamente sem confirmação da etiqueta.
- `OUT+` do LM2596 vai ao borne de alimentação dos motores `+12V/VS` da L298N; `OUT−` vai ao `GND` da L298N.
- Una os terras da L298N, expansão e sensores. Não ligue `OUT+` do LM2596 ao borne `5V` da L298N; o uso desse borne depende do regulador/jumper e da placa específica.
- Alimente o micro:bit pela USB nos testes de bancada ou pela entrada própria da expansão conforme as instruções do fabricante. Nunca ligue a bateria diretamente ao micro:bit.
- A bateria 9 V deve ser testada sob carga. Se a tensão cair quando os motores partirem, o robô pode falhar; verifique uma fonte permitida que sustente a corrente necessária.

## 5. Grave o programa do Carrinho 2

O arquivo é [`microbit-seguidor-4-sensores.ts`](microbit-seguidor-4-sensores.ts). No MakeCode oficial:

1. Crie um projeto novo para micro:bit.
2. Abra o editor JavaScript e substitua o conteúdo pelo arquivo do Carrinho 2.
3. Volte ao editor de blocos para conferir a lógica, baixe o programa e grave **um único micro:bit**, o instalado no carrinho.
4. Não acrescente código de rádio. O programa do Carrinho 1 fica na pasta irmã `../carrinho-1-controle-dois-microbits/` e não pertence a esta prova.

O programa usa botão A para iniciar e botão B para parar. No código, `BRANCO = 0` é uma hipótese inicial do nível lógico dos sensores. Teste cada sensor no branco e no preto e ajuste essa constante se a leitura real for invertida. Também ajuste velocidade e correção para o seu carrinho.

## 6. Teste em etapas

1. **Sem bateria dos motores:** alimente o micro:bit por USB e mova cada sensor sobre branco/preto. Confirme que os quatro pinos mudam de leitura e que esquerda/direita não estão trocadas.
2. **Rodas suspensas:** ligue a alimentação dos motores, aperte A e observe as rodas. Aperte B e confirme que ambas param.
3. **Teste de sentido:** identifique qual roda é esquerda/direita e confirme frente/ré. Corrija os fios ou `INVERTER_ESQUERDO`/`INVERTER_DIREITO` no código se necessário.
4. **Teste de altura:** coloque o carrinho com a bateria instalada sobre a pista e ajuste os sensores até a leitura de branco/preto ficar estável.
5. **Trecho reto e curva:** comece devagar em um trecho reto, depois teste curvas e cruzamentos. Ajuste uma variável por vez e anote o resultado.
6. **Conferência final:** confirme autonomia, ausência de rádio, dimensões, peso, bateria presa e nenhuma roda/fiação encostando no chassi.

O programa usa um giro curto de busca quando os sensores deixam de encontrar a linha. Como o edital exige reação em tempo real e proíbe navegação baseada em percurso/temporização cega, mantenha a busca subordinada às leituras dos sensores e peça à organização confirmação sobre a interpretação desse recurso antes da homologação.

## 7. Ficha de conferência da equipe

- [ ] Relação/modelo dos motores confirmada como TT 48:1.
- [ ] Modelo dos sensores confirmado dentro dos tipos permitidos.
- [ ] Quatro saídas DO conferidas e seguras para 3,3 V.
- [ ] Tensão do LM2596 medida e adequada aos motores.
- [ ] Bateria testada sob carga e presa ao chassi.
- [ ] Largura: ____ mm · Comprimento: ____ mm · Altura: ____ mm.
- [ ] Peso com bateria: ____ g.
- [ ] Teste autônomo em pista concluído sem rádio.
- [ ] Data do evento confirmada com a organização por divergência no PDF.
