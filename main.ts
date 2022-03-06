input.onButtonPressed(Button.A, function () {
    basic.showString("T=" + (input.temperature() * 1.8 + 32) + " F")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("T=" + (input.temperature() + 273.15) + " K")
})
if (input.temperature() > -273) {
    basic.pause(4000)
    basic.showString("T=" + input.temperature() + "C")
}
basic.forever(function () {
	
})
