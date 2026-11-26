// MICRO:BIT 2 — receptor instalado no carrinho
// Rádio grupo 1. Motor esquerdo em OUT1/OUT2;
// motor direito em OUT3/OUT4 da L298N.

const VELOCIDADE = 600 // PWM de 0 a 1023; ajuste depois do primeiro teste.
const INVERTER_ESQUERDO = false
const INVERTER_DIREITO = false

radio.setGroup(1)

function motor(ena: AnalogPin, in1: DigitalPin, in2: DigitalPin, velocidade: number, inverter: boolean) {
    if (inverter) velocidade = -velocidade
    pins.digitalWritePin(in1, velocidade > 0 ? 1 : 0)
    pins.digitalWritePin(in2, velocidade < 0 ? 1 : 0)
    pins.analogWritePin(ena, Math.min(1023, Math.abs(velocidade)))
}

function esquerdo(velocidade: number) {
    motor(AnalogPin.P13, DigitalPin.P14, DigitalPin.P15, velocidade, INVERTER_ESQUERDO)
}

function direito(velocidade: number) {
    motor(AnalogPin.P16, DigitalPin.P19, DigitalPin.P20, velocidade, INVERTER_DIREITO)
}

function parar() {
    esquerdo(0)
    direito(0)
}

parar()
basic.showIcon(IconNames.Asleep)

radio.onReceivedString(function (comando: string) {
    if (comando == "F0") {
        esquerdo(VELOCIDADE)
        basic.showArrow(ArrowNames.North)
    } else if (comando == "R0") {
        esquerdo(-VELOCIDADE)
        basic.showArrow(ArrowNames.West)
    } else if (comando == "F1") {
        direito(VELOCIDADE)
        basic.showArrow(ArrowNames.North)
    } else if (comando == "R1") {
        direito(-VELOCIDADE)
        basic.showArrow(ArrowNames.East)
    } else if (comando == "P0") {
        parar()
        basic.showIcon(IconNames.No)
    }
})
