radio.setGroup(1)
input.onButtonPressed(Button.A, function () { radio.sendString("E0") })
input.onButtonPressed(Button.B, function () { radio.sendString("D0") })
input.onButtonPressed(Button.AB, function () { radio.sendString("P0") })
