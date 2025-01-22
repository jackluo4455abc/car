function turnR2 () {
    wuKong.setAllMotor(1000, 50)
}
function turnR0 () {
    wuKong.setAllMotor(80, -50)
}
input.onButtonPressed(Button.A, function () {
    wuKong.stopAllMotor()
})
function turnL2 () {
    wuKong.setAllMotor(50, 100)
}
function turnL0 () {
    wuKong.setAllMotor(-50, 80)
}
function turnL1 () {
    wuKong.setAllMotor(0, 100)
}
function turnR1 () {
    wuKong.setAllMotor(100, 0)
}
turnL2()
basic.pause(8000)
wuKong.setAllMotor(0, 0)
turnR2()
basic.pause(8500)
wuKong.setAllMotor(0, 0)
basic.forever(function () {
	
})
