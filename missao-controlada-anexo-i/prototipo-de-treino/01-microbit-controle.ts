// MICRO:BIT 1 — controle de mão
// Grupo de rádio 1. Segure A para comandar o motor esquerdo;
// segure B para comandar o motor direito. Incline para trás (Roll < -35)
// enquanto segura para selecionar ré. A+B envia parada geral.

radio.setGroup(1)
basic.showString("C")

basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        radio.sendString("P0")
        basic.showIcon(IconNames.No)
    } else if (input.buttonIsPressed(Button.A)) {
        if (input.rotation(Rotation.Roll) < -35) {
            radio.sendString("R0")
            basic.showArrow(ArrowNames.West)
        } else {
            radio.sendString("F0")
            basic.showArrow(ArrowNames.North)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (input.rotation(Rotation.Roll) < -35) {
            radio.sendString("R1")
            basic.showArrow(ArrowNames.East)
        } else {
            radio.sendString("F1")
            basic.showArrow(ArrowNames.North)
        }
    } else {
        basic.clearScreen()
    }
    basic.pause(120)
})
