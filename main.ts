input.onButtonPressed(Button.A, function () {
    if (canshoot) {
        shoot = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
        shoot.turn(Direction.Left, 45)
        canshoot = false
    }
})
function attack () {
    if (shoot.isTouching(villan)) {
        game.addScore(1)
        shoot.delete()
        villan.delete()
        villan = game.createSprite(randint(0, 4), 0)
        canshoot = true
    } else if (shoot.get(LedSpriteProperty.Y) == 0) {
        shoot.delete()
        canshoot = true
    }
}
let shoot: game.LedSprite = null
let canshoot = false
let villan: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
villan = game.createSprite(randint(0, 4), 0)
canshoot = true
game.startCountdown(20000)
basic.forever(function () {
    player.move(1)
    player.ifOnEdgeBounce()
    if (shoot) {
        shoot.move(1)
        attack()
    }
    basic.pause(200)
})
