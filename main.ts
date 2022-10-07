let count_down = 0
input.onButtonPressed(Button.A, function () {
    count_down = 1
    for (let index = 0; index < 6; index++) {
        basic.showNumber(count_down)
        basic.pause(1000)
        count_down += 1
    }
})
input.onButtonPressed(Button.B, function () {
    count_down = 9
    for (let index = 0; index < 10; index++) {
        basic.showNumber(count_down)
        basic.pause(1000)
        count_down += -1
    }
    if (count_down == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
})
