// MakeCode micro:bit V2 - sensores com saída digital.
const BRANCO = 0 // Troque para 1 se o sensor indicar 1 sobre o branco.
const VELOCIDADE = 440 // PWM de 0 a 1023.
const GANHO = 105
const BUSCA = 360
const LIMITE_BUSCA = 250
const INVERTER_ESQUERDO = false
const INVERTER_DIREITO = false

const sensores = [DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, DigitalPin.P8]
const pesos = [-3, -1, 1, 3]
let rodando = false
let ultimoLado = 0
let inicioBusca = -1

function motor(ena: AnalogPin, entrada1: DigitalPin, entrada2: DigitalPin, pwm: number, inverter: boolean) {
    pwm = inverter ? -pwm : pwm
    pins.digitalWritePin(entrada1, pwm > 0 ? 1 : 0)
    pins.digitalWritePin(entrada2, pwm < 0 ? 1 : 0)
    pins.analogWritePin(ena, Math.min(1023, Math.abs(pwm)))
}

function mover(esquerdo: number, direito: number) {
    motor(AnalogPin.P13, DigitalPin.P14, DigitalPin.P15, esquerdo, INVERTER_ESQUERDO)
    motor(AnalogPin.P16, DigitalPin.P19, DigitalPin.P20, direito, INVERTER_DIREITO)
}

function parar() {
    rodando = false
    mover(0, 0)
}

parar()

input.onButtonPressed(Button.A, function () {
    if (rodando) return
    ultimoLado = 0
    inicioBusca = -1
    rodando = true
})

input.onButtonPressed(Button.B, function () {
    parar()
})

basic.forever(function () {
    if (!rodando) return

    let soma = 0
    let ativos = 0
    for (let i = 0; i < sensores.length; i++) {
        if (pins.digitalReadPin(sensores[i]) == BRANCO) {
            soma += pesos[i]
            ativos++
        }
    }

    if (ativos > 0) {
        const erro = soma / ativos
        if (erro < 0) ultimoLado = -1
        if (erro > 0) ultimoLado = 1
        inicioBusca = -1
        const correcao = Math.round(GANHO * erro)
        const base = Math.abs(erro) >= 2 ? VELOCIDADE - 90 : VELOCIDADE
        mover(Math.max(0, base + correcao), Math.max(0, base - correcao))
    } else {
        const agora = input.runningTime()
        if (inicioBusca < 0) inicioBusca = agora
        if (ultimoLado == 0 || agora - inicioBusca >= LIMITE_BUSCA) {
            parar()
        } else if (ultimoLado < 0) {
            mover(0, BUSCA)
        } else {
            mover(BUSCA, 0)
        }
    }
    basic.pause(10)
})
