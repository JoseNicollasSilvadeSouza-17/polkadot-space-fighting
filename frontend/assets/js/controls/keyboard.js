import { keys, setLastKey, HEIGHT, isFinish } from "../utils/config.js";
import player from "../characters/player.js";

export default function keyboard() {
    window.addEventListener("keydown", (event) => {
        switch(event.code) {
            case "ArrowLeft":
            case "KeyA":
            case "Numpad4": {
                keys.left.pressed = true;
                setLastKey("left");
                break;
            }

            case "ArrowRight":
            case "KeyD":
            case "Numpad6": {
                keys.right.pressed = true;
                setLastKey("right");
                break;
            }

            case "ArrowUp":
            case "KeyW":
            case "Numpad8": {
                player.switchSprites("jump");
                player.velocity.y = -5;
                break;
            }

            case "ArrowDown":
            case "KeyS":
            case "Numpad2": {
                if(player.position.y + player.height + player.velocity.y < HEIGHT) {
                    player.velocity.y = 5;
                }
                break;
            }

            case "KeyZ":
            case "Numpad1": {
                if(!isFinish) {
                    player.attack();
                    player.switchSprites("attack");
                }
                break;
            }
        }
    });

    window.addEventListener("keyup", (event) => {
        switch(event.code) {
            case "ArrowLeft":
            case "KeyA": 
            case "Numpad4": {  
                keys.left.pressed = false;
                break;
            }

            case "ArrowRight": 
            case "KeyD":  
            case "Numpad6": {  
                keys.right.pressed = false;
                break;
            }

            case "ArrowUp": 
            case "KeyW":  
            case "Numpad8": {  
                player.velocity.y = 0;
                break;
            }

            case "ArrowDown": 
            case "KeyS":  
            case "Numpad2": {  
                player.velocity.y = 0;
                break;
            }
        }
    });
}