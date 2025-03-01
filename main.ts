basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 0 && input.magneticForce(Dimension.Strength) > 0) {
        control.waitMicros(1000000)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        music.stopAllSounds()
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
