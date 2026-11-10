namespace SpriteKind {
    export const collisiondetecter = SpriteKind.create()
    export const ui = SpriteKind.create()
    export const nothin = SpriteKind.create()
    export const specialeffect = SpriteKind.create()
    export const eh = SpriteKind.create()
    export const spriteguy = SpriteKind.create()
    export const enemyprojectile = SpriteKind.create()
    export const enemygun = SpriteKind.create()
    export const enemytonkprojectile = SpriteKind.create()
    export const enemytonk = SpriteKind.create()
    export const smoke = SpriteKind.create()
    export const rifleguy = SpriteKind.create()
    export const rifleproj = SpriteKind.create()
}
function updateRepairIndicator () {
    repairIndicator.image.fill(0)
    repairIndicator.image.fillCircle(12, 2, 2, 1)
repairIndicator.image.fillCircle(17, 4, 2, 1)
repairIndicator.image.fillCircle(21, 7, 2, 1)
repairIndicator.image.fillCircle(22, 12, 2, 1)
repairIndicator.image.fillCircle(21, 17, 2, 1)
repairIndicator.image.fillCircle(17, 20, 2, 1)
repairIndicator.image.fillCircle(12, 22, 2, 1)
repairIndicator.image.fillCircle(7, 20, 2, 1)
repairIndicator.image.fillCircle(3, 17, 2, 1)
repairIndicator.image.fillCircle(2, 12, 2, 1)
repairIndicator.image.fillCircle(3, 7, 2, 1)
repairIndicator.image.fillCircle(7, 4, 2, 1)
if (repairStep >= 1) {
        repairIndicator.image.fillCircle(12, 2, 2, 12)
    }
    if (repairStep >= 2) {
        repairIndicator.image.fillCircle(17, 4, 2, 12)
    }
    if (repairStep >= 3) {
        repairIndicator.image.fillCircle(21, 7, 2, 12)
    }
    if (repairStep >= 4) {
        repairIndicator.image.fillCircle(22, 12, 2, 12)
    }
    if (repairStep >= 5) {
        repairIndicator.image.fillCircle(21, 17, 2, 12)
    }
    if (repairStep >= 6) {
        repairIndicator.image.fillCircle(17, 20, 2, 12)
    }
    if (repairStep >= 7) {
        repairIndicator.image.fillCircle(12, 22, 2, 12)
    }
    if (repairStep >= 8) {
        repairIndicator.image.fillCircle(7, 20, 2, 12)
    }
    if (repairStep >= 9) {
        repairIndicator.image.fillCircle(3, 17, 2, 12)
    }
    if (repairStep >= 10) {
        repairIndicator.image.fillCircle(2, 12, 2, 12)
    }
    if (repairStep >= 11) {
        repairIndicator.image.fillCircle(3, 7, 2, 12)
    }
    if (repairStep >= 12) {
        repairIndicator.image.fillCircle(7, 4, 2, 12)
cantmove = false
    }
}
function checkObstacle (value2: Sprite) {
    if (fl.overlapsWith(value2) || f.overlapsWith(value2) || fr.overlapsWith(value2)) {
        frontBlocked = true
    }
    if (rl.overlapsWith(value2) || b.overlapsWith(value2) || rr.overlapsWith(value2)) {
        rearBlocked = true
    }
    if (fl.overlapsWith(value2) || l.overlapsWith(value2) || rl.overlapsWith(value2)) {
        leftBlocked = true
    }
    if (fr.overlapsWith(value2) || r.overlapsWith(value2) || rr.overlapsWith(value2)) {
        rightBlocked = true
    }
    if (fl.overlapsWith(value2) || l.overlapsWith(value2) || rr.overlapsWith(value2)) {
        leftTurnBlocked = true
    }
    if (fr.overlapsWith(value2) || r.overlapsWith(value2) || rl.overlapsWith(value2)) {
        rightTurnBlocked = true
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.spriteguy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.rifleguy, SpriteKind.collisiondetecter, function (sprite, otherpsirte) {
    oldVX = sprite.vx
    oldVY = sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    // push him slightly back out of the rock
    if (oldVX > 0) {
        sprite.x -= 2
    } else if (oldVX < 0) {
        sprite.x += 2
    }
    if (oldVY > 0) {
        sprite.y -= 2
    } else if (oldVY < 0) {
        sprite.y += 2
    }
})
browserEvents.onWheel(function (dx, dy, dz) {
    if (dy < 0) {
        if (optics_health > 0) {
            if (zoom == 1.8) {
            	
            } else {
                zoom += 0.3
            }
        } else {
            zoom = 0
        }
    } else if (dy > 0) {
        if (zoom > 0) {
            zoom += -0.3
        } else {
            zoom = 0
        }
    }
})
sprites.onCreated(SpriteKind.specialeffect, function (sprite) {
    timer.after(500, function () {
        sprites.destroy(sprite)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rifleguy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (speed > 20) {
        speed += -20
    } else {
        speed = 0
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.spriteguy, function (sprite, otherSprite) {
    extraEffects.createSpreadEffectOnAnchor(otherSprite, myEffect, 100, 48, 20)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    scene.cameraShake(2, 150)
    for (let value of spriteutils.getSpritesWithin(SpriteKind.spriteguy, 30, otherSprite)) {
        sprites.destroy(value)
    }
    for (let value2 of spriteutils.getSpritesWithin(SpriteKind.rifleguy, 30, otherSprite)) {
        sprites.destroy(value2)
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.rifleguy, 100, function (sprite) {
    ii = rifleGuys.indexOf(sprite)
    transformSprites.rotateSprite(sprite, spriteutils.radiansToDegrees(spriteutils.angleFrom(sprite, hull)))
    if (ii >= 0 && game.runtime() >= rifleNextShot[ii]) {
        if (sight.isInSight(
        sprite,
        hull,
        175,
        false
        )) {
            scene.cameraShake(2, 200)
            special_effects_thingy = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.specialeffect)
            spriteutils.placeAngleFrom(
            special_effects_thingy,
            spriteutils.angleFrom(sprite, hull),
            20,
            sprite
            )
            extraEffects.createSpreadEffectOnAnchor(special_effects_thingy, myEffect, 500, 5, 2)
            rifleproje = sprites.createProjectileFromSprite(img`
                . . . 
                c c c 
                . . . 
                `, sprite, 0, 0)
            rifleproje.setKind(SpriteKind.rifleproj)
            spriteutils.setVelocityAtAngle(rifleproje, spriteutils.angleFrom(sprite, hull), 500)
            transformSprites.rotateSprite(rifleproje, spriteutils.radiansToDegrees(spriteutils.angleFrom(sprite, hull)))
            rifleproje.setFlag(SpriteFlag.AutoDestroy, false)
            rifleShotsLeft[ii] -= 1
        }
        if (rifleShotsLeft[ii] <= 0) {
            rifleNextShot[ii] = game.runtime() + 4000
            if (randint(1, 100) <= 35) {
                moveAngle = spriteutils.angleFrom(sprite, hull)
                // randomly move left or right relative to the player
                if (randint(0, 1) == 0) {
                    moveAngle += Math.PI / 2
                } else {
                    moveAngle += 0 - Math.PI / 2
                }
                spriteutils.setVelocityAtAngle(sprite, moveAngle, 50)
                timer.after(randint(600, 800), function () {
                    sprite.vx = 0
                    sprite.vy = 0
                })
            }
        } else {
            rifleNextShot[ii] = game.runtime() + 500
        }
    }
    if (Math.percentChance(5)) {
        if (Math.percentChance(25)) {
            sprite.setVelocity(randint(-20, -5), randint(-20, -5))
        } else if (Math.percentChance(25)) {
            sprite.setVelocity(randint(-20, -5), randint(20, 5))
        } else if (Math.percentChance(25)) {
            sprite.setVelocity(randint(20, 5), randint(20, 5))
        } else {
            sprite.setVelocity(randint(20, 5), randint(-20, -5))
        }
        timer.after(randint(300, 500), function () {
            sprite.setVelocity(0, 0)
        })
    }
})
browserEvents.onMouseMove(function (x, y) {
    mouseX = x
    mouseY = y
    aimer.setPosition(scene.cameraProperty(CameraProperty.Left) + x, scene.cameraProperty(CameraProperty.Top) + y)
})
sprites.onOverlap(SpriteKind.spriteguy, SpriteKind.collisiondetecter, function (sprite, rock) {
    oldVX = sprite.vx
    oldVY = sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    // push him slightly back out of the rock
    if (oldVX > 0) {
        sprite.x -= 2
    } else if (oldVX < 0) {
        sprite.x += 2
    }
    if (oldVY > 0) {
        sprite.y -= 2
    } else if (oldVY < 0) {
        sprite.y += 2
    }
})
sprites.onOverlap(SpriteKind.enemytonkprojectile, SpriteKind.Player, function (shell, playerSprite) {
    if (playerSprite == hull) {
        sprites.destroy(shell)
        scene.cameraShake(5, 500)
        damageRoll = randint(1, 100)
        if (damageRoll <= 30) {
            mobilityHealth += 0 - 70
        } else if (damageRoll <= 60) {
            weaponHealth += 0 - 70
        } else {
            crewHealth += 0 - 75
        }
        if (mobilityHealth <= 60 && mobilityHealth > 20) {
            maxSpeed = 80
        }
        if (mobilityHealth <= 20 && mobilityHealth > 0) {
            maxSpeed = 40
        }
        if (mobilityHealth <= 0) {
            maxSpeed = 0
            speed = 0
        }
        if (weaponHealth <= 60 && weaponHealth > 0) {
            reloadTime = 9000
        }
        if (weaponHealth <= 0) {
            canshoot = false
        }
        if (crewHealth <= 0) {
            game.over(false)
        }
        if (mobilityHealth < 0) {
            mobilityHealth = 0
        }
        if (optics_health < 0) {
            optics_health = 0
        }
        if (weaponHealth < 0) {
            weaponHealth = 0
        }
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.spriteguy, 200, function (sprite) {
    i = spriteGuys.indexOf(sprite)
    if (i >= 0 && game.runtime() >= spriteNextShot[i]) {
        if (sight.isInSight(
        sprite,
        hull,
        175,
        false
        )) {
            scene.cameraShake(2, 200)
            special_effects_thingy = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.specialeffect)
            spriteutils.placeAngleFrom(
            special_effects_thingy,
            spriteutils.angleFrom(sprite, hull),
            20,
            sprite
            )
            extraEffects.createSpreadEffectOnAnchor(special_effects_thingy, myEffect, 500, 50, 30)
            rocket = sprites.createProjectileFromSprite(img`
                . . . . . . . . . 
                . . . . . . . . . 
                . . . . . . . . . 
                f f f f f f f . . 
                f 7 7 7 7 7 7 f f 
                f f f f f f f . . 
                . . . . . . . . . 
                . . . . . . . . . 
                . . . . . . . . . 
                `, sprite, 0, 0)
            rocket.setKind(SpriteKind.enemyprojectile)
            spriteutils.setVelocityAtAngle(rocket, spriteutils.angleFrom(sprite, hull), 200)
            transformSprites.rotateSprite(rocket, spriteutils.radiansToDegrees(spriteutils.angleFrom(sprite, hull)))
            rocket.setFlag(SpriteFlag.AutoDestroy, false)
            spriteNextShot[i] = game.runtime() + 5000
            if (randint(1, 100) <= 35) {
                moveAngle = spriteutils.angleFrom(sprite, hull)
                // randomly move left or right relative to the player
                if (randint(0, 1) == 0) {
                    moveAngle += Math.PI / 2
                } else {
                    moveAngle += 0 - Math.PI / 2
                }
                spriteutils.setVelocityAtAngle(sprite, moveAngle, 35)
                timer.after(randint(400, 800), function () {
                    sprite.vx = 0
                    sprite.vy = 0
                })
            }
        }
    }
})
sprites.onOverlap(SpriteKind.enemyprojectile, SpriteKind.Player, function (sprite, otherSprite) {
    special_effects_thingy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.specialeffect)
    spriteutils.placeAngleFrom(
    special_effects_thingy,
    spriteutils.angleFrom(sprite, hull),
    0,
    sprite
    )
    extraEffects.createSpreadEffectOnAnchor(special_effects_thingy, myEffect, 500, 50, 30)
    if (otherSprite == hull) {
        sprites.destroy(sprite)
        damageRoll = randint(1, 100)
        if (damageRoll <= 35) {
            mobilityHealth += 0 - 40
        } else if (damageRoll <= 65) {
            weaponHealth += 0 - 35
        } else {
            crewHealth += 0 - 50
        }
        if (mobilityHealth <= 50 && mobilityHealth > 0) {
            maxSpeed = 60
        }
        if (mobilityHealth <= 0) {
            maxSpeed = 0
            speed = 0
        }
        if (weaponHealth <= 50 && weaponHealth > 0) {
            reloadTime = 9000
        }
        if (weaponHealth <= 0) {
            canshoot = false
        }
        if (crewHealth <= 0) {
            game.over(false)
        }
        if (mobilityHealth < 0) {
            mobilityHealth = 0
        }
        if (optics_health < 0) {
            optics_health = 0
        }
        if (weaponHealth < 0) {
            weaponHealth = 0
        }
    }
})
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    if (ammo > 0) {
        if (canshoot) {
            if (Math.abs(difference) <= 2) {
                scene.cameraShake(2, 200)
                canshoot = false
                reloadStart = game.runtime()
                special_effects_thingy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.specialeffect)
                spriteutils.placeAngleFrom(
                special_effects_thingy,
                spriteutils.angleFrom(turret, aimer),
                45,
                turret
                )
                extraEffects.createSpreadEffectOnAnchor(special_effects_thingy, myEffect, 500, 50, 30)
                projectile = sprites.create(img`
                    . . . . . . . 
                    . . . . . . . 
                    f . b b . . . 
                    c c b b b c c 
                    f . b b . . . 
                    . . . . . . . 
                    . . . . . . . 
                    `, SpriteKind.Projectile)
                projectile.setFlag(SpriteFlag.DestroyOnWall, true)
                transformSprites.rotateSprite(projectile, turretdeg)
                spriteutils.setVelocityAtAngle(projectile, spriteutils.degreesToRadians(turretdeg), 600)
                spriteutils.placeAngleFrom(
                projectile,
                spriteutils.degreesToRadians(turretdeg),
                20,
                turret
                )
                ammo += -1
            }
        } else {
        	
        }
    } else {
        hull.sayText("No ammo", 500, false)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile5`)) {
        extraEffects.createSpreadEffectOnAnchor(sprite, myEffect, 2000, 65, 50)
        tiles.setTileAt(location, assets.tile`myTile8`)
    }
    extraEffects.createSpreadEffectOnAnchor(sprite, myEffect, 100, 48, 20)
    sprites.destroy(sprite)
    sprites.destroy(sprite)
    scene.cameraShake(2, 150)
    for (let value3 of spriteutils.getSpritesWithin(SpriteKind.spriteguy, 30, sprite)) {
        sprites.destroy(value3)
    }
    for (let value4 of spriteutils.getSpritesWithin(SpriteKind.rifleguy, 30, sprite)) {
        sprites.destroy(value4)
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.spriteguy, 50, function (sprite) {
    angle = spriteutils.radiansToDegrees(spriteutils.angleFrom(sprite, hull))
    transformSprites.rotateSprite(sprite, angle)
})
sprites.onDestroyed(SpriteKind.spriteguy, function (sprite) {
    index = spriteGuys.indexOf(sprite)
    if (index >= 0) {
        spriteGuys.removeAt(index)
        spriteNextShot.removeAt(index)
    }
})
sprites.onOverlap(SpriteKind.rifleproj, SpriteKind.Player, function (bullet, otherSprite) {
    if (otherSprite == hull) {
        sprites.destroy(bullet)
        damageRoll = randint(1, 100)
        if (damageRoll <= 85) {
            // Track / mobility damage
            mobilityHealth += 0 - 5
        } else {
            // Optics hit
            optics_health += 0 - 10
        }
        // Mobility damage effects
        if (mobilityHealth <= 50 && mobilityHealth > 20) {
            maxSpeed = 80
        }
        if (mobilityHealth <= 20 && mobilityHealth > 0) {
            maxSpeed = 40
        }
        if (mobilityHealth <= 0) {
            maxSpeed = 0
            speed = 0
        }
        if (mobilityHealth < 0) {
            mobilityHealth = 0
        }
        if (optics_health < 0) {
            optics_health = 0
        }
        if (weaponHealth < 0) {
            weaponHealth = 0
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.rifleguy, function (sprite, otherSprite) {
    extraEffects.createSpreadEffectOnAnchor(otherSprite, myEffect, 100, 48, 20)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    scene.cameraShake(2, 150)
    for (let value5 of spriteutils.getSpritesWithin(SpriteKind.spriteguy, 30, otherSprite)) {
        sprites.destroy(value5)
    }
    for (let value6 of spriteutils.getSpritesWithin(SpriteKind.rifleguy, 30, otherSprite)) {
        sprites.destroy(value6)
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Enemy, 100, function (sprite) {
    if (sight.isInSight(
    sprite,
    hull,
    200,
    false
    )) {
        targetanle = spriteutils.radiansToDegrees(spriteutils.angleFrom(sprite, hull))
        diff = targetanle - enemytonkdeg
        while (diff > 180) {
            diff += 0 - 360
        }
        while (diff < -180) {
            diff += 360
        }
        // Gradual rotation
        if (diff > 1) {
            enemytonkdeg += 1
        } else if (diff < -1) {
            enemytonkdeg += 0 - 1
        } else {
            enemytonkdeg = targetanle
        }
        transformSprites.rotateSprite(enemytonkturret, enemytonkdeg)
        transformSprites.rotateSprite(enemytonkgun, enemytonkdeg)
        if (Math.abs(diff) <= 5 && game.runtime() >= enemyTankNextShot) {
            enemyShell = sprites.createProjectileFromSprite(img`
                . . . . . . . 
                . . . . . . . 
                c b b . . . . 
                c c c c c c c 
                c b b . . . . 
                . . . . . . . 
                . . . . . . . 
                `, enemytank, 0, 0)
            enemyShell.setKind(SpriteKind.enemytonkprojectile)
            spriteutils.setVelocityAtAngle(enemyShell, spriteutils.degreesToRadians(enemytonkdeg), 300)
            transformSprites.rotateSprite(enemyShell, enemytonkdeg)
            enemyShell.setFlag(SpriteFlag.AutoDestroy, false)
            enemyTankNextShot = game.runtime() + 6000
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(enemytonkturret)
    sprites.destroy(enemytonkgun)
    sprites.destroy(otherSprite)
    scene.cameraShake(2, 150)
    enemycorpse = sprites.create(img`
        ..cfffffffffffffffffffffffffffffffffff
        ..cfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
        ffffbbbbbbbbbbbbbbb42bbbbbbbbbbbbbbbbf
        fbffbffffbbbfbbbbbbbbbbbbbbbbbbbbbbbbf
        fcffbfcbfbbbfbbbbfffffffbbbbbbbfffffff
        fbffbfcbfbbbfbbffffffffffbbb42bbbbbbbf
        fbffbfcbfbbbbbfffff4ffffffbbbbbbbbbbf.
        fbffbfcbfbbbbffffff44ffffffbbbbbbbbbf.
        fcffbfcbf4bbfffff44ff4ffffffbbbbbbbf..
        fbffbfcbfbbffffff4444444444ffbbbbbbf..
        ffffbfcbfbbfffffff4f2222f44ffbbbbbf...
        ..cfbffffbbffffff444444f2ffffffffff...
        ..cfbbbbbbbfffff4422244224fffffbbbf...
        ..cfbffffbbfff44422f22f2f44ffffffff...
        ffffbfcbfbbfffff4222222244fffbbbbbf...
        fbffbfcbfbbfffff424442f24ffffbbbbbbf..
        fcffbfcbfbbfffff424422422fffbb4bbbbf..
        fbffbfcffbbbffff4224244224fbbb2bbbbbf.
        fbffbfcffbbbbbff4fff2222ffffbbbbbbbbf.
        fbffbfcbfbbbbbbf4fffcccccffbbbbbbbbbbf
        fcffbfcbfbb2bbffffffffffbbbbbbbfffffff
        fbffbffffb4bbbbbbbbbbbbbb24bbbbbbbbbbf
        ffffbbbbbb224bbbbbbbbbbbb24bfffbbbb4bf
        ..cfbbbbbbbb4b4bbbbbbbbbbbbbbbbbbbbbbf
        ..cfffffffffffffffffffffffffffffffffff
        `, SpriteKind.nothin)
    smokespecial = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.smoke)
    smokespecial.setVelocity(-10, -20)
    extraEffects.createSpreadEffectOnAnchor(enemycorpse, myEffect, 5000, 30, 25)
    extraEffects.createSpreadEffectOnAnchor(smokespecial, extraEffects.createFullPresetsSpreadEffectData(ExtraEffectPresetColor.Smoke, ExtraEffectPresetShape.Cloud), 10000)
    tiles.placeOnTile(enemycorpse, otherSprite.tilemapLocation())
    tiles.placeOnTile(smokespecial, otherSprite.tilemapLocation())
    for (let value22 of spriteutils.getSpritesWithin(SpriteKind.spriteguy, 30, otherSprite)) {
        sprites.destroy(value22)
    }
    for (let value223232323 of spriteutils.getSpritesWithin(SpriteKind.rifleguy, 30, otherSprite)) {
        sprites.destroy(value223232323)
    }
})
let repairProgress = 0
let repairStart = 0
let repairing = false
let targetdeg = 0
let turning = false
let deg = 0
let amount = 0
let elapsed = 0
let dy = 0
let dx = 0
let scoped = false
let smokespecial: Sprite = null
let enemycorpse: Sprite = null
let enemyShell: Sprite = null
let enemyTankNextShot = 0
let diff = 0
let targetanle = 0
let index = 0
let angle = 0
let projectile: Sprite = null
let reloadStart = 0
let difference = 0
let rocket: Sprite = null
let i = 0
let damageRoll = 0
let mouseY = 0
let mouseX = 0
let moveAngle = 0
let rifleproje: Sprite = null
let special_effects_thingy: Sprite = null
let speed = 0
let oldVY = 0
let oldVX = 0
let rightTurnBlocked = false
let leftTurnBlocked = false
let rightBlocked = false
let leftBlocked = false
let rearBlocked = false
let frontBlocked = false
let repairStep = 0
let rockCollider: Sprite = null
let spriteNextShot: number[] = []
let spriteGuys: Sprite[] = []
let enemysprite: Sprite = null
let rifleNextShot: number[] = []
let rifleGuys: Sprite[] = []
let rifleguy2: Sprite = null
let canshoot = false
let myEffect: SpreadEffectData = null
let enemytonkdeg = 0
let crewHealth = 0
let weaponHealth = 0
let mobilityHealth = 0
let optics_health = 0
let enemytonkturret: Sprite = null
let enemytank: Sprite = null
let enemytonkgun: Sprite = null
let turret: Sprite = null
let aimer: Sprite = null
let turretdeg = 0
let b: Sprite = null
let r: Sprite = null
let l: Sprite = null
let f: Sprite = null
let rr: Sprite = null
let rl: Sprite = null
let fr: Sprite = null
let fl: Sprite = null
let hull: Sprite = null
let reloadTime = 0
let zoom = 0
let ammo = 0
let maxSpeed = 0
let cantmove = false
stats.turnStats(true)
let repairIndicator: Sprite = null
let rifleShotsLeft: number[] = []
let ii = 0
cantmove = false
let repairTime = 4000
let spareParts = 3
repairIndicator = sprites.create(image.create(25, 25), SpriteKind.ui)
repairIndicator.setFlag(SpriteFlag.RelativeToCamera, true)
repairIndicator.z = 100
repairIndicator.x = 120
repairIndicator.y = 150
repairIndicator.image.fill(0)
repairIndicator.image.drawCircle(12, 12, 10, 7)
repairIndicator.image.drawCircle(12, 12, 8, 0)
maxSpeed = 120
ammo = 40
namespace userconfig {
    export const ARCADE_SCREEN_HEIGHT = 180
    export const ARCADE_SCREEN_WIDTH = 240
}
zoom = 0
let ammotext = textsprite.create("Ammo Left:" + convertToText(ammo), 1, 15)
let reloadIndicator = sprites.create(image.create(54, 8), SpriteKind.Player)
reloadTime = 6500
let zoomtext = textsprite.create("Zoom:" + convertToText(zoom), 1, 15)
let shellready = textsprite.create("", 1, 15)
shellready.x = 10
shellready.y = 16
shellready.setFlag(SpriteFlag.RelativeToCamera, true)
ammotext.setFlag(SpriteFlag.RelativeToCamera, true)
ammotext.x = 45
ammotext.y = 25
zoomtext.setFlag(SpriteFlag.RelativeToCamera, true)
zoomtext.x = 207
zoomtext.y = 9
reloadIndicator.setFlag(SpriteFlag.RelativeToCamera, true)
reloadIndicator.x = 40
reloadIndicator.y = 7
zoomtext.z = 7
shellready.z = 7
ammotext.z = 7
reloadIndicator.z = 100
hull = sprites.create(img`
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    ....cccccccccccccccccccccccccccccccc..........
    ...ffffffffffffffffffffffffffffffffffffffff...
    ...fbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbf...
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbf...
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbf...
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbffffffffff...
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbf...
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbf....
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbf...
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbffffffffff...
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbf...
    ...fbfbfbfbcbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbf...
    ...fbbbbbbbcbbcbbbbbbbbbbbbbbbbbbbbbbcbbbbf...
    ...ffffffffffffffffffffffffffffffffffffffff...
    ....cccccccccccccccccccccccccccccccc..........
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    ..............................................
    `, SpriteKind.Player)
fl = sprites.create(img`
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    `, SpriteKind.eh)
fr = sprites.create(img`
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    `, SpriteKind.eh)
rl = sprites.create(img`
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    `, SpriteKind.eh)
rr = sprites.create(img`
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    `, SpriteKind.eh)
f = sprites.create(img`
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    `, SpriteKind.eh)
l = sprites.create(img`
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    `, SpriteKind.eh)
r = sprites.create(img`
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    `, SpriteKind.eh)
b = sprites.create(img`
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    3 3 3 3 3 
    `, SpriteKind.eh)
b.setFlag(SpriteFlag.Invisible, true)
f.setFlag(SpriteFlag.Invisible, true)
fl.setFlag(SpriteFlag.Invisible, true)
fr.setFlag(SpriteFlag.Invisible, true)
l.setFlag(SpriteFlag.Invisible, true)
r.setFlag(SpriteFlag.Invisible, true)
rl.setFlag(SpriteFlag.Invisible, true)
rr.setFlag(SpriteFlag.Invisible, true)
turretdeg = 0
scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(hull)
aimer = sprites.create(img`
    . . 2 . . 
    . . 2 . . 
    2 2 . 2 2 
    . . 2 . . 
    . . 2 . . 
    `, SpriteKind.ui)
aimer.z = 1
turret = sprites.create(img`
    .........................
    .........................
    .........................
    .........................
    ....ffffffffffffffff.....
    .fffbbbbbbbbbbbbbbbbf....
    .fbbffffffbbbfffbbbbf....
    .fbfbbbbbfbbfbbbfbbbbf...
    .fbfbbbbbfbbfbbbfbffbbf..
    .fbfbbbbbfbbfbbbffbbfbbf.
    .fbfbbbbbfbbbfffbfbbfbbf.
    .fbfffffffbbbbbbbbffbbbf.
    .fbbbbbbbbbbbbbbbbbbbbbf.
    .fbfffffffbbbbbbbbbbbbbf.
    .fbfbbbbbfbbbfffbbbbbbbf.
    .fbfbbbbbfbbfbbbfbffbbbf.
    .fbfbbbbbfbbfbbbfccccff..
    .fbfbbbbbfbbfbbbfbbbbf...
    .fbbffffffbbbfffbbbbf....
    .fffbbbbbbbbbbbbbbbbf....
    ....ffffffffffffffff.....
    .........................
    .........................
    .........................
    .........................
    `, SpriteKind.Player)
enemytonkgun = sprites.create(img`
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    ............................................fffffffffffffffffffffffffffff
    ............................................fbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    ............................................fffffffffffffffffffffffffffff
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    .........................................................................
    `, SpriteKind.enemygun)
enemytank = sprites.create(img`
    ..cfffffffffffffffffffffffffffffffffff
    ..cfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    fbffbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    fcffbfcbfbbbbbbbbbbbbbbbbbbbbbbfffffff
    fbffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    fbffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    fbffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    fcffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbf..
    fbffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbf..
    ffffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbf...
    ..cfbffffbbbbbbbbbbbbbbbbbbbbbbbbbf...
    ..cfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf...
    ..cfbffffbbbbbbbbbbbbbbbbbbbbbbbbbf...
    ffffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbf...
    fbffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbf..
    fcffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbf..
    fbffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    fbffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbbf.
    fbffbfcbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    fcffbfcbfbbbbbbbbbbbbbbbbbbbbbbfffffff
    fbffbffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    ..cfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
    ..cfffffffffffffffffffffffffffffffffff
    `, SpriteKind.Enemy)
enemytonkturret = sprites.create(img`
    ....................
    .......fffffff......
    .....ffbbbbbbbf.....
    ....fbbbbbbbbbbf....
    ...fbbbbbbfffffbf...
    ..fbbbbbbbfbbbfbbf..
    .fbbfbbbbbfbbbfbbfe.
    .fbffbbbbbfffffbbfe.
    .fbffbbbbbbbbbbbbfe.
    .fbffbbbbbbbbbbbbfe.
    .fbffbbbbbbbbfbbbfe.
    .fbffbbbbbbbbbbbbfe.
    .fbbfbbbbfffbbbbbfe.
    ..fbbbbbfbbbfbbbbf..
    ...fbbbbfbbbfbbbf...
    ....fbbbfbbbfbbf....
    .....ffbbfccccc.....
    .......fffffff......
    ....................
    `, SpriteKind.Enemy)
tiles.placeOnTile(enemytank, tiles.getTileLocation(34, 10))
enemytank.scale = 1.1
turret.z = 1
enemytonkgun.z = 1
optics_health = 50
mobilityHealth = 75
weaponHealth = 75
crewHealth = 75
enemytonkdeg = 270
let gun = sprites.create(img`
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    ...................................................fffff.............
    ..............................................ffffffbbbffffffffffffff
    ..............................................fbbbbfbbbfbbbbbbbbbbbbf
    ..............................................ffffffbbbffffffffffffff
    ...................................................fffff.............
    ..............................................fccc...................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    .....................................................................
    `, SpriteKind.nothin)
gun.setFlag(SpriteFlag.GhostThroughWalls, true)
myEffect = extraEffects.createFullPresetsSpreadEffectData(ExtraEffectPresetColor.Fire, ExtraEffectPresetShape.Explosion)
canshoot = true
for (let value22222222222 of tiles.getTilesByType(assets.tile`myTile7`)) {
    rifleguy2 = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...........fffffff............
        .........ff7777777ffccbcccccbb
        ........f77777777777ff777fccbb
        ........f77777777777fbfff.....
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        ........f77777777777f.........
        ........f77777777777f.........
        .........ff7777777ff..........
        ...........fffffff............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.rifleguy)
    tiles.placeOnTile(rifleguy2, value22222222222)
    tiles.setTileAt(value22222222222, assets.tile`myTile`)
    rifleGuys.push(rifleguy2)
    rifleShotsLeft.push(4)
    rifleNextShot.push(game.runtime())
}
for (let value222 of tiles.getTilesByType(assets.tile`myTile4`)) {
    enemysprite = sprites.create(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ...............ccc..........6.
        ...........fffffffccdddccc6666
        .........ff7777777ffdddccc6666
        ........f77777777777ff777f..6.
        ........f77777777777f.fff.....
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        .......f7777777777777f........
        ........f77777777777f.........
        ........f77777777777f.........
        .........ff7777777ff..........
        ...........fffffff............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.spriteguy)
    tiles.placeOnTile(enemysprite, value222)
    tiles.setTileAt(value222, assets.tile`myTile`)
    spriteGuys.push(enemysprite)
    spriteNextShot.push(game.runtime() + 5000)
}
for (let value2222 of tiles.getTilesByType(sprites.castle.rock0)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value2222)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
for (let value22222 of tiles.getTilesByType(sprites.castle.rock1)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value22222)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
for (let value23 of tiles.getTilesByType(sprites.castle.rock2)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value23)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
for (let value6_7 of tiles.getTilesByType(assets.tile`myTile13`)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value6_7)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
for (let value9 of tiles.getTilesByType(assets.tile`myTile15`)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value9)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
for (let value10 of tiles.getTilesByType(assets.tile`myTile16`)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value10)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
for (let value11 of tiles.getTilesByType(assets.tile`myTile22`)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value11)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
for (let value12 of tiles.getTilesByType(assets.tile`myTile23`)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value12)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
for (let value13 of tiles.getTilesByType(assets.tile`myTile25`)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value13)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
for (let value14 of tiles.getTilesByType(assets.tile`myTile26`)) {
    rockCollider = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.collisiondetecter)
    tiles.placeOnTile(rockCollider, value14)
    rockCollider.setFlag(SpriteFlag.Invisible, true)
}
game.showLongText("Use WASD to move, mouse to aim, left click to shoot, mouse wheel to zoom in, left shift to enter scope,F to repair and = to heal crew.", DialogLayout.Full)
game.onUpdate(function () {
    if (scoped) {
        dx = mouseX - 120
        dy = mouseY - 90
        scene.centerCameraAt(hull.x + dx * zoom, hull.y + dy * zoom)
    } else {
        scene.centerCameraAt(hull.x, hull.y)
    }
})
game.onUpdate(function () {
    reloadIndicator.image.fill(2)
    reloadIndicator.image.drawRect(0, 0, 54, 8, 1)
    if (!(canshoot)) {
        elapsed = game.runtime() - reloadStart
        amount = Math.min(50, Math.floor(elapsed / reloadTime * 50))
        reloadIndicator.image.fillRect(2, 2, amount, 4, 7)
        if (elapsed >= reloadTime) {
            canshoot = true
        }
    } else {
        reloadIndicator.image.fillRect(2, 2, 50, 4, 7)
    }
})
forever(function () {
    fr.setPosition(hull.x + Math.cos(spriteutils.degreesToRadians(deg)) * 20 - Math.sin(spriteutils.degreesToRadians(deg)) * 12, hull.y + Math.sin(spriteutils.degreesToRadians(deg)) * 20 + Math.cos(spriteutils.degreesToRadians(deg)) * 12)
    fl.setPosition(hull.x + Math.cos(spriteutils.degreesToRadians(deg)) * 20 + Math.sin(spriteutils.degreesToRadians(deg)) * 12, hull.y + Math.sin(spriteutils.degreesToRadians(deg)) * 20 - Math.cos(spriteutils.degreesToRadians(deg)) * 12)
    rl.setPosition(hull.x - Math.cos(spriteutils.degreesToRadians(deg)) * 20 + Math.sin(spriteutils.degreesToRadians(deg)) * 12, hull.y - Math.sin(spriteutils.degreesToRadians(deg)) * 20 - Math.cos(spriteutils.degreesToRadians(deg)) * 12)
    rr.setPosition(hull.x - Math.cos(spriteutils.degreesToRadians(deg)) * 20 - Math.sin(spriteutils.degreesToRadians(deg)) * 12, hull.y - Math.sin(spriteutils.degreesToRadians(deg)) * 20 + Math.cos(spriteutils.degreesToRadians(deg)) * 12)
    f.setPosition(hull.x + Math.cos(spriteutils.degreesToRadians(deg)) * 20, hull.y + Math.sin(spriteutils.degreesToRadians(deg)) * 20)
    b.setPosition(hull.x - Math.cos(spriteutils.degreesToRadians(deg)) * 20, hull.y - Math.sin(spriteutils.degreesToRadians(deg)) * 20)
    l.setPosition(hull.x + Math.sin(spriteutils.degreesToRadians(deg)) * 12, hull.y - Math.cos(spriteutils.degreesToRadians(deg)) * 12)
    r.setPosition(hull.x - Math.sin(spriteutils.degreesToRadians(deg)) * 12, hull.y + Math.cos(spriteutils.degreesToRadians(deg)) * 12)
    frontBlocked = false
    rearBlocked = false
    leftBlocked = false
    rightBlocked = false
    leftTurnBlocked = false
    rightTurnBlocked = false
    for (let enemy of sprites.allOfKind(SpriteKind.Enemy)) {
        checkObstacle(enemy)
    }
    for (let rock2 of sprites.allOfKind(SpriteKind.collisiondetecter)) {
        checkObstacle(rock2)
    }
    if (canshoot) {
        shellready.setText("Round loaded (HEAT-FS)")
    } else {
        shellready.setText("Reloading")
    }
    zoomtext.setText("Zoom:" + convertToText(Math.round(zoom * 10) / 10))
    ammotext.setText("Ammo Left:" + convertToText(ammo))
    if (controller.up.isPressed()) {
        if (!(frontBlocked)) {
            if (speed >= maxSpeed) {
                speed = maxSpeed
            } else {
                speed += 0.75
            }
        }
    } else {
        if (!(controller.down.isPressed())) {
            if (speed > 0) {
                speed += -0.5
            } else {
            	
            }
        }
    }
    if (controller.down.isPressed()) {
        if (!(cantmove)) {
            if (!(rearBlocked)) {
                if (speed <= -40) {
                    speed = -40
                } else {
                    speed += -0.75
                }
            } else {
            	
            }
        }
    } else {
        if (!(controller.up.isPressed())) {
            if (speed < 0) {
                speed += 0.5
            } else {
                if (speed == 0) {
                    speed = 0
                }
            }
        }
    }
    if (rearBlocked && speed < 0) {
        speed = 0
    }
    if (frontBlocked && speed > 0) {
        speed = 0
    }
    if (controller.left.isPressed()) {
        if (!(cantmove)) {
            if (!(leftTurnBlocked)) {
                turning = true
                deg += -2
            }
        }
    } else if (controller.right.isPressed()) {
        if (!(cantmove)) {
            if (!(rightTurnBlocked)) {
                turning = true
                deg += 2
            }
        }
    } else {
        turning = false
    }
    if (turning) {
        speed = speed * 0.97
    }
    transformSprites.rotateSprite(hull, deg)
    spriteutils.setVelocityAtAngle(hull, spriteutils.degreesToRadians(deg), speed)
})
forever(function () {
    turret.setPosition(hull.x, hull.y)
    enemytonkturret.setPosition(enemytank.x, enemytank.y)
    spriteutils.placeAngleFrom(
    enemytonkgun,
    turretdeg,
    0,
    enemytonkturret
    )
    targetdeg = spriteutils.radiansToDegrees(spriteutils.angleFrom(turret, aimer))
    difference = targetdeg - turretdeg
    while (difference > 180) {
        difference += -360
    }
    while (difference < -180) {
        difference += 360
    }
    if (difference > 3) {
        turretdeg += 3
    } else if (difference < -3) {
        turretdeg += -3
    } else {
        turretdeg = targetdeg
    }
    transformSprites.rotateSprite(turret, turretdeg)
    spriteutils.placeAngleFrom(
    gun,
    turretdeg,
    0,
    turret
    )
    transformSprites.rotateSprite(gun, turretdeg)
    if (maxSpeed == 0) {
        cantmove = true
    }
})
forever(function () {
    if (browserEvents.F.isPressed() && speed == 0 && spareParts > 0 && (mobilityHealth < 75 || weaponHealth < 75 || optics_health < 50)) {
        if (!(repairing)) {
            repairing = true
            repairStart = game.runtime()
        }
        repairProgress = (game.runtime() - repairStart) / repairTime
        repairStep = Math.floor(repairProgress * 12)
        if (repairStep > 12) {
            repairStep = 12
        }
        updateRepairIndicator()
        if (game.runtime() - repairStart >= repairTime) {
            spareParts += 0 - 1
            if (mobilityHealth < 75) {
                mobilityHealth += 25
                if (mobilityHealth > 75) {
                    mobilityHealth = 75
                }
                if (mobilityHealth > 50) {
                    maxSpeed = 120
                } else if (mobilityHealth > 20) {
                    maxSpeed = 60
                } else if (mobilityHealth > 0) {
                    maxSpeed = 40
                } else {
                    maxSpeed = 0
                }
            } else if (weaponHealth < 75) {
                weaponHealth += 25
                if (weaponHealth > 75) {
                    weaponHealth = 75
                }
            } else if (optics_health < 50) {
                optics_health += 25
                if (optics_health > 50) {
                    optics_health = 50
                }
            }
            repairing = false
            repairStep = 0
            repairIndicator.image.fill(0)
        }
    } else {
        repairing = false
        repairStep = 0
        repairIndicator.image.fill(0)
    }
})
forever(function () {
    if (browserEvents.LeftShift.isPressed() && optics_health > 0) {
        scoped = true
    } else {
        scoped = false
    }
})
