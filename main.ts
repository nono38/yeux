let yj = 0
radio.setGroup(210)
basic.forever(function () {
    yj = grove.measureInCentimetersV2(DigitalPin.P2)
    if (yj < 13) {
        radio.sendNumber(5)
    }
    basic.pause(3000)
})
