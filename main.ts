function NOOB_MUSIC (VOL: number, TEM: number) {
    music.setVolume(VOL)
    for (let index = 0; index < 4; index++) {
        music.playMelody("E E F C G E D F ", TEM)
    }
}
input.onButtonPressed(Button.A, function () {
    NOOB_MUSIC(127, 120)
})
input.onButtonPressed(Button.AB, function () {
    NOOB_MUSIC(260, 100)
})
input.onButtonPressed(Button.B, function () {
    NOOB_MUSIC(60, 60)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    NOOB_MUSIC(200, 200)
})
