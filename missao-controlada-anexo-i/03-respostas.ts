radio.setGroup(1)
let letras = ["A", "B", "C", "D", "E"]
let comandos = ["AA", "BB", "CC", "DD", "EE"]
let escolha = 0
basic.showString(letras[escolha])
input.onButtonPressed(Button.A, function () {
    escolha = (escolha + 1) % letras.length
    basic.showString(letras[escolha])
})
input.onButtonPressed(Button.B, function () { radio.sendString(comandos[escolha]) })
