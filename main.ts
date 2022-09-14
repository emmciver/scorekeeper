input.onButtonPressed(Button.A, function () {
    Player_A_Wins += 1
    basic.showString("A")
    basic.showNumber(Player_A_Wins)
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    basic.showString("TIE")
    basic.showNumber(Tie)
})
input.onButtonPressed(Button.B, function () {
    Player_B_Wins += 1
    basic.showString("B")
    basic.showNumber(Player_B_Wins)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A")
    basic.showNumber(Player_A_Wins)
    basic.pause(500)
    basic.showString("B")
    basic.showNumber(Player_B_Wins)
    basic.pause(500)
    basic.showString("TIE")
    basic.showNumber(Tie)
    basic.pause(500)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Rounds")
    basic.showNumber(Player_A_Wins + (Player_B_Wins + Tie))
    basic.clearScreen()
})
let Player_B_Wins = 0
let Player_A_Wins = 0
let Tie = 0
Tie = 0
Player_A_Wins = 0
Player_B_Wins = 0
basic.forever(function () {
	
})
