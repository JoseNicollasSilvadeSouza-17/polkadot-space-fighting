import Fighter from "../class/Fighter.js";
import randomKillerRobot from "../utils/randomKillerRobot.js";

const killerRobotSkin = randomKillerRobot();

const enemy = new Fighter({
    position: {
        x: 850,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offsetAttack: {
        x: 50,
        y: 0
    },
    imageSrc: `./assets/images/characters/killer-robots/${killerRobotSkin}/idle.png`,
    framesMax: 5,
    scale: 1.5,
    offsetPosition: {
        x: 0,
        y: 46
    },
    sprites: {
        idle: {
            imageSrc: `./assets/images/characters/killer-robots/${killerRobotSkin}/idle.png`,
            framesMax: 5
        },
        walk: {
            imageSrc: `./assets/images/characters/killer-robots/${killerRobotSkin}/walk.png`,
            framesMax: 8
        },
        dead: {
            imageSrc: `./assets/images/characters/killer-robots/${killerRobotSkin}/dead.png`,
            framesMax: 7
        },
        attack: {
            imageSrc: `./assets/images/characters/killer-robots/${killerRobotSkin}/attack.png`,
            framesMax: 4
        },
        jump: {
            imageSrc: `./assets/images/characters/killer-robots/${killerRobotSkin}/jump.png`,
            framesMax: 3
        }
    }
});

export default enemy;