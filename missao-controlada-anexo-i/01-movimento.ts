radio.setGroup(1)
input.onButtonPressed(Button.A, function () {
    if (input.rotation(Rotation.Roll) < -35) { radio.sendString("R0") }
    else { radio.sendString("F0") }
})
input.onButtonPressed(Button.B, function () {
    if (input.rotation(Rotation.Roll) < -35) { radio.sendString("R1") }
    else { radio.sendString("F1") }
})
input.onButtonPressed(Button.AB, function () { radio.sendString("P0") })
