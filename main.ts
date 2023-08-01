enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("dot")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("letter_space ")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "dot") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.clearScreen()
    } else {
        if (receivedString == "dash") {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(200)
            basic.clearScreen()
        } else {
            if (receivedString == "letter_space") {
                basic.showIcon(IconNames.Heart)
                basic.pause(200)
                basic.clearScreen()
            } else {
                if (receivedString == "word_separator") {
                    music.setVolume(255)
                    music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("dash")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("word_separator")
})
radio.setGroup(10)
