input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        # # # . .
        # . # . #
        # # # # .
        # . # # .
        # # # . #
        `)
})
radio.setGroup(87)
basic.forever(function () {
	
})
