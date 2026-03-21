import { canvas, playerHealth, enemyHealth,context, WIDTH, HEIGHT, keys, FONT, lastKey, isFinish, setIsFinish, timerNumber, timerId } from "./utils/config.js";
import planet from "./background/planet.js";
import background from "./background/background.js";
import player from "./characters/player.js";
import enemy from "./characters/enemy.js";
import keyboard from "./controls/keyboard.js";
import decreaseTimer from "./utils/timer.js";

let sleep = 0;

function rectangularCollision({
    rectangleOne,
    rectangleTwo
}) {
    return (
        rectangleOne.attackBox.position.x + rectangleOne.attackBox.width >= rectangleTwo.position.x && rectangleOne.attackBox.position.x <= rectangleTwo.position.x + rectangleTwo.width && rectangleOne.attackBox.position.y + rectangleOne.attackBox.height >= rectangleTwo.position.y && rectangleOne.attackBox.position.y <= rectangleTwo.position.y + rectangleTwo.height
    );
}

function resultGame(playerHealth, enemyHealth, timer) {
    if(playerHealth > 0 && enemyHealth > 0 && timer > 0) {
        return;
    }

    if(!isFinish) {
        setIsFinish(true);
        sleep = Date.now();
        return;
    }

    const elapsed = Date.now() - sleep;

    if(elapsed < 2000) {
        return;
    }

    clearTimeout(timerId);
    context.clearRect(0, 0, WIDTH, HEIGHT);
    window.cancelAnimationFrame(animate);

    context.font = (`700 8rem ${FONT}`);
    context.textAlign = "center";
    context.textBaseline = "middle";

    if(playerHealth <= 0 && enemyHealth <= 0 || (timer <= 0 && playerHealth === enemyHealth)) {
        context.fillText("Draw", canvas.width / 2, canvas.height / 2);
        return;
    }

    if(playerHealth <= 0 || (timer <= 0 && playerHealth < enemyHealth)) {
        context.fillText("Game Over", WIDTH / 2, HEIGHT / 2);
        return;
    }
    
    if(enemyHealth <= 0 || (timer <= 0 && enemyHealth < playerHealth)) {
        context.fillText("Winner", WIDTH / 2, HEIGHT / 2);
        return;
    }
}

function animate() {
    window.requestAnimationFrame(animate);

    context.fillStyle = "#000";
    context.fillRect(0, 0, WIDTH, HEIGHT);
    background.draw();
    planet.draw();

    player.update();
    enemy.update();

    player.velocity.x = 0;
    player.switchSprites("idle");

    if(keys.left.pressed && lastKey === "left") {
        player.velocity.x = -5;
        player.switchSprites("walk");
    }

    if(keys.right.pressed && lastKey === "right") {
        player.velocity.x = 5;
        player.switchSprites("walk");
    }

    if(rectangularCollision({
        rectangleOne: player,
        rectangleTwo: enemy
    }) && player.isAttacking) {
        player.isAttacking = false;

        enemy.health -= 10;
        console.log("Player attack successful!");
    }

    if(rectangularCollision({
        rectangleOne: enemy,
        rectangleTwo: player
    }) && enemy.isAttacking) {
        enemy.isAttacking = false;

        player.health -= 10;
        console.log("Enemy attack successful!");
    }

    playerHealth.value = player.health;
    enemyHealth.value = enemy.health;

    if(playerHealth.value <= 0) {
        player.switchSprites("dead");
    }

    if(enemyHealth.value <= 0) {
        enemy.switchSprites("dead");
    }

    resultGame(player.health, enemy.health, timerNumber);
}

canvas.width = WIDTH;
canvas.height = HEIGHT;

context.fillRect(0, 0, canvas.width, canvas.height);

player.draw();
enemy.draw();

decreaseTimer();
animate();

keyboard();