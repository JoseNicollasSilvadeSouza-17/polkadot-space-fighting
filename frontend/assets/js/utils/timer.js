import { timer, timerNumber, setTimerNumber, setTimerId, gravity, setGravity } from "./config.js";
import randomGravity from "./randomGravity.js";

export default function decreaseTimer() {
    if(timerNumber > 0) {
        setTimerId(setTimeout(decreaseTimer, 1000));
        setTimerNumber(timerNumber - 1);
        timer.textContent = `${String(timerNumber).padStart(2, "0")}`;
    }

    setGravity(randomGravity(gravity));
    console.log(gravity);
}