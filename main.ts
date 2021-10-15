input.onButtonPressed(Button.A, function () {
    Score_points += 1
    Score += -4
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(Score)
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # .
        . # # # #
        . # # # #
        . . # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    Score += Score_points
    basic.showNumber(Score)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
})
let Score_points = 0
let Score = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Cookie Clicker")
Score = 4
game.setScore(0)
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
