export default function enemyMoveset(enemy, player) {
    enemy.velocity.x = 0;

    const dx = player.position.x - enemy.position.x;
    const dy = player.position.y - enemy.position.y;

    const distanceX = Math.abs(dx);
    const distanceY = Math.abs(dy);

    if(distanceX > 10) {
        enemy.velocity.x = dx > 0 ? 5 : -5;
        enemy.switchSprites("walk");
    } else {
        enemy.velocity.x = 0;
        enemy.switchSprites("idle");
    }

    if(distanceX > 30 && Math.random() < 0.02) {
        enemy.velocity.y = -5;
        enemy.switchSprites("jump");
    }

    if(distanceX < 60 && distanceY < 30) {
        if(!enemy.isAttacking && Math.random() < 0.8) {
            enemy.attack();
            enemy.switchSprites("attack");
        }
    }
}