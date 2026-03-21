import { timer, timerNumber, setTimerNumber, setTimerId, gravity, setGravity } from "./config.js";
import player from "../characters/player.js";
import enemy from "../characters/enemy.js";
import randomGravity from "./randomGravity.js";
import enemyMoveset from "./enemyMoveset.js";

export default function decreaseTimer() {
    if(timerNumber > 0) {
        setTimerId(setTimeout(decreaseTimer, 1000));
        setTimerNumber(timerNumber - 1);
        timer.textContent = `${String(timerNumber).padStart(2, "0")}`;
    }

    setGravity(randomGravity(gravity));

    if((timerNumber * 10) % 2 === 0) {
        enemyMoveset(enemy, player);
    }
}