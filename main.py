if input.magnetic_force(Dimension.STRENGTH) == 0:
    music._play_default_background(music.built_in_playable_melody(Melodies.BA_DING),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    pins.digital_write_pin(DigitalPin.P0, 1)
    