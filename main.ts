function 温度表示 () {
    basic.showNumber(input.temperature())
}
input.onButtonPressed(Button.A, function () {
    カタパルト発射()
})
function 矢印で北を示す () {
    if (input.compassHeading() > 315 || input.compassHeading() < 45) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.compassHeading() > 135 && input.compassHeading() < 225) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.compassHeading() > 225 && input.compassHeading() < 315) {
        basic.showArrow(ArrowNames.East)
    }
}
input.onButtonPressed(Button.AB, function () {
    表示設定(1)
})
input.onButtonPressed(Button.B, function () {
    矢印で北を示す()
})
function カタパルト発射 () {
    radio.setGroup(1)
    radio.sendString("Fire")
}
function 表示設定 (数値: number) {
    if (数値 == 1) {
        basic.showIcon(IconNames.Yes)
    }
}
let 無線グループ = 1
radio.setGroup(無線グループ)
led.setBrightness(128)
表示設定(1)
basic.forever(function () {
	
})
